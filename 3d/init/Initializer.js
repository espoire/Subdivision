import Graphics from "./Graphics.js";
import Mouse from "../manager/Mouse.js";
import RenderingManager from "../manager/RenderingManager.js";
import SpotlightManager from "../manager/SpotlightManager.js";

export default class Initializer {
    static getRenderingManager() {
        const scene = Graphics.getScene();
        const camera = Graphics.getCamera();
        const renderer = Graphics.getRenderer();
        const mouse = new Mouse(window);

        const manager = new RenderingManager(scene, camera, renderer, mouse);
        
        const spotlights = new SpotlightManager();
        manager.addSubmanager(spotlights);

        return manager;
    }
}