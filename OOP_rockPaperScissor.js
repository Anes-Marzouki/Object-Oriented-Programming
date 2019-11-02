


var players = function (name) {
    var obj = {};
    obj.name = name;
    obj.won = wins;
    obj.lost = losses;
    obj.losses = 0;
    obj.wins = 0;
    obj.hand;
    obj.play = rockPaperScissor;
    return obj;
}

var rockPaperScissor = function () {
  var random = Math.floor(Math.random() * Math.floor(3));
  if (random <= 1) {
        this.hand = 'rock';
  }else if (random === 2) {
      this.hand = 'paper'
  }else {
      this.hand = 'scissor';
  }
// return this.hand;
}

var wins = function (n) {
    this.wins += n;
}
var losses = function (n) {
    this.losses += n;
}

var Jhon = Players('Jhon');
var Mitch = Players('Mitch');

function game (p1, p2) {
    var playerone = p1.name;
    var playertwo = p2.name;
    console.log('choosing a turn');
    var random = Math.floor(Math.random() * Math.floor(2));
    if(random === 0){
       console.log('player one starts first'); 
    }else {
    console.log('player two starts first'); 
    }
    if (random === 0) {
        p1.play();
        p2.play();
       if (p1.hand === 'rock' && p2.hand === 'paper'){
           console.log('player one chose ' + p1.hand + " vs player two's " + p2.hand);
           console.log('player two wins');
           p1.lost(1);
           p2.won(1);
           console.log('the score is ' + p1.name + ' ' + p1.wins + ' ' + p2.name + ' '+ p2.wins);
       }else if (p1.hand === 'rock' && p2.hand === 'scissor'){
           console.log('player one chose ' + p1.hand + " vs player two's " + p2.hand);
           console.log('player one wins');
           p2.lost(1);
           p1.won(1);
           console.log('the score is ' + p1.name + ' ' + p1.wins + ' ' + p2.name + ' ' + p2.wins);
       }else {
           console.log('player one chose ' + p1.hand + " vs player two's " + p2.hand);
           console.log('Draw! game again');
       }
       
    }else {
        p2.play();
        p1.play();
        if (p2.hand === 'rock' && p1.hand === 'paper'){
           console.log('player two chose ' + p2.hand + " vs player one's " + p1.hand);
           console.log('player one wins');
           p2.lost(1);
           p1.won(1);
           console.log('the score is ' + p2.name + ' ' + p2.wins + ' '+ p1.name + ' ' + p1.wins);
       }else if (p2.hand === 'rock' && p1.hand === 'scissor'){
           console.log('player two chose ' + p2.hand + " vs player one's " + p1.hand);
           console.log('player two wins');
           p1.lost(1);
           p2.won(1);
           console.log('the score is ' + p2.name + ' ' + p2.wins + ' ' + p1.name + ' '+ p1.wins);
       }else {
           console.log('player one chose ' + p2.hand + " vs player two's " + p1.hand);
           console.log('Draw! game again');
       }
    }
    
}
