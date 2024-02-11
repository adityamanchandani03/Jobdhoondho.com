let box = document.getElementById('register_box');
let container = document.getElementById('container');



function data() {
    let a = document.getElementById('name').value
    let b = document.getElementById('email id').value
    let c = document.getElementById('password').value
    let d = document.getElementById('mobile no.').value;

    if (a == "" || b == "" || c == "" || d == "") {
        alert("all fields are mandatory")
        return false;
    }
    else {
        box.style.display = 'grid';
        container.style.filter = 'blur(5px)'

    }
    let hide = () => {
        box.style.display = 'none';
        
        container.style.filter = 'none';
        location.href="../HTML/indexlogin.html"

    }
    setTimeout(hide, 4000)

}

