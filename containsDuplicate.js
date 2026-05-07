var containsDuplicate=function(nums){
    nums.sort((a,b)=>a-b); //JS Sort uses string so convert to number sort

    for(let i=0;i<nums.lenght;i++){
        if(nums[i]===nums[i+1]){
            return true
        }
    }
    return false;
}
