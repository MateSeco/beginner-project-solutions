// Solution for Armstrong Number problem
/* Descripcion del problema:
Define a function that allows the user to check whether a given number is armstrong number or not.
Hint: To do this, first determine the number of digits of the given number. Call that n. Then take every digit in the number and raise it to the nth power. Add them, and if your answer is the original number then it is an Armstrong number.
Example: Take 1634. Four digits. So, 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634. So 1634 is an Armstrong number.
Tip: All single digit numbers are Armstrong numbers */

function armstrong (num) {
    let digits = num.toString().split('');
    let reduce = digits.reduce((count, digit) => count += Math.pow(digit, digits.length) ,0);
    return num == reduce 
        ?   "is Armstrong"
        :   "is not Armstrong"
}