const friends = ['naim', 'munna', 'pacu'];

if (friends.includes('naim')) {
    console.log('paichi');
}
friends.indexOf('naim'); //- 0
friends.push('russel'); //- 3 index push
friends.pop; //- pop russel
friends.shift; //- pop naim
friends.unshift('kabir'); //- add kabir index 0
friends.length; //- 2
friends[1] = "kibria"; //- change munna to kibria