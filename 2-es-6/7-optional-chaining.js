const person = {
    name: 'xx',
    age: 12,
    thikana: {
        vill: 'pthantola',
        district: 'dhaka',
        places: []
    }
}
const [place1] = person?.thikana?.places;
console.log(place1);