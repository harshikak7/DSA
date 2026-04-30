/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    let total=0;

    for(let num of nums){
        total+=num;
    }
    if(total %2 === 0){
        return nums.length-1;
    }
    return 0;
};