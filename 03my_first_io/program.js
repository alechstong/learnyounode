var fs= require('fs');
var test= false;
var path= process.argv[2];

var strings= fs.readFileSync(path).toString().split('\n');

if(test){
  console.log(buf);
}
console.log(strings.length-1);
//console.log(path);
