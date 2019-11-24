$(document).ready(function() {
  if (document.cookie.indexOf('visited=true') == -1){
    // load the overlay
    $('#orderModal').modal({show:true});    
    var day = 1000*60*60*24*1;
    var expires = new Date((new Date()).valueOf() + day);
    document.cookie = "visited=true;expires=" + expires.toUTCString();
  }
}); 

