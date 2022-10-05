System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Mesh, PolygonMesh, _crd;

  function _reportPossibleCrUseOfMesh(extras) {
    _reporterNs.report("Mesh", "./Mesh", _context.meta, extras);
  }

  _export("PolygonMesh", void 0);

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

      _export("PolygonMesh", PolygonMesh = class PolygonMesh extends (_crd && Mesh === void 0 ? (_reportPossibleCrUseOfMesh({
        error: Error()
      }), Mesh) : Mesh) {
        constructor(points, arePointsCCW = true) {
          super();
          const triangulator = new es.Triangulator();
          triangulator.triangulate(points, arePointsCCW);
          this.setVertPositions(points);
          this.setTriangles(triangulator.triangleIndices);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PolygonMesh.js.map