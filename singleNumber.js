var singleNumber=function(nums){
    let map={}    
    for(let num of nums){
        map[num]=(map[nums] || 0)+ 1
    }
    for(let key in map){
        if(map[key]===1){
            return Number(key)
        }
    }
}

console.log(singleNumber([2,2,1]))