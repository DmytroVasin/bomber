TITLE: Bomberman Multiplayer game with Rooms based on Phaser.js Socket.io and Node.js

https://raw.githubusercontent.com/DmytroVasin/bomber/master/_readme/intro.png

Introduction:

Demo available here: [Bomb Attack Demo](https://bomb-attack.herokuapp.com/)
Source code of the Demo Repository available here: [Github repo](https://github.com/DmytroVasin/bomber)

This article will demonstrate how to build basic multiplayer game with several rooms where players can play with each others.
Server is writed on Node.js and Express.js. Client writed on Javascript framework called Phaser.
The client and the server communicate by using Socket.io via Websocket protocol.

Check out video below to see what exaclty we did. So you can open demo to play with a friend. Also check out the GitHub repo to for the entire source code.

https://player.vimeo.com/video/246595375

Full description of the game you can find [here](https://github.com/DmytroVasin/bomber)

Before we get started I will explain major topics:

Major Topics:

1. Introduction:
2. Part 1: Setup app
2.1 Setting up server
2.2 Setting up client
3. Part 2: Select and Pending stages.
3.1. Add select stage.
3.2. Add pending stage.
4. Battle arena
4.1: Display map
...
8. Part 8 Log Out.
8.1. Part 8.1 Game is over.
8.2. Part 8.2 Leave the game ( Close browser/tab )
9. Part 9. Deploy:
10. Wrapping Up

WARN: If you are familiar with Phaser.js - you should skip first 4 points and start from "Point 5"

Game has alot of disadvanteges:

- Non optimized algorithm of re-render menu and pending games
- Non secure connections and broadcasting events
- PING has big influence, because if we have alot of games it would not work well
- Menu that will overlap start play button if we will have more then 3 pending game
- Enemy interpolation. Enemy should have interpolation that depends on frame rate not base on simple ping variable.
- Player dith should be defined on server, client should not sent event about that.

But that is simple pet project to show ability of the Phaser + Socket.io.

--

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

Also please note we steput unusual command inside `package.json`

```
  ### => package.json
  ...
  "scripts": {
    "server": "webpack && node server/app.js",
    "start": "node server/app.js"
  },
  ...
```

So to start your server you need to run: `yarn start server`

Start your server with

```
  yarn start server
```

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

Before we start lets create `js/utils/constnats` plugin:

Add full this file that you can find [here](https://github.com/DmytroVasin/bomber/blob/master/client/js/utils/constants.js)

```
  ### => js/utils/constants
  export const AVAILABLE_MAPS = ['hot_map', 'cold_map']
  ...
```


## Part 3.1: Select map.

Lest add select map stage and pending game stage:

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


## Part 3.2: Pending game.

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

https://raw.githubusercontent.com/DmytroVasin/bomber/step3/_readme/step3/2.png


## Part 3.3: Pending game dummy players

As we working on pending page stage lets add some dymmy players that would be displayed on it.

At the end of the `create` state of the `pending_game` stage lets add call of the function with "dummy game" that contains `players` array. Also dummy game contains `name` of the game and `max_players` count. All this info will come from the server, but for now lets stub it.

```
  ### => js/states/pending_game
  import { Text, TextButton, PlayerSlots } from '../helpers/elements';

  class PendingGame extends Phaser.State {
    init() {
      this.slotsWithPlayer = null;
    }

    create() {
      ...

      let dummy_game = {
        name: 'Sun Game',
        max_players: 3,
        players: {
          uuid_1: {},
          uuid_2: {}
        }
      }
      this.displayGameInfo(dummy_game)
    }

    displayGameInfo({ current_game }) {
      let players = Object.values(current_game.players);

      this.gameTitle.text = current_game.name

      if (this.slotsWithPlayer) {
        this.slotsWithPlayer.destroy()
      }

      this.slotsWithPlayer = new PlayerSlots({
        game: this.game,
        max_players: current_game.max_players,
        players: players,
        x: this.game.world.centerX - 245,
        y: this.game.world.centerY - 80,
        asset_empty: 'bomberman_head_blank',
        asset_player: 'bomberman_head_',
        style: {
          font: '20px Areal',
          fill: '#48291c'
        }
      })

      if(players.length > 1) {
        this.startGameButton.enable();
      } else {
        this.startGameButton.disable();
      }
    }
    ...
  }
```

What was updated:

1. We added `PlayerSlots` helper - it would be described later. But it only create player slots based on max players and existing players. ( blank slots for empty )
2. Stub current game with dummy values
3. PlayerSlots method will refresh ( kill and create ) player slots on method call.
4. Enable `start game` button if there are more then 2 players.
5. We use predefined players. `Theodora`, `Biarid` are players with defined skins.

NOTE: Recreation of player slots is not correct way ( not perfect ). In each function call `displayGameInfo` we remove old slots and create new one - that is not performance way. At perfect world we should create AddPlayer / RemovePlayer. But that is dummy app :)

Here is definition of PlayerSlots:
I just create blank slot image for non persisted player and image + title for existing players.

```
  ### => js/helpers/elements.js

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
```

Here is the result of stubbed info.


Start your server and you will see next:

https://raw.githubusercontent.com/DmytroVasin/bomber/step3/_readme/step3/3.png

You can find current working code at the repo under branch [`step3`](https://github.com/DmytroVasin/bomber/tree/step3)



# PART 4: Battle arena

In this step we will display battle arena and current user with ability to move


## Part 4.1: Display map.

Lets add `Play` stage:

```
  ### => client/js/app.js
  import Play from './states/play';

  class Game extends Phaser.Game {
    constructor() {
      ...
      this.state.add('Play',         Play);
    }
  }
```

and update `startGameAction` that redirects user to `Play` stage

```
  ### => client/js/states/pending_game.js
  init(map_name) {
    this.map_name = map_name;
  }
  ...
  startGameAction() {
    this.state.start('Play', true, false, this.map_name);
  }
```

Lets add stage `Play`:

```
  ### => js/states/play.js

  import { TILESET, LAYER } from '../utils/constants';

  import Player from '../entities/player';
  import EnemyPlayer from '../entities/enemy_player';

  class Play extends Phaser.State {
    init(map_name) {
      this.clientPlayerId = 1

      this.currentGame = {
        map_name: map_name,
        players: {
          uuid_1: { id: 1, skin: 'Theodora', spawn: { x: 6*35,  y: 4*35  }},
          uuid_2: { id: 2, skin: 'Biarid', spawn: { x: 7*35,  y: 15*35 }}
        }
      }
    }

    create() {
      this.createMap();
      this.createPlayers();
    }

    createMap() {
      this.map = this.add.tilemap(this.currentGame.map_name);

      this.map.addTilesetImage(TILESET);

      this.blockLayer = this.map.createLayer(LAYER);
      this.blockLayer.resizeWorld();

      this.map.setCollision(this.blockLayer.layer.properties.collisionTiles)

      this.player  = null;
      this.enemies = this.game.add.group();
    }

    createPlayers() {
      for (let player of Object.values(this.currentGame.players)) {
        let setup = {
          game:   this.game,
          id:     player.id,
          spawn:  player.spawn,
          skin:   player.skin
        }

        if (player.id === this.clientPlayerId) {
          this.player = new Player(setup);
        } else {
          this.enemies.add(new EnemyPlayer(setup))
        }
      }
    }
  }

  export default Play;
```

We again stub `currentPlayer` and `currentGame` inside `init` state;

Then in `create` state we init Map, that is realy standart way of map init. I just pick collision tiles from layer properties ( layer.properties.collisionTiles, properties also contains some another parameters, but for now we use only collisionTiles ). That numbers are defined inside [map.json](https://github.com/DmytroVasin/bomber/blob/master/client/maps/cold_map.json#L38). We did not hard code tham because we have different maps.

Also we create `player` and `enemies` group. Enemy and Player would be defined inside another class ( entities ) to keep OOP style:

```
  ### => js/entities/player.js

  import {
    PING, TILE_SIZE, MAX_SPEED, STEP_SPEED, INITIAL_SPEED, SPEED, POWER, DELAY,
    MIN_DELAY, STEP_DELAY, INITIAL_DELAY, INITIAL_POWER, STEP_POWER
  } from '../utils/constants';

  import { Text } from '../helpers/elements';

  export default class Player extends Phaser.Sprite {

    constructor({ game, id, spawn, skin }) {
      super(game, spawn.x, spawn.y, 'bomberman_' + skin);

      this.game = game;
      this.id = id;
      this.skin = skin;

      this.prevPosition = { x: spawn.x, y: spawn.y };
      this.game.add.existing(this);
      this.game.physics.arcade.enable(this);
      this.body.setSize(20, 20, 6, 6);

      this.defineSelf(skin)
    }

    update() {
      this.game.debug.body(this);
      this.game.debug.spriteInfo(this, 32, 32);
    }

    defineSelf(name) {
      let playerText = new Text({
        game: this.game,
        x: TILE_SIZE / 2,
        y: -10,
        text: `\u272E ${name} \u272E`,
        style: {
          font: '15px Areal',
          fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 3
        }
      })

      this.addChild(playerText);
    }
  }
```

NOTE: We define all constants - to not come back here ( but for now we do not use tham all )

For player entity we make user little bit smaller that skin with `this.body.setStyle(20, 20, 6, 6)`
To show you how that is work - inside `update` method we add several debug lines - so you can see real body of the Player.

Also we added `defineSelf` function that function will create Text above Current player. Text will be something like that: `* Theodora *`

```
  ### => js/entities/enemy_player.js

  import { TILE_SIZE, PING } from '../utils/constants';
  import { Text } from '../helpers/elements';

  export default class EnemyPlayer extends Phaser.Sprite {

    constructor({ game, id, spawn, skin }) {
      super(game, spawn.x, spawn.y, 'bomberman_' + skin);

      this.game = game
      this.id = id;

      this.currentPosition = spawn;
      this.lastMoveAt = 0;

      this.game.physics.arcade.enable(this);
      this.body.setSize(20, 20, 6, 6);
      this.body.immovable = true;

      this.defineSelf(skin)
    }

    update () {
      this.game.debug.body(this);
    }

    defineSelf(name) {
      let playerText = new Text({
        game: this.game,
        x: TILE_SIZE / 2,
        y: -10,
        text: name,
        style: {
          font: '14px Areal',
          fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 3
        }
      })

      this.addChild(playerText);
    }
  }
```

We also defined function that draws name of the enemy but without stars at start and at the end.

NOTE: We should add `this.body.immovable = true` to make out enemy non moveble when current player collide with enemies.

Start your server and you will see next:

https://raw.githubusercontent.com/DmytroVasin/bomber/step4/_readme/step4/1.png

## Part 4.2: Add ability to move.

Lets add player movment ability:

```
  ### => js/entities/player.js

  export default class Player extends Phaser.Sprite {

    constructor({ game, id, spawn, skin }) {
      ...
      this.speed = INITIAL_SPEED;

      this.animations.add('up', [9, 10, 11], 15, true);
      this.animations.add('down', [0, 1, 2], 15, true);
      this.animations.add('right', [6, 7, 8], 15, true);
      this.animations.add('left', [3, 4, 5], 15, true);

      this.defineKeyboard()
    }

    update() {
      if (this.alive) {
        this.handleMoves()
      }
      ...
    }

    defineKeyboard() {
      this.upKey    = this.game.input.keyboard.addKey(Phaser.Keyboard.UP)
      this.downKey  = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN)
      this.leftKey  = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT)
      this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
      this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    }

    handleMoves() {
      this.body.velocity.set(0);
      let animationsArray = []

      if (this.leftKey.isDown){
        this.body.velocity.x = -this.speed;
        animationsArray.push('left')
      } else if (this.rightKey.isDown) {
        this.body.velocity.x = this.speed;
        animationsArray.push('right')
      }

      if (this.upKey.isDown) {
        this.body.velocity.y = -this.speed;
        animationsArray.push('up')
      } else if (this.downKey.isDown) {
        this.body.velocity.y = this.speed;
        animationsArray.push('down')
      }

      let currentAnimation = animationsArray[0]
      if (currentAnimation){
        this.animations.play(currentAnimation)
        return
      }

      this.animations.stop();
    }
  }
```

Here I did next:
1. Keyboard shortcats in `defineKeyboard`
2. Add diferent animations `up`, `down`, `left`, `right`
3. Call `handleMoves` function inside `update` state only for alive player ( player will be not alive when we call `kill` on it in the future.)
4. `handleMoves` little bit big because we implement logic when user push several buttons and play moves correctly.
5. Speed of the player we move into player object because speed can be changed dynamicaly.

Also we should add collision between player and current map for that we will define `update` state inside `Play` stage

```
  ### => js/states/play.js

  class Play extends Phaser.State {

    update() {
      this.game.physics.arcade.collide(this.player, this.blockLayer);
      this.game.physics.arcade.collide(this.player, this.enemies);
    }
  }
```

Start your server and you will see next:

https://raw.githubusercontent.com/DmytroVasin/bomber/step4/_readme/step4/2.png

## Part 4.2: Add ability to pic spoils.

Lets create spoils:

```
  ### => js/states/play.js

  import Spoil from '../entities/spoil';

  class Play extends Phaser.State {
    createMap () {
      this.spoils  = this.game.add.group();

      this.spoils.add(new Spoil(this.game, { id: 1, col: 10, row: 7, spoil_type: 0 } ));
      this.spoils.add(new Spoil(this.game, { id: 2, col: 7, row: 5, spoil_type: 2 } ));
      this.spoils.add(new Spoil(this.game, { id: 4, col: 9, row: 7, spoil_type: 1 } ));
    }

    update() {
      ...
      this.game.physics.arcade.overlap(this.player, this.spoils, this.onPlayerVsSpoil, null, this);
    }

    onPlayerVsSpoil(player, spoil) {
      findAndDestroyFrom(spoil.id, this.spoils);

      spoil.kill();
    }
  }
```

```
  ### => js/utils/utils.js

  export const findFrom = function(id, entities) {
    for (let entity of entities.children) {
      if (entity.id !== id) { continue }

      return entity
    }
    return null;
  }

  export const findAndDestroyFrom = function(id, entities) {
    let entity = findFrom(id, entities);
    if (!entity) { return }

    entity.destroy()
  }
```

```
  ### => js/entities/spoil.js

  import { SPEED, POWER, DELAY, TILE_SIZE } from '../utils/constants';
  export default class Spoil extends Phaser.Sprite {
    constructor(game, spoil) {
      let spoil_type;
      if (spoil.spoil_type === DELAY) {
        spoil_type = 0
      }
      if (spoil.spoil_type === POWER) {
        spoil_type =  1
      }
      if (spoil.spoil_type === SPEED) {
        spoil_type = 2
      }

      super(game, (spoil.col * TILE_SIZE), (spoil.row * TILE_SIZE), 'spoil_tileset', spoil_type);

      this.id = spoil.id
      this.spoil_type = spoil.spoil_type

      this.game.physics.arcade.enable(this);
    }
  }
```

Inside createMap we create spoils group that contains all our spoils and add spoils with different type into that group. We have three type: 0,1,2 (DELAY, POWER, SPEED)

Then we should add overlap effect ( when user overlap spoil ). On overlapping we call `onPlayerVsSpoil` function.

Inside function `onPlayerVsSpoil` we collect that spoil and kill spoil tile(that makes our tile `alive = false` and then we remove that tile from our spoil group. For killing tile we use utils method `findAndDestroyFrom`

Our `entities/spoil.js` just create sprite for our spoil with different tiles ( Delay, Power, Speed tiles )

Start your server and you will see next:

https://raw.githubusercontent.com/DmytroVasin/bomber/step4/_readme/step4/3.png

## Part 4.3: Add notification when player pick spoil.

Lets improve our `onPlayerWithSpoil` function:

```
  ### => js/states/play.js

  onPlayerVsSpoil(player, spoil) {
    this.player.pickSpoil(spoil_type)
    ...
```

```
  ### => js/entities/player.js

  import { SpoilNotification, Text } from '../helpers/elements';
  ...
  constructor({ game, id, spawn, skin }) {
    ...
    this.delay = INITIAL_DELAY;
    this.power = INITIAL_POWER;
    ...
  }
  ...
  pickSpoil( spoil_type ){
    if ( spoil_type === SPEED ){ this.increaseSpeed() }
    if ( spoil_type === POWER ){ this.increasePower() }
    if ( spoil_type === DELAY ){ this.increaseDelay() }
  }

  increaseSpeed(){
    let asset = 'speed_up_no_bonus'

    if (this.speed < MAX_SPEED) {
      this.speed = this.speed + STEP_SPEED;
      asset = 'speed_up_bonus'
    }

    new SpoilNotification({ game: this.game, asset: asset, x: this.position.x, y: this.position.y })
  }

  increaseDelay(){
    let asset = 'delay_up_no_bonus'

    if (this.delay > MIN_DELAY){
      this.delay -= STEP_DELAY;
      asset = 'delay_up_bonus'
    }

    new SpoilNotification({ game: this.game, asset: asset, x: this.position.x, y: this.position.y })
  }

  increasePower(){
    let asset = 'power_up_bonus'

    this.power += STEP_POWER;

    new SpoilNotification({ game: this.game, asset: asset, x: this.position.x, y: this.position.y })
  }
  ...

```

```
  ### => js/helpers/elements.js

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
```

That is small improvment I just add `SmallNotification` helper and defined several `increaseSomething` functions in which we used threshold check.

Power has no limit to increase, but delay and speed has MIN, MAX thresholds. Speed can not be bigger then 350 and delay can not be less then 0,5 second. Also we add initial delay and power equal to `INITIAL_DELAY` and `INITIAL_POWER`

`SpoilNotification` helper only add image that depends on spoil type above current player position. Then I start animate that image to `-25` pixels up and to `alpha = 0` ( opacity ), then `onComplete` I just kill that `spoilNotification` object with all his child.


Start your server and you will see next:

https://raw.githubusercontent.com/DmytroVasin/bomber/step4/_readme/step4/4.png



## Part 4.4: Add player info (HUD).

```
  ### => js/entities/player.js

  import Info from './info';
  ...
  constructor({ game, id, spawn, skin }) {
    ...
    this.info = new Info({ game: this.game, player: this });
    ...
  }
  ...

  increaseSpeed(){
    ...
    this.info.refreshStatistic();
  }
  increaseDelay(){
    ...
    this.info.refreshStatistic();
  }
  increasePower(){
    ...
    this.info.refreshStatistic();
  }

```

```
  ### => js/entities/info.js

  export default class Info {

    constructor({ game, player }) {
      this.game = game;
      this.player = player;

      this.style    = { font: '14px Arial', fill: '#ffffff', align: 'left' }

      let bootsIcon  = new Phaser.Image(this.game, 5, 2, 'placeholder_speed');
      this.speedText = new Phaser.Text(this.game, 35, 7, this.speedLabel(), this.style);
      bootsIcon.addChild(this.speedText)
      this.game.add.existing(bootsIcon);

      let powerIcon  = new Phaser.Image(this.game, 110, 2, 'placeholder_power');
      this.powerText = new Phaser.Text(this.game, 35, 7, this.powerLabel(), this.style);
      powerIcon.addChild(this.powerText)
      this.game.add.existing(powerIcon);

      let delayIcon  = new Phaser.Image(this.game, 215, 2, 'placeholder_time');
      this.delayText = new Phaser.Text(this.game, 35, 7, this.delayLabel(), this.style);
      delayIcon.addChild(this.delayText)
      this.game.add.existing(delayIcon);
    }

    refreshStatistic() {
      this.speedText.text = this.speedLabel();
      this.powerText.text = this.powerLabel();
      this.delayText.text = this.delayLabel();
    }

    speedLabel() {
      return this.player.speed
    }

    powerLabel() {
      return `x ${this.player.power}`
    }

    delayLabel() {
      return `${this.player.delay / 1000} sec.`
    }
  }

```

We initialize new helper `info` and inside each `increaseSomething` function we refresh players HUD.

Our HUD that is only three images with three dynamicaly updated text ( info we pick from player ). Very simple.

Start your server and you will see next:

https://raw.githubusercontent.com/DmytroVasin/bomber/step4/_readme/step4/5.png



## Part 4.5: Add ability to place the bomb.

Now lets add `add_bomb` event that reacts when user press `spacebar`

I've already define `spaceKey` inside `player.js`. Lets add `handleBombs` below `handleMoves`

```
  ###=> js/entities/player.js

  constructor({ game, id, spawn, skin, play }) {
    ...
    this.play = play;
    this._lastBombTime = 0;
  }

  update() {
    if (this.alive) {
      this.handleMoves()
      this.handleBombs()
    }
    ...
  }

  handleBombs() {
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      let now = this.game.time.now;

      if (now > this._lastBombTime) {
        this._lastBombTime = now + this.delay;

        this.game.onShowBomb({ bomb_id: 'xxx', col: this.currentCol(), row: this.currentRow() })
      }
    }
  }

  currentCol() {
    return Math.floor(this.body.position.x / TILE_SIZE)
  }

  currentRow() {
    return Math.floor(this.body.position.y / TILE_SIZE)
  }
```

```
  ### => js/states/play.js

  class Play extends Phaser.State {
    import Bomb from '../entities/bomb';
    ...
    update() {
      ...
      this.game.physics.arcade.collide(this.player, this.bombs);
    }

    createMap(){
      ...
      this.bombs   = this.game.add.group();
    }
    ...
    onShowBomb({ bomb_id, col, row }) {
      this.bombs.add(new Bomb(this.game, bomb_id, col, row));
    }
    ...

    createPlayers() {
      for (let player of Object.values(this.currentGame.players)) {
        let setup = {
          ...
          play:   this
        }
  }
```

```
  ### => js/entities/bomb.js

  import { TILE_SIZE, EXPLOSION_TIME } from '../utils/constants';

  export default class Bomb extends Phaser.Sprite {

    constructor(game, id, col, row) {
      let centerCol = (col * TILE_SIZE) + TILE_SIZE / 2
      let centerRow = (row * TILE_SIZE) + TILE_SIZE / 2

      super(game, centerCol, centerRow, 'bomb_tileset');
      this.scale.setTo(0.7);
      this.anchor.setTo(0.5);

      this.game = game
      this.id = id;

      this.game.physics.arcade.enable(this);

      this.game.add.tween(this.scale).to({ x: 1.2, y: 1.2 }, EXPLOSION_TIME, Phaser.Easing.Linear.None, true);

      this.body.immovable = true;

      this.animations.add('bomb', [0,1,2,3,4,5,6,7,8,9,10,11,12,13], 6, true);
      this.animations.play('bomb');
    }

    update() {
      this.game.debug.body(this);
    }

  }
```

As a first step we defind `handleBombs` function that works only with delay ( user should only place bomb with delay ). This function calls `onShowBomb` from `Play` object that was defined as a dependency injection ( inside `contructor` ).
`onShowBomb` receive three parameters: Id of the bomb ( to remove it in the future ), add current cell coordinates that was calculated with help of `currentCol`, `currentRow` functions.

Inside `play.js` we import `Bomb` entity. To add collide effect between player and bomb (player should not cross through bomb) we place bombs inside new bombs group.

`bomb.js` is small entity that builds new Sprite for the bomb.
Here is several thing that we did inside it:
1. To debug it properly I've add update function with debug info.
2. Bomb should scale while expolsion time. I added new tween for this ( this.game.add.tween ) with scale ability.
3. While explosion time bomb should animate properly, thats why we use bomb animation with `bomb_tileset` image. Read more about how to do that inside [official documentation](https://phaser.io/docs/2.4.4/Phaser.AnimationManager.html#add)


Start your server and you will see next:

https://raw.githubusercontent.com/DmytroVasin/bomber/step4/_readme/step4/6.png


## Part 4.6: Add ability to leave game mannually

Lets add ability to leave the game by clicking `Enter`.

NOTE: We just add it for now, in the future player will have to close window or loose to have ability to quit the game.

To do that we defind `enter` event handler inside our `play.js` and create new stage.

```
  ### => js/states/play.js
  ...
  update() {
    ...
    if( this.game.input.keyboard.isDown(Phaser.Keyboard.ENTER) ) {
      this.onPlayerWin(this.player.skin);
    }
  }
  ...

  onPlayerWin(winner_skin) {
    this.state.start('Win', true, false, winner_skin);
  }
```

```
  ### => js/app.js

  import Win from './states/win';

  class Game extends Phaser.Game {
    constructor() {
      ...
      this.state.add('Win',          Win);
      ...
    }
  }
```

```
  ### => js/states/win.js

  import { Text } from '../helpers/elements';

  class Win extends Phaser.State {

    init(winner_skin) {
      this.skin = winner_skin
    }

    create() {
      new Text({
        game: this.game,
        x: this.game.world.centerX,
        y: this.game.world.centerY,
        text: this.winnerText(),
        style: {
          font: '30px Areal',
          fill: '#FFFFFF'
        }
      })
    }

    update() {
      if( this.game.input.keyboard.isDown(Phaser.Keyboard.ENTER) ) {
        this.returnToMenu();
      }
    }

    returnToMenu() {
      this.state.start('Menu');
    }

    winnerText() {
      if (this.skin) {
        return `Player: "${this.skin}" won! Press Enter to return to main menu.`
      }

      return 'Opponent left! Press Enter to return to main menu.'
    }
  }

  export default Win;

```

We just created new state like we did before.

This state receives one attribute - `skin`. That mean we will show the name of the winner.
Inside `Win` stage I define wining text and create keyboard event handler that transfer us to main menu when we press `Enter` again.

NOTE: You can call onPlayerWin without any attributes because `Win` stage should works even when opponen quit the game via close browser window.


Start your server and you will see next:

https://raw.githubusercontent.com/DmytroVasin/bomber/step4/_readme/step4/7.png

You can find current working code at the repo under branch [`step4`](https://github.com/DmytroVasin/bomber/tree/step4)


## Part 5: Add Socket.io

Previously we implement pretty standard Phaser.js app.

But now lets add real-time communication. So when player perform some action ( moving, picking room or ets ) we sent that event to server. Server also can notify users about some changes in any time. To achive this I will use [socket.io](https://socket.io/) library. This small library enables real-time bidirectional event-based communication between server and client via [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).

Socket.io - is easy to understand and use:

Our app splitted on two part: Server and Client.

Client will iterract only with server via sending events through socket object like:

```
clientSocket.emit('some event', 'this is a test');
```

This message will have the label 'some event'. A second argument will contain additional data that client want to sent to the server or we can sent a callback function to it.


Server should has handlers on all clients events like:

```
  serverSocket.sockets.on('connection', function(socket) {
    socket.on('some event', onEventHandler);
  }
```

Also server can broadcast events to any client or group that connected to it:

```
  # Sent to all client that belongs to the room with id: 'game_id'
  serverSocket.sockets.in('game_id').emit('playerCoordinates', '...');

  # Sent to all client that belongs to the room with id: 'game_id' except sender.
  serverSocket.sockets.to('game_id').emit('startGame', '...');
```

Find out [more here](https://socket.io/docs/)


Little bit information about what we will do under next steps:

I will implement multy room structure. All players connect to one lobby(main menu) room and sit there until left (quit the app) or pick some dirrect room.
While they live inside the lobby room they will receive events ( notifications ) from the server about new rooms initiated by another users.

When they pick or create new room, they stop receving notification from lobby and start subscribe to events from current room. User that already joined to the romm will receive notifications about "Player joined" and "Player Left"

Such setup really simmular to chat where you have common chat ( with all users ) and private chat ( with specific users ).

Lets start:


## Part 5.1: Setup Socket.io

First of all we need to add `socket.io` into our `package.json`: `yarn add socket.io` also lets add `uuid` for easy creation of `id` for our entities. `yarn add uuid`

More deep setup you can find inside [official documentation](https://socket.io/get-started/chat/)

Then we need to improve our `server/app.js` file

```
  ### => server/app.js
  const socketIO = require('socket.io');
  ...
  serverSocket = socketIO(server);
  serverSocket.sockets.on('connection', function(client) {
    console.log('New player has connected: ' + client.id);

    // client.on('enter lobby', Lobby.onEnterLobby);
  });
```

Here we tell `socket.io` to listen `connection` event which will be fired each time when new user connect to the server ( open the page ). When new user open the page, socket.io will call function that defined as a second argument of sockets.on event. As an argument function will receive socket (client) used to establish the connection.

Also we need to update our `index.html` to include js file to the app.

```
  ### => client/app.js

  <script src='/socket.io/socket.io.js'></script>

  <script>
    window.clientSocket = io.connect();
  </script>
  ...
```

Also add `clientSocket` to the global variable to use it from any place of our app.

Now when you open launch your server you will so in console:

https://raw.githubusercontent.com/DmytroVasin/bomber/step5/_readme/step5/1.png

That phrase means that you setup `socket.io` correctly.


## Part 5.2: Write first socket.io event.

Lets write our first event:

When our user open main menu we should add it to common room ( `lobby_room` ). Also we should show to him already created rooms. We will create such behaviour through socket.io `callbacks`.


Lets update our `menu` state

```
  ### => client/js/states/menu.js
  import { Text, TextButton, GameSlots } from '../helpers/elements';

  class Menu extends Phaser.State {

    init() {
      this.slotsWithGame = null;
    }

    create() {
      ...
      clientSocket.emit('enter lobby', this.displayPendingGames.bind(this));
    }

    displayPendingGames(availableGames) {
      if (this.slotsWithGame) {
        this.slotsWithGame.destroy()
      }

      this.slotsWithGame = new GameSlots({
        game: this.game,
        availableGames: availableGames,
        callback: this.joinGameAction,
        callbackContext: this,
        x: this.game.world.centerX - 220,
        y: 160,
        style: {
          font: '35px Areal',
          fill: '#efefef',
          stroke: '#ae743a',
          strokeThickness: 3
        }
      })
    }

    joinGameAction(game_id) {
    }
  }
```

```
  ### => js/helpers/elements.js

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
```

As you can see on `create` stage we emit `enter lobby` event and as a second argument we insert our `displayPendingGames` function that is bind to this ( Menu ). If we will not set that - this will be defined as `socket`.

`displayPendingGames` as an attributes receives array with the games from the server and creates `GameSlots` based on it.

`GameSlots` is really similar to our `PlayersSlots` but with different styles.

NOTE: `displayPendingGames` is not optimal way to preview slots, we should implement AddSlotToGroup, RemoveSlotFromGroup but we create dummy app - so it is not important for us. I triying to care about readability, not about performance.


To keep our app.js neat and clean lets create `lobby.js` namespace.

```
  ### => server/app.js

  serverSocket.sockets.on('connection', function(client) {
    ...
    client.on('enter lobby', Lobby.onEnterLobby);
  });
```

```
  ### => server/lobby.js

  var lobbyId = 'lobby_room';

  var Lobby = {
    onEnterLobby: function (callback) {
      // this == socket
      this.join(lobbyId);

      callback( Lobby.availablePendingGames() )
    },

    availablePendingGames: function() {
      return [{
        id: 1,
        name: 'First game'
      }, {
        id: 2,
        name: 'Second game'
      }];
    }
  }

  module.exports = Lobby;
```

NOTE: We add `client.on` method that will handle different messages (not only enter lobby). So each time when client send some message through his socket, server will call apropriate callback for that request.

In this case we define handler to `enter lobby` event and specify what should we do when this event happen.

Inside lobby.js we just join our current socket connection ( current player ) to common room: 'lobby_room'. Add return dummy array with the games.

Lets start our server

`yarn server run`

And you will see next:
https://raw.githubusercontent.com/DmytroVasin/bomber/step5/_readme/step5/1.png


## Part 5.3: Create more Lobby events:

Also we should implement `leave lobby` event. We will use it to left main menu and "on disconnect".

```
  ### => server/app.js

  serverSocket.sockets.on('connection', function(client) {
    ...
    client.on('leave lobby', Lobby.onLeaveLobby);
  });
```

```
  ### => server/lobby.js

  onLeaveLobby: function() {
    this.leave(lobbyId);
  }
```

`this` inside `onLeaveLobby` function is currrent socket connection.

That is it! Very easy - we just left the room with 'lobby_room' id.

We should add that event when we click `hostGameAction` ( Start picking new map ) and `joinGameAction` ( Join to existing game ).
If we do not do that - we continue receive emits that belongs to lobby_room ( for now we do not have such events - but we will )

```
  ### => js/states/menu.js

  class Menu extends Phaser.State {
    ...
    joinGameAction(game_id) {
      clientSocket.emit('leave lobby');
      this.state.start('PendingGame', true, false, 'hot_map');
    }

    hostGameAction() {
      clientSocket.emit('leave lobby');
      this.state.start('SelectMap');
    }
  }
```

I used `this.state.start('PendingGmae')` with 'hot_map' parameter - we just use dummy id, but we will fix it immidiatly.

NOTE: We use `clientSocket.emit` and  `this.state.start`, but `emit` is async action - thats why it would be proper to use change state inside callback. But still - that is dummy app.


Now inside `SelectMap` state we need emit `create game` inside `confirmStageSelection`

So logic is next:
1. When user pick map - I should sent event to the server with map_name
2. User ( that pics map ) should be automatically added to that game.
2. On server we create Game object and add it in AvailableGames.
3. Sent event to all users ( in lobby ) with newly updated AvaiableGames array.
4. Lobby Users rerender GameSlots in there view.

Lets implment that:

```
  ### => js/states/select_map.js

  confirmStageSelection() {
    let map_name = AVAILABLE_MAPS[this.slider.getCurrentIndex()]

    clientSocket.emit('create game', map_name, this.joinToNewGame.bind(this));
  }

  joinToNewGame(game_id) {
    this.state.start('PendingGame', true, false, game_id);
  }
```

```
  ### => js/states/pending_game.js

  class PendingGame extends Phaser.State {

    init(game_id) {
      this.game_id = game_id;
      ...
    }
    ...
    startGameAction() {
      this.state.start('Play', true, false, this.game_id);
    }
  }

```

Here we rewrite `confirmStageSelection`, now we pick map and emit that map to the server, then as a server callback we receive `game_id` and change state with it.

Also `PendingGame` now receive `game_id` not `map_name`

Now we need to define: `create game` event:

```
  ### => server/app.js

  serverSocket.sockets.on('connection', function(client) {
    client.on('create game', Lobby.onCreateGame);
  });
```

Next we need to define `onCreateGame` inside Lobby.

```
  ### => server/lobby.js

  var { Game } = require('./entity/game');
  var pendingGames = new Map();
  ...
  var Lobby = {
    ...
    onCreateGame: function(map_name, callback) {
      var newGame = new Game({ map_name: map_name });
      pendingGames.set(newGame.id, newGame);

      Lobby.updateLobbyGames()

      callback({ game_id: newGame.id });
    },
    ...
    availablePendingGames: function() {
      return [...pendingGames.values()].filter(item => item.isFull() === false );
    },

    updateLobbyGames: function() {
      serverSocket.sockets.in(lobbyId).emit('display pending games', Lobby.availablePendingGames() );
    }
  }
```

Also we define `server/constants.js`. You can find all constants [here](https://github.com/DmytroVasin/bomber/blob/master/server/constants.js#L19)

```
  ### => server/entity/game.js

  const { TILE_SIZE, EMPTY_CELL, DESTRUCTIBLE_CELL, NON_DESTRUCTIBLE_CELL, SKINS } = require('../constants');

  var uuidv4 = require('uuid/v4');
  var faker = require('faker');

  class Game {
    constructor({ map_name }) {
      this.id           = uuidv4();
      this.name         = faker.commerce.color()
      this.map_name     = map_name;

      this.layer_info   = require('../../client/maps/' + this.map_name + '.json').layers[0]
      this.max_players  = this.layer_info.properties.max_players

      this.players     = {}
    }

    isFull() {
      return Object.keys(this.players).length === this.max_players
    }
  }

  exports.Game = Game;
```

This function do next: It create new game object from `entity/game`. Object has dynamically generated `name` and `id` fields.
Then we add this object to `Map` ( or hash, associative array - I personnaly prefer Map construction ) with `id` as a key.

Then we should call `updateLobbyGame` function that will emit event that will warn all users that live inside `lobby_room` that new game was created.

Also we rewrite `availablePendingGames` function - now it returns correct real games ( non full games )

Lastly we call callback with newly created game id.

New Game contains `id`, `name`, `map_name` property and has `isFull` function that returns 'true' or 'false' depending on count of players that it has. For now we keep players blank.

Also please note `max_players` we pick [dirrectly from the map](https://github.com/DmytroVasin/bomber/blob/step5/client/maps/cold_map.json#L37). That is not good solution - but it works.

Lets define `display pending games` inside Main menu:

```
  ### => js/states/menu.js

  class Menu extends Phaser.State {
    init() {
      ...
      clientSocket.on('display pending games', this.displayPendingGames.bind(this));
    }
    ...
  }
```

NOTE: Do not forget to add `faker` and `uuid` as an yarn package.

Lets start our server in two separate window

And you will see next:
https://raw.githubusercontent.com/DmytroVasin/bomber/step5/_readme/step5/3.png



## Part 5.4: Add players to the game.

Now we will add real players to our game.

Player should be added when he visit `PendingGame` and should be removed when he left `PendingGame`

```
  ### => js/states/pending_game.js

  class PendingGame extends Phaser.State {

    init({ game_id }) {
      ...
      this.game_id = game_id
      clientSocket.emit('enter pending game', { game_id: this.game_id });
    }
  }
```
```
  ### => server/app.js

  serverSocket.sockets.on('connection', function(client) {
    ...
    client.on('enter pending game', Lobby.onEnterPendingGame);
  }
```
```
  ### => server/lobby.js

  ...
  onEnterPendingGame: function ({ game_id }) {
    let current_game = pendingGames.get(game_id);

    this.join(current_game.id);

    this.socket_game_id = current_game.id;

    current_game.addPlayer(this.id);

    if ( current_game.isFull() ){
      Lobby.updateLobbyGames();
    }

    Lobby.updateCurrentGame(current_game)
  }

  updateCurrentGame: function(game) {
    serverSocket.sockets.in(game.id).emit('update game', { current_game: game });
  }
```

Inside init state with emit event 'enter pending game'. On emit from the client we should call onEnterPendignGame, where we:

1. Find current game
2. Join current socket to that game
3. Store game id inside socket connection `socket_game_id`, because we should have ability to find it on disconnect.
4. Add player to the game
5. Sent event to all users that are inside lobby game when game is full ( something like remove game from the list )
6. Sent event to all users that are inside current game ( update player slots )

In point 6 we notify all users that are exist inside game, that will allows them to update Player Slots.
Lets subscribe on this event:

```
  ### => js/states/pending_game.js

  init({ game_id }) {
    ...
    clientSocket.on('update game', this.displayGameInfo.bind(this));
  }

  create() {
    // Remove Dummny display game call.
  }
  ...
```

```
  ### => js/state/menu.js

  joinGameAction() {
    ...
    <!-- Now our game has id, so we can change `map_name` to `game_id` -->
    this.state.start('PendingGame', true, false, game_id);
  }
```

Do not forget to remove Dummny display game call at the end of `create` stage.

When user open pending game stage, he subscribes to `update game` event and call `enter pending game` that add ( on server ) current player to that game ( update players ) and call `update game` event, that rerender `displayGameInfo` for each user that exist inside game.

Now we only need to add `addPlayer` to our Game.


```
  ### => server/entity/game.js

  var { Player } = require('./player');

  class Game {
    constructor({ map_name }) {
      ...
      this.players     = {}
      this.playerSkins = SKINS

      this.playerSpawns = this.layer_info.properties.spawns.slice()
    }

    addPlayer(id) {
      let skin = this.getAndRemoveSkin()
      let [spawn, spawnOnGrid] = this.getAndRemoveSpawn()

      let player = new Player({ id: id, skin: skin, spawn: spawn, spawnOnGrid: spawnOnGrid })
      this.players[player.id] = player
    }

    getAndRemoveSkin() {
      let index = Math.floor(Math.random() * this.playerSkins.length);
      let randomSkin = this.playerSkins[index];
      this.playerSkins.splice(index, 1);

      return randomSkin;
    }

    getAndRemoveSpawn() {
      let index = Math.floor(Math.random() * this.playerSpawns.length);
      let spawnOnGrid = this.playerSpawns[index];
      this.playerSpawns.splice(index, 1);

      let spawn = { x: spawnOnGrid.col * TILE_SIZE, y: spawnOnGrid.row * TILE_SIZE };
      return [spawn, spawnOnGrid];
    }
  }
```

```
  ### => server/entity/player.js

  const { POWER, INITIAL_POWER, STEP_POWER } = require('../constants');

  class Player {

    constructor({ id, skin, spawn, spawnOnGrid }) {
      this.id          = id;
      this.skin        = skin;
      this.spawn       = spawn;
      this.spawnOnGrid = spawnOnGrid;

      this.isAlive = true;

      this.power = INITIAL_POWER;
    }
  }

  exports.Player = Player;
```

Player will be defined like separate class. But game will contain function that add that player.

Function lloks complicated but everything wat they do is Pick random Skin ( from the constant ) and Spawn ( from the object that defined inside [map.json](https://github.com/DmytroVasin/bomber/blob/master/client/maps/hot_map.json#L42) )

Several Warnings:
1. For players and playerSkings we should use Object ( hash ), not Map, WeekMap etc. because Socket.io do not uderstand such types.
2. `playerSpawns` should be copied as an object not reference to the object, because properties.wpawns global object so we can't change it

That is it!

Start your server and you will see next:

https://raw.githubusercontent.com/DmytroVasin/bomber/step5/_readme/step5/4.gif


NOTE: If you want to debug server side - just add `--inspect` to `package.json`

Find out [more here](NODE INSPECTOR: https://nodejs.org/en/docs/inspector/)

```
  ### => package.json
  "server": "webpack && node --inspect server/app.js",
```

## Part 5.4: Remove players from the game.

Let add ability to left the game:

```
  ### => pending_game.js

  leaveGameAction() {
    clientSocket.emit('leave pending game');
    ...
  }
```

When user clicks `leaveGameAction` we should emit action 'leave pending game'

Lets define it:

```
  ### => server/app.js
  ...
  client.on('leave pending game', Lobby.onLeavePendingGame);
```

```
  ### => server/lobby.js

  onLeavePendingGame: function() {
    let current_game = pendingGames.get(this.socket_game_id);

    if (current_game) {
      this.leave(current_game.id);
      this.socket_game_id = null;

      current_game.removePlayer(this.id);

      if( current_game.isEmpty() ){
        pendingGames.delete(current_game.id);
        Lobby.updateLobbyGames();
        return
      }

      if ( !current_game.isFull() ){
        Lobby.updateLobbyGames();
      }

      Lobby.updateCurrentGame(current_game)
    }
  },
```

```
  ### => server/entity/game.js
  ...
  removePlayer(id) {
    let player = this.players[id];

    this.playerSkins.push(player.skin)
    this.playerSpawns.push(player.spawnOnGrid)

    delete this.players[id];
  }

  isEmpty() {
    return Object.keys(this.players).length === 0
  }
```

That was easy:
1. We should delete the game if game do not contain any players.
2. Update lobby meny if the game is full
3. Update current game view.

Inside `game.js` we defind removePlayer function that return skin and spawn back to the game

NOTE: I know that is not perfect way of implementing spawn and naming system - but still, that is dummy app.

Now we can left the game properly.


Start your server and you will see next:

https://raw.githubusercontent.com/DmytroVasin/bomber/step5/_readme/step5/5.gif

You can find current working code at the repo under branch [`step5`](https://github.com/DmytroVasin/bomber/tree/step5)


## Part 6: Start Play

To start play, game must have 2 or more players connected to one room.

Then game will allows you to click 'Start Game' button.

Any player can start the game:

1. Player click on "Start the game" button
2. We sent event to the server,
3. On server side we convert "pending game" to "game"
4. Server sent notification to all users that belongs to that game about game init.
5. All users change the state to "Play"


## Part 6.1: Start the game:

Let implement that logic step by step:

First of all we need to chagne `pendingGame` state: We need to add 'start game' event to it.

```
  ### =>js/states/pending_game.js
  ...
  startGameAction() {
    clientSocket.emit('start game');
  }
```

```
  ### => server/app.js

  const Play     = require('./play');

  serverSocket.sockets.on('connection', function(client) {
    ...
    client.on('start game', Play.onStartGame);
  }
```

```
  ### => server/play.js

  var Lobby    = require('./lobby');
  var { Game } = require('./entity/game');

  var runningGames = new Map();

  var Play = {
    onStartGame: function() {
      let game = Lobby.deletePendingGame(this.socket_game_id);
      runningGames.set(game.id, game)

      serverSocket.sockets.in(game.id).emit('launch game', game);
    }
  }

  module.exports = Play;
```

```
  ### => server/lobby.js
  ...
  deletePendingGame: function(game_id) {
    let game = pendingGames.get(game_id);

    pendingGames.delete(game.id);
    Lobby.updateLobbyGames();

    return game
  }
  ...
```

```
  js/states/pending_game.js

  class PendingGame extends Phaser.State {

    init({ game_id }) {
      ...
      clientSocket.on('launch game', this.launchGame.bind(this));
    },

    launchGame(game) {
      this.state.start('Play', true, false, game);
    }
  }
```

`onStartGame` do next:
1. Remove game from 'pending_games' and update menu for users that belongs to lobby_room ( just refresh lobby )
2. Add game to 'runningGames'
3. Emit event 'launch game' for users that belongs to current game. On 'launch game' we switch state for each player.


Also we should change `Play` state, because we stub it previously. But now we can ue real data:

```
  ### => js/states/play.js

  class Play extends Phaser.State {
    init(game) {
      this.currentGame = game
    }
    ...
    createPlayers() {
      ...
      if (player.id === clientSocket.id) {
        this.player = new Player(setup);
      } else {
      ...
    }
  }
```

Start your server and you will see next:

https://raw.githubusercontent.com/DmytroVasin/bomber/step6/_readme/step6/1.gif



## Part 6.2: Move enemy via socket connection.

To make our players move we will use loop, that will sent current user position to all players through server.

To implement that we will use Phaser's `events.loop` function:

```
  ### => js/entity/player.js

  constructor({ game, id, spawn, skin, play }) {
    ...
    this.prevPosition = { x: spawn.x, y: spawn.y };

    game.time.events.loop(PING , this.positionUpdaterLoop.bind(this));
  }

  positionUpdaterLoop() {
    let newPosition = { x: this.position.x, y: this.position.y }

    if (this.prevPosition.x !== newPosition.x || this.prevPosition.y !== newPosition.y) {
      clientSocket.emit('update player position', newPosition);
      this.prevPosition = newPosition;
    }
  }
```

```
  ### => server/app.js
  ...
  client.on('update player position', Play.updatePlayerPosition);
```

```
  ### => server/play.js

  ...
  updatePlayerPosition: function (coordinates) {
    this.broadcast.to(this.socket_game_id).emit('move player', Object.assign({}, { player_id: this.id }, coordinates));
  },
```

Notes:
1. We should store previouse position, because if player does not move - we should not emit any events.
2. I picked frequency of event sending to equal to 100 ms.

When a position changed - we emit event 'update player position' that will be reemited on server to all opponents except sender.

Our player should receive events from enemies and move them to proper position:

```
  ### => js/states/play.js
  create() {
    ...
    this.setEventHandlers();
  }

  setEventHandlers() {
    clientSocket.on('move player', this.onMovePlayer.bind(this));
  }

  onMovePlayer({ player_id, x, y }) {
    let enemy = findFrom(player_id, this.enemies);
    if (!enemy) { return }

    enemy.goTo({ x: x, y: y })
  }
  ...
```

```
  ### => js/entities/enemy_player.js

  ...
  goTo(newPosition) {
    this.game.add.tween(this).to(newPosition, PING, Phaser.Easing.Linear.None, true);
  }
```

Start your server and you will see next:

https://raw.githubusercontent.com/DmytroVasin/bomber/step6/_readme/step6/2.gif

## Part 6.4: Enemy animation.

As you can see on previouse video enemy moves properly but animation is not correct. Lets fix that.


```
  ### => js/entities/enemy_player.js
  constructor({ game, id, spawn, skin }) {
    this.currentPosition = spawn;
    this.lastMoveAt = 0;
    ...
    this.animations.add('up', [9, 10, 11], 15, true);
    this.animations.add('down', [0, 1, 2], 15, true);
    this.animations.add('right', [6, 7, 8], 15, true);
    this.animations.add('left', [3, 4, 5], 15, true);
  }

  ...
  goTo(newPosition) {
    this.lastMoveAt = this.game.time.now;
    this.animateFace(newPosition);
    ...
  }

  animateFace(newPosition) {
    let face = 'down';
    let diffX = newPosition.x - this.currentPosition.x;
    let diffY = newPosition.y - this.currentPosition.y;

    if (diffX < 0) {
      face = 'left'
    } else if (diffX > 0) {
      face = 'right'
    } else if (diffY < 0) {
      face = 'up'
    } else if (diffY > 0) {
      face = 'down'
    }

    this.animations.play(face)
    this.currentPosition = newPosition;
  }
```

```
  ### => js/states/play.js

  create() {
    ...
    this.game.time.events.loop(400 , this.stopAnimationLoop.bind(this));
  }
  ...
  stopAnimationLoop() {
    for (let enemy of this.enemies.children) {
      if (enemy.lastMoveAt < this.game.time.now - 200) {
        enemy.animations.stop();
      }
    }
  }
```


We implement same animation that player has.

Note: We can sent animation direction as an additional parameter that player sends when he moves, but I will detect enemy move direction based on his previouse position.

Also we define `stopAnimationLoop` to stop animation if server do not receive updates from the enemy.

Now our enemy moves correctly:

https://raw.githubusercontent.com/DmytroVasin/bomber/step6/_readme/step6/3.gif



## Part 7: Bombs and Blasts

## Part 7.1: Place and hide bomb through server

Our player can place the bomb on the table, but bomb do not blow.

Lets fix that:

```
  ### => js/entities/player.js


  handleBombs() {
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      let now = this.game.time.now;

      if (now > this._lastBombTime) {
        this._lastBombTime = now + this.delay;

        clientSocket.emit('create bomb', { col: this.currentCol(), row: this.currentRow() });
      }
    }
  }

```

Instead of create bomb immidiatly when user press space bar we should emit `create bomb` event to the server with bomb coordinates. Such implmentation allow server to check is the bomb already placed and when we should blow it up.

Lets define that event:

```
  ### => server/app.js

  ...
  client.on('create bomb', Play.createBomb);
```

```
  ### => server/play.js

  createBomb: function({ col, row }) {
    let game_id = this.socket_game_id;
    let current_game = runningGames.get(game_id);
    let current_player = current_game.players[this.id];

    let bomb = current_game.addBomb({ col: col, row: row, power: current_player.power })

    if ( bomb ){
      setTimeout(function() {
        console.log('Bomb detonated!')
      }, bomb.explosion_time);
    }
  }
```

```
  ### => server/entity/game.js

  var { Bomb } = require('./bomb.js');
  ...
  constructor({ map_name }) {
    ...
    this.bombs        = new Map();
  },

  addBomb({ col, row, power }) {
    let bomb = new Bomb({ game: this, col: col, row: row, power: power });
    if ( this.bombs.get(bomb.id) ) {
      return false
    }
    this.bombs.set(bomb.id, bomb);
    return bomb
  }
```

```
  ### => server/entity/bomb.js
  const { EXPLOSION_TIME, DESTRUCTIBLE_CELL, NON_DESTRUCTIBLE_CELL, SPOIL_CHANCE } = require('../constants');

  var uuidv4 = require('uuid/v4');

  class Bomb {

    constructor({ game, col, row, power }) {
      this.id = uuidv4();

      this.game = game;
      this.power = power
      this.explosion_time = EXPLOSION_TIME

      this.col = col
      this.row = row
    }
  }

  exports.Bomb = Bomb;
```

When player place the bomb, on server we should find current player and game via game_id ( that was stored inside socket connection ) and player_id ( that can be find via socket.id ).

Then we call `addBomb` on current game. That function receives power attribute from player, because bomb should know with which power it should detonate.

After all we sghould implement `setTimeout` callback that has `bomb.explosion_time` timer. After some time server will emit event that will note all our users that bomb was exploded.

Lets run our server:

Now you should see "Bomb detonated!" in your terminal ( but bomb will not show up inside the game ).


Now we need to animate the bomb.


Instead of console.log server should emit event for players that will show the bomb and hide it when it blows.

```
  ### => server/play.js

  createBomb: function({ col, row }) {
    ...
    if ( bomb ){
      setTimeout(function() {
        serverSocket.sockets.to(game_id).emit('detonate bomb', { bomb_id: bomb.id });
      }, bomb.explosion_time);

      serverSocket.sockets.to(game_id).emit('show bomb', { bomb_id: bomb.id, col: bomb.col, row: bomb.row });
    }
  }
```

```
  ### => js/states/play.js

  setEventHandlers() {
    ...
    clientSocket.on('show bomb', this.onShowBomb.bind(this));
    clientSocket.on('detonate bomb', this.onDetonateBomb.bind(this));
  }

  onDetonateBomb({ bomb_id }) {
    // Remove Bomb:
    findAndDestroyFrom(bomb_id, this.bombs)
  }
```

We should not change `onShowBomb` - because it works properly. But we need to add `onDetonateBomb` that will hide the bomb.

Lets run our server:

https://raw.githubusercontent.com/DmytroVasin/bomber/step6/_readme/step7/1.gif

You can find current working code at the repo under branch [`step6`](https://github.com/DmytroVasin/bomber/tree/step6)


## Part 7.2: Detonate bomb - show blast!

Bomb detonation will work in the next way:
After explosion time pass, server should calculate which tiles should be exploded and in which we should draw explosion.
Then we return back that tiles to the client, and client draw this tiles on there screen.

But for now, server do not know any info about current map and it cant calculate explosion direction.

To solve that issue we should create hidden map on game start, that hidden map would contain current state of the map.
In other words, we should create matrix that will based on rows/cols of current map. That matrix will contain numbers that means walls/blocks/empty space.

Based on this map, server will calculate what cell should be exploded ( removed with empty cell ), and what cell should contain explosion sprite ( draw explosion )

Lets do that:

```
  ### => server/entity/game.js

  constructor({ map_name }) {
    ...
    this.shadow_map   = this.createMapData();
  }

  createMapData() {
    let tiles  = this.layer_info.data
    let width  = this.layer_info.width
    let height = this.layer_info.height
    let empty  = this.layer_info.properties.empty
    let wall   = this.layer_info.properties.wall
    let balk   = this.layer_info.properties.balk

    let mapMatrix = [];
    let i = 0;

    for(let row = 0; row < height; row++) {
      mapMatrix.push([]);

      for(let col = 0; col < width; col++) {
        mapMatrix[row][col] = EMPTY_CELL;

        if(tiles[i] == balk) {
          mapMatrix[row][col] = DESTRUCTIBLE_CELL;
        } else if(tiles[i] == wall) {
          mapMatrix[row][col] = NON_DESTRUCTIBLE_CELL;
        }

        i++;
      }
    }

    return mapMatrix;
  }

  getMapCell(row, col) {
    return this.shadow_map[row][col]
  }

  nullifyMapCell(row, col) {
    this.shadow_map[row][col] = EMPTY_CELL
  }
```

Also we create `getMapCell`, `nullifyMapCell` function that will helps us to modify that shadow_map.

Now we need to create `detonate` function inside `bomb.js`:

```
  ### => server/entity/bomb.js

  constructor({ game, col, row, power }) {
    ...
    this.blastedCells = [];
  }

  detonate() {
    let row   = this.row;
    let col   = this.col;
    let power = this.power;

    this.game.nullifyMapCell(row, col);
    this.addToBlasted(row, col, 'center', false)

    let explosionDirections = [
      { x:  0, y: -1, end: 'up',    plumb: 'vertical'   },
      { x:  1, y:  0, end: 'right', plumb: 'horizontal' },
      { x:  0, y:  1, end: 'down',  plumb: 'vertical'   },
      { x: -1, y:  0, end: 'left',  plumb: 'horizontal' }
    ]

    for (let direction of explosionDirections ) {
      for(let i = 1; i <= power; i++) {
        let currentRow = row + (direction.y * i);
        let currentCol = col + (direction.x * i);

        let cell   = this.game.getMapCell(currentRow, currentCol);
        let isWall = cell == NON_DESTRUCTIBLE_CELL
        let isBalk = cell == DESTRUCTIBLE_CELL
        let isLast = (i == power);

        if (cell == DESTRUCTIBLE_CELL) {
          this.game.nullifyMapCell(currentRow, currentCol);
        }

        if (isBalk || isWall || isLast) {
          this.addToBlasted(currentRow, currentCol, direction.end, isBalk)

          break;
        }

        this.addToBlasted(currentRow, currentCol, direction.plumb, isBalk)
      }
    }

    return this.blastedCells;
  }

  addToBlasted(row, col, direction, destroyed) {
    this.blastedCells.push({
      row: row,
      col: col,
      type: 'explosion_'+direction,
      destroyed: destroyed
    })
  }
```

That function calculate explosion in 4 different directions ('up', 'right', 'down', 'left').
Until power is enough we do next:

1. If cell is empty
1.1. We just add cell to blastedCells.
2. If cell contains destructable block
2.1 We nullify it inside 'shadow_map'
2.2. We add cell to blastedCells.
2.2. Break the loop, because our flame can cross blocks.
3. If cell contains non-destructable block
3.1. We add cell to blastedCells.
3.2. Break the loop, because our flame can cross blocks.


Also we should call that function inside setTimeout block:

```
  ### => server/play.js
  createBomb: function({ col, row }) {
    ...
    setTimeout(function() {
      let blastedCells = bomb.detonate()

      serverSocket.sockets.to(game_id).emit('detonate bomb', { bomb_id: bomb.id, blastedCells: blastedCells });
    }, bomb.explosion_time);
  }
```

Returned values we should transfer to all our players as `blastedCells`

Lastly we should render explosions for each client:

```
  ### => js/states/play.js
  import FireBlast from '../entities/fire_blast';

  class Play extends Phaser.State {
    ...
    createMap() {
      ...
      this.blasts  = this.game.add.group();
    }

    onDetonateBomb({ bomb_id, blastedCells }) {
      ...

      // Render Blast:
      for (let cell of blastedCells) {
        this.blasts.add(new FireBlast(this.game, cell));
      };

      // Destroy Tiles:
      for (let cell of blastedCells) {
        if (!cell.destroyed) { continue }

        this.map.putTile(this.blockLayer.layer.properties.empty, cell.col, cell.row, this.blockLayer);
      };
    }
  }
```

Inside `onDetonateBomb` we change tiles with phaser's `putTile` method for each cell with property `destroyed`.

But for all of them we add `FireBlast`

```
  ### => js/entities/fire_blast.js

  import { TILE_SIZE } from '../utils/constants';

  export default class FireBlast extends Phaser.Sprite {

    constructor(game, cell) {
      super(game, (cell.col * TILE_SIZE), (cell.row * TILE_SIZE), cell.type, 0);

      this.game = game

      this.animations.add('blast', [0, 1, 2, 3, 4]);

      // 15 - framerate, loop, kill_on_complete
      this.play('blast', 15, false, true);

      this.game.physics.arcade.enable(this);
    }

  }
```

`FireBlast` - is just a simple sprite that will be shown immidiatly and start own animation, after animation it will destroy himself. Read more about that [here](https://phaser.io/docs/2.6.2/Phaser.Sprite.html#play).


Lets run our server:

https://raw.githubusercontent.com/DmytroVasin/bomber/step6/_readme/step7/2.gif

## Part 7.3: Add spoils of war.

When block is blown up we should create spoil with some chance:

Lets do that.

```
  ### => server/entity/bomb.js

  const { Spoil } = require('./spoil.js');

  class Bomb {
    ...

    addToBlasted(row, col, direction, destroyed) {
      let spoil = this.craftSpoil(row, col);

      this.blastedCells.push({
        row: row,
        col: col,
        type: 'explosion_'+direction,
        destroyed: destroyed,
        spoil: spoil
      })
    }

    craftSpoil(row, col) {
      var randomNumber = Math.floor(Math.random() * 100)

      if (randomNumber < SPOIL_CHANCE) {
        let spoil = new Spoil(row, col)
        this.game.addSpoil(spoil)
        return spoil
      }

      return null;
    }
  }
```

```
  ### => server/entity/game.js

  constructor({ map_name }) {
    ...
    this.spoils       = new Map();
  }

  findSpoil(spoil_id){
    return this.spoils.get(spoil_id)
  }

  addSpoil(spoil) {
    this.spoils.set(spoil.id, spoil);
  }

  deleteSpoil(spoil_id){
    this.spoils.delete(spoil_id)
  }
```

```
  ### => server/entity/spoil.js

  const { SPEED, POWER, DELAY } = require('../constants');

  var uuidv4 = require('uuid/v4');

  class Spoil {

    constructor(row, col) {
      this.id = uuidv4();

      this.row = row;
      this.col = col;

      this.spoil_type = this.spoilType()
    }

    spoilType(){
      return [SPEED, POWER, DELAY][Math.floor(Math.random() * 3)]
    }
  }

  exports.Spoil = Spoil;
```

I store spoils inside game, because server should have ability to detect when someone pick spoil.
Also we add several functions for easy work with spoils array.

We add our spoils to `blastedCells` array, lastly we should draw them:

```
  ### => js/states/play.js

  onDetonateBomb({ bomb_id, blastedCells }) {
    ...

    // Add Spoils:
    for (let cell of blastedCells) {
      if (!cell.destroyed) { continue }
      if (!cell.spoil) { continue }

      this.spoils.add(new Spoil(this.game, cell.spoil));
    };
  }
```

Lets run our server:

https://raw.githubusercontent.com/DmytroVasin/bomber/step6/_readme/step7/3.gif



## Part 7.4: Player can pick spoils

First of all, lets remove default spoils from `createMap` function.

Now we need to fix `onPlayerVsSpoil` function. It should not pick spoil immidiatly, we should sent event to the server about that action.

```
  ### => js/states/play.js

  onPlayerVsSpoil(player, spoil) {
    clientSocket.emit('pick up spoil', { spoil_id: spoil.id });
    spoil.kill();
  }
```

```
  ### => server/app.js

  client.on('pick up spoil', Play.onPickUpSpoil);
```

```
  ### => server/play.js

  onPickUpSpoil: function({ spoil_id }) {
    let game_id = this.socket_game_id;
    let current_game = runningGames.get(game_id);
    let current_player = current_game.players[this.id];

    let spoil = current_game.findSpoil(spoil_id)

    if (spoil) {
      current_game.deleteSpoil(spoil.id)

      current_player.pickSpoil(spoil.spoil_type)

      serverSocket.sockets.to(game_id).emit('spoil was picked', { player_id: current_player.id, spoil_id: spoil.id, spoil_type: spoil.spoil_type });
    }
  }
```

```
  ### => server/entity/player.js

  pickSpoil(spoil_type) {
    if (spoil_type === POWER){
      this.power += STEP_POWER
    }
  }
```

Server must find and destroy object from spoils array of the game. In such way we make sure that only one player can pick one spoil.
Then we call `pickSpoil` by the player on server - that will increase power ( If spoil has proper type ).
Lastly server emit event about spoil picking to the clients.

Note: We increase only power, because 'speed' and 'time' are client side responsibility - on the server side we do not need them.


```

```
  ### => client/js/states/play.js

  setEventHandlers() {
    clientSocket.on('spoil was picked', this.onSpoilWasPicked.bind(this));
  }

  onSpoilWasPicked({ player_id, spoil_id, spoil_type }){
    if (player_id === this.player.id){
      this.player.pickSpoil(spoil_type)
    }

    findAndDestroyFrom(spoil_id, this.spoils)
  }
```

Client side should handle that event and call `pickSpoil` for current user. That function will show notification for user and update information HUD.


Lets run our server:

https://raw.githubusercontent.com/DmytroVasin/bomber/step6/_readme/step7/4.gif



## Part 7.5: Blast can kill.

We have one problem with current implementation of blast effect. Blast do not kill anyone!

Let's make it dangerous:

```
  ### => js/states/play.js

  update() {
    this.game.physics.arcade.overlap(this.player, this.blasts, this.onPlayerVsBlast, null, this);
  }

  onPlayerVsBlast(player, blast) {
    if (player.alive) {
      clientSocket.emit('player died', { col: player.currentCol(), row: player.currentRow() });
      player.becomesDead()
    }
  }
```

```
  ### => js/entities/player.js

  becomesDead() {
    this.info.showDeadInfo()
    this.kill();
  }
```

```
  ### => js/entities/info.js

  export default class Info {

    constructor({ game, player }) {
      ...
      this.redStyle = { font: '30px Arial', fill: '#ff0044', align: 'center' };

      this.deadText = this.game.add.text(this.game.world.centerX, this.game.world.height - 30, 'You died :(', this.redStyle);
      this.deadText.anchor.set(0.5);
      this.deadText.visible = false
    }

    showDeadInfo() {
      this.deadText.visible = true
    }
  }
```

Here we define event that we will call when player cross blast, so if player is alive - we will emit 'player died' event.

Also we call `becomeDead` function that will destroy model ( skin ) of the player and will draw text in senter of the screen.

```
  ### => server/app.js
  ...
  client.on('player died', Play.onPlayerDied);
```

```
  ### => server/play.js

  onPlayerDied: function(coordinates) {
    let game_id = this.socket_game_id;
    let current_game = runningGames.get(game_id);
    let current_player = current_game.players[this.id]

    current_player.dead()

    let alivePlayersCount = 0
    let alivePlayerSkin = null
    for (let player of Object.values(current_game.players)) {
      if ( !player.isAlive ) { continue }

      alivePlayerSkin = player.skin
      alivePlayersCount += 1
    }

    if (alivePlayersCount >= 2) {
      return
    }

    setTimeout(function() {
      serverSocket.sockets.to(game_id).emit('player win', alivePlayerSkin);
    }, 3000);
  }
```

```
  ### => server/entity/player.js

  dead() {
    this.isAlive = false;
  }
```

```
  ### => js/states/player.js

  setEventHandlers() {
    clientSocket.on('player win', this.onPlayerWin.bind(this));
  }
```

Once player died - we should mark him `isAlive = false` to stop receive event from him and react on keys.
Then we should calculate active players count, when active players count less then '2'.
Server should broadcast 'player win' event to everybody.

'player win' handler will simple call 'Win' state with alive player skin.


Note: Lets remove `onPlayerWin` call from `update` function. Just disable ability by pressing enter switch state.

Lastly, we need to show bones of the player if he die.

```
  ### => server/play.js

  onPlayerDied: function(coordinates) {
    serverSocket.sockets.to(this.socket_game_id).emit('show bones', Object.assign({}, { player_id: this.id }, coordinates));
    ...
  }
```

On player die we should broadcast event to all user to show bone sprite.

```
  ### => js/states/play.js

  import Bone from '../entities/bone';

  class Play extends Phaser.State {
    createMap() {
      ...
      this.bones   = this.game.add.group();
    }

    setEventHandlers() {
      ...
      clientSocket.on('show bones', this.onShowBones.bind(this));
    }

    onShowBones({ player_id, col, row }) {
      this.bones.add(new Bone(this.game, col, row));

      findAndDestroyFrom(player_id, this.enemies)
    }
  }
```

```
  ### => client/js/entities/bone.js

  import { TILE_SIZE } from '../utils/constants';

  export default class Bone extends Phaser.Sprite {

    constructor(game, col, row) {
      super(game, (col * TILE_SIZE), (row * TILE_SIZE), 'bone_tileset');
    }

  }
```

Lets run our server and try to kill yourself.

https://raw.githubusercontent.com/DmytroVasin/bomber/step7/_readme/step7/5.png


That is it for this step.

You can find current working code at the repo under branch [`step7`](https://github.com/DmytroVasin/bomber/tree/step7)



## Part 8 Log Out.

At the end we need to do proper disconnect.

## Part 8.1 Game is over.

In current implementation we have one problem:
When game is over, we still exist inside the game. So we should disconnect from running game when game is over. Also we should remove running game from the array and nullify game_id in socket connection.

Lets fix that:

```
  ### => js/states/play.js

  onPlayerWin(winner_skin) {
    clientSocket.emit('leave game');
    ...
  }
```

```
  ### => server/app.js
  ...
  client.on('leave game', Play.onLeaveGame);
```
```
  ### => server/play.js

  onLeaveGame: function (data) {
    runningGames.delete(this.socket_game_id);

    this.leave(this.socket_game_id);
    this.socket_game_id = null;
  },
```

## Part 8.2 Leave the game ( Close browser/tab )

Lastly we should implment `disconnect` state this handler will be called when user close tab or browser unexpectedly.

We need to do that, because if user close his tab inside the game, player sprite still remain on the screen of the other players.

This event can be handled like any other:
```
  ### => server/app.js
  ...
  client.on('disconnect', onClientDisconnect);
```

Disconnect can happen hen user live insed lobby, inside pending game and inside running game, so we should support proper disconnect for all these stagaes.

```
  ### => server/app.js

  function onClientDisconnect() {
    if (this.socket_game_id == null) {
      console.log('Player was not be inside any game...');
      return
    }
    console.log('Player was inside game...');

    // If game is pending then use Lobby.
    Lobby.onLeavePendingGame.call(this)

    // If game is non-pending then use Play.
    Play.onDisconnectFromGame.call(this)
  }
```

When user lives inside lobby - we do nothing. For rest connections we call `onLeavePendingGame` (already implemented) and `onDisconnectFromGame`.

```
  ### => server/play.js

  var Play = {
    ...
    onDisconnectFromGame: function() {
      let current_game = runningGames.get(this.socket_game_id);

      if (current_game) {
        serverSocket.sockets.in(this.socket_game_id).emit('player disconnect', {player_id: this.id } );
      }
    },
  }
```

```
  ### => js/states/play.js

  setEventHandlers() {
    ...
    clientSocket.on('player disconnect', this.onPlayerDisconnect.bind(this));
  },

  onPlayerDisconnect({ player_id }) {
    findAndDestroyFrom(player_id, this.enemies);

    if (this.enemies.children.length >= 1) { return }

    this.onPlayerWin()
  }
```

When player disconnect from running game and no enemies exist - we just call `onPlayerWin` without parameters that will call `Win` stage with text "Opponent left! Press Enter to return to main menu."


Lets run our server

https://raw.githubusercontent.com/DmytroVasin/bomber/step8/_readme/step8/1.png


That is it for this step.

You can find current working code at the repo under branch [`step8`](https://github.com/DmytroVasin/bomber/tree/step8)


## Part 9. Deploy:

I would not tell you how to deploy this app, because official guide is very good: [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

One note: do not forget to disable 'inspect' / 'debug' mode from the Node.


## Part 10. Wrapping Up
And that’s it!
I hope you enjoyed the tutorial, and can use it as the basis for launching a multiplayer game of your own.
