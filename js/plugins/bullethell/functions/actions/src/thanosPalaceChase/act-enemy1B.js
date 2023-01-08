module.exports = {
		
    name: 'Appear and Dispear Enemy 1 Type B',
	id: 8,

    execute (index, _this, _BH) {
		if (typeof _this.timer === 'undefined') {
			_this.timer = 0;
		}
		_this.timer += 1;
		
		if (typeof _this.timer !== 'undefined' && Number.isInteger(_this.timer / 120)) {
			
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
    },
};