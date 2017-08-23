var readLine = require('readline-sync');
// 使用readline-sync模拟oj上的read_line
readLine.setDefaultOptions({ prompt: '' });
var read_line = readLine.prompt;
var print = console.log;

// 在下面写要提交的代码
var n = 0;
var data;
var votes;

while (data = read_line()) {
  n++;
  var arr = data.split(' ');
  if (n % 2 === 0) {
    votes = arr.map(function (val) {
      return parseInt(val, 10);
    });

    var result = 0;
    var self = votes[0];
    var max = {
      val: -1,
      index: 0
    };

    while (self !== max.val) {
      for (var i = 0, j = votes.length; i < j; i++) {
        if (votes[i] > max.val) {
          max.val = votes[i];
          max.index = i;
        }
      }

      if (self < max.val) {
        votes[max.index]--;
        votes[0]++;
        self = votes[0];
        result++;
        max.val = -1;
      } else {
        break;
      }
    }

    var maxCount = 0;
    for (var p = 0, q = votes.length; p < q; p++) {
      if (self === votes[p]) {
        maxCount++;
      }
    }

    if (maxCount > 1) {
      result++;
    }
    print(result);
  }
}

/*
5
5 1 11 2 8
4
3
999 1000 1000
2
3
1 2 3
2
7
10 940 926 990 946 980 985
817
10
5 3 4 5 5 2 1 8 4 1
2
15
17 15 17 16 13 17 13 16 14 14 17 17 13 15 17
1
20
90 5 62 9 50 7 14 43 44 44 56 13 71 22 43 35 52 60 73 54
0
*/
