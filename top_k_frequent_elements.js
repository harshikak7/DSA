var topKFrequent=function(nums, k) {
    const count={}

    for(let n of nums){
        count[n]=(count[n]||0)+1
    }

    const arr=Object.entries(count).map(([n,freq])=>[freq,n])
    arr.sort((a,b)=>b[0]-a[0])

    return arr.slice(0,k).map((pair)=>pair[1])
}

console.log(topKFrequent([1,1,1,2,2,3],2))