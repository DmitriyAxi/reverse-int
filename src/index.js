module.exports = function reverse(n) {
    var numStr = n.toString().split('');
    var j = numStr.length;
    var tmp;
    var t =0;
    for(let i = 0; i < --j; ){

        tmp = numStr[i];
        console.log(i + "" + j);
        numStr[i] = numStr[j];
        numStr[j] = tmp;
        i++;

    }
    return parseInt(numStr.join(""));
}
