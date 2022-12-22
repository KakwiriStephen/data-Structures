//countdown Numbers in descending order
//method 1
function descendNum(startNum) {
  console.log(startNum);
  let nextNum = startNum - 1;
  if (nextNum > 0) {
    descendNum(nextNum);
  }
}
descendNum(10);
// method2
function countdown(num) {
  if (num <= 0) {
    console.log("All done");
    return;
  }
  console.log(num);
  num--;
  countdown(num);
}
countdown(10);

//Sum Range of numbers
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
sumRange(3);
// output(3+2+1)

////factorial
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

factorial(3);

// Helper function
function collectOddvalues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddvalues(arr.slice(1)));
  return newArr;
}

collectOddvalues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
