## A Bomberman-style game with multiplayer option.

A Bomberman-style game with multiplayer option made with [Phaser.js v3](https://phaser.io/), [Node.js](https://nodejs.org/uk/), [Express.js](http://expressjs.com/), [Socket.io](https://socket.io/).

### Game description:

The game is designed for up to Six players.

Games can be played on one of two maps.

![Maps](https://raw.githubusercontent.com/DmytroVasin/bomber/master/_readme/maps.png)

Player models user will receive randomly when he will enter the game.

The winning player is the last one standing.

Within the game, players can upgrade skills like:
( Change to drop - 50% when player break the block )

* ![Speed Up](https://raw.githubusercontent.com/DmytroVasin/bomber/master/_readme/speed.png) Speed: can increase to 3
* ![Bomb setting time](https://raw.githubusercontent.com/DmytroVasin/bomber/master/_readme/time.png) Bomb setting time: can be reduced to 0.5 seconds
* ![Power Up](https://raw.githubusercontent.com/DmytroVasin/bomber/master/_readme/power.png) Power: no limit

## Demo:
You can find a tutorial on how to make Bomberman-style games here: [Tutorial (need work)](https://github.com/DmytroVasin/bomber/blob/master/tutorial.md)

A demo of this game can be found on Heroku: [Bomberman with multiplayer - Demo](https://bomb-attack.herokuapp.com/)

Note: To play the game, you should open the browser in two separate windows. The game pauses when You open a new tab in the same window. Open game in different windows.

## Game: *Click to play*:
[![Preview](https://raw.githubusercontent.com/DmytroVasin/bomber/master/_readme/menu.png)](https://player.vimeo.com/video/246595375?autoplay=1)

## Menu: *Click to play*:
[![Preview](https://raw.githubusercontent.com/DmytroVasin/bomber/master/_readme/intro.png)](https://player.vimeo.com/video/247095838?autoplay=1)

## Setup:
The game requires Node and Yarn (npm) package manager. Make sure that you already have both installed on your system before trying to launch it.

Steps:
1. Clone the repository.
2. Run `yarn install` inside a newly created directory.
3. Start the server with the command `yarn run server` ( defined in the `package.json` file ). This will launch `webpack` in your development environment and then start the `node` server.
4. Check out the game at [http://localhost:3000](http://localhost:3000)
5. Enjoy!

The game can be also deployed into docker environemnt (Docker should be installed).
Steps:
1. Clone the repository.
2. Run `docker build --tag bomber:1.0 .` inside the newly created directory.
3. Create and run the container 
    * `docker run -d -it --name bomber.server --restart=always  -p 3000:3000 bomber:1.0`
4. Check out the game at [http://localhost:3000](http://localhost:3000)
5. Enjoy!

Used for developement docker container could be configured to use external folders.
Steps:
1. Clone the repository into your local path E.g: `c:\opt\` for windows or `/opt` for unix
2. Run `docker build --tag bomber:1.0.dev -f Dockerfile_dev .` inside the newly created directory.
3. Create and run the container 
    * For Windows: `docker run -d -it --name bomber_dev.server --restart=always -p 3001:3000 -v C:/opt/bomber:/mnt/bomber -w /mnt/bomber bomber:1.0.dev`
    * For Linux: `docker run -d -it --name bomber_dev.server --restart=always -p 3001:3000 -v /opt/bomber:/mnt/bomber -w /mnt/bomber bomber:1.0.dev`
4. Check out the game at [http://localhost:3001](http://localhost:3001)
5. Enjoy!

## Notes:
You can use my code as a boilerplate if you want, but I would suggest you change the tile sizes. I've picked tiles that are 35x35 pixels, but tiles that are 32x32 would be more ideal. All free templates are based on this tile size, and it is also handily divisible by 2.

## To Debug Node process:
1. Open: chrome://inspect/#devices
2. Click 'Open dedicated DevTools for Node'
3. "server": "webpack --mode development && node --inspect server/app.js",
