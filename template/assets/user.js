function chuyenFormThongTin() {
    window.location.href = '/user';
}
function dangxuat() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");

    const navbarUser = document.querySelector('.navbar_user');
    if (navbarUser) 
        navbarUser.style.display = 'none';

    const navbarAccount = document.querySelector('.navbar_account');
    if (navbarAccount) 
        navbarAccount.style.display = 'block';


    fetch('./logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.status==200) {
            window.location.href = '/';
        }
    })
    .catch(error => {
    });
}
function infoUser(){
    fetch('./info', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.status==200) {
            const navbarUser = document.querySelector('.navbar_user');
            if (navbarUser) 
                navbarUser.style.display = 'block';

            const navbarAccount = document.querySelector('.navbar_account');
            if (navbarAccount) 
                navbarAccount.style.display = 'none';
            const navbar_username = document.querySelector('.navbar_user-name');
            navbar_username.innerHTML=data.data.user.username;
        }
    })
    .catch(error => {
    });    

    
}