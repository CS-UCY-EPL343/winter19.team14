function changePassword(){
	let password = document.getElementById("profile-pass").value;

	if(password == ""){
		swal({
			title: "Not given a password.",
			text: "Must give a password.",
			icon: "error",
			button: "Close"
		});
	} else{
		swal({
			title: "Successful change!",
			text: "Your password has been changed.",
			icon: "success",
			button: "Close"
		});

	}
}