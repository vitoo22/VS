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
    totalD = totalD + d;
    console.log(i, myLocations[i][0],myLocations[i+1][0], d)
  }
  document.getElementById('milesCounter').innerHTML = totalD.toFixed(0) + " km";
  console.log(totalD.toFixed(0));

  var myLocationsInJSON = JSON.stringify(myLocations);
  // console.log(myLocationsInJSON);
}

distanceCalculator();