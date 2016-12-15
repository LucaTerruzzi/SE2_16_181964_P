//List of all points of interest
var points = [
    {ID: "1", type: "city", name: "Duomo", lat: "0.0", long: "0.0"},
    {ID: "2", type: "uni", name: "Dip. Economia", lat: "0.0", long: "0.0"},
    {ID: "3", type: "city", name: "Castello Buonconsiglio", lat: "0.0", long: "0.0"},
    {ID: "4", type: "uni", name: "Dip. Lettere", lat: "0.0", long: "0.0"},
    {ID: "5", type: "uni", name: "Dip. Sociologia", lat: "0.0", long: "0.0"},
    {ID: "6", type: "city", name: "SomeOther", lat: "0.0", long: "0.0"}  
];

/**
 * @brief Return the list of nearby POI.
 * @param [in] actual position.
 * @return List of nearby POI.
 */
function getPoints(position){
    //TO DO-> select only points around current position (certain radius)
    return points;
}

/**
 * @brief Return the list of nearby city POI.
 * @param [in] actual position.
 * @return List of nearby city POI.
 */
function getCityPoints(position){
    //TO DO-> select only points around current position (certain radius)
    var res = [];
    for(var i in points){
        if(points[i].type == "city"){
            res.push(points[i]);
        }
    }
    return res;
}


/**
 * @brief Return the list of nearby university POI.
 * @param [in] actual position.
 * @return List of nearby university POI.
 */
function getUniPoints(position){
    //TO DO-> select only points around current position (certain radius)
    var res = [];
    for(var i in points){
        if(points[i].type == "uni"){
            res.push(points[i]);
        }
    }
    return res;
}

exports.getPoints = getPoints;
exports.getCityPoints = getCityPoints;
exports.getUniPoints = getUniPoints;