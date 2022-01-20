import { Application, Graphics } from "pixi.js";

export class SquareShape {
    private appSquareShape: Application;
    constructor(app:Application) {
        this.appSquareShape = app;
        console.log("Hello from SquareShape class!");
        this.drawSquare();
    }

    /**
    * This method draws a square
    */
    private drawSquare() {
        let graphics:Graphics = new PIXI.Graphics();

        // Rectangle
        graphics.beginFill(0xDE8079, 0.5);
        graphics.drawRect(100, 50, 100, 100);
        graphics.endFill();
        this.appSquareShape.stage.addChild(graphics);
    }
}