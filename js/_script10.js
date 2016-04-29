var ob = {greeting : 'hi'};

var f = function (name) {
    return this.greeting + ' ' + name;
};

var greet = _.bind(f,ob);
console.log(greet('Dijin'));

