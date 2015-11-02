(function(){
	window.onload = function(){
		"use strict";
		var game, preloadState, gameWidth, gameHeight, gameState;
		gameWidth = 600;
		gameHeight = 320; 
		preloadState = function(game){console.log('%c Game On!', "color:White; background:#FF0055")};
		preloadState.prototype = {
			preload:function(){
			},
			create: function(){
				this.game.state.start('gameState', true, false, {levelWidth:gameWidth, levelHeight:320});
			}
		}

		gameState = function(game){};
		gameState.prototype = {
			preload: function(){
			},
			create: function(){

				
				//physics
				this.game.physics.startSystem(Phaser.Physics.ARCADE);

				//cursor
				this.cursor = this.game.input.keyboard.createCursorKeys();
				this.game.input.keyboard.callbackContext = this;

				//groups
				this.background = this.game.add.group();
				this.platforms = this.game.add.group();
				this.entities = this.game.add.group();
				this.renderGroup = this.game.add.group();

				

				//add groups to render list
				this.renderGroup.add(this.background);
				this.renderGroup.add(this.platforms);
				this.renderGroup.add(this.entities);

				//initiate timers
				this.gameTimer = Date.now(); 
			},
			update: function(){
				
				//camera
				//this.camera.focusOnXY(this.player.x, this.player.y);
				
				this.gameTimer = Date.now();
			},
			render: function(){
				//this.game.debug.body(this.player)
			}
		}

		//Start it
		game = new Phaser.Game(gameWidth, gameHeight, Phaser.Canvas, 'game');
		game.state.add('preloadState', preloadState);
		game.state.add('gameState', gameState);
		game.state.start('preloadState');
	}
})();