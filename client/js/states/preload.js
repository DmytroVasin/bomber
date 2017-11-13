class Preload extends Phaser.State {

  preload() {
    console.log('LoadState')

    this.load.image('background', "images/background.png");
    this.load.spritesheet("game_slot", 'images/game_slot.png', 522, 48);
    this.load.spritesheet("game_number", 'images/game_number.png', 522, 48);
    this.load.image('background_select', 'images/Background_select.png');
    this.load.image('select_stage', 'images/select_stage.png');

    this.load.image('pending_game_backdrop', 'images/lobby_backdrop.png');
    this.load.spritesheet('start_game_button', 'images/start_game_button.png', 202, 43);
    this.load.spritesheet('leave_game_button', 'images/leave_game_button.png', 202, 43);
    this.load.spritesheet('character_square', 'images/character_square.png', 89, 89);


    this.load.image('bomberman_head_white', 'images/icon_white.png');
    this.load.image('bomberman_head_blue', 'images/icon_blue.png');
    this.load.image('bomberman_head_red', 'images/icon_green.png');
    this.load.image('bomberman_head_black', 'images/icon_black.png');


    this.load.image('tiles', 'game_levels/tileset.png');
    this.load.tilemap('level_1', 'game_levels/level_1.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('level_2', 'game_levels/level_2.json', null, Phaser.Tilemap.TILED_JSON);

    this.load.spritesheet('bomberman_white', 'images/bomberman_white.png', 32, 64);
    this.load.spritesheet('bomberman_black', 'images/bomberman_black.png', 32, 64);
    this.load.spritesheet('bomberman_blue', 'images/bomberman_blue.png', 32, 64);
    this.load.spritesheet('bomberman_red', 'images/bomberman_red.png', 32, 64);


    this.add.text(80, 150, 'Loading...', { font: '30px Courier', fill: '#FFFFFF' });
  }

  create() {
    this.state.start('Menu');
  }
}

export default Preload;
