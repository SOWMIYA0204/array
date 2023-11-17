var r1=[100,200];
var r2=[400,500];
var r3=[...r1,...r2];
console.log(r1);
console.log(r2);
console.log(r3);

//r3=[600,7000,400,500]how to derive it using spread opeartor
var r1=[100,200];
var r2=[400,500];
var r3=[600,700,...r2];
r3.push(1000);
console.log(r1);
console.log(r2);
console.log(r3);