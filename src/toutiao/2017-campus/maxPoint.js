var readLine = require('readline-sync');
// 使用readline-sync模拟oj上的read_line
readLine.setDefaultOptions({ prompt: '' });
var read_line = readLine.prompt;
var print = console.log;

// 在下面写要提交的代码
var n;
var data;

while (data = read_line()) {
  n = parseInt(data, 10);
  var points = [];
  var xs = [];
  var ys = [];

  while (n--) {
    data = read_line().split(' ');
    var xOfPoint = parseInt(data[0], 10);
    var yOfPoint = parseInt(data[1], 10);
    points.push({
      x: xOfPoint,
      y: yOfPoint
    });
  }

  xs.sort();
  ys.sort();
  print(points);
  print(xs, ys);
}
