module.exports = {
		
    name: 'KK_HeadDisappear',
	id: 1101,

    execute (index, _this, _BH) {
		if(typeof _this.begin2 === 'undefined') {

			_this.begin2 = 0;
			_this.timer = 0;
			_this.originx = _this.pos.x;
			_this.originy = _this.pos.y;
			_this.animt = 999; 
			_this.animy = _this.pos.y;
			_this.end = false;
			
		}
		
		_BH.objects[0].headCleared = true;
		
		_this.hp = 1;
		_this.collision = [{}];
		_this.action = BHactions.find(action => action.name == 'KK_HeadDisappear').execute;
		
		if (_this.opacity > 255/2 && !_BH.objects[0].armCleared) {
			
			_this.opacity -= 10;
			
		}
		
		if (_BH.objects[0].armCleared) {
			
			_BH.ppg_attackPaternID = 100;
			
			_this.opacity += 10;
			
			if (_this.opacity >= 255) {
				
				_this.angle += _this.timer;
				
				_this.timer += 0.01;
				
				if (_this.timer > 2.5) {
					
					_this.timer = 2.5;
					
					if (_this.animt == 999) {
						_this.animt = 0; 

						params = [80, ".finalFlash", 0, 0, 0, 0, 100, 100, 0, 0]
						
						point = Game_Interpreter.prototype.picturePoint.call(null, params);
						// prettier-ignore
						
						$gameScreen.showPicture(
							params[0], params[1], params[2], point.x, point.y,
							params[6], params[7], params[8], params[9]
						);
					}
					
				}
				
			}
			
				
			if (_this.animt <= 120) {
				_this.animt += 1;
				_this.pos.y = _BH.easeOutSine(_this.animt,_this.animy,(_BH.bhmaxwidth/2 + 360-123)-_this.animy,120);
			}
			
			if (_this.animt == 121) {
				
				AudioManager.playSe({name: 'Laser2', pan: 0, pitch: 100, volume: 200});
				
				args = {};
				args.name = "";
				args.posx = _this.pos.x;
				args.posy = _this.pos.y;
				args.width = 0;
				args.height = 0;
				args.speed = 0;
				args.direction = 0;
				args.directioniscircle = "false";
				args.collision = [{}]
				args.sprite = 'KK-CannonLoading@8@8';
				args.hp = 0;
				args.candie = "false";
				args.canbetouched = "false";
				args.action = "KK_HeadFinalLoading";
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				let item = _BH.createBHObject(args)
				item.parent = _this;
				_this.child = item;
				
				_this.animt += 1;
				
			}
			
			if (_this.animt == 122 && _BH.objects[0].hp % 10 == 0) {
				
				$gameScreen._tone[0] += 1;
				$gameScreen._tone[1] += 1;
				$gameScreen._tone[2] += 1;
				$gameScreen.picture(80)._opacity += 1;
				
				if ($gameScreen.picture(80)._opacity >= 255) {
					
					_this.child.child.collision = [{}];
					_this.end = true;
					params = [90, ".finalFlash2", 0, 0, 0, 0, 100, 100, 0, 0]
					
					point = Game_Interpreter.prototype.picturePoint.call(null, params);
					// prettier-ignore
					
					$gameScreen.showPicture(
						params[0], params[1], params[2], point.x, point.y,
						params[6], params[7], params[8], params[9]
					);
					
					_this.animt += 1;
					
				}
				
				AudioManager._currentBgm.volume -=0.7;
				AudioManager.playBgm(AudioManager._currentBgm)
				
				$gameScreen.startShake(5, 5, 10);
				
			}
			
			if (_this.end) {
				
				AudioManager._currentBgm.volume -= 0.5;
				AudioManager._currentBgm.volume = Math.max(0,AudioManager._currentBgm.volume)
				AudioManager.playBgm(AudioManager._currentBgm)
				$gameScreen._tone[0] -= 2;
				$gameScreen._tone[1] -= 2;
				$gameScreen._tone[2] -= 2;
				$gameScreen.picture(90)._opacity += 2;
				
				if ($gameScreen.picture(90)._opacity >= 255) {
					
					$gameScreen.erasePicture(80);
					$gameScreen.erasePicture(57);
					
					
					_BH.ppg_stop = 1;
					
				}
				
			}
			
		}
		
	},
};