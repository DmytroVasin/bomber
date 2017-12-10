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
