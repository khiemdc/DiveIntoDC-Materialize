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
var topday= $('#topDay');
var busyday= $('#busyDay');

//var submitbutton

var submitbutton =$('#submitButton');

var self_oneday_easy = [
  ['Wicked Waffle', 'ChIJq6qqqj62t4kRJJyZWqJbR7Q'], //9:30am, 7 min walk to white house
  ['The White House', 'ChIJfTNSjsC3t4kRMNHxcpIHDKk'], //10am, 7 minute walk to lincoln memorial
  ['Garden Cafe', 'ChIJUY0hiy-4t4kROYuwqDjGGcQ'], //11:45am, 20 minute wal back to war memorial
  ['Martin Luther King, Jr. National Memorial', 'ChIJUQb_Dwi3t4kRHsEaPW7Z2tw'], //1pm, 5 minute walk franklin
  ['Franklin Delano Roosevelt Memorial', 'ChIJB8IWwJq3t4kRJTmoKAymNRo',], //1:20pm, 5 minute walk to george mason
  ['Jefferson Memorial', 'ChIJkcVnxnS3t4kRW0dXCZKRgvc'], //2:25pm 4 minute wal
  ['Washington Monument', 'ChIJfy4MvqG3t4kRuL_QjoJGc-k'], //2:45pm 6 minute walk
  ['Barrel', 'ChIJeZk6bDK4t4kRHzg_zs4b93Q']
];

var self_oneday_top = [
  ['Wicked Waffle', 'ChIJq6qqqj62t4kRJJyZWqJbR7Q'], //9:30am, 7 min walk to white house
  ['The White House', 'ChIJfTNSjsC3t4kRMNHxcpIHDKk'], //10am, 7 minute walk to lincoln memorial
  ['Lincoln Memorial', 'ChIJh2KQ4HG3t4kRti5cycnRSRA'], //11am, 15 minute walk to Garden cafe
  ['Garden Cafe', 'ChIJUY0hiy-4t4kROYuwqDjGGcQ'], //11:45am, 20 minute wal back to war memorial
  ['DC War Memorial', 'ChIJ2dxL66e3t4kREXcUUnDRi6o'], //12:45pm, 4 minute walk to martin
  ['Martin Luther King, Jr. National Memorial', 'ChIJUQb_Dwi3t4kRHsEaPW7Z2tw'], //1pm, 5 minute walk franklin
  ['Franklin Delano Roosevelt Memorial', 'ChIJ2dxL66e3t4kREXcUUnDRi6o'], //1:20pm, 5 minute walk to george mason
  ['Jefferson Memorial', 'ChIJkcVnxnS3t4kRW0dXCZKRgvc'], //2:25pm 4 minute wal
  ['Washington Monument', 'ChIJfy4MvqG3t4kRuL_QjoJGc-k'], //2:45pm 6 minute walk
  ['The Capitol', 'ChIJF8-iISm4t4kRxPgMwfejggQ'], // 3:45pm 15 minute walk or 4 minute drive to Barrel
  ['Barrel', 'ChIJeZk6bDK4t4kRHzg_zs4b93Q']
];

