//Using Hashset 
// var singleNumber=function(nums){
//     let map={}    
//     for(let num of nums){
//         map[num]=(map[nums]||0)+1
//     }
//     for(let key in map){
//         if(map[key]===1){
//             return Number(key)
//         }
//     }
// }

// console.log(singleNumber([2,2,1]))


// Using XOR Bit Manipulation
var singleNumber=function(nums){
    let result=0
    for(num of nums){
        result^=num
    }
    return result
}
console.log(singleNumber([2,2,1]))