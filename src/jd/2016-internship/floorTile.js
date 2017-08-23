var readLine = require('readline-sync');
// 使用readline-sync模拟oj上的read_line
readLine.setDefaultOptions({ prompt: '' });
var read_line = readLine.prompt;
var print = console.log;

// 在下面写要提交的代码
var time;
time = parseInt(read_line(), 10);

while (time--) {
  var data = read_line().split(' ');
  var n = parseInt(data[0], 10);
  var m = parseInt(data[1], 10);
  var a = parseInt(data[2], 10);
  print(Math.ceil(n / a) * Math.ceil(m / a));
}
