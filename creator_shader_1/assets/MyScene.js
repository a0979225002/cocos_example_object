
cc.Class({
    extends: cc.Component,

    properties: {
        btnLeft: cc.Button,
        btnRight: cc.Button,
        lblTitle: cc.Label,
        nodeContainer: cc.Node,
        _start:0,
        prefIdx: {
            set: function(val)  {
                var num = this.prefs.length;
                if( val < 0 ){
                    val = num -1;
                }
                if( val >= num ){
                    val = 0;
                }
                this.__width = val;
                this.changeIdx();

            },
            get: function(val)  {
                return this.__width;
            },
            type: cc.Integer,
            visible: false
        }
    },
    
    onLoad() {
        this.prefs = [
            'test-003/test-003_pref',
            'UISmoke/UISmoke_pref',
            '64239.0/64239.0_pref',
            '64420.2/64420.2_pref',
            '64645.0/64645.0_pref',
            '69541.0/69541.0_pref',
            'BookShader/BookShader_pref',
            'BookShader_noise/BookShader_noise_pref',
            'glslsandbox#68726/glslsandbox#68726',
            'glslsandbox#68774/glslsandbox#68774',
            'glslsandbox#69016/glslsandbox#69016',
            'glslsandbox#69022/glslsandbox#69022',
            'glslsandbox#69156/glslsandbox#69156',
            'glslsandbox#69315/glslsandbox#69315',
            'glslsandbox#69342/glslsandbox#69342',
            'glslsandbox#69350/glslsandbox#69350',
            'ImageEffect/ImageEffect_pref',
            'jizuobiao/jizuobiao_pref',
            'KnifeLight/KnifeLight_pref',
            'Regional_gray/Regional_gray_pref',
            'river/river_pref',
            'ScrollBox/ScrollBox_pref',
            'StreetLight/StreetLight',
            'test-002/test-002_pref',
        ];
        this.prefIdx = 0;
        this.btnLeft.node.on('click', () => {
            --this.prefIdx;
        });
        this.btnRight.node.on('click', () => {
            ++this.prefIdx;
        });

        this.nodeContainer.on(cc.Node.EventType.TOUCH_START, (event) => {
            this.setMouse(event.getLocation());
        });
        this.nodeContainer.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            this.setMouse(event.getLocation());
        });
        this.nodeContainer.on(cc.Node.EventType.TOUCH_ENDED, (event) => {
            this.setMouse(event.getLocation());
        });

    },

    changeIdx() {
        this.removeAllChilds(this.nodeContainer);
        console.log("load " + this.prefs[this.prefIdx]);
        cc.loader.loadRes(this.prefs[this.prefIdx], (err,res) => {
            var node = cc.instantiate(res);
            this.nodeContainer.addChild(node);
            node.setAnchorPoint(0.5,0.5);
            this.lblTitle.string = this.prefs[this.prefIdx];
            // node.setPosition();
        });
    },

    removeAllChilds(node) {
        var childs = node.getChildren();
        childs.forEach(child => {
            node.removeChild(child);
        })
    },

    setMouse (pos) {
        let mat = this.nodeContainer.children[0].getComponent(cc.Sprite).getMaterial(0);
        mat.effect.setProperty('u_mouse',pos);
    },

    update(dt) {
        this._setShaderTime(dt);
    },

    _setShaderTime(dt) {
        this._start += 0.01;
        if (this._start > this._max) {
            this._start = 0;
        }
        if(this.nodeContainer.children[0])
        {
            let cmts = this.nodeContainer.children[0].getComponentsInChildren(cc.Sprite);
            cmts.forEach(cc => {
                cc.getMaterial(0).effect.setProperty('u_time',this._start);
            });
        }
    },

});
