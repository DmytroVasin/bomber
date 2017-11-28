// https://gist.github.com/woubuc/6ef002051aeef453a95b

export class Text extends Phaser.Text {

  constructor({ game, x, y, text, style }) {
    super(game, x, y, text, style);
    this.anchor.setTo(0.5);

    this.game.add.existing(this);
  }

}

export class Button extends Phaser.Button {

  constructor({ game, x, y, asset, callback, callbackContext, overFrame, outFrame, downFrame, upFrame }) {
    super(game, x, y, asset, callback, callbackContext, overFrame, outFrame, downFrame, upFrame);
    this.anchor.setTo(0.5);

    this.game.add.existing(this);
  }

  disable() {
    this.setFrames(2, 2);
    this.inputEnabled = false;
    this.input.useHandCursor = false;
  }

  enable() {
    this.setFrames(1, 0);
    this.inputEnabled = true;
    this.input.useHandCursor = true;
  }

}

export class TextButton extends Phaser.Button {

  constructor({ game, x, y, asset, callback, callbackContext, overFrame, outFrame, downFrame, upFrame, label, style }) {
    super(game, x, y, asset, callback, callbackContext, overFrame, outFrame, downFrame, upFrame);
    this.anchor.setTo(0.5);

    this.text = new Phaser.Text(this.game, 0, 0, label, style);
    this.text.anchor.setTo(0.5);

    this.addChild(this.text);

    this.game.add.existing(this);
  }

}

export class GameSlots extends Phaser.Group {

  constructor({ game, availableGames, callback, callbackContext, x, y, asset, overFrame, outFrame, downFrame, upFrame, style }) {
    super(game);

    let yOffset = y;

    for (let availableGame of availableGames) {
      var slot = new Phaser.Button(this.game, x, yOffset, asset, callback.bind(callbackContext, { game_id: availableGame.id }), null, overFrame, outFrame, downFrame, upFrame);
      slot.anchor.setTo(0.5);

      slot.text = new Phaser.Text(this.game, 0, 0, `Join Game: ${availableGame.name}`, style);
      slot.text.anchor.setTo(0.5);

      slot.addChild(slot.text);

      this.add(slot);

      yOffset += 50;
    }
  }

  destroy() {
    this.callAll('kill') // destroy
  }
}

export class PlayerSlots extends Phaser.Group {

  constructor({ game, max_players, players, x, y, asset_box, asset_player }) {
    super(game);

    let xOffset = x;

    for (let i = 0; i < max_players; i++) {
      let _player = players[i]

      let slotBox = new Phaser.Sprite(this.game, xOffset, y, asset_box, 0);

      if (_player) {
        let slotPlayer = new Phaser.Image(this.game, 5, 5, asset_player+_player.color)
        slotBox.addChild(slotPlayer)
      }

      this.add(slotBox);
      xOffset += 100;
    }
  }

  destroy() {
    this.callAll('kill') // destroy
  }
}

// phaser last version 2.9.2
