var topKFrequent=function(nums, k) {
    const count={}
    for(let num of nums){
        count[num]=(count[num]||0)+1
    }
    const arr=Object.entries(count).map(([num,freq])=>[freq,parseInt(num)])
    arr.sort((a,b)=>b[0]-a[0])
    return arr.slice(0,k).map((pair)=>pair[1])
}

console.log(topKFrequent([1,1,1,2,2,3],2))