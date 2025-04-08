// src/main.js
import Phaser from 'phaser';
import MainMenu from './scenes/MainMenu';
import GameScene from './scenes/GameScene';

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  parent: 'phaser-container',  // Asegúrate de que esta ID esté en tu HTML
  scene: [MainMenu, GameScene],  // Escenas a cargar
  scale: {
    mode: Phaser.Scale.RESIZE,  // Ajuste de tamaño automático
  },
  audio: {
    disableWebAudio: false,  // Asegúrate de que el audio esté habilitado
  }
};

const game = new Phaser.Game(config);
