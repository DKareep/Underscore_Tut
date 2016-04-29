console.log(_.isEmpty([1,2]));
console.log(_.isEmpty());

// flatten
console.log(_.flatten([[1,4], [4,5],[34,55]]));

// each
var artists = ['The National', 'Fray', 'Hoobastank'];
_.each(artists, function(artist) {
    "use strict";
    console.log(artist);
});

//filter

_.filter(artists, function(artist) {
    "use strict";
    return artist === 'Fray';
});