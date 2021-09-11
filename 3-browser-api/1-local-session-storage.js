const addToLocal = () => {
    const userInput = document.getElementById('username');
    const passInput = document.getElementById('password');
    const username = userInput.value;
    const password = passInput.value;
    const userInfo = {
        username: username,
        password: password
    }
    const stringify = JSON.stringify(userInfo);
    if (username && password) {
        localStorage.setItem('users', stringify);
        userInput.value = "";
        passInput.value = "";
    }
    else {
        alert('add something');
    }

}