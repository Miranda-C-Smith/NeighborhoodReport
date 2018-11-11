function sendMessage(){
	var phoneNumber = "17574471488@tmomail.net";
	
}

var currentlocation;
function firearmButtonClick(){
	var x = document.getElementById("mainPage");
	x.style.display = "none";
	
	var y = document.getElementById("firearmSubpage");
	y.style.display = "block";
	
	currentlocation = getAddressLocation(); //TODO
}

function cyberButtonClick() {
	var x = document.getElementById("mainPage");
	x.style.display = "none";
	
	var y = document.getElementById("cyberSubpage");
	y.style.display = "block";
}

function backHome(){
	
	var toHide = document.getElementsByTagName("div");
	for (var i = 0; i < toHide.length; i++) {
		toHide[i].style.display = "none";
	}
	
	var toShow = document.getElementById("mainPage");
	toShow.style.display = "block";
}

function sendShotMessage(){
	 //var currentlocation = await getAddressLocation();
	var numberShots = document.querySelector('input[name="numShots"]:checked').value;
	var messageString = numberShots + " heard fired within ";
	var distance = document.querySelector('input[name="shotDistance"]:checked').value;

	messageString = messageString + distance + " from ";
	messageString = messageString + currentlocation + ". ";
	messageString = messageString + document.getElementById("additionalShotInfo").value;
	
	alert(messageString);
	
}

function getAddressLocation(){
	//Get Geolocation
	if (navigator.geolocation) {
		var options = {
		  enableHighAccuracy: true,
		  timeout: 5000,
		  maximumAge: 0
		};

        var pos = navigator.geolocation.getCurrentPosition(getAddress, addressError, options);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
	
	return pos;
}

function addressError(err){
	console.warn(`ERROR(${err.code}): ${err.message}`);
}
function getAddress(pos){
	//Step 1: initialize communication with the platform
	var platform = new H.service.Platform({
	  app_id: "G3vr9Hp8X8zyLKzqQjuI",
	  app_code: "z7QymGEfOPJkA2hmyQc21w",
	  useHTTPS: true
	});
	
	var latlongstring = pos.coords.latitude + "," + pos.coords.longitude;
	var geocoder = platform.getGeocodingService(),
    parameters = {
      prox: latlongstring,
      mode: 'retrieveAddresses',
      maxresults: '1',
      gen: '9'};

  var label = geocoder.reverseGeocode(parameters, 
	function (result) {
		//console.log(result);
		var label = result.Response.View[0].Result[0].Location.Address.Label;
      //alert(label);
	  return label;
	 
    }, function (error) {
      alert(error);
    });
	
	console.log(label);
	return label;
}