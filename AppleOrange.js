function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here

    let app = apples.map((item) => {
        return item + a;
    });

    let orange = oranges.map((item) => {
        return item + b;
    });

    let occurance = app.filter((value) => {
        let element = value >= 7 && value <= 10;

        return element;
    });

    let occurance2 = orange.filter((value) => {
        let element = value >= 7 && value <= 10;

        return element;
    });

    let finalAns = occurance.length + "\n" + occurance2.length;

    return finalAns;
}

const a = countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
console.log(a);
