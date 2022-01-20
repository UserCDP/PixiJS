import {Application, Graphics} from "pixi.js";
import { RoundedCornersSquareShape } from "./shapes/RoundedCornersSquareShape";
import { SquareShape } from "./shapes/SquareShape";

export class Game {
    public app: Application;
    constructor() {
        this.app = new Application({width: 800, height: 600, backgroundColor: 0xFFFF00, antialias: true});
        document.body.appendChild(this.app.view);
        //let squareShape:SquareShape = new SquareShape(this.app);
        let roundedSquareShape:RoundedCornersSquareShape = new RoundedCornersSquareShape(this.app);
    }

    public startGame():void{
        this.drawCircle();
        this.drawSquare();
        this.drawSquareRedBorder();
        this.drawFourCornerStar();
        this.drawSquareRoundedCorners();
    }

    /**
     * This method draws a square
     */
    private drawSquare() {
        let graphics:Graphics = new PIXI.Graphics();

        // Rectangle
        graphics.beginFill(0xDE6279, 0.5);
        graphics.drawRect(50, 50, 100, 100);
        graphics.endFill();
        this.app.stage.addChild(graphics);
    }

    /**
     * This method draws a square with a red border
     */
     private drawSquareRedBorder() {
        let graphics:Graphics = new PIXI.Graphics();

        // Rectangle
        graphics.lineStyle(4, 0xFF0000)
        graphics.beginFill(0xDE6279, 0.5);
        graphics.drawRect(50, 50, 100, 100);
        graphics.endFill();
        this.app.stage.addChild(graphics);
    }

    /**
     * This method draws a dark blue Circle
     */
    private drawCircle() {
        let graphics:Graphics = new PIXI.Graphics();

        // Circle
        graphics.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
        graphics.beginFill(0x1E3249, 0.99);
        graphics.drawCircle(100, 250, 50);
        graphics.endFill();
        this.app.stage.addChild(graphics);
    }

    /**
     * This method draws a 4 corner blue star with white border
     */
    private drawFourCornerStar() {
        let graphics:Graphics = new PIXI.Graphics();

        graphics.lineStyle(4, 0xFFFFFF);
        graphics.beginFill(0x97d5dd, 1);
        graphics.drawStar(250, 180, 4, 56); // x coord, y coord, corners, size
        graphics.endFill();

        // make the star interactive
        graphics.interactive = true;
        graphics.pivot.x = 2;
        graphics.pivot.y = 28;

        graphics.on('pointerdown', () => {
            //const clicks = e.detail;
            graphics.scale.x *= 1.5;
            graphics.scale.y *= 1.5;
        })

        this.app.stage.addChild(graphics);
    }

    /**
     * This method draws a squre with semitransparent fill
     * and rounded red edges
     */
    private drawSquareRoundedCorners() {
        let graphics:Graphics = new PIXI.Graphics();

        graphics.lineStyle(2, 0xFF0000, 1);
        graphics.beginFill(0x650A5A, 0.25); // color, alpha
        graphics.drawRoundedRect(150, 350, 100, 100, 10); // x, y, width, height, corner radius
        graphics.endFill();
        this.app.stage.addChild(graphics);
    }
}
