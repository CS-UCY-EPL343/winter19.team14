/*$(document).ready(function() {
   $('#datetimepicker1').datepicker({dateFormat: "dd-mm-yyyy"});

	$('#datetimepicker1').datepicker().datepicker("setDate", new Date());
});
*/
function reservation() {
	let name = document.getElementById("nameForm").value;
	let telephone = document.getElementById("telForm").value;
	let email = document.getElementById("emailForm").value;
	let num = document.getElementById("numForm").value;
	let type = document.getElementById("typeForm").value;
	let hour = document.getElementById("hourForm").value;
  
	if (name === "" || telephone === "" || email === "" || num === "" || type === "" || hour === ""){
		swal({
			title: "Empty fields.",
			text: "All fields in the form must be filled.",
			icon: "error",
			button: "Close"
		});
   }else {
		swal({
			title: "Successful booking!",
			text: "Your booking has been submitted successfully.",
			icon: "success",
			button: "Close"
		});
   }	
	
}