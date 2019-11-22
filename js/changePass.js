function changePassword(){
	let old = document.getElementById("profile-old").value;
	let password = document.getElementById("profile-pass").value;
	let confirm = document.getElementById("profile-confirm").value;

	if(old === "" || password === "" || confirm === ""){
		swal({
			title: "Not given a password.",
			text: "Must give a password.",
			icon: "error",
			button: "Close"
		});
	} 
	else if(password != confirm){
		swal({
			title: "Fail Change Password",
			text: "Passwords do not match",
			icon: "error",
			button: "Close"
		});
	}
	else{
		swal({
			title: "Successful change!",
			text: "Your password has been changed",
			icon: "success",
			button: "Close"
		});
		document.getElementById("changepwd").reset();
	}

}