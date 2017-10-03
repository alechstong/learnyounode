/** self solution
var sum=0;
for(var i=2;i<process.argv.length;i++){
  sum= sum+Number(process.argv[i]);
}
console.log(sum);
*/

const numbers=process.argv.slice(2);
//const == constant
//{array}.slice({Number})== a new sliced array

/** using {ARRAY}.reduce function
*/
/*
const result= numbers.reduce(function(acc, num){
  return acc+Number(num);
},0);
*/
/** fat array function
*/
const result= numbers.reduce((acc, num)=>{
  return acc+Number(num);
},0);
console.log(result);
