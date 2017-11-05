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

var profileBoxes = []
var profileImages = [];

PendingGameState.prototype = {
  init: function (game_id) {
    this.game_id = game_id;

    clientSocket.on('update players', this.populateCharacterSquares.bind(this));
    clientSocket.on('launch game', this.startGame.bind(this));
  },

  create: function() {
    Game.add.sprite(0, 0, 'background_select');
    Game.add.image(xOffset, yOffset, 'pending_game_backdrop');

    this.startGameButton = Game.add.button(buttonXOffset, startGameButtonYOffset, 'start_game_button', this.startGameAction, this, 2, 2);
    this.startGameButton.input.enabled = false
    this.startGameButton.input.useHandCursor = false

    Game.add.button(buttonXOffset, leaveButtonYOffset, 'leave_game_button', this.leaveGameAction, this, 1, 0);

    this.drawCharacterSquares();

    this.minPlayerMessage = Game.add.text(minPlayerMessageOffsetX, minPlayerMessageOffsetY, 'Cannot start game without\nat least 2 players.', { font: 'Carter One', fill: 'red', fontSize: 17, visible: false });

    // DEBUGGG:
    Game.add.text(330, 100, this.game_id, { font: 'Carter One', fill: 'red', fontSize: 17});

    clientSocket.emit('enter pending game', { game_id: this.game_id });
  },

  drawCharacterSquares: function() {
    var xOffset = characterSquareStartingX;
    var yOffset = characterSquareStartingY;

    for(var i = 0; i < 4; i++) {
      var frame = i < 4 ? 0 : 1;

      var profileBox = Game.add.sprite(xOffset, yOffset, 'character_square', frame);
      profileBoxes[i] = profileBox

      if(i % 2 == 0) {
        xOffset += characterSquareXDistance;
      } else {
        xOffset = characterSquareStartingX;
        yOffset += characterSquareYDistance;
      }
    }
  },

  populateCharacterSquares: function(data) {
    for (let image of profileImages) {
      // NOTE: 1. Not optimal way to rerender, we should implement AddPlayer, RemovePlayer
      // NOTE: 2. You did not destroy object, it still in memory. Just marked as destroyed.
      image.destroy();
    }

    data.players.forEach( (player, i) => {
      var playerSquare = profileBoxes[i]
      var playerImage = Game.add.image(characterOffsetX, characterOffsetY, 'bomberman_head_' + player.color);

      profileImages[i] = playerImage

      playerSquare.addChild(playerImage)
    })

    if(data.players.length > 1) {
      this.enableStartGame();
    } else {
      this.disableStartGame();
    }
  },

  enableStartGame: function() {
    this.minPlayerMessage.visible = false;

    this.startGameButton.setFrames(1, 0);
    this.startGameButton.inputEnabled = true;
    this.startGameButton.input.useHandCursor = true
  },

  disableStartGame: function (){
    this.minPlayerMessage.visible = true;

    this.startGameButton.setFrames(2, 2);
    this.startGameButton.inputEnabled = false;
    this.startGameButton.input.useHandCursor = false
  },

  leaveGameAction: function() {
    clientSocket.emit('leave pending game', { game_id: this.game_id });

    Game.state.start('lobby');
  },

  startGameAction: function() {
    clientSocket.emit('create game', { game_id: this.game_id });
  },

  startGame: function(data) {
    // socket.removeAllListeners();
    Game.state.start('game_level', true, false, data.game.id);
  }
}
