
var createHermesc = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(createHermesc) {
  createHermesc = createHermesc || {};



  return createHermesc
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = createHermesc;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return createHermesc; });
    else if (typeof exports === 'object')
      exports["createHermesc"] = createHermesc;
    