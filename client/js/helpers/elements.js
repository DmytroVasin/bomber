export class Text extends Phaser.GameObjects.Text {

  constructor({ game: scene, x, y, text, style }) {
    super(scene, x, y, text, style);
    this.setOrigin(0.5, 0.5);

    scene.add.existing(this);
  }

}

export class Button extends Phaser.Input.Gamepad.Button {

  constructor({ game, x, y, asset, callback, callbackContext, overFrame, outFrame, downFrame, upFrame }) {
    super(game, x, y, asset, callback, callbackContext, overFrame, outFrame, downFrame, upFrame);
    this.setOrigin(0.5, 0.5);

    game.add.existing(this);
  }

}

export class TextButton extends Phaser.GameObjects.Sprite {
  constructor({ game, x, y, asset, callback, callbackContext, upFrame, outFrame, overFrame, downFrame, label, style }) {

    //check if config contains a scene
    if (!game) {
      console.log('missing scene');
      return;
    }
    //check if config contains a key
    if (!asset) {
      console.log("missing key!");
      return;
    }
    //if there is no up property assume 0
    if (!upFrame) {
      upFrame = 0;
    }
    //if there is no down in config use up
    if (!downFrame) {
      downFrame = upFrame;
    }
    //if there is no over in config use up
    if (!overFrame) {
      overFrame = upFrame;
    }
    //call the constructor of the parent
    //set at 0,0 in case there is no x and y
    //in parameter
    super(game, 0, 0, asset, upFrame);

    //make a class level reference to the config
    this.scene = game;
    this.asset = asset;
    this.callback = callback;
    this.callbackContext = callbackContext;
    this.upFrame = upFrame;
    this.outFrame = outFrame;
    this.overFrame = overFrame;
    this.downFrame = downFrame;
    this.enable = true;

    //if there is an x assign it
    if (x) {
      this.x = x;
    }
    //if there is an x assign it
    if (y) {
      this.y = y;
    }

    this.atext = new Phaser.GameObjects.Text(game, x, y, label, style);
    this.atext.setOrigin(0.5, 0.5);

    //add this to the scene
    game.add.existing(this);
    game.add.existing(this.atext);
    //
    //make interactive and set listeners
    this.setInteractive();
    this.on('pointerdown', this.onDown, this);
    this.on('pointerup', this.onUp, this);
    this.on('pointerover', this.onOver, this);
    this.on('pointerout', this.onUp, this);
  }

  activate() {
    this.setFrame(this.downFrame);
    this.enable = true;
    this.visible  = true;
    this.atext.visible  = true;
  }

  disactivate() {
    this.setFrame(this.outFrame);
    this.enable = false;
    this.visible  = false;
    this.atext.visible  = false;
  }

  onDown() {
    if (this.enable == false) return;

    this.scene.registry.get('Sound').playSound(this.scene,'FxClick01');

    this.setFrame(this.downFrame);
    let mycallbackFunction = this.callback.bind(this.callbackContext);
    mycallbackFunction();
  }

  onOver() {
    if (this.enable == false) return;
    this.setFrame(this.overFrame);
  }

  onUp() {
    if (this.enable == false) return;
    this.setFrame(this.upFrame);
  }
  onOut() {
    if (this.enable == false) return;
    this.setFrame(this.outFrame);
  }
}

export class GameSlots extends Phaser.GameObjects.Container {

  constructor({ game, availableGames, callback, callbackContext, x, y, style }) {
    super(game);

    let game_slot_asset = 'slot_backdrop'
    let game_enter_asset = 'list_icon'

    let yOffset = y;
    let nbGame=0;

    for (let availableGame of availableGames) {
      let gameBox = new Phaser.GameObjects.Image(game, x+220, yOffset-5, game_slot_asset);
      let button = new TextButton({
        game: game,
        x: x+377,
        y: yOffset-6, 
        asset: game_enter_asset,
        callback: callback.bind(callbackContext, { game_id: availableGame.id }), 
        callbackContext: null, 
        upFrame: 0, 
        overFrame: 1,
        downFrame: 2,
        outFrame: 3,
        label: ''});
      let text = new Phaser.GameObjects.Text(game, x+30, yOffset-28, `Join Game: ${availableGame.name}`, style);

      this.add(gameBox);
      this.add(button);
      this.add(text);
      game.add.existing(gameBox);
      game.add.existing(button);
      game.add.existing(text);

      yOffset += 105;
      nbGame++;
      if (nbGame>=3) break;
    }
  }

