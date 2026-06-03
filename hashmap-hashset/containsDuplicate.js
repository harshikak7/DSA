var containsDuplicate=function(nums){
    let hashset=new Set();

    for(let n of nums){
        if(hashset.has(n)){
            return true
        } else{
            hashset.add(n)
        }
    }
    return false
}

console.log(containsDuplicate([1,3,4,6,3,1]))