var self_oneday_busy = [
  ['Wicked Waffle', 'ChIJq6qqqj62t4kRJJyZWqJbR7Q'], //9:30am, 7 min walk to white house
  ['The White House', 'ChIJfTNSjsC3t4kRMNHxcpIHDKk'], //10am, 7 minute walk to lincoln memorial
  ['Lincoln Memorial', 'ChIJh2KQ4HG3t4kRti5cycnRSRA'], //11am, 15 minute walk to Garden cafe
  ['Garden Cafe', 'ChIJUY0hiy-4t4kROYuwqDjGGcQ'], //11:45am, 20 minute wal back to war memorial
  ['DC War Memorial', 'ChIJ2dxL66e3t4kREXcUUnDRi6o'], //12:45pm, 4 minute walk to martin
  ['Martin Luther King, Jr. National Memorial', 'ChIJUQb_Dwi3t4kRHsEaPW7Z2tw'], //1pm, 5 minute walk franklin
  ['Franklin Delano Roosevelt Memorial', 'ChIJ2dxL66e3t4kREXcUUnDRi6o'], //1:20pm, 5 minute walk to george mason
  ['George Mason Memorial', 'ChIJKb_gnw63t4kRqOLf6ca1oE4'], //2pm 6 minute walk
  ['Jefferson Memorial', 'ChIJkcVnxnS3t4kRW0dXCZKRgvc'], //2:25pm 4 minute wal
  ['Washington Monument', 'ChIJfy4MvqG3t4kRuL_QjoJGc-k'], //2:45pm 6 minute walk
  ['National World War', 'ChIJfcy23Ka3t4kR44_UdjidLNI'], //3:15pm 9 minute drive to the capitol
  ['The Capitol', 'ChIJF8-iISm4t4kRxPgMwfejggQ'], // 3:45pm 15 minute walk or 4 minute drive to Barrel
  ['Barrel', 'ChIJeZk6bDK4t4kRHzg_zs4b93Q']
 ];

var couple_oneday_easy = [
    ['Wicked Waffle', 'ChIJq6qqqj62t4kRJJyZWqJbR7Q'], //9:30am, 7 min walk to white house
  ['The White House', 'ChIJfTNSjsC3t4kRMNHxcpIHDKk'], //10am, 7 minute walk to lincoln memorial
  ['Garden Cafe', 'ChIJUY0hiy-4t4kROYuwqDjGGcQ'], //11:45am, 20 minute wal back to war memorial
  ['Martin Luther King, Jr. National Memorial', 'ChIJUQb_Dwi3t4kRHsEaPW7Z2tw'], //1pm, 5 minute walk franklin
  ['Franklin Delano Roosevelt Memorial', 'ChIJ2dxL66e3t4kREXcUUnDRi6o'], //1:20pm, 5 minute walk to george mason
  ['Jefferson Memorial', 'ChIJkcVnxnS3t4kRW0dXCZKRgvc'], //2:25pm 4 minute wal
  ['Washington Monument', 'ChIJfy4MvqG3t4kRuL_QjoJGc-k'], //2:45pm 6 minute walk
  ['Barrel', 'ChIJeZk6bDK4t4kRHzg_zs4b93Q']
];

