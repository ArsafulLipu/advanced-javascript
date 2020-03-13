const number = [2, 3, 4, 5, 6, 7, 8, 9, 20];
const output = [];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    const result = element * element;
    output.push(result);
    
}

console.log(output);


const number2 = [2, 4, 5];
const result2 = number2.map(x => x * x);
console.log(result2);
const result3 = number2.filter(x => x > 2);
console.log(result3);

