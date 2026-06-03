var containerWithMostWater=function(height){
    let left=0
    let right=height.length-1
    let maxWater=0

    while(left<right){
        let width=right-left
        let h=Math.min(height[left],height[right])
        maxWater=Math.max(maxWater,width*h)

        if(height[left]<height[right]){
            left++
        } else{
            right--
        }
    }
    return maxWater
}
console.log(containerWithMostWater([1,8,6,2,5,4,8,3,7]))