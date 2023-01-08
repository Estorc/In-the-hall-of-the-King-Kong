module.exports = {
		
    name: 'KK_Hand1',
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
			
			if (_this.opacity > 255) {
			
				if (_this.direction.y == 1) {
					_this.speed = 2.5;
				} else {
					_this.speed = 4;
				}
			
			}
			
		} else {
		
			_this.speed *= 1.1;
		
		}
		
		if ((_this.direction.x == 1 && _this.pos.x > 1280) || (_this.direction.x == -1 && _this.pos.x < 0) || (_this.direction.y == 1 && _this.pos.y > 720)) {
			
			
				AudioManager.playSe({name: 'Earth4', pan: 0, pitch: 150, volume: 200});
				AudioManager.playSe({name: 'Fire2', pan: 0, pitch: 100, volume: 200});
				$gameScreen.startShake(5, 5, 10);
				for (n = 0; n<_this.hp; n++) {
					
					args = {};
					args.name = "";
					if (_this.direction.y == 1) {
						
						args.posx = (_this.scale.x == 1) ? _this.pos.x - 8+268 : _this.pos.x + 385-360;
						
					} else {
						
						args.posx = (_this.scale.x == 1) ? _this.pos.x - 8+50 : _this.pos.x + 385-175;
						
					}

					args.posy = _this.pos.y + 101-8;
					args.width = 16;
					args.height = 16;
					args.speed = 2+Math.random()*5;
					args.direction = Math.random()*360;
					args.directioniscircle = "true";
					args.sprite = 'ppg_commonbullet';
					args.hp = 0;
					args.candie = "false";
					args.canbetouched = "false";
					args.action = 0;
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.damage = 0.25;
					args.isBonus = "false";
					_BH.createBHObject(args)
					
				}
			_this.hp = 0;
			
		}
		
	},
};