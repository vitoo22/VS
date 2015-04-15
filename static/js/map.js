// JAVASCRIPT Responsive Google Map

// MYLOCATION define
var myActualLocationLat = myLocations[0][2];
var myActualLocationLng =myLocations[0][3];
var myActualLocation = new google.maps.LatLng(myActualLocationLat,myActualLocationLng)

// CENTER, define the center
// Mali, Africa for now as this would result in an almost perfectly centered map

var centerLat = 16;
var centerLng = 0;

// var centerLat = myLocations[0][2];
// var centerLng = myLocations[0][3];

var centerLatLng = new google.maps.LatLng(centerLat,centerLng)

// MAP function

function mainMap() {
	var map; //<-- This is now available to both event listeners and the initialize() function

    function initialize() {
    	
		// HTML5 GEOLOCATION to go here
		

    	var mapOptions = {
	        center: centerLatLng,
	        zoom: 2,
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
	        panControl: true,
	        panControlOptions: {
	        	position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        scrollwheel: false,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        scaleControl: true,
        streetViewControl: false,
        overviewMapControl: false,
        mapTypeControl: false,
        };

        map = new google.maps.Map(document.getElementById("jsMap"),
                  mapOptions);

        

        // Markers:
        function setMarkers(map, myLocations) {
          // Actual location:
          var hereIAm = new google.maps.Marker({
            position: myActualLocation,
            map: map,
            animation: google.maps.Animation.BOUNCE,
          })
          locationsList = [];
          // Past locations:
          for (var i = 0; i < myLocations.length; i++) {
            var location = myLocations[i];
            var index = locationsList.indexOf(location[0]);
            if (index > -1) {
              // Checking for not repeating of the location
              locationsList.splice(index, 1);
            } // Markers, only showing once per visited location.
              // last location only has a bouncing marker (no fixed marker)
              else if (myLocations[i] != myLocations[0]) { 
                var locationLat = location[2];
                var locationLng = location[3];
            }
          locationsList.push(location[0]);


            var markerLatLng = new google.maps.LatLng(locationLat, locationLng);
            var marker = new google.maps.Marker({
                position: markerLatLng,
                map: map,
                animation: google.maps.Animation.DROP,
                // title: location[0],
                // zIndex: location[4]
                });
            }
        }

        setMarkers(map, myLocations);

      }

      google.maps.event.addDomListener(window, 'load', initialize);
      google.maps.event.addDomListener(window, "resize", function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center); 
      });
}


// REMOVE static map && prepend jsMap div
function removeStaticMap() {
	$('#map').prepend('<div id="jsMap"></div>');
	$('#staticMap').remove();
}
