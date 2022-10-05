System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Mesh, _crd, PolygonMesh;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfMesh(extras) {
    _reporterNs.report("Mesh", "./Mesh", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Mesh = _unresolved_2.Mesh;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d33e0qgkeJAdZX96dHiuSAX", "PolygonMesh", undefined);

      _export("PolygonMesh", PolygonMesh = /*#__PURE__*/function (_ref) {
        _inheritsLoose(PolygonMesh, _ref);

        function PolygonMesh(points, arePointsCCW) {
          var _this;

          if (arePointsCCW === void 0) {
            arePointsCCW = true;
          }

          _this = _ref.call(this) || this;
          var triangulator = new es.Triangulator();
          triangulator.triangulate(points, arePointsCCW);

          _this.setVertPositions(points);

          _this.setTriangles(triangulator.triangleIndices);

          return _this;
        }

        return PolygonMesh;
      }(_crd && Mesh === void 0 ? (_reportPossibleCrUseOfMesh({
        error: Error()
      }), Mesh) : Mesh));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PolygonMesh.js.map