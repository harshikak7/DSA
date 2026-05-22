var removeDuplicate=function(nums){
    let k=1

    for(let i=1;i<nums.length;i++){
        if(nums[i]!=nums[k-1]){
            nums[k]=nums[i]
            k++
        }
    }
    return k
}
console.log(removeDuplicate([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8]))