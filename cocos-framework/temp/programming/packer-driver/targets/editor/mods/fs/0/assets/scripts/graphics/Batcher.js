System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Color, find, Graphics, Node, Batcher, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfcomponent_camera(extras) {
    _reporterNs.report("component_camera", "../components/component_camera", _context.meta, extras);
  }

  _export("Batcher", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Color = _cc.Color;
      find = _cc.find;
      Graphics = _cc.Graphics;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57068o/OzNH3J1PwJJJoYNo", "Batcher", undefined);

      _export("Batcher", Batcher = class Batcher {
        constructor() {
          var _find;

          _defineProperty(this, "graphics", void 0);

          _defineProperty(this, "camera", null);

          _defineProperty(this, "strokeNum", 0);

          _defineProperty(this, "MAX_STROKE", 4096);

          let graphics = (_find = find('Canvas/Graphics')) === null || _find === void 0 ? void 0 : _find.getComponent(Graphics);

          if (graphics) {
            this.graphics = graphics;
          } else {
            var _find2;

            let graphics = new Node('Graphics');
            this.graphics = graphics.addComponent(Graphics);
            (_find2 = find('Canvas')) === null || _find2 === void 0 ? void 0 : _find2.addChild(graphics);
          }
        }

        begin(cam) {
          this.graphics.clear();
          this.camera = cam;
          this.strokeNum = 0;
        }

        end() {
          if (this.strokeNum > 0) {
            this.strokeNum = 0;
            this.graphics.stroke();
          }
        }

        drawPoints(points, color, thickness = 2) {
          if (points.length < 2) return;

          for (let i = 1; i < points.length; i++) this.drawLine(points[i - 1], points[i], color, thickness);
        }

        drawPolygon(position, points, color, closePoly = true, thickness = 1) {
          if (points.length < 2) return;

          for (let i = 1; i < points.length; i++) this.drawLine(es.Vector2.add(position, points[i - 1]), es.Vector2.add(position, points[i]), color, thickness);

          if (closePoly) this.drawLine(es.Vector2.add(position, points[points.length - 1]), es.Vector2.add(position, points[0]), color, thickness);
        }

        drawHollowRect(x, y, width, height, color, thickness = 2) {
          this.graphics.strokeColor = new Color(color.r, color.g, color.b);
          this.graphics.lineWidth = thickness;
          const tl = es.Vector2Ext.round(new es.Vector2(x, y));
          const tr = es.Vector2Ext.round(new es.Vector2(x + width, y));
          const br = es.Vector2Ext.round(new es.Vector2(x + width, y + height));
          const bl = es.Vector2Ext.round(new es.Vector2(x, y + height));
          this.drawLine(tl, tr, color, thickness);
          this.drawLine(tr, br, color, thickness);
          this.drawLine(br, bl, color, thickness);
          this.drawLine(bl, tl, color, thickness);
        }

        drawCircle(position, radius, color, thickness = 2) {
          const bounds = new es.Rectangle(position.x - radius, position.y - radius, radius * 2, radius * 2);
          if (this.camera && !this.camera.bounds.intersects(bounds)) return;
          this.graphics.strokeColor = new Color(color.r, color.g, color.b);
          this.graphics.lineWidth = thickness;
          this.graphics.circle(position.x, position.y, radius);
          this.strokeNum++;
          this.flushBatch();
        }

        drawCircleLow(position, radius, color, thickness = 2, resolution = 12) {
          let last = es.Vector2.unitX.multiplyScaler(radius);
          let lastP = es.Vector2Ext.perpendicularFlip(last);

          for (let i = 1; i <= resolution; i++) {
            const at = es.MathHelper.angleToVector(i * es.MathHelper.PiOver2 / resolution, radius);
            const atP = es.Vector2Ext.perpendicularFlip(at);
            this.drawLine(es.Vector2.add(position, last), es.Vector2.add(position, at), color, thickness);
            this.drawLine(position.sub(last), position.sub(at), color, thickness);
            this.drawLine(es.Vector2.add(position, lastP), es.Vector2.add(position, atP), color, thickness);
            this.drawLine(position.sub(lastP), position.sub(atP), color, thickness);
            last = at;
            lastP = atP;
          }
        }

        drawRect(x, y, width, height, color) {
          const rect = new es.Rectangle(x, y, width, height);
          if (this.camera && !this.camera.bounds.intersects(rect)) return;
          this.graphics.strokeColor = new Color(color.r, color.g, color.b);
          this.graphics.lineWidth = 1;
          this.graphics.rect(Math.trunc(x), Math.trunc(y), Math.trunc(width), Math.trunc(height));
          this.strokeNum++;
          this.flushBatch();
        }

        drawLine(start, end, color, thickness = 2) {
          const bounds = es.RectangleExt.boundsFromPolygonVector([start, end]);
          if (this.camera && !this.camera.bounds.intersects(bounds)) return;
          this.graphics.lineWidth = thickness;
          this.graphics.strokeColor = new Color(color.r, color.g, color.b);
          this.graphics.moveTo(start.x, start.y);
          this.graphics.lineTo(end.x, end.y);
          this.strokeNum++;
          this.flushBatch();
        }

        drawPixel(position, color, size = 1) {
          const destRect = new es.Rectangle(Math.trunc(position.x), Math.trunc(position.y), size, size);

          if (size != 1) {
            destRect.x -= Math.trunc(size * 0.5);
            destRect.y -= Math.trunc(size * 0.5);
          }

          if (this.camera && !this.camera.bounds.intersects(destRect)) return;
          this.graphics.strokeColor = new Color(color.r, color.g, color.b);
          this.graphics.lineWidth = size;
          this.graphics.rect(destRect.x, destRect.y, destRect.width, destRect.height);
          this.strokeNum++;
          this.flushBatch();
        }

        flushBatch() {
          if (this.strokeNum >= this.MAX_STROKE) {
            this.strokeNum = 0;
            this.graphics.stroke();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Batcher.js.map