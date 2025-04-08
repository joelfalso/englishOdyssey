import Phaser from 'phaser'
import backgroundImg from './background.jpeg'


export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' }) // Nombre de la escena
  }

  preload() {
    // Aquí se carga la imagen de fondo
    this.load.image('background', backgroundImg)


  }

  create() {
    // Establecer la imagen de fondo
    this.add.image(0, 0, 'background')
      .setOrigin(0)  // Establecer la posición en la esquina superior izquierda
      .setDisplaySize(window.innerWidth, window.innerHeight)  // Ajusta la imagen al tamaño de la pantalla


  }
}


