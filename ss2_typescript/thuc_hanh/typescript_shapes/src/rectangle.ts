import {IArea} from "./IArea";
import {Shape} from "./shape";

export class Rectangle extends Shape implements IArea{

    constructor(x: number, y: number, protected width: number, protected height: number) {
        super(x, y);
    }

    area(): number {
        return this.width * this.height;
    }

    getWidth() {
        return this.width;
    }

    setWidth(width: number) {
        this.width = width;
    }

    getHeight() {
        return this.height;
    }

    setHeight(height: number) {
        this.height = height;
    }

}
