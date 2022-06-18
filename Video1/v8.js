const myLife = [" a", "b", "c", "d"];

for (let item in myLife) {
  console.log(item);
}
for (let item of myLife) {
  console.log(item);
}

/*
FOr In : 
0 , 1 , 3 , 4
For For : 
a ,b ,c,d 
For in loop iterates over key of objects and for of interates over valu
*/