// Xor
var missingNumber=function(nums){
    let xor=nums.length
    for(let i=0;i<nums.length;i++){
        xor^=i
        xor^=nums[i]
    }
    return xor
}
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))

// Sum Formula
var missingNumber=function(nums){
    let n=nums.length
    let expectedSum=n*(n+1)/2
    let actualSum=0
    for(let num of nums){
        actualSum+=num
    }
    return expectedSum-actualSum
}
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))