var couple_oneday_top = [
  ['Wicked Waffle', 'ChIJq6qqqj62t4kRJJyZWqJbR7Q'], //9:30am, 7 min walk to white house
  ['The White House', 'ChIJfTNSjsC3t4kRMNHxcpIHDKk'], //10am, 7 minute walk to lincoln memorial
  ['Lincoln Memorial', 'ChIJh2KQ4HG3t4kRti5cycnRSRA'], //11am, 15 minute walk to Garden cafe
  ['Garden Cafe', 'ChIJUY0hiy-4t4kROYuwqDjGGcQ'], //11:45am, 20 minute wal back to war memorial
  ['DC War Memorial', 'ChIJ2dxL66e3t4kREXcUUnDRi6o'], //12:45pm, 4 minute walk to martin
  ['Martin Luther King, Jr. National Memorial', 'ChIJUQb_Dwi3t4kRHsEaPW7Z2tw'], //1pm, 5 minute walk franklin
  ['Franklin Delano Roosevelt Memorial', 'ChIJ2dxL66e3t4kREXcUUnDRi6o'], //1:20pm, 5 minute walk to george mason
  ['Jefferson Memorial', 'ChIJkcVnxnS3t4kRW0dXCZKRgvc'], //2:25pm 4 minute wal
  ['Washington Monument', 'ChIJfy4MvqG3t4kRuL_QjoJGc-k'], //2:45pm 6 minute walk
  ['National World War', 'ChIJfcy23Ka3t4kR44_UdjidLNI'], //3:15pm 9 minute drive to the capitol
  ['The Capitol', 'ChIJF8-iISm4t4kRxPgMwfejggQ'], // 3:45pm 15 minute walk or 4 minute drive to Barrel
  ['Barrel', 'ChIJeZk6bDK4t4kRHzg_zs4b93Q'] 
 ];
 var couple_oneday_busy = [
  ['Wicked Waffle', 'ChIJq6qqqj62t4kRJJyZWqJbR7Q'], //9:30am, 7 min walk to white house
  ['The White House', 'ChIJfTNSjsC3t4kRMNHxcpIHDKk'], //10am, 7 minute walk to lincoln memorial
  ['Lincoln Memorial', 'ChIJh2KQ4HG3t4kRti5cycnRSRA'], //11am, 15 minute walk to Garden cafe
  ['Garden Cafe', 'ChIJUY0hiy-4t4kROYuwqDjGGcQ'], //11:45am, 20 minute wal back to war memorial
  ['DC War Memorial', 'ChIJ2dxL66e3t4kREXcUUnDRi6o'], //12:45pm, 4 minute walk to martin
  ['Martin Luther King, Jr. National Memorial', 'ChIJUQb_Dwi3t4kRHsEaPW7Z2tw'], //1pm, 5 minute walk franklin
  ['Franklin Delano Roosevelt Memorial', 'ChIJ2dxL66e3t4kREXcUUnDRi6o'], //1:20pm, 5 minute walk to george mason
  ['George Mason Memorial', 'ChIJKb_gnw63t4kRqOLf6ca1oE4'], //2pm 6 minute walk
  ['Jefferson Memorial', 'ChIJkcVnxnS3t4kRW0dXCZKRgvc'], //2:25pm 4 minute wal
  ['Washington Monument', 'ChIJfy4MvqG3t4kRuL_QjoJGc-k'], //2:45pm 6 minute walk
  ['The Capitol', 'ChIJF8-iISm4t4kRxPgMwfejggQ'], // 3:45pm 15 minute walk or 4 minute drive to Barrel
  ['Barrel', 'ChIJeZk6bDK4t4kRHzg_zs4b93Q']
 ];
 
var family_oneday_easy = [
  ['Wicked Waffle', 'ChIJq6qqqj62t4kRJJyZWqJbR7Q'], //9:30am, 7 min walk to white house
  ['The White House', 'ChIJfTNSjsC3t4kRMNHxcpIHDKk'], //10am, 7 minute walk to lincoln memorial
  ['Garden Cafe', 'ChIJUY0hiy-4t4kROYuwqDjGGcQ'], //11:45am, 20 minute wal back to war memorial
  ['Martin Luther King, Jr. National Memorial', 'ChIJUQb_Dwi3t4kRHsEaPW7Z2tw'], //1pm, 5 minute walk franklin
  ['Franklin Delano Roosevelt Memorial', 'ChIJ2dxL66e3t4kREXcUUnDRi6o'], //1:20pm, 5 minute walk to george mason
  ['Jefferson Memorial', 'ChIJkcVnxnS3t4kRW0dXCZKRgvc'], //2:25pm 4 minute wal
  ['Washington Monument', 'ChIJfy4MvqG3t4kRuL_QjoJGc-k'], //2:45pm 6 minute walk
  ['Barrel', 'ChIJeZk6bDK4t4kRHzg_zs4b93Q']
];

