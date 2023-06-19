import AssetManager from "./AssetManager";
import CardDrawer from "./CardDrawer";
import {getConfig} from "./config/config";
import {isArray, assign} from "lodash";

export default class Card {
    constructor({
        data,
        canvas,
        height = 642 * 2,
        width,
    } = {}) {
        console.assert(canvas != null, "canvas element is null.");
        this.data = data;
        this.canvas = canvas;
        this.setCanvasSize(height, width);
        this.config = getConfig(this.canvas);
        this.assetManager = new AssetManager(data, {onEachStepLoad: this.draw});
        this.cardDrawer = new CardDrawer(data, canvas, this.config, this.assetManager);
    }

    setCanvasSize = (height, width) => {
        this.canvas.height = height;
        if (width != null) this.canvas.width = width;
        else {
            const ratio = 459 / 642;
            this.canvas.width = ratio * height;
        }
    };

    setData = (data, options) => {
        assign(this.data, data);
        this.draw();
    };

    setSize = (size) => {
        if (isArray(size)) {
            this.setCanvasSize(size[0], size[1]);
            this.draw();
        }
    };

    draw = () => {
        this.cardDrawer.draw();
    };

    download = () => {
        let dataURL = this.canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = `${this.data.name}.png`;
        link.href = dataURL;
        link.click();
    };

    test = () => {
        console.log("test");
    };
}
