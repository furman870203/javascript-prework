function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
let playerMove = 'papier';
printMessage('zagrałem' + playerMove '!Jeśli twój ruch to nożyce, to wygrywasz!')