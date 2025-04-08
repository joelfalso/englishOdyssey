import React, { useEffect } from 'react';
import Phaser from 'phaser';
import MenuScene from './scenes/MenuScene';

const PhaserGame = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      parent: 'phaser-container',
      width: 800,
      height: 600,
      scene: [MenuScene]
    };

    const game = new Phaser.Game(config);
    
    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="phaser-container" />;
};

export default PhaserGame;