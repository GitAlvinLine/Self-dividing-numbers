// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

// Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

// Example 1: Input: left = 1, right = 22 Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

var selfDividingNumbers = function(left, right) {
    var result = [];
    var selfDivideTest = function(num) {
        return num.toString().split('').every(function(letter) {
            if(Number(letter) !== 0 && num % Number(letter) === 0) {
                return true;
            }
            return false;
        })
    }
    for (left; left <= right; left++) {
        if(selfDivideTest(left)){
            result.push(left);
        }
    };
    return result;
}

console.log(selfDividingNumbers(1, 15));
