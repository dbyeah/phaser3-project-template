import Phaser from 'phaser';
import logoImg from './assets/logo.png';

import scenes from './scenes'

const config = {
  type: Phaser.AUTO,
  parent: 'main-canvas',
  width: 800,
  height: 600,
  scene: scenes
};

const game = new Phaser.Game(config);
