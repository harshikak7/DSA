var arrayStringsAreEqual=function(word1,word2){
    return word1.join('')===word2.join('')
}
console.log(arrayStringsAreEqual(["ab", "c"],["a", "bc"]))

//Optimal
var arrayStringsAreEqual = function(word1, word2) {
    let i=0,j=0
    let p1=0,p2=0

    while(i<word1.length && j<word2.length){
        if(word1[i][p1]!== word2[j][p2]){
            return false
        }
        p1++
        p2++
        if(p1===word1[i].length){
            i++
            p1=0
        }
        if(p2===word2[j].length){
            j++
            p2=0
        }
    }
    return i===word1.length && j===word2.length
};
console.log(arrayStringsAreEqual(["ab", "c"],["a", "bc"]))