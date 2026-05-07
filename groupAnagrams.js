var groupAnagrams=function(strs){
    let map={}

    for(let str of strs){
        let sorted=str.split('').sort().join('')

        if(!map[sorted]){
            map[sorted]=[]
        }
        map[sorted].push(str)
    }
    return Object.values(map);
}

console.log(groupAnagrams('cat','rat'))