var start = 0;
var speed= 20;
var intervalHandle;

window.onload = delayMoving;

function delayMoving(){
	setTimeout(beginMoving, 2000);
}

function beginMoving(){
	// Set the starting position of the imaging
	var image = document.getElementById('main').querySelector('img');
	image.style.top = '50px';
	image.style.left = '0';

	// Start moving
	intervalHandle_1 = setInterval(moveUnit, 50);

	// Stop the image when click on it
	image.onclick = function(){
		clearInterval(intervalHandle_1);
	}
}

function moveUnit(){
	start += speed;
	document.getElementById('main').querySelector('img').style.left = start+'px';
	if(start===660 || start===0){
		speed = -speed;	
		document.getElementById('main').querySelector('img').classList.toggle('flip');
	}
}

