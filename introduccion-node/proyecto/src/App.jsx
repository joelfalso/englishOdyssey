import { useEffect } from 'react'
import Phaser from 'phaser'

function App() {
  useEffect(() => {
    const MainMenu = new Phaser.Class({
      Extends: Phaser.Scene,
      initialize: function MainMenu() {
        Phaser.Scene.call(this, { key: 'MainMenu' })
      },
      create: function () {
        // Fondo azul
        this.cameras.main.setBackgroundColor('#5FCDE4')

        // Título centrado
        this.add.text(this.cameras.main.centerX, 100, 'English Oddysey', {
          fontSize: '48px',
          color: '#000000',
        }).setOrigin(0.5)

        // Estilo de los botones
        const btnStyle = {
          fontSize: '32px',
          color: '#000000',
          backgroundColor: null,
          padding: { x: 20, y: 10 },
        }

        // Crear un cuadro solo con líneas amarillas
        const buttonsContainer = this.add.graphics()
        buttonsContainer.lineStyle(4, 0xFFFF00, 1) // Líneas amarillas (grosor 4, color amarillo)
        buttonsContainer.strokeRect(this.cameras.main.centerX - 200, 160, 400, 220) // Dibuja el rectángulo con solo el borde

        // Crear una línea roja (inicialmente oculta)
        const hoverLine = this.add.graphics()

        // Botones
        const jugar = this.add.text(this.cameras.main.centerX, 200, 'Jugar', btnStyle)
          .setOrigin(0.5)
          .setInteractive()
        const opciones = this.add.text(this.cameras.main.centerX, 270, 'Opciones', btnStyle)
          .setOrigin(0.5)
          .setInteractive()
        const salir = this.add.text(this.cameras.main.centerX, 340, 'Salir', btnStyle)
          .setOrigin(0.5)
          .setInteractive()

        // Eventos de los botones
        jugar.on('pointerdown', () => {
          this.scene.start('GameScene')
        })

        opciones.on('pointerdown', () => {
          alert('Opciones aún no disponibles 🙃')
        })

        salir.on('pointerdown', () => {
          alert('¡Gracias por jugar! 🫶')
        })

        // Función para dibujar la línea roja debajo del botón
        const drawHoverLine = (button) => {
          hoverLine.clear() // Limpiar cualquier dibujo previo
          hoverLine.lineStyle(4, 0xFF0000, 1) // Establecer color y grosor de la línea roja
          hoverLine.lineBetween(
            button.x - button.width / 2, button.y + button.height / 2,  // Coordenadas de inicio de la línea (debajo del texto)
            button.x + button.width / 2, button.y + button.height / 2   // Coordenadas de fin de la línea
          )
        }

        // Función para limpiar la línea
        const clearLine = () => {
          hoverLine.clear()
        }

        // Efectos hover para los botones
        jugar.on('pointerover', () => drawHoverLine(jugar))
        jugar.on('pointerout', clearLine)

        opciones.on('pointerover', () => drawHoverLine(opciones))
        opciones.on('pointerout', clearLine)

        salir.on('pointerover', () => drawHoverLine(salir))
        salir.on('pointerout', clearLine)
      },
    })

    const GameScene = new Phaser.Class({
      Extends: Phaser.Scene,
      initialize: function GameScene() {
        Phaser.Scene.call(this, { key: 'GameScene' }) // Nombre de la escena
      },
      preload: function() {
        // Cargar la imagen de fondo
        this.load.image('background', '/background.jpeg') // Ruta correcta
      },
      create: function() {
        // Verificar si la imagen se carga
        const bg = this.add.image(0, 0, 'background')
          .setOrigin(0)  // Posiciona la imagen en la esquina superior izquierda
          .setDisplaySize(window.innerWidth, window.innerHeight)  // Ajusta la imagen al tamaño de la pantalla

        // Si la imagen no aparece, dibuja un borde alrededor de la imagen para confirmar su tamaño
        this.add.graphics().lineStyle(2, 0xFF0000, 1).strokeRect(0, 0, window.innerWidth, window.innerHeight)

        // Agregar texto encima del fondo
        this.add.text(this.cameras.main.centerX, 300, '¡Juego iniciado!', {
          fontSize: '32px',
          color: '#ffffff',
        }).setOrigin(0.5)
      },
    })

    const config = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      parent: 'phaser-container',
      scene: [MainMenu, GameScene], // Aquí se incluye la escena GameScene
      scale: {
        mode: Phaser.Scale.RESIZE,
      },
    }

    const game = new Phaser.Game(config)

    return () => {
      game.destroy(true)
    }
  }, [])

  return <div id="phaser-container" style={{ width: '100%', height: '100%' }}></div>
}

export default App
