//helper functions
//helper function to return the digit in num at the given place value

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}