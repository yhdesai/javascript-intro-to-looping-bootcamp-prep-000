function forLoop(array) {
for (var i = 0; i < 25; i++) {
  a = i == 0 ? ' ' : 's'
  array[i] = "I am ${i} strange loop" + a
   }
 return array
}

function whileLoop(n) {
i =10
  while (i>0) {
console.log(n);
    i--
  }
}
