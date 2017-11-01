var PendingGameState = function() {};

module.exports = PendingGameState;

var xOffset = 180;
var yOffset = 25;

var buttonXOffset = 345;
var startGameButtonYOffset = 320;
var leaveButtonYOffset = 370;

var characterSquareStartingX = 345;
var characterSquareStartingY = 80;
var characterSquareXDistance = 105;
var characterSquareYDistance = 100;
var numCharacterSquares = 4;

var minPlayerMessageOffsetX = 330;
var minPlayerMessageOffsetY = 425;

var characterOffsetX = 4.5;
var characterOffsetY = 4.5;

PendingGameState.prototype = {
  init: function (tilemapName) {
    debugger
    // this.tilemapName = tilemapName;

    clientSocket.on('show current players', this.populateCharacterSquares.bind(this));
  },

  create: function() {
    debugger
    Game.add.sprite(0, 0, 'background_select');
    Game.add.image(xOffset, yOffset, 'pending_game_backdrop');

    this.startGameButton = Game.add.button(buttonXOffset, startGameButtonYOffset, 'start_game_button', this.startGameAction, this, 2, 2);

    Game.add.button(buttonXOffset, leaveButtonYOffset, 'leave_game_button', this.leaveGameAction, null, 1, 0);

    this.characterSquares = this.drawCharacterSquares(4);

    this.characterImages = [];

    this.numPlayersInGame = 0;


    this.minPlayerMessage = Game.add.text(minPlayerMessageOffsetX, minPlayerMessageOffsetY, 'Cannot start game without\nat least 2 players.', { font: 'Carter One', fill: 'red', fontSize: 17, visible: false });
    // this.minPlayerMessage.visible  = false;

    // socket.on("show current players", this.populateCharacterSquares.bind(this));
    // socket.on("player joined", this.playerJoined.bind(this));
    // socket.on("player left", this.playerLeft.bind(this));
    // socket.on("start game on client", this.startGame);

    clientSocket.emit('enter pending game', { gameId: 'this.gameId' });
  },




  drawCharacterSquares: function(numOpenings) {
    var characterSquares = [];

    var xOffset = characterSquareStartingX;
    var yOffset = characterSquareStartingY;

    for(var i = 0; i < numCharacterSquares; i++) {
      var frame = i < numOpenings ? 0 : 1;
      characterSquares[i] = Game.add.sprite(xOffset, yOffset, 'character_square', frame);
      if(i % 2 == 0) {
        xOffset += characterSquareXDistance;
      } else {
        xOffset = characterSquareStartingX;
        yOffset += characterSquareYDistance;
      }
    }
    return characterSquares;
  },



  populateCharacterSquares: function(data) {
    this.numPlayersInGame = 0;

    for(var playerId in data.players) {
      var color = data.players[playerId].color;
      var xPosition = this.characterSquares[this.numPlayersInGame].position.x + characterOffsetX
      var yPosition = this.characterSquares[this.numPlayersInGame].position.y + characterOffsetY

      this.characterImages[playerId] = Game.add.image(xPosition, yPosition, 'bomberman_head_' + color);

    }

    this.minPlayerMessage.visible = true;

// >>>>>>>>>>>>>>>>>> STOP HERE








    //   this.numPlayersInGame++;
    // }
    // if(this.numPlayersInGame > 1) {
    //   this.activateStartGameButton();
    // } else {
    //   this.minPlayerMessage.visible = true;
    // }
  },


  leaveGameAction: function() {
    debugger;

    clientSocket.emit('leave pending game');
    clientSocket.removeAllListeners();

    Game.state.start('lobby');
  },

  startGameAction: function() {
    console.log('.............')
  }
}
