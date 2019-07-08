(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.constBase64Ext = {
    '/': 'jpg',
    i: 'png',
    R: 'gif',
    U: 'webp'
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.constBase64Ext;
  }
})();
