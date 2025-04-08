import Phaser from 'phaser'

export default class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'MainMenu' })
  }
  preload() {
    this.load.audio('jungleTheme', [
      '/assets/audio/jungle_theme.mp3'
    ])
  }

  create() {
    this.cameras.main.setBackgroundColor('#5FCDE4')

    this.add.text(this.cameras.main.centerX, 100, 'English Oddysey', {
      fontSize: '48px',
      color: '#000000',
    }).setOrigin(0.5)

    const btnStyle = {
      fontSize: '32px',
      color: '#000000',
      backgroundColor: null,
      padding: { x: 20, y: 10 },
    }

    const buttonsContainer = this.add.graphics()
    buttonsContainer.lineStyle(4, 0xffff00, 1)
    buttonsContainer.strokeRect(this.cameras.main.centerX - 200, 160, 400, 220)

    const hoverLine = this.add.graphics()

    const botones = [
      { texto: 'Jugar', y: 200, onClick: () => this.scene.start('GameScene') },
      { texto: 'Opciones', y: 270, onClick: () => alert('Opciones aún no disponibles 🙃') },
      { texto: 'Salir', y: 340, onClick: () => alert('¡Gracias por jugar! 🫶') },
    ]

    botones.forEach(({ texto, y, onClick }) => {
      const btn = this.add.text(this.cameras.main.centerX, y, texto, btnStyle)
        .setOrigin(0.5)
        .setInteractive()

      btn.on('pointerdown', onClick)
      btn.on('pointerover', () => {
        hoverLine.clear()
        hoverLine.lineStyle(4, 0xff0000, 1)
        hoverLine.lineBetween(
          btn.x - btn.width / 2, btn.y + btn.height / 2,
          btn.x + btn.width / 2, btn.y + btn.height / 2
        )
      })
      btn.on('pointerout', () => hoverLine.clear())
    })
  }
}
