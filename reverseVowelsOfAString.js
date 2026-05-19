var reverseStrings=function(s){
    let vowels=new Set([])
    let arr=s.split('')
    let left=0
    let right=Array.length-1

    while(left<right){
        while(left<right && !vowels.has(arr[left])){
            left++
        }
        while(left<right && !vowels.has(arr[right])){
            right--
        }
        [arr[left],arr[right]]=[arr[right],arr[left]]
        left++
        right--
    }
    return arr.join('')
}
console.log(reverseStrings('IceCreAm'))