  destroy() {
  }
}

export class PlayerSlots extends Phaser.GameObjects.Container {

  constructor({ game, max_players, players, x, y, asset_empty, asset_player, style }) {
    super(game);

    let xOffset = x;
    let YOffset = y;

    for (let i = 0; i < max_players; i++) {
      let slotBox
      let slotName
      let _player = players[i]

      if (_player) {
        slotBox = new Phaser.GameObjects.Image(game, xOffset, YOffset, asset_player + _player.skin)
        slotName = new Phaser.GameObjects.Text(game, xOffset, YOffset-90 , _player.skin, style);
        slotName.setOrigin(0.5, 0);
        this.add(slotBox);
        this.add(slotName);
      } else {
        slotBox = new Phaser.GameObjects.Image(game, xOffset, YOffset, asset_empty)
        this.add(slotBox);
      }
      xOffset += 170;
      if (i==2) {
        xOffset = x
        YOffset=YOffset+ slotBox.height +10;
      }
    }
    game.add.existing(this);
  }

}

export class SpoilNotification extends Phaser.GameObjects.Group {

  constructor({ game, asset, x, y }) {
    super(game)

    this.picture = game.add.image(x, y - 20, asset).setAlpha(1);
    this.picture.setOrigin(0.5,0.5);

    this.add(this.picture);

    this.tween = game.tweens.add({
      targets: this.picture,
      y: this.picture.y - 25,
      alpha: { value: 0, duration: 1000, ease: 'Power1', delay: 600 },
      duration: 600
    });
    this.tween.on('complete', this.finish.bind(this));
  }

  finish() {
    console.log('SpoilNotification destroyed');
    this.picture.destroy();
    this.destroy();
  }
}

const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

/**
 * Create a Graphic Slider to select a map
 * @export
 * @class MapSlider
 * @extends Phaser.GameObjects.Group
 */
export class MapSlider extends Phaser.GameObjects.Group {

  /**
   * Creates an instance of MapSlider.
   * @param  {any} { scene, x, y } 
   * @memberof MapSlider
   */
  constructor({ scene, x, y }) {
    super(scene)

    this.selected=null;

    this.config = {
      name: 'Options',
      maps: [
        { name: 'Hot', map: 'hot_map', component: 'hot_map_preview_mini' },
        { name: 'Cold', map: 'cold_map', component: 'cold_map_preview_mini' },
      ]
    };

    this.scrollablePanel = scene.rexUI.add.scrollablePanel({
      x: x,
      y: y,
      width: 500,
      height: 300,
      scrollMode: 1,
      background: scene.rexUI.add.roundRectangle(0, 0, 2, 2, 10, COLOR_PRIMARY),
      panel: {
        child: this.createPanel(scene, this.config,this),
        mask: { padding: 1},
      },
      slider: {
        track: scene.rexUI.add.roundRectangle(0, 0, 20, 10, 10, COLOR_DARK),
        thumb: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 13, COLOR_LIGHT),
      },
      space: { left: 10, right: 10, top: 10, bottom: 10, panel: 10 }
    }).layout();
    //.layout().drawBounds(scene.add.graphics(), 0xff0000);

