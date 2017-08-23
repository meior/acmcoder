var readLine = require('readline-sync');
// 使用readline-sync模拟oj上的read_line
readLine.setDefaultOptions({ prompt: '' });
var read_line = readLine.prompt;
var print = console.log;

// 在下面写要提交的代码
var m;
var n;
var sum;
var data;

while (data = read_line()) {
  var arr = data.split(' ');
  n = parseInt(arr[0], 10);
  m = parseInt(arr[1], 10);
  sum = 0;
  for (var i = 0; i < m; i++) {
    sum += n;
    n = Math.sqrt(n);
  }
  print(sum.toFixed(2));
}
