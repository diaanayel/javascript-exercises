const fibonacci = function(targetIdx) {
  let prevOfPrev = 1;
  let prev = 1;
  let curr = prev + prevOfPrev;
  
  targetIdx = Number.parseInt(targetIdx);
  
  if(targetIdx < 0) return "OOPS";
  if(targetIdx === 0) return 0;
  if(targetIdx === 1 || targetIdx === 2) return 1;

  for(let i = 3; i < targetIdx; i++) {
    prevOfPrev = prev;
    prev = curr;
    curr = prev + prevOfPrev;
  }
  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
