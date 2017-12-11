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

export class SpoilNotification extends Phaser.Group {

  constructor({ game, asset, x, y }) {
    super(game)

    this.picture = new Phaser.Image(this.game, x, y - 20, asset);
    this.picture.anchor.setTo(0.5);

    this.add(this.picture);

    this.tween = this.game.add.tween(this.picture);
    this.tween.to({ y: this.picture.y - 25, alpha: 0 }, 600);

    this.tween.onComplete.add(this.finish, this);

    this.tween.start()
  }

  finish() {
    this.callAll('kill')
  }
}

export class GameSlots extends Phaser.Group {

  constructor({ game, availableGames, callback, callbackContext, x, y, style }) {
    super(game);

    let game_slot_asset = 'slot_backdrop'
    let game_enter_asset = 'list_icon'

    let yOffset = y;

    for (let availableGame of availableGames) {
      let gameBox = new Phaser.Image(this.game, x, yOffset, game_slot_asset)
      let button = new Phaser.Button(this.game, gameBox.width - 100, 12, game_enter_asset, callback.bind(callbackContext, { game_id: availableGame.id }), null, 1, 0, 2, 1);
      let text = new Phaser.Text(this.game, 30, 25, `Join Game: ${availableGame.name}`, style);

      gameBox.addChild(button);
      gameBox.addChild(text);

      this.add(gameBox);

      yOffset += 105;
    }
  }

  destroy() {
    this.callAll('kill') // destroy
  }
}
