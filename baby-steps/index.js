var sum = 0;
var i = 2;
while(i < process.argv.length) {
  sum = sum + Number(process.argv[i]);
  i++;
}
console.log(sum);
