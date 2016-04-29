var scores = [34, 11, 56, 93, 99, 89, 81, 33, 40];
var isGreaterThanTen = _(scores).all(function(score){ return score > 10});
console.log(isGreaterThanTen);

// checks all the elements in an array