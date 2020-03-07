import Phaser from 'phaser'

class Play extends Phaser.Scene {
  constructor() {
    super('playGame')
  }

  create() {
    this.add.text(40, 40, 'Playing game!', {font: "25px Ariel", fill: "yellow"})
  }
}

export default Play