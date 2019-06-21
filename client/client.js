import * as PIXI from 'pixi.js'

const aliases = {
    application = PIXI.Application,
}

const app = new PIXI.Application({
    width: 1334, // default: 800
    height: 750, // default: 600
    antialias: true, // default: false
    transparent: false, // default: false
    resolution: 1 // default: 1
});

document.getElementById('pixi').appendChild(app.view);