var code;
function createCaptcha() {
  //clear the contents of captcha div first 
  document.getElementById('captcha').innerHTML = "";
  var charsArray =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 150;
  canv.height = 40;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}

function LoginAuthentication() {
    event.preventDefault();
    clear_function_register();
    //Hide warning messages
    let element = document.querySelector('#login_email_waring');
    element.classList.add('d-none');

    element = document.querySelector('#login_pwd_warning');
    element.classList.add('d-none');

    let empty = false;

    const email = document.querySelector('#login_email');
    if (email.value.trim() === '') {
        element = document.querySelector('#login_email_waring');
        element.classList.remove('d-none');
        empty = true;
    }

    const password = document.querySelector('#login_pwd');
    if (password.value.trim() === '') {
        element = document.querySelector('#login_pwd_warning');
        element.classList.remove('d-none');
        empty = true;
    }

    if (empty == true) {
        return;
    }

    if (email.value==='admin@ucy.ac.cy' && password.value==='1234'){
        $('#myModal').modal('hide');
        clear_function_login();
        window.location.href = "./admin.html";
        return;
    }

    if (email.value!='user@ucy.ac.cy' || password.value!='1234'){
        swal({
			title: "Fail Login",
			text: "Username or Password is Invalid",
			icon: "error",
			button: "Close"
		});
        return;
    }

    element = document.querySelector('#login_tab');
    element.classList.add('d-none'); 
    
    element = document.querySelector('#profile_tab');
    element.classList.remove('d-none'); 

    element = document.querySelector('#logout_tab');
    element.classList.remove('d-none'); 

    swal({
        title: "Successful Login!",
        text: "Welcome to Gardiano Cafe",
        icon: "success",
        button: "Close"
    });

    $('#myModal').modal('hide');
    clear_function_login();
}

function RegisterAuthentication() {
    event.preventDefault();
    clear_function_login();
    //Hide warning messages
    let element = document.querySelector('#register_email_waring');
    element.classList.add('d-none');

    element = document.querySelector('#register_address_waring');
    element.classList.add('d-none');

    element = document.querySelector('#register_phone_waring');
    element.classList.add('d-none');

    element = document.querySelector('#register_pwd_warning');
    element.classList.add('d-none');

    element = document.querySelector('#register_confirm_pwd_warning');
    element.classList.add('d-none');

    element = document.querySelector('#register_terms_warning');
    element.classList.add('d-none');

    element = document.querySelector('#register_captcha_warning');
    element.classList.add('d-none');

    let empty = false;

    const email = document.querySelector('#register_email');
    if (email.value.trim() === '') {
        element = document.querySelector('#register_email_waring');
        element.classList.remove('d-none');
        empty = true;
    }

    const address = document.querySelector('#register_address');
    if (address.value.trim() === '') {
        element = document.querySelector('#register_address_waring');
        element.classList.remove('d-none');
        empty = true;
    }

    const phone = document.querySelector('#register_phone');
    if (phone.value.trim() === '') {
        element = document.querySelector('#register_phone_waring');
        element.classList.remove('d-none');
        empty = true;
    }

    const password = document.querySelector('#register_pwd');
    if (password.value.trim() === '') {
        element = document.querySelector('#register_pwd_warning');
        element.classList.remove('d-none');
        empty = true;
    }

    const confirm = document.querySelector('#register_confirm_pwd');
    if (confirm.value.trim() === '') {
        element = document.querySelector('#register_confirm_pwd_warning');
        element.classList.remove('d-none');
        empty = true;
    }

    var checkBoox = document.getElementById("register_terms").checked;
    if (checkBoox === false){
        element = document.querySelector('#register_terms_warning');
        element.classList.remove('d-none');
        empty = true;
    }

    var cpatcha = document.getElementById("cpatchaTextBox");
    if (cpatcha.value.trim() === '') {
        element = document.querySelector('#register_captcha_warning');
        element.classList.remove('d-none');
        createCaptcha();
        empty = true;
    }  

    if (empty == true) {
        return;
    }

    if (isNaN(phone.value.toString())){
        swal({
			title: "Fail Registration",
			text: "Phone number can contains only integer digits",
			icon: "error",
			button: "Close"
		});
        return;
    }

    if (password.value != confirm.value){
        swal({
			title: "Fail Registration",
			text: "Passwords do not match",
			icon: "error",
			button: "Close"
		});
        return;
    }

    if (document.getElementById("cpatchaTextBox").value != code) {
        swal({
			title: "Fail Registration",
			text: "Invalid Captcha",
			icon: "error",
			button: "Close"
		});
        createCaptcha();
        return;     
    }

    $('#myModal').modal('hide');
    swal({
        title: "Successful Registration!",
        text: "Welcome to Gardiano World!",
        icon: "success",
        button: "Close"
    });
    clear_function_register();
}

