$(document).ready(function(){
    var list;
    //get all nearby POI
    $.post("/getUniPoints",
		{
			position: "position"
		},
		function(data, status){
			list = data;
            //Populate list with first 3 POI
            for(var i in data){
                if(i >= 3){
                    break;
                }
                $("#poi_list").append('<li class="w3-padding-large">' + data[i].name + '</li>');
            }
		});
        
        //if click on more button hide map and show all POI
        $("#more_btn").click(function(){
            $("#more_btn").hide();
            $("#map").slideUp();
            $("#poi_list").empty();
            for(var i in list){
                $("#poi_list").append('<li class="w3-padding-large">' + list[i].name + '</li>');
            }
            $()
            
        });

});