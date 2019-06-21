

//import * as PIXI from 'https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.0.4/pixi.min.js'

Images = {
	PLAYER: "images/player.png"
}

//Aliases
let Application = PIXI.Application,
	Container = PIXI.Container,
	ParticleContainer = PIXI.particles.ParticleContainer,
	loader = PIXI.loader,
	resources = PIXI.loader.resources,
	TextureCache = PIXI.utils.TextureCache,
	Sprite = PIXI.Sprite,
	Rectangle = PIXI.Rectangle,
	Text = PIXI.Text,
	TextStyle = PIXI.TextStyle;
const app = new PIXI.Application({
	width: 480,
	height: 800
});
PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;
var player;

document.body.appendChild(app.view);

loader
	.add([Images.PLAYER])
	.on("progress", loadProgressHandler)
	.load(loadFinished);

function loadFinished() {
	init();
	gameLoop();
}

// Called on load completion
function init() {

	// gameLoopID = requestAnimationFrame(gameLoop); // request the next frame

}
function gameLoop() {
	delta = app.ticker.deltaTime;
	// Get mouse pos
	mousePos = app.renderer.plugins.interaction.mouse.global;
	
	// Call next animation frame
	requestAnimationFrame(gameLoop);
	
	state(delta);
}
    
function createPlayer() {
	// Create PIXI.Sprite from Image
	player = new Sprite(resources[Images.PLAYER].texture);
	player.anchor.x = 0.5;
	player.anchor.y = 0.5;
	player.x = app.renderer.width / 2;
	player.targetY = app.renderer.height - (app.renderer.height * 0.1);
	player.y = app.renderer.height - (app.renderer.height * 0.1);
	player.maximumShootCooldown = 10;
	player.shootCooldown = player.maximumShootCooldown;
	player.recoilAmount = -(app.renderer.height * 0.01);
	player.smoothness = 5;
	player.rapidFire;
	player.maxmimumRapidFireCooldown = 300;
	player.rapidFireCooldown = player.maximumRapidFireCooldown;
	player.rapidFireSpeed = 1;
	resizeSprite(player, player.width * spriteScales);
	

}