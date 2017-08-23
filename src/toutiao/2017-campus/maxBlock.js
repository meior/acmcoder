var readLine = require('readline-sync');
// 使用readline-sync模拟oj上的read_line
readLine.setDefaultOptions({ prompt: '' });
var read_line = readLine.prompt;
var print = console.log;

// 在下面写要提交的代码
var data;
while (data = read_line()) {
  var length = parseInt(data, 10);
  var arr = read_line().split(' ');
  arr = arr.map(function (val) {
    return parseInt(val, 10);
  });
  print(length);
  print(arr);
}
