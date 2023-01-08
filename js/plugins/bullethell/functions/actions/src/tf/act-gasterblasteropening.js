module.exports = {
		
    name: 'Crystyl Opening',
	id: 803,

    execute (index, _this, _BH) {
		
		if (typeof _this.originalAngle === 'undefined') {
			
			_this.originalAngle = _this.angle;
			
		}
		
		
		if (_this.angle >= _this.originalAngle+45 && _this.frametimer >= 2) {
			
				_this.candie = true;
				_this.hp = 0;
				
				args = {};
				args.name = "";
				args.speed = 10;
				args.directioniscircle = "false";
				args.hp = 0;
				args.candie = "false";
				args.canbetouched = "false";
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.cantbeinstakill = "true";
				args.action = 804;
				args.sprite = 'tf_crystylblaster';
				args.width = 1470*2;
				args.height = 26*2;
				args.anchorx = 0;
				args.offsety = 0;
				args.offsetx = 0;
				args.opacity = 1;
				args.scaley = 0;
				args.collision_scaley = "scale";
				args.posx = _this.pos.x+35;
				args.posy = _this.pos.y;
				args.angle = _this.originalAngle;
				args.collision_angle = "angle";
				args.direction = _this.getDirection();
				_BH.createBHObject(args)
				
				
				args = {};
				args.name = "";
				args.speed = 10;
				args.directioniscircle = "false";
				args.hp = 0;
				args.candie = "false";
				args.canbetouched = "false";
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.cantbeinstakill = "true";
				args.action = 805;
				args.sprite = _this.sprite.name;
				args.width = 70;
				args.height = 70;
				args.posx = _this.pos.x;
				args.posy = _this.pos.y;
				args.angle = _this.angle;
				args.direction = _this.getDirection();
				_BH.createBHObject(args)
			
		} else {
			
			_this.angle += 3;
			
		}
    },
};