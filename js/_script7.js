var tens = _.range(0,100,10);
var five = _.range(0,100,5);
var eight = _.range(0,100,8);

var common = _.intersection(tens,five,eight);
console.log(common);

// returns common in arrays