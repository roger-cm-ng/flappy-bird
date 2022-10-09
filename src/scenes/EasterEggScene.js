
import BaseScene from "./BaseScene";

class EasterEggScene extends BaseScene {

    constructor(config) {
      super('EasterEggScene', {...config, canGoBack: true});
    }

    create() {
        super.create();

        this.add.text(...this.screenCenter, 'Thank you for playing!', { fontSize: '26px' })
            .setOrigin(0.5);
    }

}

export default EasterEggScene;