class Preload extends Phaser.State {

  preload() {
    this.load.image('background', "images/background.png");
    this.load.spritesheet("game_slot", 'images/game_slot.png', 522, 48);
    this.load.spritesheet("game_number", 'images/game_number.png', 522, 48);
    this.load.image('background_select', 'images/Background_select.png');
    this.load.image('select_stage', 'images/select_stage.png');

    this.load.image('pending_game_backdrop', 'images/lobby_backdrop.png');
    this.load.spritesheet('start_game_button', 'images/start_game_button.png', 202, 43);
    this.load.spritesheet('leave_game_button', 'images/leave_game_button.png', 202, 43);
    this.load.spritesheet('character_square', 'images/character_square.png', 89, 89);


    this.load.image('pinkBlock', 'images/assets/pinkBlock.png');
    this.load.image('blueBlock', 'images/assets/blueBlock.png');
    this.load.spritesheet('accept', 'images/assets/accept.png', 80, 80);
    this.load.image('prev', 'images/assets/prev.png');
    this.load.image('next', 'images/assets/next.png');


    this.load.image('bomberman_head_white', 'images/icon_white.png');
    this.load.image('bomberman_head_blue', 'images/icon_blue.png');
    this.load.image('bomberman_head_red', 'images/icon_red.png');
    this.load.image('bomberman_head_black', 'images/icon_black.png');


    this.load.image('tiles', 'maps/tileset.png');
    this.load.tilemap('hot_map', 'maps/hot_map.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('cold_map', 'maps/cold_map.json', null, Phaser.Tilemap.TILED_JSON);

    this.load.spritesheet('bomberman_white', 'images/bomberman_white.png', 32, 64);
    this.load.spritesheet('bomberman_black', 'images/bomberman_black.png', 32, 64);
    this.load.spritesheet('bomberman_blue', 'images/bomberman_blue.png', 32, 64);
    this.load.spritesheet('bomberman_red', 'images/bomberman_red.png', 32, 64);


    this.load.spritesheet('bomb', 'images/bomb.png', 35, 35);

    this.load.spritesheet('explosion_center',     'images/explosion_center.png',     30, 30);
    this.load.spritesheet('explosion_horizontal', 'images/explosion_horizontal.png', 30, 30);
    this.load.spritesheet('explosion_vertical',   'images/explosion_vertical.png',   30, 30);
    this.load.spritesheet('explosion_up',         'images/explosion_up.png',         30, 30);
    this.load.spritesheet('explosion_right',      'images/explosion_right.png',      30, 30);
    this.load.spritesheet('explosion_down',       'images/explosion_down.png',       30, 30);
    this.load.spritesheet('explosion_left',       'images/explosion_left.png',       30, 30);

    this.load.spritesheet('spoil_tiles', 'images/spoil_tiles.png', 35, 35);

    this.load.spritesheet('bone', 'images/bone.png', 35, 35);

    this.load.spritesheet('count_down', 'images/count_down.png', 452, 96);

    this.load.image('speed_up_bonus', 'images/speed_up_bonus.png');
    this.load.image('speed_up_no_bonus', 'images/speed_up_bonus.png');
    this.load.image('delay_up_bonus', 'images/delay_up_bonus.png');
    this.load.image('delay_up_no_bonus', 'images/delay_up_bonus.png');
    this.load.image('power_up_bonus', 'images/power_up_bonus.png');
  }

  create() {
    this.state.start('Menu');
  }
}

export default Preload;
