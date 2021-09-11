const products = [
    { name: 'laptop', brand: 'acer', price: 32000, color: 'silver' },
    { name: 'mobile', brand: 'walton', price: 8000, color: 'silver' },
    { name: 'mobile', brand: 'samsung', price: 10000, color: 'black' },
    { name: 'laptop', brand: 'samsung', price: 55000, color: 'black' },
    { name: 'laptop', brand: 'asus', price: 100000, color: 'red' },
    { name: 'laptop', brand: 'hp', price: 45000, color: 'green' },
];

const brands = products.map(x => x.brand); //return values as a array
console.log(brands);
const lowBudgetLaptop = products.filter(x => x.price < 40000 && x.name === 'laptop'); // return values as a array
console.log(lowBudgetLaptop);
const firstBudgetLaptop = products.find(x => x.price < 40000); //return a single value 
console.log(firstBudgetLaptop);
products.forEach(x => console.log(x)); // return elements from array