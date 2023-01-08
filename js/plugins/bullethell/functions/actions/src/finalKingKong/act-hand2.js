module.exports = {
		
    name: 'KK_Hand2',
	id: 1103,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {

			_this.begin = 0;
			_this.timer = 0;
			_this.originx = _this.pos.x;
			_this.originy = _this.pos.y;
			
		}
		
		if (_this.opacity < 255) {
			
			_this.opacity += 10;
			
		} else {
		
			_this.timer += 1;
			
			if (_this.timer == 60) {
				
				_this.angle -= 20;
				
				AudioManager.playSe({name: 'Earth4', pan: 0, pitch: 150, volume: 200});
				AudioManager.playSe({name: 'Fire2', pan: 0, pitch: 100, volume: 200});
				args = {};
				args.name = "";
				args.posx = (_this.pos.x > 640) ? _this.pos.x + 55-124 : _this.pos.x + 450;
				args.posy = _this.pos.y + 14;
				args.width = 124;
				args.height = 41;
				args.speed = 40;
				args.direction = (_this.pos.x > 640) ? -90 : 90;
				args.directioniscircle = "false";
				args.sprite = 'KK-Bullet';
				args.hp = 0;
				args.damage = 3;
				args.candie = "false";
				args.canbetouched = "false";
				args.cantbeinstakill = "true";
				args.action = 0;
				args.scalex = (_this.pos.x > 640) ? -1 : 1;
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				_BH.createBHObject(args)
				
			}
			
			if (_this.timer == 180) {
				
				_this.angle -= 20;
				
				AudioManager.playSe({name: 'Earth4', pan: 0, pitch: 150, volume: 200});
				AudioManager.playSe({name: 'Fire2', pan: 0, pitch: 100, volume: 200});
				args = {};
				args.name = "";
				args.posx = (_this.pos.x > 640) ? _this.pos.x + 27-124 : _this.pos.x + 478;
				args.posy = _this.pos.y + 65;
				args.width = 124;
				args.height = 41;
				args.speed = 40;
				args.direction = (_this.pos.x > 640) ? -90 : 90;
				args.directioniscircle = "false";
				args.sprite = 'KK-Bullet';
				args.hp = 0;
				args.damage = 3;
				args.candie = "false";
				args.canbetouched = "false";
				args.cantbeinstakill = "true";
				args.action = 0;
				args.scalex = (_this.pos.x > 640) ? -1 : 1;
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				_BH.createBHObject(args)
				
			}
		
		}
		
			if (_this.timer > 180) {
				
				_this.opacity -= 20;
				
				if (_this.opacity <= 0) {
					
					_this.hp = 0;
					
				}
				
			}
			
		if (_this.angle != 0) {
			
			_this.angle += 2;
			
		}
		
		if (_this.timer <= 60) {
			_this.pos.y += (($gameVariables.value(84)+43+_BH.bhmaxheight/2 - 30) - _this.pos.y)/5;
		} else {
			_this.pos.y += (($gameVariables.value(84)+43+_BH.bhmaxheight/2 - 30 - 51) - _this.pos.y)/5;
		}
		
		
	},
};