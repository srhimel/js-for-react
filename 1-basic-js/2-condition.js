let age = 19;

if (age <= 0 || age >= 100) {
    console.log('impossible');
} else if (age === 18) {
    console.log('You are 18');
} else if (age > 0 && age < 18) {
    console.log('You are baby');
} else {
    console.log('you are adult');
}