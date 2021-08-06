// Create an Array with five names and print all five in reverse.
let arr = ["iron man", "thor", "captain america", "hulk", "spider man"];
for(let a = arr.length-1; a >= 0; a--){
  console.log(arr[a]);
}

//  print only the elements which are divisible by 5 from 1 to 50.
let i = 1;
for(let i = 1; i <= 50; i++)
{
  if (i%5==0) {
console.log(i);
}
}
