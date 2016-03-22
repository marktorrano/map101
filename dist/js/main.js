var map;

var mapStyle = [{
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [{"saturation": 36}, {"color": "#000000"}, {"lightness": 40}]
}, {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [{"visibility": "on"}, {"color": "#000000"}, {"lightness": 16}]
}, {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [{"visibility": "off"}]
}, {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#000000"}, {"lightness": 20}]
}, {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{"color": "#000000"}, {"lightness": 17}, {"weight": 1.2}]
}, {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [{"color": "#000000"}, {"lightness": 20}]
}, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{"color": "#000000"}, {"lightness": 21}]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#000000"}, {"lightness": 17}]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{"color": "#000000"}, {"lightness": 29}, {"weight": 0.2}]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{"color": "#000000"}, {"lightness": 18}]
}, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{"color": "#000000"}, {"lightness": 16}]
}, {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [{"color": "#000000"}, {"lightness": 19}]
}, {"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 17}]}]
function initMap() {


    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function (position) {


            var myLatLng = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: myLatLng,
                styles: mapStyle
            });


            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map
            });

            var contentString = '<div id="content">Yoobe is here</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            infowindow.open(map, marker);

            var myDestination = {
                lat: -36.842781,
                lng: 174.766951
            };

            var directionsDisplay = new google.maps.DirectionsRenderer({
                map: map
            });

            var request = {
                origin: myLatLng,
                destination: myDestination,
                travelMode: google.maps.TravelMode.DRIVING
            };

            var directionsService = new google.maps.DirectionsService();

            directionsService.route(request, function (result, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(result);
                }
            });

        });

    }

}