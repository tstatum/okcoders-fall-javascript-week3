// install pacakge via nmp install 
// load package with require 
var _ = require('lodash');

// use package based on variable we import with 
for(var i = 0; i<100; i++){
    var r = _.random(10);
    console.log(r);
}