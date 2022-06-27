function miniMaxSum(arr) {
  // Write your code here

  let Max = Math.max.apply(null, arr);
  let Min = Math.min.apply(null, arr);

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let a = sum - Max;
  let b = sum - Min;
  let z = a + " " + b;
  return z;
}

const a = miniMaxSum([1,2,3,4,5]);
console.log(a);
