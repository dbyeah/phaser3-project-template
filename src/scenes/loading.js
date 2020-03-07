import Phaser from 'phaser'

class Loading extends Phaser.Scene {
  constructor() {
    super('loadGame')
  }

  create() {
    this.add.text(20, 20, 'Loading game...')
    let timeout = setTimeout(() => {
      this.scene.start('playGame')
      clearTimeout(timeout)
    }, 5000)
  }
}

export default Loading