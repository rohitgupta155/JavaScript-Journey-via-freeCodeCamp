// Only change code below this line
function countdown(n){
  if(n<1)
  return [];
  else {
 const a=(countdown(n-1));
a.unshift(n);
  return a;}
}
// Only change code above this line