var intersection=function(nums1,nums2){
    let set1=new Set(nums1)
    let res=new Set()
    for(let num of nums2){
        if(set1.has(num)){
            res.add(num)
        }
    }
    return [...res] //spread operator
}
console.log(intersection([1,2,2,1],[2,2]))