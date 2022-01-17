import {Application, Graphics} from "pixi.js";

export class Game {
    public app: Application;
    constructor() {
        this.app = new Application({width: 800, height: 600, backgroundColor: 0xFFFF00, antialias: true});
        document.body.appendChild(this.app.view);
    }

    public startGame():void{
        this.drawCircle();
        this.drawSquare();
    }

    private drawSquare() {
        let graphics:Graphics = new PIXI.Graphics();

        // Rectangle
        graphics.beginFill(0xDE3249);
        graphics.drawRect(50, 50, 100, 100);
        graphics.endFill();
        this.app.stage.addChild(graphics);
    }

    private drawCircle() {
        let graphics:Graphics = new PIXI.Graphics();

        // Circle
        graphics.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
        graphics.beginFill(0xDE3249, 1);
        graphics.drawCircle(100, 250, 50);
        graphics.endFill();
        this.app.stage.addChild(graphics);
    }
}
