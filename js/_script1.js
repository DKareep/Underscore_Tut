var scores = [34, 11, 56, 93, 99, 89, 81, 33, 40];
var topScores = [];
var scoreLimit = 80;

topScores = _.select(scores, function(score) { return score > scoreLimit});
console.log(topScores);