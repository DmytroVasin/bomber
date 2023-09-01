export class Sound {
  constructor() {
    this._soundOn = true;
    this._musicOn = true;
    this._bgMusicPlaying = false;
    this._bgSoundPlaying = false;
    this._currentMusic=null;
    this._currentSound=null;
  }

  preload(scene){
    scene.load.audio('bgMusic01', ['sound/Musics/TownTheme.mp3']);
    scene.load.audio('bgMusic02', ['sound/Musics/Techno-Randomness_Looping.mp3']); // https://soundimage.org/dance-techno/
    scene.load.audio('bgMusic03', ['sound/Musics/Happy-Trancin.mp3']); // https://soundimage.org/dance-techno/
    scene.load.audio('bgMusic04', ['sound/Musics/Electric-Rain_Looping.mp3']); // https://soundimage.org/dance-techno/

    scene.load.audio('FxExplosion01', ['sound/Effects/Explosion3.mp3']);
    scene.load.audio('FxPickItem01', ['sound/Effects/PowerUp18.mp3']);
    scene.load.audio('FxDeath01', ['sound/Effects/VOXEfrt_Cry of pain (ID 2361)_BSB.mp3']); // https://bigsoundbank.com/detail-2361-cry-of-pain.html
    scene.load.audio('FxClick01', ['sound/Effects/UI_Quirky21.mp3']);
    scene.load.audio('FxNewUser01', ['sound/Effects/PowerUp18.mp3']);
  }

  playMusic(scene,soundId){
    if (this.bgMusicPlaying === true && !(this._currentMusic==soundId)){
      scene.sound.stopByKey(this._currentMusic);
      //scene.sound.stopAll();
      this.bgMusicPlaying = false;
      scene.registry.set('Sound', this);
    }
    if (this.musicOn === true && this.bgMusicPlaying === false) {
      scene.sound.add(soundId, { volume: 0.5, loop: true }).play();
      this.bgMusicPlaying = true;
      this._currentMusic=soundId;
      scene.registry.set('Sound', this);
    }
  }

  playSound(scene,soundId){
    if (this.bgSoundPlaying === true && !(this._currentMusic==soundId)){
      scene.sound.stopByKey(this._currentSound);
      this.bgSoundPlaying = false;
      scene.registry.set('Sound', this);
    }
    if (this.soundOn === true && this.bgSoundPlaying === false) {
      scene.sound.add(soundId, { volume: 0.8, loop: false }).play();
      this.bgSoundPlaying = true;
      this._currentSound=soundId;
      scene.registry.set('Sound', this);
    }
  }

  set musicOn(value) {
    this._musicOn = value;
  }

  get musicOn() {
    return this._musicOn;
  }

  set soundOn(value) {
    this._soundOn = value;
  }

  get soundOn() {
    return this._soundOn;
  }

  set bgMusicPlaying(value) {
    this._bgMusicPlaying = value;
  }

  get bgMusicPlaying() {
    return this._bgMusicPlaying;
  }

  set bgSoundPlaying(value) {
    this._bgSoundPlaying = value;
  }

  get bgSoundPlaying() {
    return this._bgSoundPlaying;
  }
}
