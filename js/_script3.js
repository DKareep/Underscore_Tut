var tuts = [{name: 'nettuts', niche: 'web development'},{name: 'udemy',niche: 'CMS'},{name: 'udacity', niche: 'Android app dev' }];
var tusSites = _.pluck(tuts, 'name').map(function(site){
    "use strict";
    return site + '.com';
});

console.log(tusSites);