var family_oneday_top = [
  ['Wicked Waffle', 'ChIJq6qqqj62t4kRJJyZWqJbR7Q'], //9:30am, 7 min walk to white house
  ['The White House', 'ChIJfTNSjsC3t4kRMNHxcpIHDKk'], //10am, 7 minute walk to lincoln memorial
  ['Lincoln Memorial', 'ChIJh2KQ4HG3t4kRti5cycnRSRA'], //11am, 15 minute walk to Garden cafe
  ['Garden Cafe', 'ChIJUY0hiy-4t4kROYuwqDjGGcQ'], //11:45am, 20 minute wal back to war memorial
  ['DC War Memorial', 'ChIJ2dxL66e3t4kREXcUUnDRi6o'], //12:45pm, 4 minute walk to martin
  ['Martin Luther King, Jr. National Memorial', 'ChIJUQb_Dwi3t4kRHsEaPW7Z2tw'], //1pm, 5 minute walk franklin
  ['Franklin Delano Roosevelt Memorial', 'ChIJ2dxL66e3t4kREXcUUnDRi6o'], //1:20pm, 5 minute walk to george mason
  ['Jefferson Memorial', 'ChIJkcVnxnS3t4kRW0dXCZKRgvc'], //2:25pm 4 minute wal
  ['Washington Monument', 'ChIJfy4MvqG3t4kRuL_QjoJGc-k'], //2:45pm 6 minute walk
  ['The Capitol', 'ChIJF8-iISm4t4kRxPgMwfejggQ'], // 3:45pm 15 minute walk or 4 minute drive to Barrel
  ['Barrel', 'ChIJeZk6bDK4t4kRHzg_zs4b93Q']
 ];
 var family_oneday_busy = [
  ['Wicked Waffle', 'ChIJq6qqqj62t4kRJJyZWqJbR7Q'], //9:30am, 7 min walk to white house
  ['The White House', 'ChIJfTNSjsC3t4kRMNHxcpIHDKk'], //10am, 7 minute walk to lincoln memorial
  ['Lincoln Memorial', 'ChIJh2KQ4HG3t4kRti5cycnRSRA'], //11am, 15 minute walk to Garden cafe
  ['Garden Cafe', 'ChIJUY0hiy-4t4kROYuwqDjGGcQ'], //11:45am, 20 minute wal back to war memorial
  ['DC War Memorial', 'ChIJ2dxL66e3t4kREXcUUnDRi6o'], //12:45pm, 4 minute walk to martin
  ['Martin Luther King, Jr. National Memorial', 'ChIJUQb_Dwi3t4kRHsEaPW7Z2tw'], //1pm, 5 minute walk franklin
  ['Franklin Delano Roosevelt Memorial', 'ChIJ2dxL66e3t4kREXcUUnDRi6o'], //1:20pm, 5 minute walk to george mason
  ['George Mason Memorial', 'ChIJKb_gnw63t4kRqOLf6ca1oE4'], //2pm 6 minute walk
  ['Jefferson Memorial', 'ChIJkcVnxnS3t4kRW0dXCZKRgvc'], //2:25pm 4 minute wal
  ['Washington Monument', 'ChIJfy4MvqG3t4kRuL_QjoJGc-k'], //2:45pm 6 minute walk
  ['National World War', 'ChIJfcy23Ka3t4kR44_UdjidLNI'], //3:15pm 9 minute drive to the capitol
  ['The Capitol', 'ChIJF8-iISm4t4kRxPgMwfejggQ'], // 3:45pm 15 minute walk or 4 minute drive to Barrel
  ['Barrel', 'ChIJeZk6bDK4t4kRHzg_zs4b93Q']
 ];

// ChIJGVtI4by3t4kRr51d_Qm_x58
function initMap() {
    var dcHome = {lat: 38.9072, lng: -77.0369};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: dcHome
  });
  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 15,cityid: '4140963',appid: 'ef617c8e216b439dbbb1155eb77c2db1',units: 'imperial',containerid: 'openweathermap-widget-15',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator-2.0.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();


submitbutton.on('click',function(){

  //Self One Day Easy Day
  if(selfRadio.prop('checked') && oneday.prop('checked') && easyday.prop('checked')) {

   $("ul.morningList").append("<li> <b>9:30 am</b> Start your day off with a hearty breakfast at Wicked Waffle! </li>");
   $("ul.morningList").append("<li> <b>10:00 am</b> Then walk on over to the one and only White House! </li>");
    $("ul.afternoonList").append("<li> <b>11:45 am</b> You must be tired from walking all around the White House, time to get some lunch at the Garden Cafe! </li>");
    $("ul.afternoonList").append("<li> <b>1:00 pm</b> Lets go to Martin Luther King Memorial </li>");
    $("ul.afternoonList").append("<li> <b>1:30 pm</b> And a short walk to Franklin Delano Roosevelt Memorial </li>");
   $("ul.eveningList").append("<li><b>2:30 pm</b> Jefferson Memorial, were coming on over!</li>");
   $("ul.eveningList").append("<li><b>4:30 pm </b> Lets finish off our day of sightseeing at the Washington Monument </li>");
   $("ul.eveningList").append("<li><b>6:00 pm</b> & wind down for some dinner at Barrel!</li>");

  for (var i=0;i<self_oneday_easy.length;i++){
      var location = self_oneday_easy[i];
      console.log(location)
      service.getDetails({
          placeId: location[1]
        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + place.formatted_address +
                '<br><a href="' +
                place.website + '">Website</a><br></div>');
              infowindow.open(map, this);
            });
          }
        });
    }//for

    resetForm();
  }
