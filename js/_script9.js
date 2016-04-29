var tuts = { NetTuts : 'Web Development',  WPTuts : 'WordPress',  PSDTuts : 'PhotoShop', AeTuts : 'After Effects'};
var defaults = { NetTuts : 'Web Development'};

var defaultObj = _.defaults(tuts,defaults);
console.log(defaultObj);
