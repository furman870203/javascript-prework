function playGame(playerMove){

  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2){
      return 'papier';
    } else if (argMoveId == 3){
      return 'nożyce';
    } else{    
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

  function displayResult(argComputerMove, argPlayerMove){
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage( 'Ty wygrywasz!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
      printMessage('Remis');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
      printMessage('remis');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
      printMessage('remis');
    } else{
      printMessage('Ty przegrywasz');
    }
  } 
  
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  let computerMove = getMoveName(randomNumber);
  
 printMessage('Mój ruch to: ' + computerMove);

  printMessage('Twój ruch to: ' + playerMove);
  
   displayResult(computerMove, playerMove);

   
}
document.getElementById('play-rock').addEventListener('click', function(){
  playGame('kamień');
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame('papier');
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame('nożyce');
});

