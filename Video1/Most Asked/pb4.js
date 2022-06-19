console.log(sum(2, 3));
console.log(sum(2)(3));

/* write a common for both */

function sum(a, b) {
  if (b) {
    return a + b;
  } else {
    return (b) => {
      return a + b;
    };
  }
}
