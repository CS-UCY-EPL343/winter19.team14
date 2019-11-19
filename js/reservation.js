$(document).ready(function() {
   $('#datetimepicker1').datepicker({dateFormat: "dd-mm-yyyy"});

	$('#datetimepicker1').datepicker().datepicker("setDate", new Date());
});