

import Phaser, { UP } from 'phaser';

import MenuScene from './src/scenes/MenuScene';
import PlayScene from './src/scenes/PlayScene';
import PreloadScene from './src/scenes/PreloadScene';
import ScoreScene from './src/scenes/ScoreScene';
import PauseScene from './src/scenes/PauseScene';
import EasterEggScene from './src/scenes/EasterEggScene';

const WIDTH = 400;
const HEIGHT = 600;
const BIRD_POSITION = {x: WIDTH / 10, y: HEIGHT / 2};

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
  startPosition: BIRD_POSITION
}

const Scenes = [PreloadScene, MenuScene, PlayScene, ScoreScene, PauseScene, EasterEggScene];
const createScene = Scene => new Scene(SHARED_CONFIG)
const initScenes = () => Scenes.map(createScene)

const config = {
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      // debug: true,
    }
  },
  scene: initScenes()
}

new Phaser.Game(config);