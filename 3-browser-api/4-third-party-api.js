// fetch('https://randomuser.me/api')
//     .then(res => res.json())
//     .then(data => console.log(data));

const getData = async () => {
    const url = 'https://randomuser.me/api';
    const res = await fetch(url);
    const data = await res.json();
    displayData(data);
}
const displayData = data => {
    console.log(data);
}

getData();