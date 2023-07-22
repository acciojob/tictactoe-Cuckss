//your JS code here. If required.
let currentPlayer;
let player1Name;
let player2Name;
let isGameActive=false;
const board=[null,null,null,null,null,null,null,null,null]
function startGame(){
	player1Name=document.getElementById("player-1").value;
	player2Name=document.getElementById("player-2").value;
	if (player1Name.trim() === '' || player2Name.trim() === '') {
    alert('Please enter names for both players.');
    return;
  }
	document.getElementById('players').style.display = 'none';
  document.getElementById('message').textContent = `${player1Name}, you're up!`;
  document.getElementById('board').style.pointerEvents = 'auto';
  isGameActive = true;
  currentPlayer = 'X';
}