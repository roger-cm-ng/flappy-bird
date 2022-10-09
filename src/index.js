import Phaser from 'phaser';

import EasterEggScene from './scenes/EasterEggScene';
import MenuScene from './scenes/MenuScene';
import PauseScene from './scenes/PauseScene';
import PlayScene from './scenes/PlayScene';
import PreloadScene from './scenes/PreloadScene';
import ScoreScene from './scenes/ScoreScene';

const WIDTH = 400;
const HEIGHT = 600;
const BIRD_POSITION = {
    x: WIDTH / 10,
    y: HEIGHT / 2
};
const SHARED_CONFIG = {
    width: WIDTH,
    height: HEIGHT,
    startPosition: BIRD_POSITION
};
const Scenes = [PreloadScene, MenuScene, PlayScene, ScoreScene, PauseScene, EasterEggScene];
const createScene = Scene => new Scene(SHARED_CONFIG);
const initScenes = () => Scenes.map(createScene);
const config = {
    type: Phaser.AUTO,
    ...SHARED_CONFIG,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {}
    },
    scene: initScenes()
};

new Phaser.Game(config);
