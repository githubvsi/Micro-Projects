var start = 0;
var speed= 20;
var intervalHandle;

window.onload = delayMoving;

function delayMoving(){
	setTimeout(beginMoving, 2000);
}

function beginMoving(){
	//document.getElementById('main').querySelector('img').style.position = 'absolute';
	document.getElementById('main').querySelector('img').style.top = '50px';
	document.getElementById('main').querySelector('img').style.left = '0';

	intervalHandle_1 = setInterval(moveUnit, 50);
}

function moveUnit(){
	start += speed;
	document.getElementById('main').querySelector('img').style.left = start+'px';
	if(start===660 || start===0){
		speed = -speed;	
	}
}

