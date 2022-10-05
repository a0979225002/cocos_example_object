System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Color, find, Graphics, Node, _crd, Batcher;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfcomponent_camera(extras) {
    _reporterNs.report("component_camera", "../components/component_camera", _context.meta, extras);
  }

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

      _export("Batcher", Batcher = /*#__PURE__*/function () {
        function Batcher() {
          var _find;

          _defineProperty(this, "graphics", void 0);

          _defineProperty(this, "camera", null);

          _defineProperty(this, "strokeNum", 0);

          _defineProperty(this, "MAX_STROKE", 4096);

          var graphics = (_find = find('Canvas/Graphics')) === null || _find === void 0 ? void 0 : _find.getComponent(Graphics);

          if (graphics) {
            this.graphics = graphics;
          } else {
            var _find2;

            var _graphics = new Node('Graphics');

            this.graphics = _graphics.addComponent(Graphics);
            (_find2 = find('Canvas')) === null || _find2 === void 0 ? void 0 : _find2.addChild(_graphics);
          }
        }

        var _proto = Batcher.prototype;

        _proto.begin = function begin(cam) {
          this.graphics.clear();
          this.camera = cam;
          this.strokeNum = 0;
        };

        _proto.end = function end() {
          if (this.strokeNum > 0) {
            this.strokeNum = 0;
            this.graphics.stroke();
          }
        };

        _proto.drawPoints = function drawPoints(points, color, thickness) {
          if (thickness === void 0) {
            thickness = 2;
          }

          if (points.length < 2) return;

          for (var i = 1; i < points.length; i++) {
            this.drawLine(points[i - 1], points[i], color, thickness);
          }
        };

        _proto.drawPolygon = function drawPolygon(position, points, color, closePoly, thickness) {
          if (closePoly === void 0) {
            closePoly = true;
          }

          if (thickness === void 0) {
            thickness = 1;
          }

          if (points.length < 2) return;

          for (var i = 1; i < points.length; i++) {
            this.drawLine(es.Vector2.add(position, points[i - 1]), es.Vector2.add(position, points[i]), color, thickness);
          }

          if (closePoly) this.drawLine(es.Vector2.add(position, points[points.length - 1]), es.Vector2.add(position, points[0]), color, thickness);
        };

        _proto.drawHollowRect = function drawHollowRect(x, y, width, height, color, thickness) {
          if (thickness === void 0) {
            thickness = 2;
          }

          this.graphics.strokeColor = new Color(color.r, color.g, color.b);
          this.graphics.lineWidth = thickness;
          var tl = es.Vector2Ext.round(new es.Vector2(x, y));
          var tr = es.Vector2Ext.round(new es.Vector2(x + width, y));
          var br = es.Vector2Ext.round(new es.Vector2(x + width, y + height));
          var bl = es.Vector2Ext.round(new es.Vector2(x, y + height));
          this.drawLine(tl, tr, color, thickness);
          this.drawLine(tr, br, color, thickness);
          this.drawLine(br, bl, color, thickness);
          this.drawLine(bl, tl, color, thickness);
        };

        _proto.drawCircle = function drawCircle(position, radius, color, thickness) {
          if (thickness === void 0) {
            thickness = 2;
          }

          var bounds = new es.Rectangle(position.x - radius, position.y - radius, radius * 2, radius * 2);
          if (this.camera && !this.camera.bounds.intersects(bounds)) return;
          this.graphics.strokeColor = new Color(color.r, color.g, color.b);
          this.graphics.lineWidth = thickness;
          this.graphics.circle(position.x, position.y, radius);
          this.strokeNum++;
          this.flushBatch();
        };

        _proto.drawCircleLow = function drawCircleLow(position, radius, color, thickness, resolution) {
          if (thickness === void 0) {
            thickness = 2;
          }

          if (resolution === void 0) {
            resolution = 12;
          }

          var last = es.Vector2.unitX.multiplyScaler(radius);
          var lastP = es.Vector2Ext.perpendicularFlip(last);

          for (var i = 1; i <= resolution; i++) {
            var at = es.MathHelper.angleToVector(i * es.MathHelper.PiOver2 / resolution, radius);
            var atP = es.Vector2Ext.perpendicularFlip(at);
            this.drawLine(es.Vector2.add(position, last), es.Vector2.add(position, at), color, thickness);
            this.drawLine(position.sub(last), position.sub(at), color, thickness);
            this.drawLine(es.Vector2.add(position, lastP), es.Vector2.add(position, atP), color, thickness);
            this.drawLine(position.sub(lastP), position.sub(atP), color, thickness);
            last = at;
            lastP = atP;
          }
        };

        _proto.drawRect = function drawRect(x, y, width, height, color) {
          var rect = new es.Rectangle(x, y, width, height);
          if (this.camera && !this.camera.bounds.intersects(rect)) return;
          this.graphics.strokeColor = new Color(color.r, color.g, color.b);
          this.graphics.lineWidth = 1;
          this.graphics.rect(Math.trunc(x), Math.trunc(y), Math.trunc(width), Math.trunc(height));
          this.strokeNum++;
          this.flushBatch();
        };

        _proto.drawLine = function drawLine(start, end, color, thickness) {
          if (thickness === void 0) {
            thickness = 2;
          }

          var bounds = es.RectangleExt.boundsFromPolygonVector([start, end]);
          if (this.camera && !this.camera.bounds.intersects(bounds)) return;
          this.graphics.lineWidth = thickness;
          this.graphics.strokeColor = new Color(color.r, color.g, color.b);
          this.graphics.moveTo(start.x, start.y);
          this.graphics.lineTo(end.x, end.y);
          this.strokeNum++;
          this.flushBatch();
        };

        _proto.drawPixel = function drawPixel(position, color, size) {
          if (size === void 0) {
            size = 1;
          }

          var destRect = new es.Rectangle(Math.trunc(position.x), Math.trunc(position.y), size, size);

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
        };

        _proto.flushBatch = function flushBatch() {
          if (this.strokeNum >= this.MAX_STROKE) {
            this.strokeNum = 0;
            this.graphics.stroke();
          }
        };

        return Batcher;
      }());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Batcher.js.map