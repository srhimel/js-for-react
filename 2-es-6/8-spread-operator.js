const friends = ['naim', 'munna', 'pacu'];
// const newFriend = friends; // return friends array with push value
// const newFriend = [...friends]; // return only the value of array (spread operator)

// we can also add value with spread operator
const newFriend = [...friends, 'kabul'];

friends.push('habuila'); //doest effect newFriends if use spread operator
console.log(newFriend);