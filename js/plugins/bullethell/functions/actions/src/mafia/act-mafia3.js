module.exports = {
		
    name: 'Mafia 3',
	id: 83,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {
			_this.timer = 0; 
			_this.begin = 0;
		}
			
		
		if (_this.pos.x < 640 + 160-48 + $gameBulletHell.bhmaxwidth/2 && _this.pos.x > 640 - 160 + $gameBulletHell.bhmaxwidth/2) {
			
				if (_this.timer % 20 == 0) {
				
					args = {};
					args.name = "";
					args.speed = 5;
					args.directioniscircle = "false";
					args.hp = 25;
					args.candie = "true";
					args.canbetouched = "false";
					args.deathaction = 85;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					args.cantbeinstakill = "true";
					args.action = 84;
					args.sprite = 'Bomb@4';
					args.width = 48;
					args.height = 48;
					args.offsety = 0;
					args.offsetx = 0;
					args.posx = _this.pos.x;
					args.posy = _this.pos.y;
					args.direction = 180;
					args.zindex = 5;
					args.collision = [{}];
					_BH.createBHObject(args)
					
				}
			
			_this.timer += 1;
		}
    },
};