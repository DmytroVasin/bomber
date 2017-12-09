TITLE: Bomberman Multiplayer game with Rooms based on Phaser.js Socket.io and Node.js

Introudction

TODO: Demo available here: https://....
TODO: Source code of the Demove Repository available here: https://...

This article will demonstrate how to build basic multiplayer game with several rooms where players can play with each outher.
Server is writed on Node.js and Express.js. Client writed on Javascript framwork called Phaser.
The client and the server communicate by using Socket.io.


Check out video below to see what exaclty we did. So you can open demo to play with a friend. Also check out the GitHub repo to for the entire source code.

TODO: Video....



Before we get started i will explane major topic:

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
  ### => server/app.js

  const express = require('express');
  const favicon = require('serve-favicon');

  const app = express();
  const server = require('http').createServer(app);
  const path = require('path');

  const PORT = process.env.PORT || 3000;

  app.use(express.static(path.join(__dirname, '..', 'client')));
  app.use(favicon(path.join(__dirname, '..', 'client', 'favicon.ico')));

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
Download and add `phaser.min.js` into `lib` folder. And add `base.css` file to have simple styles for `#game-container`

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

    preload() {
      this.game.stage.backgroundColor = '#000';
    }

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

And you will see next:

TODO: Create screenshot ( video );
TODO: Create new branch inside the app. || Also you can find current working code at the repo under branch `____-part-1`




## Part 2: Multi stage.

You may previously see that in `Boot` State class we use: `preload`, `create`

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

Lets create Preload stage:

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

NOTE: Whole this stage you may find at: [Preload State](https://github.com/DmytroVasin/bomber/blob/master/client/js/states/preload.js)


This state contains preload state where we load your assets.
Assets devides on two tipes:

`spritesheet` and `image` - Image is just an simple image, sprite - that is banch of images. So, as you can see, we specify width: 35, height: 35 - that describe first image/frame from the banch.

```
  ### => js/states/menu.js

  class Menu extends Phaser.State {

    preload() {
    }

    create() {
    }
  }

  export default Menu;
```
