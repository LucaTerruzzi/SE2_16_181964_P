$(document).ready(function(){
    $.post("http://127.0.0.1:1337/getPoints",
		{
			position: "position"
		},
		function(data, status){
			//alert("Data: " + data[0].name + "\nStatus: " + status);
		});
    
    
});