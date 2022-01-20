import { Application, Graphics } from "pixi.js";
import { SquareShape } from "./SquareShape";

export class RoundedCornersSquareShape extends SquareShape {
    constructor(app:Application) {
        super(app);
        console.log("Hello from RoundedCorner");
    }
    protected drawSquare():Graphics {
        let graphics = super.drawSquare();
        graphics.drawRoundedRect(250, 150, 100, 100, 10);
        return graphics;
    }
}