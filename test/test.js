var nx = require('next-js-core2');
require('../src/next-const-base64-ext');


test('nx.constBase64Ext', function () {
  var obj1 = {name: 'fei'};
  var obj2 = {email: '1290657123@qq.com'};

  var result = {};

  nx.constBase64Ext(result, obj1, obj2);

  expect(result.name, obj1.name).toBe(null);
});

