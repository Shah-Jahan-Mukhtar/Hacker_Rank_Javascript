function staircase(n) {
  // Write your code here
  let sp = "";
  for (let i = 1; i <= n; i++) {
    for (let s = n - 1; s >= i; s--) {
      sp += " ";
    }
    for (let h = 1; h <= i; h++) {
      sp += "#";
    }
    sp += "\n";
  }
  console.log(sp);
}


 staircase(10);

