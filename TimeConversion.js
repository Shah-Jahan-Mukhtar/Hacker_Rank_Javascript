function timeConversion(s) {
  // Write your code here

  let sl = s.slice(0, -2);
  // let sl1 = s.substring(8);
  let sl2 = s.slice(0, 2);

  let sl3 = parseInt(sl2) + 12;

  let sl4 = sl3.toString();

  let sl5 = sl.slice(2);
  let sl6 = sl4 + sl5;

  if (sl2.includes("PM")) {
    return sl6;
  } else if (sl2.includes("AM")) {
    return s;
  }

  //   return sl2;
}

let a = timeConversion("12:05:45AM");
console.log(a);
