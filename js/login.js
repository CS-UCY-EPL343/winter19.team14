function LoginAuthentication() {
    event.preventDefault();

    //Hide warning messages
    let element = document.querySelector('#login_email_waring');
    element.classList.add('d-none');

    element = document.querySelector('#login_pwd_warning');
    element.classList.add('d-none');

    let empty = false;

    //Get from the form the username
    const email = document.querySelector('#login_email');
    if (email.value.trim() === '') {
        element = document.querySelector('#login_email_waring');
        element.classList.remove('d-none');
        empty = true;
    }

    //Get from the form the password
    const password = document.querySelector('#login_pwd');
    if (password.value.trim() === '') {
        element = document.querySelector('#login_pwd_warning');
        element.classList.remove('d-none');
        empty = true;
    }

    if (empty == true) {
        return;
    }

    if (email.value!='user' || password.value!='1234'){
        alert('Username or Password is invalid');
        return;
    }

    element = document.querySelector('#myModal');
    element.classList.add('d-none');

}

function clear_function_login() {
    document.getElementById("LoginForm").reset();
    let tab_contents = document.querySelector('#login_email_waring');
    tab_contents.classList.add('d-none');
    let warning = document.querySelector('#login_pwd_warning');
    warning.classList.add('d-none');
}


const login_button = document.querySelector('#login');
login_button.addEventListener('click', LoginAuthentication);