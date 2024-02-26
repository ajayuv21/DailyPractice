// Load the full build.
var _ = require('lodash');

console.log("hiii")

var result = _.partition([1, 2, 3, 4], n => n % 2);
console.log(result)

var r1 = _.chunk([1, 2, 3, 4,7,9,2,5], [size=3])
console.log(r1)
var fs = require('fs');
fs.readFile('abc.txt', 'utf-8', function(err, data) {
   console.log(data)
  });