const person = {
    name: 'Rahim',
    age: 12,
    sex: 'male',
    salary: 12000,
    'address': 'Pathantola, Dhamrai'
}

console.log(person.name); // dot notation (use for normal keys)
console.log(person['address']); // bracket notation (use for string/variable key)
let thikana = 'address';
console.log(person[thikana]); // bracket notation (use for string/variable key)
console.log(person[age]); // reference error
