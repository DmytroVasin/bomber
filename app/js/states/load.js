var LoadState = function () {

};

module.exports = LoadState;

LoadState.prototype = {
  preload: function () {
    console.log('LoadState')

    // Game.load.image('background', "images/background.png");
    Game.load.spritesheet("game_slot", 'images/game_slot.png', 522, 48);
    Game.load.spritesheet("game_number", 'images/game_number.png', 522, 48);
    Game.load.image('background_select', 'images/Background_select.png');
    Game.load.image('select_stage', 'images/select_stage.png');
    Game.load.spritesheet('ok_button', 'images/ok_button.png', 60, 60);
    Game.load.image('danger_desert_thumbnail', 'images/danger_desert_thumbnail.png');

    Game.load.image('pending_game_backdrop', 'images/lobby_backdrop.png');
    Game.load.spritesheet('start_game_button', 'images/start_game_button.png', 202, 43);
    Game.load.spritesheet('leave_game_button', 'images/leave_game_button.png', 202, 43);
    Game.load.spritesheet('character_square', 'images/character_square.png', 89, 89);


    Game.load.image('bomberman_head_white', 'images/icon_white.png');
    Game.load.image('bomberman_head_blue', 'images/icon_blue.png');
    Game.load.image('bomberman_head_green', 'images/icon_green.png');
    Game.load.image('bomberman_head_black', 'images/icon_black.png');


    Game.load.tilemap('FirstLevel', 'game_levels/first_level.json', null, Phaser.Tilemap.TILED_JSON);
    Game.load.image('tiles', 'game_levels/tileset.png');


    Game.add.text(80, 150, 'Loading...', { font: '30px Courier', fill: '#FFFFFF' });
  },

  create: function () {
    Game.state.start('lobby');
  }
};
