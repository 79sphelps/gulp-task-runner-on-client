(function(a, window){
'use strict';

var aa = 5;
var b = 6;
var c = aa + b;
console.log(c);

var e = ['one', 'two', 'three'];
var j = 0;
while (j < e.length) {
    console.log('j: ', j);
}

var d = [1, 2, 3, 4, 5];
for (var i = 0; i < d.length; i++) {
    console.log(i);
}
}(angular,window));