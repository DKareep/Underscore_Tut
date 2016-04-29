var scores = [34, 11, 56, 93, 99, 89, 81, 33, 40];
var topScores = [];
var scoreLimit = 80;

for(i = 0; i < scores.length; i++) {
    if (scores[i] > scoreLimit) {
        topScores.push(scores[i]);
    }
}
console.log(topScores, 'topscores');