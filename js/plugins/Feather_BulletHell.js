//=============================================================================
// RPG Maker MZ - Bullet Hell Drawing
//=============================================================================

/*:
 * @target MZ
 * @plugindesc A BulletHell Engine in RPG Maker MZ.
 * @author Feather
 *
 * @help 
 * This plugin provides a complete engine to create bullet hell scenes.
 *
 *
 * @command add
 * @text Add Object
 * @desc 
 * @arg name
 * @type string
 * @text Name
 * @desc 
 * @arg posx
 * @type variable
 * @text PosX
 * @desc 
 * @arg posy
 * @type variable
 * @text PosY
 * @desc 
 * @arg width
 * @type number
 * @text Width
 * @desc 
 * @arg height
 * @type number
 * @text Height
 * @desc 
 * @arg speed
 * @type variable
 * @text Speed
 * @desc 
 * @arg direction
 * @type variable
 * @text Direction
 * @desc 
 * @arg directioniscircle
 * @type boolean
 * @text DirectionIsCircle
 * @desc 
 * @arg sprite
 * @type file
 * @dir img/bhsprite/
 * @require 1
 * @text Sprite
 * @desc 
 * @arg hp
 * @type number
 * @text HP
 * @desc 
 * @arg candie
 * @type boolean
 * @text CanDie
 * @desc 
 * @arg canbetouched
 * @type boolean
 * @text CanBeTouched
 * @desc 
 * @arg action
 * @type number
 * @text ActionID
 * @desc 
 * @arg deathaction
 * @type number
 * @text DeathActionID
 * @desc 
 * @arg isPlayerShot
 * @type boolean
 * @text IsPlayerShot
 * @desc 
 * @arg isBonus
 * @type boolean
 * @text IsBonus
 * @desc
 * @arg BonusPower
 * @type number
 * @text BonusPower
 * @desc 
 *
 * @command remove
 * @text Remove Object
 * @desc 
 * @arg id
 * @type number
 * @text ID
 * @desc 
 *
 * @command removename
 * @text Remove Name
 * @desc 
 * @arg name
 * @type string
 * @text Name
 * @desc 
 *
 * @command clear
 * @text Clear Object
 * @desc 
 *
 * @command resetppg
 * @text Reset PPG
 * @desc 
 * @arg id
 * @type number
 * @text ID
 * @desc 
 */
 

