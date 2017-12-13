## Bomberman with multiplayer.

Bomberman game with multiplayer based on [Phaser.js](https://phaser.io/), [Node.js](https://nodejs.org/uk/), [Express.js](http://expressjs.com/), [Socket.io](https://socket.io/).

### Game description:

The game is designed for a play with multiple players.

You can starn new game on 2 different maps.

![Maps](https://raw.githubusercontent.com/DmytroVasin/bomber/master/_readme/maps.png)

Max players is "3"

The winner is the one who will be the last.

While the game player can increase there skils:

* ![Speed Up](https://raw.githubusercontent.com/DmytroVasin/bomber/master/_readme/speed.png) Speed Up ( till 3 )
* ![Bomb setting time](https://raw.githubusercontent.com/DmytroVasin/bomber/master/_readme/time.png) Bomb setting time ( till 0.5 seconds )
* ![Power Up](https://raw.githubusercontent.com/DmytroVasin/bomber/master/_readme/power.png) Power Up ( endless )

## Demo:
You can find tutorial of this game [not-ready](https://not-ready)

Demo of that app you can find on heroku: [Bomb Attack Demo](https://bomb-attack.herokuapp.com/)

Note: To test it, you should open page with two different windows. The game pauses when You open a new tab in the same window. Open game in different windows.

## Game: *Click to play*:
[![Preview](https://raw.githubusercontent.com/DmytroVasin/bomber/master/_readme/menu.png)](https://player.vimeo.com/video/247095838?autoplay=1)

## Menu: *Click to play*:
[![Preview](https://raw.githubusercontent.com/DmytroVasin/bomber/master/_readme/intro.png)](https://player.vimeo.com/video/246595375?autoplay=1)

## Setup:
Game is based on Node and Yarn (npm) package manager. Make sure that both already installed into your system.

Steps:
1. Clone the repository.
2. Inside newly created directory run `yarn install`
3. Then run `yarn run server` - that command described inside package.json file. It launch `webpack` in your dev env and then starts `node` server.
4. You can access at [http://localhost:3000](http://localhost:3000)

Be Happy!

## Notes:
You can use my code as a boilerplate if you want, but I would suggest you to change tiles size. I've picked tiles with 35 pixes ( width/height ) but you should pick tiles with 32 pixels. All free templates are based on this tile size, also it devided by 2.
