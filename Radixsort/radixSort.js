//helper functions
//.1)helper function to return the digit in num at the given place value

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//.2)digit count to return the number of digits in a number
function getDigit(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}