var readLine = require('readline-sync');
// 使用readline-sync模拟oj上的read_line
readLine.setDefaultOptions({ prompt: '' });
var read_line = readLine.prompt;
var print = console.log;

// 在下面写要提交的代码
var m;
var n;
var data;
var result;

while (data = read_line()) {
  var arr = data.split(' ');
  m = parseInt(arr[0], 10);
  n = parseInt(arr[1], 10);
  result = [];

  var flag = false;
  for (var i = m; i <= n; i++) {
    var a = parseInt(i / 100, 10);
    var b = parseInt(i / 10 % 10, 10);
    var c = parseInt(i % 10, 10);
    if (a * a * a + b * b * b + c * c * c === i) {
      flag = true;
      result.push(i);
    }
  }

  if (flag) {
    print(result.join(' '));
  } else {
    print('no');
  }
}
