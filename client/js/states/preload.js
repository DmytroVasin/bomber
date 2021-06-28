export class Preload extends Phaser.Scene {

  constructor () {
      super('Preload');
  }

  preload() {
    // Menu:
    this.load.image('main_menu',     'images/menu/main_menu.png');
    this.load.image('slot_backdrop', 'images/menu/slot_backdrop.png');

    this.load.spritesheet('buttons',    'images/menu/buttons.png',{ frameWidth: 200, frameHeight: 75 });
    this.load.spritesheet('check_icon', 'images/menu/accepts.png', { frameWidth: 75, frameHeight: 75 });
    this.load.spritesheet('list_icon',  'images/menu/game_enter.png', { frameWidth: 75, frameHeight: 75 });

    this.load.image('hot_map_preview',  'images/menu/hot_map_preview.png');
    this.load.image('cold_map_preview', 'images/menu/cold_map_preview.png');
    this.load.image('hot_map_preview_mini',  'images/menu/hot_map_preview_mini.png');
    this.load.image('cold_map_preview_mini', 'images/menu/cold_map_preview_mini.png');
    this.load.image('prev',             'images/menu/left_arrow.png');
    this.load.image('next',             'images/menu/right_arrow.png');

    // Map:
    this.load.image('tiles',      'maps/tileset.png');
    this.load.tilemapTiledJSON('hot_map',  'maps/hot_map.json');
    this.load.tilemapTiledJSON('cold_map', 'maps/cold_map.json');


    // Game:
    this.load.spritesheet('explosion_center',     'images/game/explosion_center.png',     { frameWidth: 35, frameHeight: 35});
    this.load.spritesheet('explosion_horizontal', 'images/game/explosion_horizontal.png', { frameWidth: 35, frameHeight: 35});
    this.load.spritesheet('explosion_vertical',   'images/game/explosion_vertical.png',   { frameWidth: 35, frameHeight: 35});
    this.load.spritesheet('explosion_up',         'images/game/explosion_up.png',         { frameWidth: 35, frameHeight: 35});
    this.load.spritesheet('explosion_right',      'images/game/explosion_right.png',      { frameWidth: 35, frameHeight: 35});
    this.load.spritesheet('explosion_down',       'images/game/explosion_down.png',       { frameWidth: 35, frameHeight: 35});
    this.load.spritesheet('explosion_left',       'images/game/explosion_left.png',       { frameWidth: 35, frameHeight: 35});

    this.load.spritesheet('spoil_tileset', 'images/game/spoil_tileset.png', { frameWidth: 35, frameHeight: 35});
    this.load.spritesheet('bone_tileset',  'images/game/bone_tileset.png', { frameWidth: 35, frameHeight: 35});
    this.load.spritesheet('bomb_tileset',  'images/game/bombs.png', { frameWidth: 35, frameHeight: 35});

    this.load.image('speed_up_bonus',    'images/game/speed_up_bonus.png');
    this.load.image('speed_up_no_bonus', 'images/game/speed_up_no_bonus.png');
    this.load.image('delay_up_bonus',    'images/game/delay_up_bonus.png');
    this.load.image('delay_up_no_bonus', 'images/game/delay_up_no_bonus.png');
    this.load.image('power_up_bonus',    'images/game/power_up_bonus.png');

    this.load.image('placeholder_power', 'images/game/placeholder_power.png');
    this.load.image('placeholder_speed', 'images/game/placeholder_speed.png');
    this.load.image('placeholder_time',  'images/game/placeholder_time.png');

    // Skins:
    this.load.image('bomberman_head_blank',     'images/game/chars/0-face.png');

    this.load.image('bomberman_head_Theodora',  'images/game/chars/1-face.png');
    this.load.image('bomberman_head_Ringo',     'images/game/chars/2-face.png');
    this.load.image('bomberman_head_Jeniffer',  'images/game/chars/3-face.png');
    this.load.image('bomberman_head_Godard',    'images/game/chars/4-face.png');
    this.load.image('bomberman_head_Biarid',    'images/game/chars/5-face.png');
    this.load.image('bomberman_head_Solia',     'images/game/chars/6-face.png');
    this.load.image('bomberman_head_Kedan',     'images/game/chars/7-face.png');
    this.load.image('bomberman_head_Nigob',     'images/game/chars/8-face.png');
    this.load.image('bomberman_head_Baradir',   'images/game/chars/9-face.png');
    this.load.image('bomberman_head_Raviel',    'images/game/chars/10-face.png');
    this.load.image('bomberman_head_Valpo',     'images/game/chars/11-face.png');

    this.load.spritesheet('bomberman_Theodora',  'images/game/chars/1-preview.png', { frameWidth: 32, frameHeight: 32});
    this.load.spritesheet('bomberman_Ringo',     'images/game/chars/2-preview.png', { frameWidth: 32, frameHeight: 32});
    this.load.spritesheet('bomberman_Jeniffer',  'images/game/chars/3-preview.png', { frameWidth: 32, frameHeight: 32});
    this.load.spritesheet('bomberman_Godard',    'images/game/chars/4-preview.png', { frameWidth: 32, frameHeight: 32});
    this.load.spritesheet('bomberman_Biarid',    'images/game/chars/5-preview.png', { frameWidth: 32, frameHeight: 32});
    this.load.spritesheet('bomberman_Solia',     'images/game/chars/6-preview.png', { frameWidth: 32, frameHeight: 32});
    this.load.spritesheet('bomberman_Kedan',     'images/game/chars/7-preview.png', { frameWidth: 32, frameHeight: 32});
    this.load.spritesheet('bomberman_Nigob',     'images/game/chars/8-preview.png', { frameWidth: 32, frameHeight: 32});
    this.load.spritesheet('bomberman_Baradir',   'images/game/chars/9-preview.png', { frameWidth: 32, frameHeight: 32});
    this.load.spritesheet('bomberman_Raviel',    'images/game/chars/10-preview.png', { frameWidth: 32, frameHeight: 32});
    this.load.spritesheet('bomberman_Valpo',     'images/game/chars/11-preview.png', { frameWidth: 32, frameHeight: 32});

    this.load.audio('bgMusic01', ['sound/Musics/TownTheme.mp3']);
    this.load.audio('bgMusic02', ['sound/Musics/Techno-Randomness_Looping.mp3']); // https://soundimage.org/dance-techno/
    this.load.audio('bgMusic03', ['sound/Musics/Happy-Trancin.mp3']); // https://soundimage.org/dance-techno/
    this.load.audio('bgMusic04', ['sound/Musics/Electric-Rain_Looping.mp3']); // https://soundimage.org/dance-techno/

    this.load.audio('FxExplosion01', ['sound/Effects/Explosion3.mp3']);
    this.load.audio('FxPickItem01', ['sound/Effects/PowerUp18.mp3']);
    this.load.audio('FxDeath01', ['sound/Effects/VOXEfrt_Cry of pain (ID 2361)_BSB.mp3']); // https://bigsoundbank.com/detail-2361-cry-of-pain.html
    this.load.audio('FxClick01', ['sound/Effects/UI_Quirky21.mp3']);
    this.load.audio('FxNewUser01', ['sound/Effects/PowerUp18.mp3']);
  }

  create() {
    this.scene.start('Menu');
  }
}

export default Preload;
