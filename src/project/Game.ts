import {Application, Graphics} from "pixi.js";

export class Game {
    public app: Application;
    constructor() {
        this.app = new Application({width: 800, height: 600, backgroundColor: 0xFFFF00, antialias: true});
        document.body.appendChild(this.app.view);
    }

    public startGame():void{
        let cell:Graphics = new PIXI.Graphics();
        cell.lineStyle(2, 0x000000, 0.5);
        cell.beginFill(0xffffff);
        cell.drawRect(100, 10, 100, 100);
        cell.endFill();
        //this.app.stage.addChild(cell);

        //this.app.loader.add('monster','./assets/monster.png').load(this.onAsstsLoaded.bind(this));

    }

    private onAsstsLoaded(){
        let monsterTexture = this.app.loader.resources['monster'].texture;
        const monster = new PIXI.Sprite(monsterTexture);
        this.app.stage.addChild(monster);
    }

    private drawSquare() {
        let graphics:Graphics = new PIXI.Graphics();

        // Rectangle
        graphics.beginFill(0xDE3249);
        graphics.drawRect(50, 50, 100, 100);
        graphics.endFill();
        //this.app.stage.addChild(graphics);
    }
}
