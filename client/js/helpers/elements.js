// https://gist.github.com/woubuc/6ef002051aeef453a95b

export class Text extends Phaser.Text {

  constructor({ game, x, y, text, style }) {
    super(game, x, y, text, style);
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

// phaser last version 2.9.2
