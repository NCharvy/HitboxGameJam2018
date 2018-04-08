class End extends Phaser.State {

  constructor() {
   super();
 }

 preload() {

  this.game.load.image('background', 'assets/images/background.png');
  this.game.load.image('button','assets/images/bouton.png')
}

create() {
  console.log("End!");
  this.background = this.game.add.image(0,0,'background');

  this.button = this.game.add.button( 0 ,460,'button',this._startGame,this,2,1,0);

  this.button.position.x = this.game.world.centerX - (this.button.texture.width/2)

  this.button.input.useHandCursor = true;

}
_startGame () {
 this.game.state.start('menu');
}
}