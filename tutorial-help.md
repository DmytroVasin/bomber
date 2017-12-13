



Sockets.io:
# отправить текущему сокету сформировавшему запрос (туда откуда пришла)
socket.emit('eventClient', "this is a test");

# отправить всем пользователям, включая отправителя
io.sockets.emit('eventClient', "this is a test");

# отправить всем, кроме отправителя
socket.broadcast.emit('eventClient', "this is a test");

# отправить всем клиентам в комнате (канале) 'game', кроме отправителя
socket.broadcast.to('game').emit('eventClient', 'nice game');

# отправить всем клиентам в комнате (канале) 'game', включая отправителя
io.sockets.in('game').emit('eventClient', 'cool game');

# отправить конкретному сокету, по socketid
io.sockets.socket(socketid).emit('eventClient', 'for your eyes only');


https://www.pubnub.com/tutorials/javascript/multiplayer-game/
-----


http://www.dynetisgames.com/2017/03/06/how-to-make-a-multiplayer-online-game-with-phaser-socket-io-and-node-js/
https://code.tutsplus.com/tutorials/create-a-multiplayer-pirate-shooter-game-in-your-browser--cms-23311
https://www.pubnub.com/tutorials/javascript/multiplayer-game/
https://loonride.com/learn/phaser/slither-io-part-1
http://gojasonyang.com/post/phaserMultiplayerGamePart1.html


LINKS????
<!-- https://github.com/Lotti/codemotion2015 -->
<!-- HEROKU DEPLOY: https://devcenter.heroku.com/articles/node-websockets -->
<!-- NODE INSPECTOR: https://nodejs.org/en/docs/inspector/ -->










Game has alot of disadvanteges:

- Non optimized algorithm of re-render menu and pending games
- Non secure connections and broadcasting events
- PING has big influence, because if we have alot of games it would not work well
- Menu that will overlap start play button if we will have more then 3 pending game
- Enemy interpolation. Enemy should have interpolation that depends on frame rate not base on simple ping variable.
- Player dith should be defined on server, client should not sent event about that.

But that is simple pet project to show ability of the Phaser + Socket.io.
