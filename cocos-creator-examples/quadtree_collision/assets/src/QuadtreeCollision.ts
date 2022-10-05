// author: http://lamyoung.com/

export default class QuadtreeCollision {
    private _tree;
    constructor(rect: { x: number, y: number, width: number, height: number }) {
        this._tree = new Quadtree(rect);
    }

    check(colliders: cc.Collider[], testCollider: cc.Collider) {
        const ret: { retrieve: cc.Collider[], contacts: cc.Collider[] } = { retrieve: [], contacts: [] };

        if (this._tree) {
            // 四叉树清理
            this._tree.clear();
            const collisionManager = cc.director.getCollisionManager();
            collisionManager['updateCollider'](testCollider);
            for (let i = 0, l = colliders.length; i < l; i++) {
                const collider = colliders[i];
                // 更新碰撞体世界aabb
                collisionManager['updateCollider'](collider);
                const aabb = collider['world'].aabb;
                const rect = { x: aabb.x, y: aabb.y, height: aabb.height, width: aabb.width, collider: collider };
                // 四叉树插入
                this._tree.insert(rect)
            }
            // 四叉树抓出待检查的对象(属于那个块的所有节点)
            const retrieveObjects = this._tree.retrieve(testCollider['world'].aabb);

            retrieveObjects.forEach(element => {
                ret.retrieve.push(element.collider);
                // 抓出来后检查碰撞
                if (testContact(element.collider, testCollider)) {
                    ret.contacts.push(element.collider);
                }
            });
        }
        return ret;
    }

}

// 欢迎关注微信公众号[白玉无冰]

function testContact(collider1, collider2) {
    // 分组不通过
    if (!cc.director.getCollisionManager()['shouldCollide'](collider1, collider2)) {
        return false;
    }

    let world1 = collider1.world;
    let world2 = collider2.world;
    if (!world1.aabb.intersects(world2.aabb)) {
        return false;
    }

    let isCollider1Polygon = (collider1 instanceof cc.BoxCollider) || (collider1 instanceof cc.PolygonCollider);
    let isCollider2Polygon = (collider2 instanceof cc.BoxCollider) || (collider2 instanceof cc.PolygonCollider);
    let isCollider1Circle = collider1 instanceof cc.CircleCollider;
    let isCollider2Circle = collider2 instanceof cc.CircleCollider;

    if (isCollider1Polygon && isCollider2Polygon) {
        return cc.Intersection.polygonPolygon(world1.points, world2.points);
    } else if (isCollider1Circle && isCollider2Circle) {
        return cc.Intersection.circleCircle(world1, world2);
    } else if (isCollider1Polygon && isCollider2Circle) {
        return cc.Intersection.polygonCircle(world1.points, world2);
    } else if (isCollider1Circle && isCollider2Polygon) {
        return cc.Intersection.polygonCircle(world2.points, world1);
    } else {
        // cc.errorID(6601, cc.js.getClassName(collider1), cc.js.getClassName(collider2));
    }
    return false;
}


/**
 * quadtree-js
 * @version 1.2.2
 * @license MIT
 * @author Timo Hausmann
 */

/* https://github.com/timohausmann/quadtree-js.git v1.2.2 */

/**
     * Quadtree Constructor
     * @param Object bounds            bounds of the node { x, y, width, height }
     * @param Integer max_objects      (optional) max objects a node can hold before splitting into 4 subnodes (default: 10)
     * @param Integer max_levels       (optional) total max levels inside root Quadtree (default: 4) 
     * @param Integer level            (optional) deepth level, required for subnodes (default: 0)
     */
function Quadtree(bounds, max_objects?, max_levels?, level?) {

    this.max_objects = max_objects || 10;
    this.max_levels = max_levels || 4;

    this.level = level || 0;
    this.bounds = bounds;

    this.objects = [];
    this.nodes = [];
};


/**
 * Split the node into 4 subnodes
 */
