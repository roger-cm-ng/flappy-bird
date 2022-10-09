
import BaseScene from "./BaseScene";

class MenuScene extends BaseScene {

    constructor(config) {
      super('MenuScene', config);

      this.menu = [
        {scene: 'PlayScene', text: 'Play'},
        {scene: 'ScoreScene', text: 'Score'},
        {scene: null, text: 'Exit'},
      ]
    }

    create() {
        super.create();

        this.createMenu(this.menu, this.setupMenuEvents.bind(this));

        this.menuBird = this.physics.add.sprite(225, 250, 'bird')
            .setInteractive()
            .setScale(2.5)
            .setOrigin(0.5);

        this.idleBird();
        
        this.menuBird.play('idle');

        this.title = this.add.text(200, 100, 'Jumpy Birb', this.fontOptions)
            .setInteractive()
            .setOrigin(0.5);

        this.add.rectangle(200, 115, 200, 4, '0xffffff');

        this.easterEgg();

        this.menuBirdFlyAnim();
    }

    setupMenuEvents(menuItem) {
        const textGO = menuItem.textGO;
        textGO.setInteractive();

        textGO.on('pointerover', () => {
            textGO.setStyle({fill: '#ff0'});
        })

        textGO.on('pointerout', () => {
            textGO.setStyle({fill: '#fff'});
        })

        textGO.on('pointerup', () => {
            menuItem.scene && this.scene.start(menuItem.scene);

            if (menuItem.text === 'Exit') {
                this.game.destroy(true);
            }
        })
    }

    idleBird() {
        this.idleBirdAnim = this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('bird', { start: 16, end: 18}),
            frameRate: 4, 
            repeat: -1
        })
        
        this.menuBird.play('idle');
    }

    easterEgg() {
        this.title.on('pointerdown', () => {
            this.scene.start('EasterEggScene');
        })
    }

    menuBirdFlyAnim() {
        this.menuBird.on('pointerdown', () => {
            this.menuFly = this.anims.create({
                key: 'menuFly',
                frames: this.anims.generateFrameNumbers('bird', { start: 8, end: 15}),
                frameRate: 8,
                repeat: 4
            })

            this.menuBird.play('menuFly');

            this.menuBird.body.velocity.x = -100;

            this.time.addEvent({
                delay: 3000,
                callback: () => {
                    this.scene.restart();
                },
                loop: false
            })
        })
    }
}

export default MenuScene;