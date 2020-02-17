// this is a comment

function test(arr) {
    var s = 0;
    for(var i=0; i<arr.length; i++) {
        s += arr[i];
        console.log(s);
    }
    return s;
}

var result = test( [1,2,3] );
console.log(result);