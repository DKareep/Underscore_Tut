var Tuts = [{name: 'netTuts', niche: 'web development'},{name: 'udemy',niche: 'CMS'},{name: 'udacity', niche: 'Android app dev' }];
var niches = _.pluck(Tuts, 'name');
console.log(niches);