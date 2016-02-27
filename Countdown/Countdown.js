// as soon as the page is loaded
window.onload = function(){
	// create an input text box and give an id
	var inputMinutes = document.createElement('input');
	inputMinutes.setAttribute('id', 'minutes');
	inputMinutes.setAttribute('type', 'text');

	// create a button
	var startButton = document.createElement('input');
	startButton.setAttribute('type', 'button');
	startButton.setAttribute('value', 'Start Countdown');
	startButton.onclick = function(){
		startCountdown();
	}

	// 
}


function startCountdown(){

}