// Self One day Top Attractions
 else if(selfRadio.prop('checked') && oneday.prop('checked') && topday.prop('checked')) {
  $("ul.morningList").append("<li> <b>9:30 am</b> Start your day off with a hearty breakfast at Wicked Waffle! </li>");
   $("ul.morningList").append("<li> <b>10:00 am</b> Then walk on over to the one and only White House! </li>");
   $("ul.morningList").append("<li> <b>11:00 am</b> Lets take a 7 min walk to the Lincoln Memorial </li>");
    $("ul.afternoonList").append("<li> <b>11:45 am</b> You must be tired from walking all around the White House, time to get some lunch at the Garden Cafe! </li>");
    $("ul.afternoonList").append("<li> <b>12:00 pm</b>  Ready for a walk to the war memorial?  </li>")
    $("ul.afternoonList").append("<li> <b>1:00 pm</b> now lets go to Martin Luther King Memorial </li>");
    $("ul.afternoonList").append("<li> <b>1:20 pm</b> And a short walk to Franklin Delano Roosevelt Memorial </li>");
   $("ul.eveningList").append("<li><b>2:30 pm</b> Jefferson Memorial, were coming on over!</li>");
   $("ul.eveningList").append("<li><b>3:30 pm</b> You can't come to DC and not visit The Capitol!</li>");
   $("ul.eveningList").append("<li><b>4:30 pm </b> Lets finish off our day of sightseeing at the Washington Monument </li>");
   $("ul.eveningList").append("<li><b>6:00 pm</b> & wind down for some dinner at Barrel!</li>");
  for (var i=0;i<self_oneday_top.length;i++){
      var location = self_oneday_top[i];
      console.log(location)
      service.getDetails({
          placeId: location[1]
        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + place.formatted_address +
                '<br><a href="' +
                place.website + '">Website</a><br></div>');
              infowindow.open(map, this);
            });
          }
        });
    }//for
    resetForm();
  }
  // Self One day Busy Day
 else if(selfRadio.prop('checked') && oneday.prop('checked') && busyday.prop('checked')) {
   $("ul.morningList").append("<li> <b>9:30 am</b> Start your day off with a hearty breakfast at Wicked Waffle! </li>");
   $("ul.morningList").append("<li> <b>10:00 am</b> Then walk on over to the one and only White House! </li>");
   $("ul.morningList").append("<li> <b>11:00 am</b> Lets take a 7 min walk to the Lincoln Memorial </li>");

    $("ul.afternoonList").append("<li> <b>11:45 am</b> You must be tired from walking all around the White House, time to get some lunch at the Garden Cafe! </li>");
    $("ul.afternoonList").append("<li> <b>12:00 pm</b>  Ready for a walk to the war memorial?  </li>")
    $("ul.afternoonList").append("<li> <b>1:00 pm</b> Now lets go to Martin Luther King Memorial </li>");
    $("ul.afternoonList").append("<li> <b>1:20 pm</b> And a short walk to Franklin Delano Roosevelt Memorial </li>");
    $("ul.afternoonList").append("<li> <b>1:50 pm</b> Take a picture with George Mason, its only a 6 minute walk! </li>");

   $("ul.eveningList").append("<li><b>2:30 pm</b> Jefferson Memorial, were coming on over!</li>");
   $("ul.eveningList").append("<li><b>3:30 pm </b> Lets finish off our day of sightseeing at the Washington Monument </li>");
     $("ul.eveningList").append("<li><b>4:30 pm </b> Take a picture with your state and relax by the fountains of the National World War </li>");
   $("ul.eveningList").append("<li><b>3:30 pm</b> You can't come to DC and not visit The Capitol!</li>");
   $("ul.eveningList").append("<li><b>6:00 pm</b> & wind down for some dinner at Barrel!</li>");
  for (var i=0;i<self_oneday_busy.length;i++){
      var location = self_oneday_busy[i];
      console.log(location)
      service.getDetails({
          placeId: location[1]
        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + place.formatted_address +
                '<br><a href="' +
                place.website + '">Website</a><br></div>');
              infowindow.open(map, this);
            });
          }
        });
    }//for
    resetForm();
  }
  // Couple One Day Easy Day
 else if(coupleRadio.prop('checked') && oneday.prop('checked') && easyday.prop('checked')) {
  $("ul.morningList").append("<li> <b>10:00 am</b> Start your day off with breakfast at Wicked Waffle!</li>", "<li>7 minute walk</li>");
   $("ul.morningList").append("<li> <b>11:00 am</b> Visit the White House! </li>");
  $("ul.morningList").append("<li> <b>11:45 am</b> Visit the Martin Luther King, Jr. National Memorial</li>");
   $("ul.afternoonList").append("<li> <b> 12:15 pm</b> Eat lunch at Garden Cafe</li>");
   $("ul.afternoonList").append("<li> <b>2:00 pm </b> After lunch, visit the Franklin Delano Roosevelt Memorial</li>");
   $("ul.afternoonList").append("<li> <b>2:45 pm</b>Visit the Jefferson Memorial</li>");
   $("ul.afternoonList").append("<li> <b>3:30 pm</b>Visit the Washington Monument</li>");
   $("ul.eveningList").append("<li> <b>5:00 pm </b> Wind down your day by eating at Barrel </li>");
  for (var i=0;i<couple_oneday_easy.length;i++){
      var location = couple_oneday_easy[i];
      console.log(location)
      service.getDetails({
          placeId: location[1]
        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + place.formatted_address +
                '<br><a href="' +
                place.website + '">Website</a><br></div>');
              infowindow.open(map, this);
            });
          }
        });
    }//for
    resetForm();
  }

  // Couple One Day Top Day
   else if(coupleRadio.prop('checked') && oneday.prop('checked') && topday.prop('checked')) {
    $("ul.morningList").append("<li> <b>9:30 am</b> Start your day off with breakfast at Wicked Waffle!</li>", "<li>7 minute walk</li>");
    $("ul.morningList").append("<li> <b>10:30 am</b> Visit the White House! </li>");
    $("ul.morningList").append("<li> <b>11:30 am</b> Visit the Lincoln Memorial </li>");
   $("ul.afternoonList").append("<li> <b> 12:00 pm</b> Eat lunch at Garden Cafe</li>");
   $("ul.afternoonList").append("<li> <b>1:15 pm</b> Visit the DC War Memorial</li>");
   $("ul.morningList").append("<li> <b>2:00 pm</b> Visit the Martin Luther King, Jr. National Memorial</li>");
   $("ul.afternoonList").append("<li> <b>2:30 pm </b> Visit the Franklin Delano Roosevelt Memorial</li>");
   $("ul.afternoonList").append("<li> <b>2:45 pm</b> Visit the Jefferson Memorial</li>");
   $("ul.afternoonList").append("<li> <b>3:30 pm</b> Visit the Washington Monument</li>");
   $("ul.afternoonList").append("<li> <b>4:00 pm</b> Visit the National World War</li>");
   $("ul.afternoonList").append("<li> <b>4:30 pm</b> Visit The Capitol</li>");
   $("ul.eveningList").append("<li> <b>5:45 pm </b> Wind down your day by eating at Barrel </li>");
  for (var i=0;i<couple_oneday_top.length;i++){
      var location = couple_oneday_top[i];
      console.log(location)
      service.getDetails({
          placeId: location[1]
        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + place.formatted_address +
                '<br><a href="' +
                place.website + '">Website</a><br></div>');
              infowindow.open(map, this);
            });
          }
        });
    }//for
    resetForm();
  }
  // Couple One Day Busy Day
   else if(coupleRadio.prop('checked') && oneday.prop('checked') && busyday.prop('checked')) {
   $("ul.morningList").append("<li> <b>9:30 am</b> Start your day off with breakfast at Wicked Waffle!</li>", "<li>7 minute walk</li>");
   $("ul.morningList").append("<li> <b>10:30 am</b> Visit the White House! </li>");
   $("ul.morningList").append("<li> <b>11:30 am</b> Visit the Lincoln Memorial </li>");
   $("ul.afternoonList").append("<li> <b> 12:00 pm</b> Eat lunch at Garden Cafe</li>");
   $("ul.afternoonList").append("<li> <b>1:15 pm</b> Visit the DC War Memorial</li>");
   $("ul.morningList").append("<li> <b>2:00 pm</b> Visit the Martin Luther King, Jr. National Memorial</li>");
   $("ul.afternoonList").append("<li> <b>2:30 pm </b> Visit the Franklin Delano Roosevelt Memorial</li>");
   $("ul.afternoonList").append("<li> <b>2:45 pm</b> Visit the Jefferson Memorial</li>");
   $("ul.afternoonList").append("<li> <b>3:30 pm</b> Visit the Washington Monument</li>");
   $("ul.afternoonList").append("<li> <b>4:00 pm</b> Visit the National World War</li>");
   $("ul.afternoonList").append("<li> <b>4:30 pm</b> Visit The Capitol</li>");
   $("ul.eveningList").append("<li> <b>5:45 pm </b> Wind down your day by eating at Barrel </li>");
  for (var i=0;i<couple_oneday_busy.length;i++){
      var location = couple_oneday_busy[i];
      console.log(location)
      service.getDetails({
          placeId: location[1]
        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + place.formatted_address +
                '<br><a href="' +
                place.website + '">Website</a><br></div>');
              infowindow.open(map, this);
            });
          }
        });
    }//for
    resetForm();
  }
  //Family One Day Easy Day
