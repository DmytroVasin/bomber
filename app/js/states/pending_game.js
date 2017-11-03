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

var minPlayerMessageOffsetX = 330;
var minPlayerMessageOffsetY = 425;

var characterOffsetX = 4.5;
var characterOffsetY = 4.5;

PendingGameState.prototype = {
  init: function (game_id) {
    this.game_id = game_id;

    clientSocket.on('update players', this.populateCharacterSquares.bind(this));
  },

  create: function() {
    Game.add.sprite(0, 0, 'background_select');
    Game.add.image(xOffset, yOffset, 'pending_game_backdrop');

    this.startGameButton = Game.add.button(buttonXOffset, startGameButtonYOffset, 'start_game_button', this.startGameAction, this, 2, 2);
    this.startGameButton.inputEnabled = false;

    Game.add.button(buttonXOffset, leaveButtonYOffset, 'leave_game_button', this.leaveGameAction, null, 1, 0);

    this.characterSquares = this.drawCharacterSquares();
    console.log('this.characterSquares')
    console.log(this.characterSquares)

    this.minPlayerMessage = Game.add.text(minPlayerMessageOffsetX, minPlayerMessageOffsetY, 'Cannot start game without\nat least 2 players.', { font: 'Carter One', fill: 'red', fontSize: 17, visible: false });

    // socket.on("player joined", this.playerJoined.bind(this));
    // socket.on("player left", this.playerLeft.bind(this));
    // socket.on("start game on client", this.startGame);

    clientSocket.emit('enter pending game', { game_id: this.game_id });
  },

  drawCharacterSquares: function() {
    var squares = [];

    var xOffset = characterSquareStartingX;
    var yOffset = characterSquareStartingY;

    for(var i = 0; i < 4; i++) {
      var frame = i < 4 ? 0 : 1;

      squares[i] = Game.add.sprite(xOffset, yOffset, 'character_square', frame);

      if(i % 2 == 0) {
        xOffset += characterSquareXDistance;
      } else {
        xOffset = characterSquareStartingX;
        yOffset += characterSquareYDistance;
      }
    }

    return squares;
  },

  populateCharacterSquares: function(data) {
    var numPlayersInGame = 0;

    data.players.forEach( (player, i) => {
      var playerSquare = this.characterSquares[i]
      var playerImage = Game.add.image(characterOffsetX, characterOffsetY, 'bomberman_head_' + player.color);

      playerSquare.addChild(playerImage)
    })

    if(data.players.length > 1) {
      this.activateStartGameButton();
    } else {
      this.minPlayerMessage.visible = true;
    }
  },

  activateStartGameButton: function() {
    this.minPlayerMessage.visible = false;
    this.startGameButton.setFrames(1, 0);
    this.startGameButton.inputEnabled = true;
  },

  leaveGameAction: function() {
    clientSocket.emit('leave pending game', { game_id: this.game_id });

    Game.state.start('lobby');
  },

  startGameAction: function() {
    console.log('.............')
  }
}
