function forLoop(array) {
for (var i = 0; i < 25; i++) {
  if(i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`);
    }
   }
 return array
}

function whileLoop(n) {
i =10
  while (i>0) {
console.log(n);
    i--
  }
  if (n === 0) {
    return("done");
  }
}

function doWhileLoop(num) {
do {
  console.log("I run once regardless.");
  num--
} while (num>0);
}
