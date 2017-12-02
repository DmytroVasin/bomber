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
    this.callAll('kill')
  }
}

export class CountDown extends Phaser.Group {

  constructor({ game, callback }) {
    super(game)

    this.callback = callback
    let duration = 1000

    this.picture = new Phaser.Sprite(this.game, this.game.world.centerX, this.game.world.centerY, 'count_down');
    this.picture.anchor.setTo(0.5);
    this.picture.alpha = 0

    this.add(this.picture);


    this.tween_1 = this.game.add.tween(this.picture).to({ alpha: 1 }, duration).to({ alpha: 0 }, duration);
    this.tween_2 = this.game.add.tween(this.picture).to({ alpha: 1 }, duration).to({ alpha: 0 }, duration);
    this.tween_3 = this.game.add.tween(this.picture).to({ alpha: 1 }, duration).to({ alpha: 0 }, duration);

    this.tween_1.onComplete.add(this.show_tween_2, this);
    this.tween_2.onComplete.add(this.show_tween_3, this);
    this.tween_3.onComplete.add(this.finish, this);

    this.show_tween_1()
  }

  show_tween_1() {
    this.picture.frame = 0
    this.tween_1.start()
  }

  show_tween_2() {
    this.picture.frame = 1
    this.tween_2.start()
  }

  show_tween_3() {
    this.picture.frame = 2
    this.tween_3.start()
  }

  finish() {
    this.callAll('kill')

    if (this.callback) { this.callback() }
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