    var labels = [];
    scene.input.topOnly = false;
    labels.push(...(this.scrollablePanel).getElement('#maps.items', true));
    labels.forEach(function (label) {
      if (!label) {return; }
      var click = scene.rexUI.add.click(label,{  }).on('click', function () {
        label.getElement('text').setColor('red');
        console.log("Map selected: "+label.getElement('icon').name);
        label.slider.selected=label.getElement('icon').name

        label.slider.scene.registry.get('Sound').playSound(label.slider.scene,'FxClick01');
      });
    })

  }

  /**
   * Create 
   * @param  {any} scene 
   * @param  {any} data 
   * @return 
   * @memberof MapSlider
   */
  createPanel(scene, data,slider) {
    var sizer = scene.rexUI.add.sizer({ orientation: 'x', space: { item: 10 } ,name:'maps'});
    //scene.rexUI.setChildrenInteractive(sizer);
    for (var i = 0; i < (data['maps']).length; i++) {
      var map= scene.rexUI.add.circleMaskImage(0, 0, (data['maps'])[i].component, { maskType: 'roundRectangle', radius: 10  })
      const COLOR_LIGHT = 0x7b5e57;
      map.name=(data['maps'])[i].map;
      var label = scene.rexUI.add.label({
        orientation: 'y',
        icon: map,
        text: scene.add.text(0, 0, map.name),
        space: { icon: 3 }
      });
      label.slider=slider;
      sizer.add(label,{key :map.name});
    }
    return sizer;
  }

  onDown() {
    console.log("MapSlider: onDown");
  }

  destroy(){
    this.scrollablePanel.destroy();
  }

}

/**
 * Create a virtual Joystick
 * @export
 * @class MapSlider
 * @extends Phaser.GameObjects.Group
 */
 export class Virtualjoystick extends Phaser.GameObjects.Group {

  /**
   * Creates an instance of MapSlider.
   * @param  {any} { scene, x, y } 
   * @memberof MapSlider
   */
  constructor({ scene, x, y,xx,yy }) {
    super(scene)

    this.scene=scene;

    var graphic1 = this.scene.add.graphics({
      x: 0,
      y: 0,
  
      lineStyle: {
           width: 3,
           color: 0xffffff,
           alpha: 1
       },
       fillStyle: {
           color: 0x888888,
           alpha: 0.2
       },
  
      add: true
    });
    var graphic2 = this.scene.add.graphics({
      x: 0,
      y: 0,
  
      lineStyle: {
           width: 3,
           color: 0xffffff,
           alpha: 1
       },
       fillStyle: {
           color: 0xcccccc,
           alpha: 0.5
       },
  
      add: true
    });

    //Add Fire button
    var graphics = this.scene.add.graphics({ fillStyle: { color: 0x888888,alpha: 0.2 } });
    var circle = new Phaser.Geom.Circle(xx,yy, 100, 0x888888);
    this.button01=graphics.fillCircleShape(circle);
    this.button01.setInteractive(new Phaser.Geom.Circle(
      xx, // center x
      yy, // center y
      100 // radius
    ), Phaser.Geom.Circle.Contains);
    this.button01.on('pointerdown', this.onButton01Pointerdown, this);
    this.scene.joystickButton01Key='';
    this.scene.add.existing(this.button01);

    //Add JoyStick
    this.joyStick = this.scene.plugins.get('rexvirtualjoystickplugin').add(this.scene, {
      x: x,
      y: y,
      radius: 100,
      base: graphic1.fillCircleShape(this.scene.add.circle(0,0, 100, 0x888888,0)),
      thumb: graphic2.fillCircleShape(this.scene.add.circle(0,0, 50, 0xcccccc,0)),
      // dir: '8dir',   // 'up&down'|0|'left&right'|1|'4dir'|2|'8dir'|3
      forceMin: 0
      // enable: true
    }).on('update', this.dumpJoyStickState, this);
    this.scene.joystickKey='';
    this.scene.add.existing(this.joyStick);

    this.scene.text = this.scene.add.text(0, 0);
    this.dumpJoyStickState();
  }

  onButton01Pointerdown() {
    console.log("Button01 pressed");
    this.scene.joystickButton01Key='down';
  }

  //Display Joystick debug informations
  dumpJoyStickState() {
    var joystickKeys = this.joyStick.createCursorKeys();
    var s = 'Key down: ';
    this.scene.joystickKey='';
    for (var name in joystickKeys) {
        if (joystickKeys[name].isDown) {
          this.scene.joystickKey+=name;
            s += name + ' ';
        }
    }
    //Display Joystick debug informations
    return;
    s += '\n';
    s += ('Force: ' + Math.floor(this.joyStick.force * 100) / 100 + '\n');
    s += ('Angle: ' + Math.floor(this.joyStick.angle * 100) / 100 + '\n');
    this.scene.text.setText(s);
  }
 }