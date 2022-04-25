findMaxFive = (arr) => {
   // Sort arr from highest to lowest number
   arr.sort((a,b) => {
      return b - a;
   });
   // push 5 highest numbers into new array
   let newArr = [];
   for(let i=0; i<5; i++) {
      newArr.push(arr[i]);
   }
   // print out the new array
   console.log('5 phan tu lon nhat trong mang: ');
   console.log(newArr);
}

let array1 = [3,4,5,3,2,3,10,11];
let array2 = [14,12,38,17,10,36,12,29,45,34,48,22];
let array3 = [10,11,2,30,22,6,8,9,11,12,22];

findMaxFive(array1);
findMaxFive(array2);
findMaxFive(array3);