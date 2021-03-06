// Getting the rads from degrees
function toRad(x) {
   return x * Math.PI / 180;
}

// Calculating the distances

function distanceCalculator() {
  var totalD = 0;
  for (var i = 0; i < myLocations.length-1; i++) {

    // HAVERSINE formula
    var R = 6371; // Earth Radius in km
    var φ1 = toRad(myLocations[i][2]);
    var φ2 = toRad(myLocations[i+1][2]);
    var Δφ = toRad(myLocations[i+1][2]-myLocations[i][2]);
    var Δλ = toRad(myLocations[i+1][3]-myLocations[i][3]);

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = R * c;
    totalD = (totalD + d);
    console.log(i, myLocations[i][0],myLocations[i+1][0], d)
  }
  // Creating a totalD variable with no decimal digits and locally formatted
  totalDToDisplay = parseInt(totalD).toLocaleString()

  // Setting the innerHTML of the milesCounter div
  document.getElementById('milesCounter').innerHTML = totalDToDisplay + " km";
  console.log(totalD);

  var myLocationsInJSON = JSON.stringify(myLocations);
  // console.log(myLocationsInJSON);
}

distanceCalculator();

function locationNumber(){
  var locationArray = ["Milan"];
  var locationCount = 0;
  for (i=0; i < myLocations.length; i++) {
    if (locationArray.indexOf(myLocations[i][0]) == -1) {
      locationArray.push(myLocations[i][0]);
      locationCount += 1;
    }
  }
  document.getElementById('locationNumber').innerHTML = "Total locations: " + locationCount;
}

locationNumber();