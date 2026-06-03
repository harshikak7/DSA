/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
  let right=0;
  let left=0;
  let blank=0;

  for(move of moves){
    if(move=="R"){
        right++;
    }
    else if(move=="L"){
        left++;
    }
    else{
        blank++;
    }
  }  
  return Math.abs(left-right)+blank;
};