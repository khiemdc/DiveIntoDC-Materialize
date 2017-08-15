//var for people
var selfRadio = $('#self');
var coupleRadio = $('#couple');
var familyRadio = $('#family');


//var for days
var oneday = $('#oneDay');
var threedays= $('#threeDays');
var fivedays= $('#fiveDays');

//var for busy-ness of days
var easyday = $('#easyDay');
var mediumday= $('#mediumDay');
var busyday= $('#busyDay');



//var submitbutton

var submitbutton =$('#submitButton');




var DC_locations = [
    ['The White House', 38.897668, -77.036306],
    ['The Renwick Gallery', 38.898979, -77.037950],
    ['The Washington Monument', 38.889056, -77.038087]
];

var DC_locations_busy_day = [
['Peets Coffee', 38.899346, -77.039836],
['eatsa', 38.902869, -77.037422]
];



function initMap() {
    var dcHome = {lat: 38.9072, lng: -77.0369};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: dcHome
  });

submitbutton.on('click',function(){
  if(oneday.prop('checked') && selfRadio.prop('checked') && easyday.prop('checked')) {
  for (var i=0;i<DC_locations.length;i++){
      var location = DC_locations[i];
      var marker = new google.maps.Marker({
        position: {lat: location[1], lng: location[2]},
        map: map,
      });
    }//for
  }

 else if(threedays.prop('checked') && coupleRadio.prop('checked') && mediumday.prop('checked')) {
  for (var i=0;i<DC_locations_busy_day.length;i++){
      var location = DC_locations_busy_day[i];
      var marker = new google.maps.Marker({
        position: {lat: location[1], lng: location[2]},
        map: map,
      });
    }//for
  }


});



}//init map