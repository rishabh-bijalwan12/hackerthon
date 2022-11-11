function loginId() {
    if (document.getElementsById('Inputlogin').innerText('username') == 'username' && document.getElementsById('pass').innerText('password') == 'password') {
        alert('correct id and pass');
    }
    else {
        document.getElementById('Inputlogin').innerText('Entre valid username');
        document.getElementById('pass').innerText('Entre valid Password');
    }
}

let na = [];
let a = [];
let per = [];
var x = -1;
function fun() {
    na.push(document.getElementById('Inputlogin').value);
    a.push(document.getElementById('pass').value);
    if (document.getElementById('Inputlogin').innerText = '') {
        na.pop();
        a.pop();
        document.getElementById('Inputlogin').innerText = 'Invalid username'
    }
    else if (document.getElementById('pass').innerText = '') {
        na.pop();
        a.pop();
        document.getElementById('pass').innerText = 'Invalid pass'
    }
    else if (document.getElementById('text2').innerText = 'username' && document.getElementById('pass').innerText = 'password') {

    }

}