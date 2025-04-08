import Phaser from 'phaser'
import backgroundImg from '../assets/imagenes/background.jpeg'
import animationSpritesheet from '../assets/imagenes/animacion.png'

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' })
  }

  preload() {
    this.load.image('background', backgroundImg)
    this.load.spritesheet('character', animationSpritesheet, {
      frameWidth: 150,
      frameHeight: 150,
      endFrame: 5
    })
  }

  create() {
    // Establecer fondo que cubra toda la pantalla
    this.add.image(0, 0, 'background')
      .setOrigin(0)
      .setDisplaySize(this.scale.width, this.scale.height)
    
    // Crear animación
    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('character', {
        start: 0,
        end: 5
      }),
      frameRate: 5,
      repeat: -1
    })
    
    // Configurar posición en esquina inferior
    const margin = 20; // Margen en píxeles desde los bordes
    const posX = margin + (200); // Centro horizontal del sprite considerando su escala
    const posY = this.scale.height - margin - (200 ); // Centro vertical del sprite desde abajo
    
    // Crear sprite animado en posición calculada
    const player = this.add.sprite(posX, posY, 'character')
      .setScale(1.2)
      .setOrigin(0.5) // El punto de anclaje está en el centro
      .play('walk')
    
    // Opcional: Mostrar coordenadas para depuración
    this.add.text(10, 10, `Posición: ${Math.round(posX)}, ${Math.round(posY)}`, {
      font: '16px Arial',
      fill: '#ffffff'
    })
  }

  update() {
    // Lógica de actualización si es necesaria
  }
}