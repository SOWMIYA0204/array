var marks=[40,9,80,0,30];
//avg=sum/no of elements
let sum=0;
for(let mark of marks){
    sum=sum+mark;
}
let avg=sum/marks.length;
console.log(avg);

//find Heighest mark
var marks=[40,9,80,0,30];
//
let max=marks[0];
for(let mark of marks){
    max=Math.max(max,mark)
}
  console.log(max)