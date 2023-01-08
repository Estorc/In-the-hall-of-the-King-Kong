module.exports = {
		
    name: 'Explosive Bullet',
	id: 84,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {
			_this.maxY = _this.pos.y + 304-48;
			_this.begin = 0;
			
			args = {};
			args.name = "";
			args.speed = 0;
			args.directioniscircle = "false";
			args.hp = 1;
			args.candie = "true";
			args.canbetouched = "false";
			args.deathaction = 0;
			args.isPlayerShot = "false";
			args.isBonus = "false";
			args.cantbeinstakill = "true";
			args.action = 0;
			args.sprite = 'BombShadow';
			args.width = 0;
			args.height = 0;
			args.offsety = 0;
			args.offsetx = 0;
			args.posx = _this.pos.x;
			args.posy = _this.maxY+10;
			args.direction = 0;
			args.zindex = -0.5;
			args.collision = [{}];
			_this.shadow = _BH.createBHObject(args)
		}

		_this.explodePower = _this.hp;

		if (_this.pos.y >=_this.maxY) {
			
				_this.shadow.hp = 0;
				_this.hp = 0;
			
		}
    },
};