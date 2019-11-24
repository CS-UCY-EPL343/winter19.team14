function getProfile(){
	document.getElementById("profile-conf").checked = true;
	document.getElementById("profile-name").value = "Marcos Antonios";
	document.getElementById("profile-phone").value = "99421344";
	document.getElementById("profile-address").value = "Kallipoleos 75, Nicosia 1678";
	document.getElementById("profile-email").value = "user@ucy.ac.cy";
	document.getElementById("profile-promo").checked = true;


}

function updateChanges() {
	let name = document.getElementById("profile-name").value;
	let telephone = document.getElementById("profile-phone").value;
	let email = document.getElementById("profile-email").value;
	let address = document.getElementById("profile-address").value;
  
	if (name === "" || telephone === "" || email === "" || address === ""){
		swal({
			title: "Empty fields.",
			text: "All fields in the form must be filled.",
			icon: "error",
			button: "Close"
		});
   }
   else if (isNaN(telephone.toString())){
		swal({
			title: "Fail Update",
			text: "Phone number can contains only integer digits",
			icon: "error",
			button: "Close"
		});
	}
   else {
		swal({
			title: "Successful update!",
			text: "Your changes have been submitted successfully.",
			icon: "success",
			button: "Close"
		});
   }	
	
}

var modal = document.getElementById("change_pass");

var btn = document.getElementById("passBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openTab(evt, tabName) {
	var i, tabcontent, tablinks;
  
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
  
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
  
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
  }

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
		document.getElementById("changepwd").reset();
		modal.style.display = "none";
		swal({
			title: "Successful change!",
			text: "Your password has been changed",
			icon: "success",
			button: "Close"
		});
	}

}
getProfile();