else if(familyRadio.prop('checked') && oneday.prop('checked') && easyday.prop('checked')) {
  $("ul.morningList").append("<li> <b>9:30 am</b> Start your day off with a hearty breakfast at Wicked Waffle! </li>");
   $("ul.morningList").append("<li> <b>10:00 am</b> Then walk on over to the one and only White House! </li>");

    $("ul.afternoonList").append("<li> <b>11:45 am</b> You must be tired from walking all around the White House, time to get some lunch at the Garden Cafe! </li>");
    $("ul.afternoonList").append("<li> <b>1:00 pm</b> Lets go to Martin Luther King Memorial </li>");
    $("ul.afternoonList").append("<li> <b>1:30 pm</b> And a short walk to Franklin Delano Roosevelt Memorial </li>");

   $("ul.eveningList").append("<li><b>2:30 pm</b> Jefferson Memorial, were coming on over!</li>");
   $("ul.eveningList").append("<li><b>4:30 pm </b> Lets finish off our day of sightseeing at the Washington Monument </li>");
   $("ul.eveningList").append("<li><b>6:00 pm</b> & wind down for some dinner at Barrel!</li>");
  for (var i=0;i<family_oneday_easy.length;i++){
      var location = family_oneday_easy[i];
      console.log(location)
      service.getDetails({
          placeId: location[1]
        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + place.formatted_address +
                '<br><a href="' +
                place.website + '">Website</a><br></div>');
              infowindow.open(map, this);
            });
          }
        });
    }//for
    resetForm();
  }
  // Family One day Top Day
 else if(familyRadio.prop('checked') && oneday.prop('checked') && topday.prop('checked')) {
  $("ul.morningList").append("<li> <b>9:30 am</b> Start your day off with a hearty breakfast at Wicked Waffle! </li>");
   $("ul.morningList").append("<li> <b>10:00 am</b> Then walk on over to the one and only White House! </li>");
   $("ul.morningList").append("<li> <b>11:00 am</b> Lets take a 7 min walk to the Lincoln Memorial </li>");

    $("ul.afternoonList").append("<li> <b>11:45 am</b> You must be tired from walking all around the White House, time to get some lunch at the Garden Cafe! </li>");
    $("ul.afternoonList").append("<li> <b>12:00 pm</b>  Ready for a walk to the war memorial?  </li>")
    $("ul.afternoonList").append("<li> <b>1:00 pm</b> now lets go to Martin Luther King Memorial </li>");
    $("ul.afternoonList").append("<li> <b>1:20 pm</b> And a short walk to Franklin Delano Roosevelt Memorial </li>");

   $("ul.eveningList").append("<li><b>2:30 pm</b> Jefferson Memorial, were coming on over!</li>");
   $("ul.eveningList").append("<li><b>3:30 pm</b> You can't come to DC and not visit The Capitol!</li>");
   $("ul.eveningList").append("<li><b>4:30 pm </b> Lets finish off our day of sightseeing at the Washington Monument </li>");
   $("ul.eveningList").append("<li><b>6:00 pm</b> & wind down for some dinner at Barrel!</li>");
  for (var i=0;i<family_oneday_top.length;i++){
      var location = family_oneday_top[i];
      console.log(location)
      service.getDetails({
          placeId: location[1]
        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + place.formatted_address +
                '<br><a href="' +
                place.website + '">Website</a><br></div>');
              infowindow.open(map, this);
            });
          }
        });
    }//for
    resetForm();
  }
  // Family One Day Busy Day
   else if(familyRadio.prop('checked') && oneday.prop('checked') && busyday.prop('checked')) {
    $("ul.morningList").append("<li> <b>9:30 am</b> Start your day off with a hearty breakfast at Wicked Waffle! </li>");
   $("ul.morningList").append("<li> <b>10:00 am</b> Then walk on over to the one and only White House! </li>");
   $("ul.morningList").append("<li> <b>11:00 am</b> Lets take a 7 min walk to the Lincoln Memorial </li>");

    $("ul.afternoonList").append("<li> <b>11:45 am</b> You must be tired from walking all around the White House, time to get some lunch at the Garden Cafe! </li>");
    $("ul.afternoonList").append("<li> <b>12:00 pm</b>  Ready for a walk to the war memorial?  </li>")
    $("ul.afternoonList").append("<li> <b>1:00 pm</b> Now lets go to Martin Luther King Memorial </li>");
    $("ul.afternoonList").append("<li> <b>1:20 pm</b> And a short walk to Franklin Delano Roosevelt Memorial </li>");
    $("ul.afternoonList").append("<li> <b>1:50 pm</b> Take a picture with George Mason, its only a 6 minute walk! </li>");

   $("ul.eveningList").append("<li><b>2:30 pm</b> Jefferson Memorial, were coming on over!</li>");
   $("ul.eveningList").append("<li><b>3:30 pm </b> Lets finish off our day of sightseeing at the Washington Monument </li>");
   $("ul.eveningList").append("<li><b>4:30 pm </b> Take a picture with your state and relax by the fountains of the National World War </li>");
   $("ul.eveningList").append("<li><b>3:30 pm</b> You can't come to DC and not visit The Capitol!</li>");
   $("ul.eveningList").append("<li><b>6:00 pm</b> & wind down for some dinner at Barrel!</li>");
  for (var i=0;i<family_oneday_busy.length;i++){
      var location = family_oneday_busy[i];
      console.log(location)
      service.getDetails({
          placeId: location[1]
        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + place.formatted_address +
                '<br><a href="' +
                place.website + '">Website</a><br></div>');
              infowindow.open(map, this);
            });
          }
        });
    }//for
  }
});
resetForm();
}//init map

function resetForm(){

    $(".form input[type=radio]").each(function () {
    $(this).prop('checked', false);
    $(".work" ).fadeTo( "fast", 1 );
   });
}