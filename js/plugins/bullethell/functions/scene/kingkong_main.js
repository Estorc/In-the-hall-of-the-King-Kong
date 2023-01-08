module.exports = {
		
    name: 'King Kong Battle',
	id: 1,


load (thisTurn, _this, skillParam) {
	
	SceneManager._scene._statusWindow.visible = false;
	let bgImage = "kingkong_attackbg";
	
	if (skillParam > 0 ) {
	
		_this.ppg_attackPaternID = skillParam;
		bgImage = "ppg_attackbgonly";
	
	}
	
	if ($tempAniSpeed == 0) {
		$tempAniSpeed = ConfigManager["battleAniSpeed"]
	}
	ConfigManager["battleAniSpeed"] = 0
	
	if (!$gameMessage.isBusy()) {
		
		// Do the actions
		if (_this.ppg_action == 0) {
			
			_this.active = true;
			ppg_currentSubject = null;
			
			
			_this.ppg_lastdialogue = 0;
			_this.soulDirection = 8;
			_this.plshot_timer = 2;
			_this.PlayerCollisionX1 = 10;
			_this.PlayerCollisionX2 = 24;
			_this.PlayerCollisionY1 = 37;
			_this.PlayerCollisionY2 = 52;
			$gameSwitches.setValue(514, false);
			
			AudioManager.playSe({name: 'ppg_noise', pan: 0, pitch: 100, volume: 100});
			
			_this.objects = [];
			_this.BHBitmap = new Bitmap(1280 + _this.bhmaxwidth,720 + _this.bhmaxheight);
			
			params = [2, bgImage, 0, 0, 0, 0, 100, 100, 255, 0]
			
			let point = Game_Interpreter.prototype.picturePoint.call(null, params);
			// prettier-ignore
			$gameScreen.showPicture(
				params[0], params[1], params[2], point.x, point.y,
				params[6], params[7], params[8], params[9]
			);
			
			
			_this.ppg_action = 1;
			_this.showPictureBellow = 1;
			const subject = thisTurn._subject;
			const action = subject.currentAction();
			
			let ppg_attackPaternDuration = [1000,1400,500,800,650,1000,1400,2000,1500,1500,2500,0,2200,2000,0,10000,1250]
			ppg_attackPaternDuration[98] = 1;
				
			//_______________ ATTACK PATERN _____________________________


			args = {};
			args.posx = 0;args.posy = 0;args.offsetx = 0;args.offsety = 0;args.width = 0;args.height = 0;args.speed = 0;args.direction = 0;args.directioniscircle = "false";args.sprite = "null";args.candie = "true";args.canbetouched = "false";args.isPlayerShot = "false";args.isBonus = "false";
					
			args.name = "ppg_atk";
			args.hp = ppg_attackPaternDuration[_this.ppg_attackPaternID];
			args.action = 4201 + _this.ppg_attackPaternID;
			args.deathaction = 50;
					
			_this.createBHObject(args)
			
			args.sprite = 'kingkong-hpbar';
			args.name = "hpbar-static";
			args.action = 'HP Bar';
			args.anchorx = 0;
			args.posx = _this.bhmaxwidth/2+628;
			args.posy = _this.bhmaxheight/2+639;
			args.zindex = 21;
			_this.createBHObject(args)
			
			_this.ppg_attackPaternID++;

		}
		
		
		var lastx = $gameVariables.value(83);
		var lasty = $gameVariables.value(84);
		
		_this.playerCanShot = 1;
		if (_this.ppg_attackPaternID >= 99) {
			_this.playerTypeOfShot = 0;
		} else {
			_this.playerTypeOfShot = 1;
		}
		
		let gravModifier = 1;
		if (_this.soulOnPlatform != 0) {
			$gameVariables.setValue(83, $gameVariables.value(83)+_this.soulOnPlatform);
		}
		
		if (_this.isBlueSoul) {
			
			_this.soulGravity -= 0.25*gravModifier;
		}
		
		$gameVariables.setValue(97, $gameVariables.value(97)-1)
		
		if ($gameVariables.value(97) < 0) {
			
			$gameVariables.setValue(97, 0)
			
		}
		

			
			if ((Input.isPressed("up") || Input.isPressed("ok")) && _this.isBlueSoul && ((_this.soulJumpPower > 0 && _this.soulHasJump) || ((_this.soulJumpPower == 0 && Math.abs(_this.soulGravity) < 0.5) && !_this.soulHasJump))) {
				
				_this.soulHasJump = 1;
				
				_this.soulJumpPower = (_this.soulJumpPower == 0) ? 3 : _this.soulJumpPower;
				
				_this.soulJumpPower += 0.5*gravModifier;
				if (_this.soulJumpPower > 10*gravModifier) {
					
					_this.soulJumpPower = 10*gravModifier;
					
				}
			}
				
		if (Input.isPressed("up") && !_this.isBlueSoul) {
			
				if (Input.isPressed("shift")) {
					
					$gameVariables.setValue(84, $gameVariables.value(84)-2)
					
				} else {
					
					$gameVariables.setValue(84, $gameVariables.value(84)-5)
					
				}
				
		}
		
		if (!Input.isPressed("up") && !Input.isPressed("ok")) {
			
			_this.soulHasJump = 0;
			
		}

		if (Input.isPressed("down") && !_this.isBlueSoul) {
			
			if (Input.isPressed("shift")) {
				
				$gameVariables.setValue(84, $gameVariables.value(84)+2)
				
			} else {
				
				$gameVariables.setValue(84, $gameVariables.value(84)+5)
				
			}
			
		}
		
		if (Input.isPressed("left")) {
			
			if (Input.isPressed("shift")) {
				
				$gameVariables.setValue(83, $gameVariables.value(83)-2)
				
			} else {
				
				$gameVariables.setValue(83, $gameVariables.value(83)-5)
				
			}
			
		}

		if (Input.isPressed("right")) {
			
			if (Input.isPressed("shift")) {
				
				$gameVariables.setValue(83, $gameVariables.value(83)+2)
				
			} else {
				
				$gameVariables.setValue(83, $gameVariables.value(83)+5)
				
			}
			
		}
		
		
		if (_this.isBlueSoul) {
			$gameVariables.setValue(84, $gameVariables.value(84) - _this.soulGravity - _this.soulJumpPower);
		}
		
		let leftBorder = 452-9;
		let rightBorder = 1280-452-27;
		let topBorder = 84-29-5;
		let bottomBorder = 720-260-47-5;
		
		if (_this.ppg_attackPaternID == 99) {
			
			leftBorder = 452-9 - 300;
			rightBorder = 1280-452-27 + 300;
			topBorder = 428-29;
			bottomBorder = 720-40;
			
		}
		
		if (_this.ppg_attackPaternID == 100) {
			
			leftBorder = 9;
			rightBorder = 1280-27;
			topBorder = 29;
			bottomBorder = 720-40;
			
		}
		
		if ($gameVariables.value(83) < leftBorder) {
			
			$gameVariables.setValue(83,leftBorder);
			
		}
		
		if ($gameVariables.value(83) > rightBorder) {
			
			$gameVariables.setValue(83,rightBorder);
			
		}
		
		if ($gameVariables.value(84) < topBorder) {
			
			$gameVariables.setValue(84,topBorder);
			if (_this.isBlueSoul) {
				
				_this.soulGravity = 0;
				_this.soulJumpPower = 0;
				
			}
			
		}
		
		if ($gameVariables.value(84) > bottomBorder) {
			
			$gameVariables.setValue(84,bottomBorder);
			
			if (_this.isBlueSoul) {
				
				_this.soulGravity = 0;
				_this.soulJumpPower = 0;
				
			}
			
		}
		
		
		
		
		/*if (Input.isPressed("cancel") && Input.isPressed("down") && _this.plshot_timer <= 0) {
			
			createSmallPlatform(Math.random()*1280 + _this.bhmaxwidth/2, Math.random()*600 + 100, 1)
			_this.plshot_timer = 3;
			
		}
		
		if (Input.isPressed("cancel") && Input.isPressed("up") && _this.plshot_timer <= 0) {
			
			swapSoul()
			_this.plshot_timer = 30;
			
		}


		if (Input.isPressed("cancel") && !Input.isPressed("up") && _this.plshot_timer <= 0) {
			
			//createGasterBlaster(Math.random()*1280 + _this.bhmaxwidth/2, Math.random()*720 + _this.bhmaxheight/2, 20, 60)
			//createTopHatLetter(Math.random()*1280 + _this.bhmaxwidth/2,20,60)
			//createTopHatBunny(Math.random()*300 + _this.bhmaxheight/2,Math.floor(Math.random()*2),20,60)
			//createDoomFinalLaser(3,10000);
			//createInvertVortex(640,272,2,43,vorid)


			
			
			_this.plshot_timer = 20;
			
		}*/
		
		if ($gameSwitches.value(517) == true) {
			
			AudioManager.playSe({name: 'Damage4', pan: 0, pitch: 150, volume: 90});
			$gameScreen.startFlash([255, 255, 255, 221], 20);
			$gameSwitches.setValue(517, false);
			
		}
		
		
		
		
		if ($gameSwitches.value(514) == true) {
			
			playerIsHit(1)
			
		}
		
		
		if (lastx != $gameVariables.value(83) || lasty != $gameVariables.value(84)) {
			
			_this.playerHasMove = 1;
			
		} else {
			
			_this.playerHasMove = 0;
			
		}
		
		if (_this.ppg_stop) {
			_this.PlayerCollisionX1 = 0;
			_this.PlayerCollisionX2 = 0;
			_this.PlayerCollisionY1 = 0;
			_this.PlayerCollisionY2 = 0;
			$gameVariables.setValue(83, -50);
			$gameScreen.erasePicture(2);
			$gameScreen.erasePicture(4);
			_this.clearSpinningAttack();
			_this.ppg_action = 0;
			thisTurn.endAction();
			thisTurn._subject = null;
			$gameScreen.erasePicture(3);
			_this.objects = [];
			ConfigManager["battleAniSpeed"] = $tempAniSpeed;
			$tempAniSpeed = 0;
			_this.ppg_stop = 0;
			
			if (_this.ppg_attackPaternID == 100) {
				
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
				
				DataManager.createGameObjects();
			
				$gameParty._actors = [];
				for (const actorId of $dataSystem.partyMembers) {
					if ($gameActors.actor(actorId)) {
						$gameParty._actors.push(actorId);
					}
				}
				
				BattleManager.setup(172, true, false);
				BattleManager.setBattleTest(true);
				BattleManager.playBattleBgm();
				SceneManager.goto(Scene_Battle);
				$gameScreen._tone = [-256,-256,-256,0]
				
			} else {
				
				AudioManager.playSe({name: 'ppg_noise', pan: 0, pitch: 100, volume: 100});
				
			}
		}
	}
}
}