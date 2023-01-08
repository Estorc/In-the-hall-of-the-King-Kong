module.exports = {
		
    name: 'Appear and Dispear Boss',
	id: 10,

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
				_this.canshot = "true";
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
		
		
		
		if (typeof _this.timer !== 'undefined' && Number.isInteger(_this.timer / 1000)) {
			
			_BH.spawnBonus("UltraBonus", _BH.getRandomInt(1280) - 8, _BH.bhmaxheight/2 - 32, 32, 32, 'UltraBonus@16', 10)
			_BH.spawnBonus("UltraBonus", _BH.getRandomInt(1280) - 8, _BH.bhmaxheight/2 - 64, 32, 32, 'UltraBonus@16', 10)
			_BH.spawnBonus("UltraBonus", _BH.getRandomInt(1280) - 8, _BH.bhmaxheight/2 - 96, 32, 32, 'UltraBonus@16', 10)
			_BH.spawnBonus("UltraBonus", _BH.getRandomInt(1280) - 8, _BH.bhmaxheight/2 - 128, 32, 32, 'UltraBonus@16', 10)
			_BH.spawnBonus("UltraBonus", _BH.getRandomInt(1280) - 8, _BH.bhmaxheight/2 - 160, 32, 32, 'UltraBonus@16', 10)
		}
		
		
		
		if (typeof _this.timer !== 'undefined' && _this.timer < 1000) {

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
			
				args = {};
				args.name = "";
				args.posy = -32;
				args.width = 36;
				args.height = 32;
				args.speed = 2;
				args.direction = 180;
				args.directioniscircle = "false";
				args.sprite = 'redangel@4';
				args.hp = 3;
				args.candie = "true";
				args.canbetouched = "true";
				args.action = 7;
				args.deathaction = 6;
				args.isPlayerShot = "false";
				args.isBonus = "false";

			if (typeof _this.temptimer !== 'undefined' && Number.isInteger(_this.temptimer / 30)) {
				
				varTemp = _BH.getRandomInt(2);
				
				args.posx = (varTemp == 1) ? _BH.getRandomInt(440) - 18 : _BH.getRandomInt(440) + 840 -18;
				_BH.createBHObject(args)
			}
		}
		
		
		else if (typeof _this.timer !== 'undefined' && _this.timer < 3000) {
			
			_this.canshot = "false";
			
			if (typeof _this.timer !== 'undefined' && Number.isInteger(_this.temptimer / 20)) {
				
				args = {};
				args.name = "";
				args.posx = _this.pos.x + 120-8;
				args.posy = _this.pos.y + 242-8;
				args.width = 16;
				args.height = 16;
				args.speed = 7;
				args.direction = _BH.getRandomInt(360);
				args.directioniscircle = "true";
				args.sprite = 'thanoscarbullet';
				args.hp = 0;
				args.candie = "false";
				args.canbetouched = "false";
				args.action = 0;
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				for (n=0;n<8;n++) {
					_BH.createBHObject(args)
					args.direction += 45;
					if (args.direction > 360) {
						args.direction -= 360;
					}
				}
				
			}
			
			
			if (_this.temptimer > 80) {
				args = {};
				args.name = "";
				args.posx = _BH.getRandomInt(1264);
				args.posy = 0;
				args.width = 0;
				args.height = 0;
				args.speed = 0;
				args.direction = 0;
				args.directioniscircle = "false";
				args.sprite = 'danger';
				args.hp = 180;
				args.candie = "true";
				args.canbetouched = "false";
				args.action = 11;
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				_BH.createBHObject(args)
				_this.temptimer = 0;
			}
		}
		
		
		
		else if (typeof _this.timer !== 'undefined' && _this.timer < 4000) {
			
			if (_this.canshot != "true") {
				varTemp = 0;
				_this.temptimer = 0;
				_this.canshot = "true";
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
		} else if (typeof _this.timer !== 'undefined' && _this.timer > 4000) {

			varTemp = 0;
			_this.temptimer = 0;
			_this.canshot = "true";
			_this.timer = 0;

		}
    },
};