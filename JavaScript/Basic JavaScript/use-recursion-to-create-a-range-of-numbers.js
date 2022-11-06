function rangeOfNumbers(startNum, endNum) {
  if(startNum==endNum)
  return [startNum];
  const a=rangeOfNumbers(startNum+1,endNum);
  a.unshift(startNum);
  return a;
};