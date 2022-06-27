function rotateLeft(d, arr) {
  // Write your code here

  //   let a = arr.map((index, item) => {
  //     item.splice(index, d), item.push(d);
  //   });

  //   while (d === arr) {
  //     arr.splice(d, d);
  //   }
  //   for (let i = 0; i < arr.length; i++) {
  //     if (d) {
  //       arr[i].splice();
  //     }
  //   }

  let a = arr.map((arr, index, arr) => {
    arr.splice(index, d);
    arr.unshift(index, d);
    console.log(arr);
  });

  return a;
}

let Arr = [1, 2, 3, 4, 5];

rotateLeft(2, Arr);
