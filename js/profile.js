function getProfile(){

	document.getElementById("profile-name").value = "Marcos Antonios";
	document.getElementById("profile-phone").value = "99421344";
	document.getElementById("profile-address").value = "Kallipoleos 75, Nicosia 1678";
	document.getElementById("profile-email").value = "user@ucy.ac.cy";
	document.getElementById("profile-confirm").checked = true;
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
getProfile();