Quadtree.prototype.split = function () {

    var nextLevel = this.level + 1,
        subWidth = this.bounds.width / 2,
        subHeight = this.bounds.height / 2,
        x = this.bounds.x,
        y = this.bounds.y;

    //top right node
    this.nodes[0] = new Quadtree({
        x: x + subWidth,
        y: y,
        width: subWidth,
        height: subHeight
    }, this.max_objects, this.max_levels, nextLevel);

    //top left node
    this.nodes[1] = new Quadtree({
        x: x,
        y: y,
        width: subWidth,
        height: subHeight
    }, this.max_objects, this.max_levels, nextLevel);

    //bottom left node
    this.nodes[2] = new Quadtree({
        x: x,
        y: y + subHeight,
        width: subWidth,
        height: subHeight
    }, this.max_objects, this.max_levels, nextLevel);

    //bottom right node
    this.nodes[3] = new Quadtree({
        x: x + subWidth,
        y: y + subHeight,
        width: subWidth,
        height: subHeight
    }, this.max_objects, this.max_levels, nextLevel);
};


/**
 * Determine which node the object belongs to
 * @param Object pRect      bounds of the area to be checked, with x, y, width, height
 * @return Array            an array of indexes of the intersecting subnodes 
 *                          (0-3 = top-right, top-left, bottom-left, bottom-right / ne, nw, sw, se)
 */
Quadtree.prototype.getIndex = function (pRect) {

    var indexes = [],
        verticalMidpoint = this.bounds.x + (this.bounds.width / 2),
        horizontalMidpoint = this.bounds.y + (this.bounds.height / 2);

    var startIsNorth = pRect.y < horizontalMidpoint,
        startIsWest = pRect.x < verticalMidpoint,
        endIsEast = pRect.x + pRect.width > verticalMidpoint,
        endIsSouth = pRect.y + pRect.height > horizontalMidpoint;

    //top-right quad
    if (startIsNorth && endIsEast) {
        indexes.push(0);
    }

    //top-left quad
    if (startIsWest && startIsNorth) {
        indexes.push(1);
    }

    //bottom-left quad
    if (startIsWest && endIsSouth) {
        indexes.push(2);
    }

    //bottom-right quad
    if (endIsEast && endIsSouth) {
        indexes.push(3);
    }

    return indexes;
};


/**
 * Insert the object into the node. If the node
 * exceeds the capacity, it will split and add all
 * objects to their corresponding subnodes.
 * @param Object pRect        bounds of the object to be added { x, y, width, height }
 */
Quadtree.prototype.insert = function (pRect) {

    var i = 0,
        indexes;

    //if we have subnodes, call insert on matching subnodes
    if (this.nodes.length) {
        indexes = this.getIndex(pRect);

        for (i = 0; i < indexes.length; i++) {
            this.nodes[indexes[i]].insert(pRect);
        }
        return;
    }

    //otherwise, store object here
    this.objects.push(pRect);

    //max_objects reached
    if (this.objects.length > this.max_objects && this.level < this.max_levels) {

        //split if we don't already have subnodes
        if (!this.nodes.length) {
            this.split();
        }

        //add all objects to their corresponding subnode
        for (i = 0; i < this.objects.length; i++) {
            indexes = this.getIndex(this.objects[i]);
            for (var k = 0; k < indexes.length; k++) {
                this.nodes[indexes[k]].insert(this.objects[i]);
            }
        }

        //clean up this node
        this.objects = [];
    }
};


/**
 * Return all objects that could collide with the given object
 * @param Object pRect      bounds of the object to be checked { x, y, width, height }
 * @Return Array            array with all detected objects
 */
Quadtree.prototype.retrieve = function (pRect) {

    var indexes = this.getIndex(pRect),
        returnObjects = this.objects;

    //if we have subnodes, retrieve their objects
    if (this.nodes.length) {
        for (var i = 0; i < indexes.length; i++) {
            returnObjects = returnObjects.concat(this.nodes[indexes[i]].retrieve(pRect));
        }
    }

    //remove duplicates
    returnObjects = returnObjects.filter(function (item, index) {
        return returnObjects.indexOf(item) >= index;
    });

    return returnObjects;
};


/**
 * Clear the quadtree
 */
Quadtree.prototype.clear = function () {

    this.objects = [];

    for (var i = 0; i < this.nodes.length; i++) {
        if (this.nodes.length) {
            this.nodes[i].clear();
        }
    }

    this.nodes = [];
};