function clear_function_login() {
    document.getElementById("LoginForm").reset();
    let tab_contents = document.querySelector('#login_email_waring');
    tab_contents.classList.add('d-none');
    let warning = document.querySelector('#login_pwd_warning');
    warning.classList.add('d-none');
}

function clear_function_register() {
    document.getElementById("registerForm").reset();
    let element = document.querySelector('#register_email_waring');
    element.classList.add('d-none');

    element = document.querySelector('#register_address_waring');
    element.classList.add('d-none');

    element = document.querySelector('#register_phone_waring');
    element.classList.add('d-none');

    element = document.querySelector('#register_pwd_warning');
    element.classList.add('d-none');

    element = document.querySelector('#register_confirm_pwd_warning');
    element.classList.add('d-none');

    element = document.querySelector('#register_terms_warning');
    element.classList.add('d-none');

    element = document.querySelector('#register_captcha_warning');
    element.classList.add('d-none');
}

function logout_function(){
    clear_function_login();
    clear_function_register();

    let element = document.querySelector('#login_tab');
    element.classList.remove('d-none'); 
    
    element = document.querySelector('#profile_tab');
    element.classList.add('d-none'); 

    element = document.querySelector('#logout_tab');
    element.classList.add('d-none'); 
}

function closeModal() { 
    jQuery(document).ready(function() {
        jQuery("#panel8 button.close").click(function () {
          jQuery("#panel8").modal("hide");
        });
      })      
}

function open_login(){
    createCaptcha();

    let element = document.querySelector('#register_form_tab');
    element.classList.remove('active'); 

    element = document.querySelector('#panel8');
    element.classList.remove('active'); 

    element = document.querySelector('#login_form_tab');
    element.classList.add('active');

    element = document.querySelector('#panel7');
    element.classList.add('active');
    element.classList.add('show');

    clear_function_login();
    clear_function_register();
}

function open_register(){
    let element = document.querySelector('#register_form_tab');
    element.classList.add('active'); 

    element = document.querySelector('#panel8');
    element.classList.add('active'); 
    element.classList.add('show'); 

    element = document.querySelector('#login_form_tab');
    element.classList.remove('active');

    element = document.querySelector('#panel7');
    element.classList.remove('active');
    element.classList.remove('show');

    clear_function_login();
    clear_function_register();
}

function open_restorePassword() {
    document.getElementById("forgotForm").reset();
    $('#myModal').modal('hide');
    $('#forgotPassword').modal('show');
}

function restoreScript(){
    if (document.getElementById("fgpsswd").value === '') {
        swal({
			title: "Fail Restore",
			text: "Email must be filled",
			icon: "error",
			button: "Close"
		});   
    }
    else{
        swal({
            title: "Successful Password Restore!",
            text: "In your email you can find a temporary password! Please change it at the first login.",
            icon: "success",
            button: "Close"
        });
        $('#forgotPassword').modal('hide');
    }
}

const login_button = document.querySelector('#login');
if (login_button){
    login_button.addEventListener('click', LoginAuthentication);
}

const register_button = document.querySelector('#signup');
if (register_button){
    register_button.addEventListener('click', RegisterAuthentication);
}
