/* Display the asterisk pattern as shown below(No loop needed):
*****
*****
*****
*****
*****

*/


const f = function(chr, n) {
  if (n === 0) {
    return "";
  }
  return  chr +  f(chr, n - 1);
};
const g = function(max) {
   const inner = function(n) {
       if (n > 1) {
           inner(n-1);
       }
       console.log(f('', max-n) + f('*', (5)));
   };
   inner(max);
};
g(5);