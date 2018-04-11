const initialize = function(){

    const container = document.getElementById('main-map');
    const center = {lat: 55.859, lng: -4.258};
    const zoom = 14;
//
//
    const map = new MapWrapper(container, center, zoom);
    map.addMarker(center);
//


  // const glasgowCentral = {lat: 55.859, lng: -4.258};

  // const map = new google.maps.Map(document.getElementById('main-map'), {
  //   center: glasgowCentral,
  //   zoom: 14
  // });

  const contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Glasgow Central Station</h1>'+
      '<div id="bodyContent">'+
      '<p>You can get <b>trains</b> here - that <em>go places!</em> </p>' +
      '<p>Further reading: <a href="https://en.wikipedia.org/wiki/Glasgow_Central_station">'+
      'https://en.wikipedia.org/wiki/Glasgow_Central_station</a> '+
      '(last visited April 10, 2018).</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  // var marker = new google.maps.Marker({
  //   position: glasgowCentral,
  //   map: map,
  //   title: 'Glasgow Central'
  // });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  //     const bounceButton = document.getElementById('button-bounce-markers');
  //     bounceButton.addEventListener('click', map.bounceMarkers.bind(map));
  //     map.addClickEvent();
  //

}

window.addEventListener('DOMContentLoaded', initialize);
