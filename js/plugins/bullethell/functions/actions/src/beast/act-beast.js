module.exports = {
		
    name: 'Appear and Dispear Beast',
	id: 13,

    execute (index, _this, _BH) {
		if (_this.pos.y > (_BH.bhmaxheight/2)-2 && _this.speed != -5) {
			_this.speed = 0;
			if (typeof _this.timer === 'undefined') {
				_this.timer = 0;
			}
			
			if (typeof _this.temptimer === 'undefined') {
				_this.temptimer = 0;
			}
			
			if (typeof _this.canshot === 'undefined') {
				_this.canshot = 0;
				if (_this.timer == 0) {
					
					args = {};
					args.name = "";
					args.width = 0;
					args.height = 0;
					args.speed = 0;
					args.candie = "true";
					args.canbetouched = "false";
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					args.posx = 1380;
					args.posy = 0;
					args.directioniscircle = "true";
					args.sprite = 'THEDISK@20';
					args.direction = 90;
					args.action = 18;
					args.hp = 800;
					args.zindex = -1;
					_BH.createBHObject(args)
				}
			}
			
			if (_this.hp < 3000 && _this.canshot == 0) {
				
					args = {};
					args.name = "";
					args.width = 0;
					args.height = 0;
					args.speed = 0;
					args.candie = "false";
					args.canbetouched = "false";
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					args.posx = 1380;
					args.posy = 0;
					args.directioniscircle = "true";
					args.sprite = 'THEDISK@20';
					args.direction = 90;
					args.action = 18;
					args.hp = 800;
					args.zindex = -1;
					_BH.createBHObject(args)
				_this.canshot += 1;
				
			}
			
			if (_this.hp < 1500 && _this.canshot <= 1 && $gameVariables.value(1000) > 1) {
				
					args = {};
					args.name = "";
					args.posx = _this.pos.x + 120-8;
					args.posy = _this.pos.y + 242-8;
					args.width = 16;
					args.height = 16;
					if ($gameVariables.value(1000) >= 4) {
						args.speed = 2;
					} else {
						args.speed = 1;
					}
					args.direction = 0;
					args.directioniscircle = "true";
					args.sprite = 'HellBullet@2';
					args.hp = 0;
					args.candie = "false";
					args.canbetouched = "false";
					args.action = 23;
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					args.cantbeinstakill = "true";
					_BH.createBHObject(args)
				_this.canshot += 1;
				
			}
			
			_this.timer += 1;
			_this.temptimer += 1;
			
		}
		
		$gameVariables.setValue(96,_this.hp);
		
		if (typeof _this.timer !== 'undefined' && Number.isInteger(_this.timer / 60) && _this.canshot == "true") {
			
			args = {};
			args.name = "";
			args.posx = _this.pos.x + 120-8;
			args.posy = _this.pos.y + 242-8;
			args.width = 16;
			args.height = 16;
			args.speed = 7;
			args.direction = _BH.getDirectionToPlayer(index);
			args.directioniscircle = "true";
			args.sprite = 'thanoscarbullet';
			args.hp = 0;
			args.candie = "false";
			args.canbetouched = "false";
			args.action = 0;
			args.deathaction = 0;
			args.isPlayerShot = "false";
			args.isBonus = "false";
			_BH.createBHObject(args)
			args.posx = _this.pos.x + 30-8;
			args.posy = _this.pos.y + 171-8;
			_BH.createBHObject(args)
			args.posx = _this.pos.x + 210-8;
			args.posy = _this.pos.y + 171-8;
			_BH.createBHObject(args)
			
		}
		
		
		
		if (typeof _this.timer !== 'undefined' && Number.isInteger(_this.timer / 1000) && (_this.timer != 3000)) {
			
			_BH.spawnBonus("UltraBonus", _BH.getRandomInt(1280) - 8, _BH.bhmaxheight/2 - 32, 32, 32, 'UltraBonus@16', 10)
			_BH.spawnBonus("UltraBonus", _BH.getRandomInt(1280) - 8, _BH.bhmaxheight/2 - 64, 32, 32, 'UltraBonus@16', 10)
			_BH.spawnBonus("UltraBonus", _BH.getRandomInt(1280) - 8, _BH.bhmaxheight/2 - 96, 32, 32, 'UltraBonus@16', 10)
			_BH.spawnBonus("UltraBonus", _BH.getRandomInt(1280) - 8, _BH.bhmaxheight/2 - 128, 32, 32, 'UltraBonus@16', 10)
			_BH.spawnBonus("UltraBonus", _BH.getRandomInt(1280) - 8, _BH.bhmaxheight/2 - 160, 32, 32, 'UltraBonus@16', 10)
		}
		
		
		
		if (typeof _this.timer !== 'undefined' && _this.timer < 1000) {

			if (typeof _this.timer !== 'undefined' && _this.timer == 1) {
				args = {};
				args.name = "";
				args.width = 0;
				args.height = 0;
				args.speed = 0;
				args.direction = 0;
				args.directioniscircle = "false";
				args.sprite = 'beastdanger';
				args.hp = 180;
				args.candie = "true";
				args.canbetouched = "false";
				args.action = 14;
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.posx = _this.pos.x + 89;
				args.posy = _this.pos.y + 118;
				_BH.createBHObject(args)
			}
			
			
			
			
			
			
			
				args = {};
				args.name = "";
				args.posy = -32;
				args.width = 36;
				args.height = 32;
				args.speed = 3;
				args.direction = 180;
				args.directioniscircle = "false";
				args.sprite = 'blueangel@4';
				args.hp = 3;
				args.candie = "true";
				args.canbetouched = "true";
				args.action = 9;
				args.deathaction = 4;
				args.isPlayerShot = "false";
				args.isBonus = "false";

			if (typeof _this.temptimer !== 'undefined' && _this.temptimer == 120) {
				args.posx = 200 - 18;
				_BH.createBHObject(args)
				args.posx = 260 - 18;
				_BH.createBHObject(args)
			}
			
			if (typeof _this.temptimer !== 'undefined' && _this.temptimer == 240) {
				args.posx = 1080 - 18;
				_BH.createBHObject(args)
				args.posx = 1020 - 18;
				_BH.createBHObject(args)
				
				_this.temptimer = 0;
			}
		}
		
		
		
		
		else if (typeof _this.timer !== 'undefined' && _this.timer < 2000) {
			
			
			if (typeof _this.timer !== 'undefined' && _this.timer == 1200) {
				args = {};
				args.name = "";
				args.width = 0;
				args.height = 0;
				args.speed = 0;
				args.direction = 0;
				args.directioniscircle = "false";
				args.sprite = 'thanoscarbullet';
				args.hp = 1;
				args.candie = "true";
				args.canbetouched = "false";
				args.action = 20;
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.posx = 0;
				args.posy = 0;
				_BH.createBHObject(args)
			}
			
			if (typeof _this.timer !== 'undefined' && Number.isInteger(_this.timer / 6)) {
				
				args = {};
				args.name = "bossbulletd";
				args.posx = _BH.bhmaxwidth/2 + _BH.getRandomInt(1281);
				args.posy = _BH.bhmaxheight/2 - 16;
				args.width = 16;
				args.height = 16;
				args.speed = 2;
				args.direction = 180;
				args.directioniscircle = "false";
				args.sprite = 'thanoscarbullet';
				args.hp = 1;
				args.candie = "true";
				args.canbetouched = "false";
				args.action = 0;
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				_BH.createBHObject(args)
				args.posx = _BH.bhmaxwidth/2 - 16;
				args.posy = _BH.bhmaxheight/2 + _BH.getRandomInt(721);
				args.direction = 90;
				_BH.createBHObject(args)
				
			}
			

		}
		
		
		else if (typeof _this.timer !== 'undefined' && _this.timer < 4000) {
					
					
			if (typeof _this.timer !== 'undefined' && _this.timer == 2000) {
			
				$gameSwitches.setValue(517, "true");
				varTemp = 0;
			
				for (k=0; k<_BH.objects.length; k++) {
					if (_BH.objects[k].name == "bossbulletd") {
						_BH.objects[k].hp = 0;
						
					}	
				}
				
			}
			
			
			
			if (typeof _this.timer !== 'undefined' && Number.isInteger(_this.timer / 1) && varTemp == 0) {
				
				args = {};
				args.name = "WaruBullet";
				args.posx = _this.pos.x + 120-8;
				args.posy = _this.pos.y + 242-8;
				args.width = 16;
				args.height = 16;
				args.speed = 2;
				args.direction = -5 + _BH.getRandomInt(180);
				args.directioniscircle = "true";
				args.sprite = 'thanoscarbullet';
				args.hp = 0;
				args.candie = "false";
				args.canbetouched = "false";
				args.action = 0;
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				_BH.createBHObject(args)
				
			}
			
			
			if (typeof _this.timer !== 'undefined' && Number.isInteger(_this.timer / 150)) {
				
				varTemp += 1;
				
				switch (varTemp) {
					case 1:
						$gameSwitches.setValue(517, "true");
						AudioManager.playSe({name: 'The-World', pan: 0, pitch: 100, volume: 20});
						BeastMusic = AudioManager.saveBgm();
						AudioManager.stopBgm();
					
						for (k=0; k<_BH.objects.length; k++) {
							if (_BH.objects[k].name == "WaruBullet") {
								_BH.objects[k].sprite = _BH.loadImages('WarudoBullet');
								_BH.objects[k].speed = 0;
								
							}	
						}
					
					break;
				
					case 2:
						$gameSwitches.setValue(517, "true");
						AudioManager.replayBgm(BeastMusic);
						
						for (k=0; k<_BH.objects.length; k++) {
							if (_BH.objects[k].name == "WaruBullet") {
								_BH.objects[k].sprite = _BH.loadImages('thanoscarbullet');
								_BH.objects[k].speed = 16;
								_BH.objects[k].direction.x = Math.cos(_BH.getDirectionToPlayer(k) *Math.PI/180);
								_BH.objects[k].direction.y = Math.sin(_BH.getDirectionToPlayer(k) *Math.PI/180);
								
							}	
						}
						
					break;
					
					case 3:
					if (_this.timer < 3500) {
						varTemp = 0;
					}
					
					break;
				}
				
				
			}
			
			
			if (typeof _this.timer !== 'undefined' && Number.isInteger(_this.timer / 50)) {
				
				
				if (varTemp == 1) {
					
					AudioManager.playSe({name: 'Switch1', pan: 0, pitch: 90, volume: 100});
					
				}
				
				
			}
		}
		
		
		
		else if (typeof _this.timer !== 'undefined' && _this.timer < 5000) {
			
			if (typeof varTemp === 'undefined' || _this.timer == 3000) {
				varTemp = 0;
				_this.temptimer = 0;
			}

			if (typeof _this.temptimer !== 'undefined' && Number.isInteger(_this.temptimer / 60) && varTemp <= 480) {

				args = {};
				args.name = "";
				args.posx = 80 + varTemp -18 + _BH.bhmaxwidth/2;
				args.posy = -32;
				args.width = 36;
				args.height = 32;
				args.speed = 5;
				args.direction = 180;
				args.directioniscircle = "false";
				args.sprite = 'blueangel@4';
				args.hp = 3;
				args.candie = "true";
				args.canbetouched = "true";
				args.action = 3;
				args.deathaction = 4;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				
				_BH.createBHObject(args)
				
				args.posx = 1200 - varTemp -18;
				
				varTemp += 120;
				
				_BH.createBHObject(args)
			}
		} else if (typeof _this.timer !== 'undefined' && _this.timer > 5000) {

			varTemp = 0;
			_this.temptimer = 0;
			_this.timer = 0;

		}
    },
};