(() => {
    const pluginName = "BulletHellDrawing";
	
	$BHWaitFrames = 0;
	$ppgDeathCounter = [0,0,0,0,0,0];
	$ppgDeathCounterSaveID = [0,0,0,0,0,0];
	$ppgIsDead = 0;
	$tempAniSpeed = 0;
	
	Input.keyMapper[112] = "collisionDebug";
	


	BulletHell = function() {
		this.initialize(...arguments);
	}
	
	
	BulletHell.prototype.initialize = function() {
		
		this.modifier = 1;
		this.randomizer = 0;
		
		this.showCollisions = false;
		
		this.active = false;
		
		this.PLframe = 0;
		this.PLDurationFrame = 1;
		this.ppg_action = 0;
		this.ppg_stop = 0;
		this.plshot_timer = 0;
		this.TruckPursuit = 0;
		this.lastX = 0;
		this.lastY = 0;
		this.playerCanShot = 0;
		this.playerTypeOfShot = 0;
		
		this.actions = [];
		
		this.playerHasMove = 0;
		this.bhpage = 0;
		this.bhmaxwidth = 200;
		this.bhmaxheight = 200;
		
		this.bhworldwidth = 1280;
		this.bhworldheight = 720;
		
		this.screenw = 1280;
		this.screenh = 720;
		
		this.screenx = 0;
		this.screeny = 0;
		
		this.showPictureBellow = 0;
		this.isBlueSoul = 0;
		this.soulGravity = 0;
		this.soulJumpPower = 0;
		this.soulHasJump = 0;
		this.lastY = 0;
		this.soulOnPlatform = 0;
		this.vorid = 0;
		this.PlayerCollisionX1 = 10;
		this.PlayerCollisionX2 = 24;
		this.PlayerCollisionY1 = 37;
		this.PlayerCollisionY2 = 52;
		this.ppg_attackPaternID = 0;
		this.ppg_attackPaternWillChange = 0;
		this.spinningAttackType = 0;
		this.soulDirection = 8;
		this.ppg_attack15_timer = 0;
		this.GenosID = null;
		this.ppg_lastdialogue = 0;
		this.ppg_currentSubject = null;
		this.BeastMusic = {};
		this.bhdisplay = new Bitmap (this.screenw + this.bhmaxwidth,this.screenh + this.bhmaxheight)
		this.BHBitmap = new Bitmap(this.screenw + this.bhmaxwidth,this.screenh + this.bhmaxheight);
		this.objectsSprite = {};
		//this.objectssprite = [Bitmap.load("img/bhsprite/thanoscarbullet.png"),Bitmap.load("img/bhsprite/danger.png"),Bitmap.load("img/bhsprite/thanoscarlaser.png"),Bitmap.load("img/bhsprite/thanoscarportal.png"),Bitmap.load("img/bhsprite/bigthanoscarbullet.png"),Bitmap.load("img/bhsprite/PlayerShot.png"),Bitmap.load("img/bhsprite/blueangel.png"),Bitmap.load("img/bhsprite/SmallBonus.png"),Bitmap.load("img/bhsprite/BigBonus.png"),Bitmap.load("img/bhsprite/boss.png"),Bitmap.load("img/bhsprite/UltraBonus.png"),Bitmap.load("img/bhsprite/redangel.png"),Bitmap.load("img/bhsprite/beast.png"),Bitmap.load("img/bhsprite/beastdanger.png"),Bitmap.load("img/bhsprite/beastbiglaser.png"),Bitmap.load("img/bhsprite/beastbiglaser2.png"),Bitmap.load("img/bhsprite/THEDISK.png"),Bitmap.load("img/bhsprite/DeathAppearI.png"),Bitmap.load("img/bhsprite/DeathAppear-.png"),Bitmap.load("img/bhsprite/DeathI.png"),Bitmap.load("img/bhsprite/Death-.png"),Bitmap.load("img/bhsprite/WarudoBullet.png"),Bitmap.load("img/bhsprite/HellBullet.png"),Bitmap.load("img/bhsprite/ppg_pshot.png"),Bitmap.load("img/bhsprite/gaster_blaster.png"),Bitmap.load("img/bhsprite/gaster_blaster_left.png"),Bitmap.load("img/bhsprite/gaster_blaster_opening.png"),Bitmap.load("img/bhsprite/gaster_blaster_opening_left.png"),Bitmap.load("img/bhsprite/gaster_blaster_laser.png"),Bitmap.load("img/bhsprite/gaster_blaster_laser_left.png"),Bitmap.load("img/bhsprite/smallPlatform.png"),Bitmap.load("img/bhsprite/ppg_tophat_bottom.png"),Bitmap.load("img/bhsprite/ppg_tophat_right.png"),Bitmap.load("img/bhsprite/ppg_tophat_left.png"),Bitmap.load("img/bhsprite/ppg_letter1.png"),Bitmap.load("img/bhsprite/ppg_letter2.png"),Bitmap.load("img/bhsprite/ppg_letter3.png"),Bitmap.load("img/bhsprite/ppg_letter4.png"),Bitmap.load("img/bhsprite/ppg_letter5.png"),Bitmap.load("img/bhsprite/ppg_smallBunny_left.png"),Bitmap.load("img/bhsprite/ppg_smallBunny_right.png"),Bitmap.load("img/bhsprite/ppg_bigBunny_left.png"),Bitmap.load("img/bhsprite/ppg_bigBunny_right.png"),Bitmap.load("img/bhsprite/ppg_commonbullet.png"),Bitmap.load("img/bhsprite/ppg_explosivebullet.png"),Bitmap.load("img/bhsprite/ppg_explosivebulletWarning.png"),Bitmap.load("img/bhsprite/crystalStar.png"),Bitmap.load("img/bhsprite/crystalStarCursor.png"),Bitmap.load("img/bhsprite/ppg_bigbullet.png"),Bitmap.load("img/bhsprite/laytonmobile.png"),Bitmap.load("img/bhsprite/ppg_leftpshot.png"),Bitmap.load("img/bhsprite/crystalStarCursorLeft.png"),Bitmap.load("img/bhsprite/Genos.png"),Bitmap.load("img/bhsprite/ppg_aura.png"),Bitmap.load("img/bhsprite/Phantasmal_Sphere.png"),Bitmap.load("img/bhsprite/GenosRight.png"),Bitmap.load("img/bhsprite/ppg_laser.png"),Bitmap.load("img/bhsprite/MicroPhantasmal_Sphere.png")];
		//this.objectsspriteframes = [1,1,1,1,1,1,4,1,1,1,16,4,1,1,1,1,20,5,5,1,1,1,2,1,1,1,6,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,10,1,1,1,1,1,1,4,19,2,4,1,1];
		//this.objectsspriteframesduration = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,3,3,3,3,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,3,10,10,10,10,10,10,7,5,5,7,3,10];
		this.objects = [];
	
	};
	

	BulletHell.loadScript = function(filename) {
		const url = ("js/plugins/bullethell/"+ filename +".js");
		const script = document.createElement("script");
		script.type = "text/javascript";
		script.src = url;
		script.async = false;
		script.defer = true;
		script._url = url;
		document.body.appendChild(script);
	}

	BulletHell.loadScript("functions/main")
	BulletHell.loadScript("functions/utils")
	BulletHell.loadScript("functions/utils/seedrandom")
	BulletHell.loadScript("functions/transform")
	BulletHell.loadScript("functions/objects")
	BulletHell.loadScript("functions/sprites")
	BulletHell.loadScript("functions/playerShot")
	BulletHell.loadScript("functions/actions/actions_main")
	BulletHell.loadScript("functions/scenes")
	

	
	
	$gameBulletHell = new BulletHell();




	
	_Scene_Gameover_terminate = Scene_Gameover.prototype.terminate;
	Scene_Gameover.prototype.terminate = function() {
		_Scene_Gameover_terminate.call(this);
		
		$gameBulletHell.TruckPursuit = 0;
		$gameBulletHell.ppg_action = 0;
		$gameBulletHell.ppg_stop = 0;
		$gameBulletHell.soulGravity = 0;
		$gameBulletHell.soulJumpPower = 0;
		$gameBulletHell.objects = [];
		$gameBulletHell.active = false;
		$gameBulletHell.modifier = 1;
		$gameBulletHell.randomizer = 0;
		$gameBulletHell.showPictureBellow = 0;
		$destroyVideoOnBattle();
		
	};
	
	
    PluginManager.registerCommand(pluginName, "resetppg", args => {
		
		$gameBulletHell.ppg_attackPaternID = eval(args.id);
		$ppgIsDead = 0;

    });




	Game_Interpreter.prototype.updateWait = function() {
		return this.updateWaitCount() || this.updateWaitMode() || $gameBulletHell.updateBHWaitFrames(this);
	};




	

    PluginManager.registerCommand(pluginName, "add", args => {
		
		bhargs = {};
		bhargs.name = args.name;
		bhargs.posx = $gameVariables.value(args.posx) + $gameBulletHell.bhmaxwidth/2;
		bhargs.posy = $gameVariables.value(args.posy) + $gameBulletHell.bhmaxheight/2;
		bhargs.width = parseFloat(args.width);
		bhargs.height = parseFloat(args.height);
		bhargs.speed = $gameVariables.value(args.speed);
		bhargs.direction = $gameVariables.value(args.direction);
		bhargs.sprite = args.sprite;
		bhargs.hp = parseFloat(args.hp);
		bhargs.candie = args.candie;
		bhargs.canbetouched = args.canbetouched;
		bhargs.action = parseFloat(args.action);
		bhargs.deathaction = parseFloat(args.deathaction);
		bhargs.directioniscircle = args.directioniscircle;
		bhargs.isPlayerShot = args.isPlayerShot;
		bhargs.isBonus = args.isBonus;
		bhargs.BonusPower = parseFloat(args.BonusPower);
		$gameBulletHell.createBHObject(bhargs);

    });
	
    PluginManager.registerCommand(pluginName, "remove", args => {
		$gameBulletHell.objects[args.id] = null;
        $gameBulletHell.objects.splice(args.id);
    });
	
    PluginManager.registerCommand(pluginName, "removename", args => {
		
		$gameBulletHell.removeObjectByName(args.name);
		
    });
	
	

	
    PluginManager.registerCommand(pluginName, "clear", args => {
        $gameBulletHell.objects = [];
		$gameBulletHell.BHBitmap = new Bitmap(1280 + $gameBulletHell.bhmaxwidth,720 + $gameBulletHell.bhmaxheight);
    });

    PluginManager.registerCommand(pluginName, "set", args => {
        textPictureText = String(args.text);
    });

	
	
	
	
_Window_BattleLog_showAnimation = Window_BattleLog.prototype.showAnimation;
Window_BattleLog.prototype.showAnimation = function(subject, targets, animationId) {
	_Window_BattleLog_showAnimation.call(this, subject, targets, animationId);
	if (typeof targets[0] !== 'undefined' && typeof targets[0]._enemyId !== 'undefined' && $dataEnemies[targets[0]._enemyId].meta.dodge && $ppgIsDead == 0) {
				
			$dataEnemies[targets[0]._enemyId].dodgeSwitch = 1;
			
			if ($gameBulletHell.ppg_currentSubject != subject) {
				$gameBulletHell.ppg_attackPaternWillChange += 0.25;
				$gameBulletHell.ppg_currentSubject = subject;
			}

	}	
};
	

_Spriteset_Battle_createEnemies = Spriteset_Battle.prototype.createEnemies
Spriteset_Battle.prototype.createEnemies = function() {
	
	if ($dataEnemies[$gameTroop._enemies[0]._enemyId].meta.dog) {
		const enemies = $gameTroop.members();
		const sprites = [];
		for (const enemy of enemies) {
			sprites.push(new Sprite_Enemy(enemy));
		}
		sprites.sort(this.compareEnemySprite.bind(this));
		for (const sprite of sprites) {
			this._battleField.addChild(sprite);
		}
		this._enemySprites = sprites;
	} else {

	    _Spriteset_Battle_createEnemies.call(this);

	}
};
	
_Sprite_Enemy_updateFrame = Sprite_Enemy.prototype.updateFrame;
Sprite_Enemy.prototype.updateFrame = function() {
	if(typeof this.movedur === 'undefined') {
		this.movedur = 0;
		this.movedir = Math.random() * 360;
	}	
	
	if($dataEnemies[this._enemy._enemyId].meta.BHScene && $gameBulletHell.ppg_action == 1) {
		
		this._offsetY = -2000;
		
	} else if ($dataEnemies[this._enemy._enemyId].meta.BHScene && this._offsetY == -2000) {
		
		this._offsetY = 0;
		
	}
	
	if($dataEnemies[this._enemy._enemyId].meta.InfTP) {
		this._enemy.setTp(100);
	}	
	
	if(typeof this.dodgedur === 'undefined' && $dataEnemies[this._enemy._enemyId].meta.dodge) {
		this.dodgedur = eval($dataEnemies[this._enemy._enemyId].meta.dodge)[0];
	}		
	
	if(typeof this._enemy.dodgeSwitch === 'undefined') {
		this._enemy.dodgeSwitch = 0;
		this._enemy.dodge = false;
	}		
	
		if ($dataEnemies[this._enemy._enemyId].meta.levitate) {
			let levitateData = eval($dataEnemies[this._enemy._enemyId].meta.levitate)
			this.movedur += levitateData[0];
			this._offsetY = this._offsetY+Math.cos(this.movedur)*levitateData[1];
		}
		if ($dataEnemies[this._enemy._enemyId].meta.dog) {
			
			if (typeof this.rotDir === 'undefined') {
				
				this.rotDir = 0;
				this._mainSprite.anchor.y = 0.5;
				this._mainSprite.anchor.x = 80/168;
				this._defoffsetY = this._offsetY
				switch (this._enemy._screenX + 228) {
					
					case 334:
					this.movedur = 0;
					this.rotDir = 6;
					this._mainSprite.anchor.x = 0.5;
					this._offsetX = 50;
					break;
					case 476:
					this.movedur = 1;
					this.rotDir = 5;
					this._offsetX = -5;
					break;
					case 563:
					this.movedur = 2;
					this.rotDir = 4;
					this._offsetX = -10;
					break;
					case 651:
					this.movedur = 3;
					this.rotDir = 3;
					this._offsetX = -15;
					break;
					case 739:
					this.movedur = 4;
					this.rotDir = 2;
					this._offsetX = -20;
					break;
					case 826:
					this.movedur = 5;
					this.rotDir = 1;
					this._offsetX = -25;
					break;
					case 944:
					this.movedur = 6;
					this._offsetX = -62;
					this.rotDir = 0;
					this._mainSprite.anchor.x = 80/228;
					break;
				}
				this._offsetX += 228
				
			}
			
			
			let levitateData = eval($dataEnemies[this._enemy._enemyId].meta.levitate)
			this.movedur -= 0.045;
			this._offsetY = this._defoffsetY+Math.cos(this.movedur)*40;
			this.rotDir += 0.045

			this._mainSprite.rotation = Math.sin(this.rotDir)/2;
		}
		if ($dataEnemies[this._enemy._enemyId].meta.transcendance) {
			let transcendanceData = eval($dataEnemies[this._enemy._enemyId].meta.transcendance)
			let power = transcendanceData[0];
			let duration = transcendanceData[1];
			let targetX = Math.cos(this.movedir * Math.PI/180)*power;
			let targetY = Math.sin(this.movedir * Math.PI/180)*power;
			let distanceToZero = $gameBulletHell.getDistanceBetweenPoints(this._offsetX,this._offsetY,0,0);
			this.movedir += (Math.random() * 360 -180) / power * distanceToZero;
			let dir = $gameBulletHell.getDirectionToPosition(this._offsetX,this._offsetY,targetX,targetY);
			this._offsetX += Math.cos(dir * Math.PI/180)*power/(distanceToZero+1)/duration;
			this._offsetY += Math.sin(dir * Math.PI/180)*power/(distanceToZero+1)/duration;
		}
		if ($dataEnemies[this._enemy._enemyId].meta.dodge && $dataEnemies[this._enemy._enemyId].dodgeSwitch) {
			this._enemy.dodge = true;
			let dodgeData = eval($dataEnemies[this._enemy._enemyId].meta.dodge)
			this._mainSprite.anchor.x = this._mainSprite.anchor.x+Math.cos(this.dodgedur)*0.1;
			this.dodgedur += dodgeData[2];
			
			if (this.dodgedur >= dodgeData[1]) {
				this.dodgedur = dodgeData[0];
				$dataEnemies[this._enemy._enemyId].dodgeSwitch = 0;
			}
			
		} else {
			
			this._enemy.dodge = false;
			
		}
		
    _Sprite_Enemy_updateFrame.call(this);
};
	
	
	
	
	
	
_BattleManager_processTurn = BattleManager.processTurn
BattleManager.processTurn = function() {
	this._subject.criticalForced = false;
	this._subject.infernalParams = false;
	
	if (this._subject.hasState(158) && (Math.random()*3) < 1) {
		
		this._logWindow.push("addText", this._subject.name() + " a trop peur pour attaquer.");
		this._subject._actions = [];
		this.endAction();
		this._subject = null;
		return 0;
		
	}
	
	
	if (this._subject.hasState(150) && this._subject.turnCount() % 2 == 0) {
		
		this.endAction();
		this._subject = null;
		return 0;
		
	} 
	
	if (this._subject.hasState(157)) {
		
		
		if ($gameMap.getQTEResult() === "pending") {
		
			$gameMap.QTE(["normal"],320,$createQTEinRange(16 + Math.floor(Math.random()*5) -2),true)
			
		}
		
		if ($gameMap.getQTEResult() !== "start") {
			
			if ($gameMap.getQTEResult() !== "success") {
				this.endAction();
				this._subject = null;
				return 0;
			}	
			
		}
	} 
	
	if (typeof this._subject._enemyId !== 'undefined' && typeof this._subject.currentAction() !== 'undefined' && $dataEnemies[this._subject._enemyId].meta.BHScene) {
		
		
		let BHscene = eval($dataEnemies[this._subject._enemyId].meta.BHScene);
		let skillParam = eval(this._subject.currentAction().item().meta.BHSceneSwitch);
		
		if (BHscene[1] || skillParam) {
			BHscenes[BHscene[0]].load(this, $gameBulletHell, skillParam);
		} else {
			_BattleManager_processTurn.call(this);
		}
		
		
	} else if (this._subject.currentAction() && this._subject.currentAction().item() && this._subject.currentAction().item().meta.BHScene) {
		
		
		let BHscene = eval(this._subject.currentAction().item().meta.BHScene);
		let skillParam = eval(this._subject.currentAction().item().meta.BHSceneSwitch);
		
		if (skillParam) {
			BHscenes[BHscene].load(this, $gameBulletHell, skillParam);
		} else {
			_BattleManager_processTurn.call(this);
		}
		
		
	} else if (this._subject.currentAction() && (this._subject.currentAction().isHpEffect() || this._subject.currentAction().isMpEffect()) && typeof this._subject.armors !== 'undefined' && this._subject.armors().includes($dataArmors[1027])) {
		
		
		if ($gameMap.getQTEResult() === "pending") {
		
			$gameMap.QTE(["normal"],350,$createQTEinRange(20),true)
			
		}
		
		if ($gameMap.getQTEResult() !== "start") {
			
			if ($gameMap.getQTEResult() !== "success") {
				this._subject.criticalForced = true;
			}				
			
			_BattleManager_processTurn.call(this);
			
		}
	} else if (typeof this._subject._enemyId !== 'undefined' && this._subject.currentAction() && (this._subject.currentAction().isHpEffect() || this._subject.currentAction().isMpEffect()) && $gameSwitches.value(1100)) {
		
		
		if ($gameMap.getQTEResult() === "pending") {
		
		
			let range = Math.min(22,(this._subject.param(2)/80) << 0);
			if (range == 0) {
				SceneManager._scene._QTEWindow.result = "success";
			} else {
				$gameMap.QTE(["infernal"],350,$createQTEinRange(range),true)
			}
			
		}
		
		if ($gameMap.getQTEResult() !== "start") {
			
			if ($gameMap.getQTEResult() === "success") {
				this._subject.infernalParams = true;
			}				
			
			_BattleManager_processTurn.call(this);
			
		}
	} else {
	_BattleManager_processTurn.call(this);
	}
};

	
})();
