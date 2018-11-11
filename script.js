function sendMessage(){
	var phoneNumber = "17574471488@tmomail.net";
	
	
	
}

function firearmButtonClick(){
	var x = document.getElementById("mainPage");
	x.style.display = "none";
	
	var y = document.getElementById("firearmSubpage");
	y.style.display = "block";
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