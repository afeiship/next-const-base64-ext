/*!
 * name: next-const-base64-ext
 * url: https://github.com/afeiship/next-const-base64-ext
 * version: 1.0.0
 * date: 2019-07-08T03:56:29.663Z
 * license: MIT
 */

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

//# sourceMappingURL=next-const-base64-ext.js.map
