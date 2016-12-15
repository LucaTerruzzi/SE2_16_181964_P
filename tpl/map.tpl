<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
        <link rel="stylesheet" href="/css/map.css">
        <title>UNICittà</title>
    </head>
    <body>
        <div class="w3-row" style="height:100%">
            <div class="w3-content w3-row" style="max-width:600px; max-height:750px; height:100%">
                
                <div class="w3-col w3-left w3-hide-small w3-hide-medium w3-display-container" style="width:100px; height:90%">
                    <a href="/" class="w3-btn-floating-large w3-display-middle">&#10094;</a>
                </div>
                <div class="w3-col w3-right w3-hide-small w3-hide-medium w3-display-container" style="width:100px; height:90%">
                    <a class="w3-btn-floating-large w3-display-middle w3-disabled">&#10095;</a>
                </div>
                
                <div class="w3-rest" style="height:100%">
                    <div class="w3-border" style="height:95%">
                        <div id="map" class="w3-row w3-border-bottom w3-padding-large w3-green" style="height:60%">
                            MAP OF POINTS OF INTEREST
                        </div>
                        <div class="w3-container w3-padding-large">
                            <ul id="poi_list" class="w3-ul w3-large w3-hoverable">
                            </ul>                        
                        </div>   
                        <div class="w3-display-container" style="height:10%">
                            <button id="more_btn" class="w3-btn w3-round-xlarge w3-border w3-white w3-display-middle">&#183;&#183;&#183;</button>
                        </div>
                    </div>
                    <div class="w3-btn-bar w3-border w3-hide-large" style="height:5%">
                        <a href="/" accesskey=""class="w3-btn w3-border-right" style="width:50%">&#10094;</a>
                        <a class="w3-btn w3-disabled" style="width:50%">&#10095;</a>
                    </div>
                    
                </div>

            </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="/scripts/map.js"></script>
    </body>
</html>