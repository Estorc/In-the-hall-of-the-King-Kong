module.exports = {
		
    name: 'Appear and Dispear Enemy 1 Type A',
	id: 3,

    execute (index, _this, _BH) {
		if (_this.pos.y > 160 && _this.speed != -5) {
			_this.speed = 0;
			if (typeof _this.timer === 'undefined') {
				_this.timer = 0;
			}
			_this.timer += 1;
			
		}
		
		if (typeof _this.timer !== 'undefined' && Number.isInteger(_this.timer / 30)) {
			
			args = {};
			args.name = "";
			args.posx = _this.pos.x + _this.width/2 - 8;
			args.posy = _this.pos.y + _this.height/2 - 8;
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
			
		}
		
		if (typeof _this.timer !== 'undefined' && _this.timer > 240) {
			
			_this.speed = 5;
			_this.direction.y = -1;
			_this.direction.x = 0;
			
		}
    },
};