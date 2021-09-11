// num to string
const num = 50;
const str = num + ''; // make it string
const numConvert = +str; // make it number
//true false using turnery
let active = false;
const showUser = () => console.log('showUser');
const hideUser = () => console.log('hideUser');
// active ? showUser() : hideUser(); // using turnery
active = !active; // toogle boolean
active && showUser(); // using and operator
active || showUser(); // using or operator

