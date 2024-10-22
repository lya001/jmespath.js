var jmespath = require('./jmespath');
var search = jmespath.search;

ans = search(
    {
        "a": 2,
        "b": 3
    },
    "(c+`2`) ?? c"
);
console.log(ans);