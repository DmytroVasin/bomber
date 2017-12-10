TITLE: Bomberman Multiplayer game with Rooms based on Phaser.js Socket.io and Node.js

https://raw.githubusercontent.com/DmytroVasin/bomber/master/_readme/intro.png


Introduction:

Demo available here: [Bomb Attack Demo](https://bomb-attack.herokuapp.com/)
Source code of the Demove Repository available here: [Github repo](https://github.com/DmytroVasin/bomber)

This article will demonstrate how to build basic multiplayer game with several rooms where players can play with each outher.
Server is writed on Node.js and Express.js. Client writed on Javascript framwork called Phaser.
The client and the server communicate by using Socket.io.


Check out video below to see what exaclty we did. So you can open demo to play with a friend. Also check out the GitHub repo to for the entire source code.

https://player.vimeo.com/video/246595375



Before we get started I will explane major topic:

Topics:

1. Introduction:
2. Part 1: Setup app
2.1 Setting up server
2.2 Setting up client
3. Part 2: Multi stage.


## Inroduction:
First of all: In this article I will not describe each line of code. I assume that code is more redable than my explanation. I will just show some special moment and hints that helps me while working on this project.

Second one: This article assumes that you know basic Phaser staff like functions that phaser library provides, or how to display sprite and etc.
( I will show you how to do that but I would not describe each string )

Third one: If you are not familiar with Node.js and Express or Socket.io - that is not a problem.
Little bit about `webpack`. We will use ES6 for our client side code, thats why I will use `webpack`. But I will show simple and dirty setup of the `webpack`.
( article is not webpack tutorial )

# PART 1

## Setup app:
Note: You can skip that step if you familiar with Node apps.

Before we start make sure that you already install:
`node -v` // To see if Node is installed, type the above on your command line.
`yarn --version` // To see if yarn is installed, type the above on your command line.

Here is how i organized my files. Our folder will be splitted on two parts client and server.

`Client` - that is simple phaser app.
`Server` - Node.js Express app.

Also plese open github repo and follow next files:
`.babelrc`
`package.json`
`webpack.config.js`

That is pretty common boilerplate code that allows you to use ES6 syntax for client JS code.
Webpack solution is wery dirty but it enough for our app.


### Setting up server:

Lets read our server/app code:
As we mentioned before we will user express to serve files to the clients:

```
  const express = require('express');

  const app = express();
  const server = require('http').createServer(app);
  const path = require('path');

  const PORT = process.env.PORT || 3000;

  app.use(express.static(path.join(__dirname, '..', 'client')));

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index'));
  });

  server.listen(PORT, function(){
    console.log(`Express server listening on port ${PORT}`)
  });
```
That is basic setup for Node + Express to simple app on 3000 port.


### Setting up client:

Lets create "Loading window" on Phaser

Step 1: Create entry point.
```
  ### => client/index.html
  <!doctype html>
  <html lang='en'>
  <head>
    <title>Bomb Attack</title>
    <link rel='stylesheet' href='css/base.css'/>

    <script src='lib/phaser.min.js'></script>

    <script src='bundle.js'></script>
  </head>
  <body>
    <div id='game-wrapper'>
      <div id='game-container'>

      </div>
    </div>
  </body>
  </html>
```

Step 2: Add Phaser
Download and add `phaser.min.js` into `client/lib` folder. And add `base.css` file to have simple styles for `#game-container`

Step 3: Create Phaser Game

Lets create our game canvas that will be rendered to the `#game-container` block. Here Phaser will help us. Lets instantiate [Phaser Game object](https://phaser.io/docs/2.4.4/Phaser.Game.html)

```
  ### => js/app.js

  import Boot from './states/boot';

  class Game extends Phaser.Game {
    constructor() {
      super(980, 630, Phaser.AUTO, 'game-container');

      this.state.add('Boot',         Boot);

      this.state.start('Boot');
    }
  }

  new Game();
```

```
  ### => js/states/boot.js
  import { Text } from '../helpers/elements';

  class Boot extends Phaser.State {

    create() {
      // This is not mandatory, but useful, as it will make the game keep reacting to messages from the server even when the game window doesn’t have focus (which is a desired behavior for most games).
      this.game.stage.disableVisibilityChange = true;

      new Text({
        game: this.game,
        x: this.game.world.centerX,
        y: this.game.world.centerY,
        text: 'Loading...',
        style: {
          font: '30px Areal',
          fill: '#FFFFFF'
        }
      })
    }
  }

  export default Boot;
```

```
  ###=> js/helpers/elements.js

  export class Text extends Phaser.Text {

    constructor({ game, x, y, text, style }) {
      super(game, x, y, text, style);
      this.anchor.setTo(0.5);

      this.game.add.existing(this);
    }

  }
```

That is standart setup for Phaser games.

Here is several notes about code above:

1. All phaser games devided into state ( screens ), you can navigate through that state via simple `game.state.start('StateName')`
2. I will use own helpers library for displaying phaser things ( like text, buttons ). I use it to keep my code more Object-Oriented.
But you can steel use more simple aproach to create buttons of text:
Here is [link to gist](https://gist.github.com/woubuc/6ef002051aeef453a95b)

But i prefere to use:

```
  new Text({
    game: this.game,
    x: this.game.world.centerX,
    y: this.game.world.centerY,
    text: 'Loading...',
    style: {
      font: '30px Areal',
      fill: '#FFFFFF'
    }
  })
```

then

```
  this.add.text(this.game.world.centerX, this.game.world.centerY, 'Loading...', { font: '30px Areal', fill: '#FFFFFF' });
```

3. Here you can see: `disableVisibilityChange = true`
This is not mandatory, but useful, as it will make the game keep reacting to messages from the server even when the game window doesn’t have focus (which is a desired behavior for most games).
The game pauses when You open a new tab in the same window, but does not pause when you focus on another application.

After setting this code you can:
`yarn install` and `yarn run server`

You can find current working code at the repo under branch [`step1`](https://github.com/DmytroVasin/bomber/tree/step1)

And you will see next:
https://raw.githubusercontent.com/DmytroVasin/bomber/step1/_readme/step1/1.png


# PART 2

## Part 2: Multi stage.

You may previously see that in `Boot` State class we use: `create`

Let stop little bit: Whole stage devides on several "substages"

State has several public methods: [Pubcli Methods](https://phaser.io/docs/2.6.2/Phaser.State.html#methodsQuickLinks):
From documentation:

1. `init` - is the very first function called when your State starts up. If you need to route the game away to another State you could do so here, or if you need to prepare a set of variables or objects before the preloading starts.

2. `preload` -  is called first ( except init ). Normally you'd use this to load your game assets (or those needed for the current State). You shouldn't create any objects in this method that require assets that you're also loading in this method, as they won't yet be available.

3. `create` - is called once preload has completed. If you don't have a preload method then create is the first method called in your State.

4. `update` - This method is called during the core game loop.


Lets game with several stages:

Inside Boot state at the end of create function we should add redirect to Preload Stage.

```
  ### => js/states/boot.js

  ...
  create() {
    ...
    this.state.start('Preload');
  }
  ...

```

Lets add and create Preload and Manu stage:

We import that stages and add them inside app.js.
```
  ### => js/app.js

  import Boot from './states/boot';
  import Preload from './states/preload';
  import Menu from './states/menu';

  class Game extends Phaser.Game {
    constructor() {
      super(980, 630, Phaser.AUTO, 'game-container');

      this.state.add('Boot',         Boot);
      this.state.add('Preload',      Preload);
      this.state.add('Menu',         Menu);

      this.state.start('Boot');
    }
  }

  new Game();
```

```
  ### => js/states/preload.js

  class Preload extends Phaser.State {

    preload() {
      ...
      this.load.spritesheet('bomb', 'images/bomb.png', 35, 35);
      ...
      this.load.image('speed_up_bonus', 'images/speed_up_bonus.png');
      ...
    }

    create() {
      this.state.start('Menu');
    }
  }

  export default Preload;
```

NOTE:
1. Whole this stage you may find at: [Preload Stage](https://github.com/DmytroVasin/bomber/blob/master/client/js/states/preload.js)
2. Also you can see all pics that we will need [here](https://github.com/DmytroVasin/bomber/tree/master/client/images).
2. You can find two maps and tileset [here](https://github.com/DmytroVasin/bomber/tree/master/client/maps).

This state contains preload stage where we load your assets.
Assets devides on two tipes:

`spritesheet` and `image` - Image is just an simple image, sprite - that is banch of images. So, as you can see, we specify width: 35, height: 35 - that describe first image/frame from the banch.

Also you will find there `tilemap`. That is pretty standart setup of tilemap in phaser. Except map properties ( inside json ) that we will you later.


After all images will be loaded. The app will call menu stage.
Lest create it:

```
  ### => js/states/menu.js

  import { Text, TextButton } from '../helpers/elements';

  class Menu extends Phaser.State {

    create() {
      let background = this.add.image(this.game.world.centerX, this.game.world.centerY, 'main_menu');
      background.anchor.setTo(0.5);

      new Text({
        game: this.game,
        x: this.game.world.centerX,
        y: this.game.world.centerY - 215,
        text: 'Main Menu',
        style: {
          font: '35px Areal',
          fill: '#9ec0ba',
          stroke: '#7f9995',
          strokeThickness: 3
        }
      })

      new TextButton({
        game: this.game,
        x: this.game.world.centerX,
        y: this.game.world.centerY + 195,
        asset: 'buttons',
        callback: null,
        callbackContext: this,
        overFrame: 1,
        outFrame: 0,
        downFrame: 2,
        upFrame: 0,
        label: 'New Game',
        style: {
          font: '20px Areal',
          fill: '#000000'
        }
      });
    }
  }

  export default Menu;
```

As a background image we wil use `main_menu` image. Also we need title and button to click.

To create button I will create new helper:

```
  ### => js/helpers/elements.js

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
```

`TextButton` contains child text inside. Also we specify `overFrame`, `outFrame`, `downFrame`, `upFrame` frames - that something like: `hover`, `focus` events in CSS. That variable specify frame of the image that will be shown. Dimentions of the frame we specified inside `preload` state.

https://raw.githubusercontent.com/DmytroVasin/bomber/step2/_readme/step2/1.png

Start your server and you will see next:

You can find current working code at the repo under branch [`step2`](https://github.com/DmytroVasin/bomber/tree/step2)

https://raw.githubusercontent.com/DmytroVasin/bomber/step2/_readme/step2/2.png


# PART 3

## Part 3: Select map.

Lest add select map stage and pending game stage:

Before we start lets create `js/utils/constnats` plugin:

Add full this file that you can find [here](https://github.com/DmytroVasin/bomber/blob/master/client/js/utils/constants.js)

```
  ### => js/utils/constants
  export const AVAILABLE_MAPS = ['hot_map', 'cold_map']
  ...
```

Inside select map we should chouse on which map we will play.
At pending game stage we will waiting for another players before start.

```
  ### => client.js.app
  ...
  import SelectMap from './states/select_map';
  import PendingGame from './states/pending_game';

  class Game extends Phaser.Game {
    constructor() {
      ...
      this.state.add('SelectMap',    SelectMap);
      this.state.add('PendingGame',  PendingGame);
      ...
    }
  }

  new Game();
```

Lets add callback inside `menu` stage when user clicks on `New Game`

```
  ### => js/states/menu
  ...
  class Menu extends Phaser.State {

    create() {
      new TextButton({
        ...
        callback: this.hostGameAction,
        ...
      })
    }
    ...
    hostGameAction() {
      this.state.start('SelectMap');
    }
  }
```

For select game we will need `phase-slide` [phaser js plugin](https://github.com/netgfx/PhaseSlider).

Lets download it inside `lib/phase-slide.js` and add `<script src='lib/phaser.min.js'></script>` in `index.html`


Create `select_map` stage:

```
  ### => js/states/select_map.js

  import { AVAILABLE_MAPS } from '../utils/constants';
  import { Text, Button } from '../helpers/elements';

  class SelectMap extends Phaser.State {

    init() {
      this.slider = new phaseSlider(this);
    }

    create() {
      let background = this.add.image(this.game.world.centerX, this.game.world.centerY, 'main_menu');
      background.anchor.setTo(0.5);

      new Text({
        game: this.game,
        x: this.game.world.centerX,
        y: this.game.world.centerY - 215,
        text: 'Select Map',
        style: {
          font: '35px Areal',
          fill: '#9ec0ba',
          stroke: '#6f7975',
          strokeThickness: 3
        }
      });

      // WARN: https://github.com/netgfx/PhaseSlider/issues/1
      let hotMapImage = new Phaser.Image(this.game, 0, 0, 'hot_map_preview');
      let coldMapImage = new Phaser.Image(this.game, 0, 0, 'cold_map_preview');

      this.slider.createSlider({
        x: this.game.world.centerX - hotMapImage.width / 2,
        y: this.game.world.centerY - coldMapImage.height / 2,
        width: hotMapImage.width,
        height: hotMapImage.height,
        customHandlePrev: 'prev',
        customHandleNext: 'next',
        objects: [hotMapImage, coldMapImage]
      });

      new Button({
        game: this.game,
        x: this.game.world.centerX,
        y: this.game.world.centerY + 195,
        asset: 'check_icon',
        callback: this.confirmStageSelection,
        callbackContext: this,
        overFrame: 1,
        outFrame: 0,
        downFrame: 2,
        upFrame: 0,
      })
    }

    confirmStageSelection() {
      let map_name = AVAILABLE_MAPS[this.slider.getCurrentIndex()]

      this.state.start('PendingGame', true, false, map_name);
    }
  }

  export default SelectMap;

```
  Here we used additional helper: `Buttons` from `js/helpers/elements`
```
  ### => js/helpers/elements
  export class Button extends Phaser.Button {

    constructor({ game, x, y, asset, callback, callbackContext, overFrame, outFrame, downFrame, upFrame }) {
      super(game, x, y, asset, callback, callbackContext, overFrame, outFrame, downFrame, upFrame);
      this.anchor.setTo(0.5);

      this.game.add.existing(this);
    }

  }
```

In that stage I did next:
1. Create Background and title as we did before.
2. Init slider according to plugin readme and `accept` button to confirm map picking.
3. As a slider images I have added `hot_map_preview` and `cold_map_preview` from `images/menu/` folder.

Inside `confirmStageSelection` w used `this.state.start('PendingGame', true, false, map_name)`. Only with such syntax you can sent variable to another stage.

You can find more inside [official docs](https://phaser.io/docs/2.6.2/Phaser.StateManager.html#start). But long story short: `true` and `false` that is default values for `clearWorld` and `clearCache`.


Start your server and you will see next:

https://raw.githubusercontent.com/DmytroVasin/bomber/step3/_readme/step3/1.png


Lets add Pending game stage:

```
  ### => js/states/pending_game.js

  import { Text, TextButton } from '../helpers/elements';

  class PendingGame extends Phaser.State {

    init({ game_id }) {

    }

    create() {
      let background = this.add.image(this.game.world.centerX, this.game.world.centerY, 'main_menu');
      background.anchor.setTo(0.5);

      this.gameTitle = new Text({
        game: this.game,
        x: this.game.world.centerX,
        y: this.game.world.centerY - 215,
        text: 'NONAME GAME',
        style: {
          font: '35px Areal',
          fill: '#9ec0ba',
          stroke: '#6f7975',
          strokeThickness: 3
        }
      })

      this.startGameButton = new TextButton({
        game: this.game,
        x: this.game.world.centerX + 105,
        y: this.game.world.centerY + 195,
        asset: 'buttons',
        callback: this.startGameAction,
        callbackContext: this,
        overFrame: 1,
        outFrame: 0,
        downFrame: 2,
        upFrame: 0,
        label: 'Start Game',
        style: {
          font: '20px Areal',
          fill: '#000000'
        }
      });

      this.startGameButton.disable()

      new TextButton({
        game: this.game,
        x: this.game.world.centerX - 105,
        y: this.game.world.centerY + 195,
        asset: 'buttons',
        callback: this.leaveGameAction,
        callbackContext: this,
        overFrame: 1,
        outFrame: 0,
        downFrame: 2,
        upFrame: 0,
        label: 'Leave Game',
        style: {
          font: '20px Areal',
          fill: '#000000'
        }
      });

    }

    leaveGameAction() {
      this.state.start('Menu');
    }

    startGameAction() {
      // Start Game Action...
    }
  }

  export default PendingGame;
```

Here I added:
1. Accepts game `Id` but we left it for the future.
2. Background as always.
3. Game Title with `NONAME GAME` text ( for now )
4. `Leave Game` button that leads us to `Menu` Stage.
5. `Start Game` button with `disabled` state.

Lets add disable and enable functions:

```
  ### => js/helpers/elements

  export class TextButton extends Phaser.Button {
    ...
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
```

Start your server and you will see next:

You can find current working code at the repo under branch [`step3`](https://github.com/DmytroVasin/bomber/tree/step3)

https://raw.githubusercontent.com/DmytroVasin/bomber/step3/_readme/step3/2.png
