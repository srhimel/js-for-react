const sum = (num1, num2) => num1 + num2;
console.log(sum(10, 25));
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    const tax = sum + sum / 9;
    return tax;
}

console.log(doMath(10, 10));