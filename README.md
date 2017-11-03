https://www.youtube.com/watch?v=A3TUXGI_iuM


https://github.com/mmukhin/psitsmike_example_2

yarn run webpack && yarn start





Game:
# => yarn run webpack && yarn start


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
