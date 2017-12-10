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

  disable() {
    this.setFrames(3, 3);
    this.inputEnabled = false;
    this.input.useHandCursor = false;
  }

  enable() {
    this.setFrames(1, 0, 2);
    this.inputEnabled = true;
    this.input.useHandCursor = true;
  }

}

export class PlayerSlots extends Phaser.Group {

  constructor({ game, max_players, players, x, y, asset_empty, asset_player, style }) {
    super(game);

    let xOffset = x;

    for (let i = 0; i < max_players; i++) {
      let slotBox
      let slotName
      let _player = players[i]

      if (_player) {
        slotBox = new Phaser.Image(this.game, xOffset, y, asset_player+_player.skin)
        slotName = new Phaser.Text(this.game, slotBox.width/2, slotBox.height + 15, _player.skin, style);
        slotName.anchor.setTo(0.5);
        slotBox.addChild(slotName);
      } else {
        slotBox = new Phaser.Image(this.game, xOffset, y, asset_empty)
      }

      this.add(slotBox);
      xOffset += 170;
    }
  }

  destroy() {
    this.callAll('kill')
  }
}
