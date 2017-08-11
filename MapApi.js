function MapApi(mapStyle, mapElem, markerPng, coordinates) {
  var self = this;

  if (!mapElem) {
    return;
  }

  this.map = new google.maps.Map(mapElem, {
    zoom: 14,
    styles: mapStyle,
    scrollwheel: false,
    center: {lat: coordinates.lat, lng: coordinates.lng}
  });

  this.geocoder = new google.maps.Geocoder;
  this.infowindow = new google.maps.InfoWindow;
  this.marker = new google.maps.Marker({
    position: {lat: coordinates.lat, lng: coordinates.lng},
    map: self.map,
    icon: markerPng
  });
  this.infowindow.setContent('Title');
  this.infowindow.open(this.map, this.marker);

  function init() {

  }

  init();
}

MapApi.prototype.addAddressBtnEvent = function (button, address, name) {
  var self = this;
  var btns = document.getElementsByClassName('map-direction-button');

  button.addEventListener('click', function () {
    self.geocodeAddress(self.geocoder, self.map, self.marker, self.infowindow, address, name);
    window.scrollTo(0, 0);
    for (var i = 0; i < btns.length; i++) {
      var btn = btns[i];
      btn.classList.remove('active');
      btn.innerHTML = 'Show on map';
    }
    button.classList.add('active');
    button.innerHTML = 'Selected';
  });
}

MapApi.prototype.geocodeAddress = function (geocoder, resultsMap, marker, infowindow, address, name) {
  var self = this;
  geocoder.geocode({'address': address}, function (results, status) {
    if (status === 'OK') {
      var lat = results[0].geometry.location.lat();
      var lng = results[0].geometry.location.lng();
      resultsMap.setCenter(results[0].geometry.location);
      marker.setPosition(results[0].geometry.location);
      infowindow.setContent(name);
      infowindow.open(resultsMap, marker);
    } else {
      console.log('Geocode was not successful for the following reason: ' + status);
    }
  });
}

MapApi.prototype.geocodeLatLng = function (geocoder, map, marker, infowindow, lat, lng, name) {
  var latlng = {lat: lat, lng: lng};
  geocoder.geocode({'location': latlng}, function (results, status) {
    if (status === 'OK') {
      if (results[1]) {
        map.setZoom(11);
        resultsMap.setCenter(results[0].geometry.location);
        marker.setPosition(results[0].geometry.location);
        infowindow.setContent(name);
        infowindow.open(map, marker);
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
}