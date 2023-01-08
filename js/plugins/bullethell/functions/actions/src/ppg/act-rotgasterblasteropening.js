module.exports = {
		
    name: 'Rot Gaster Blaster Opening',
	id: 953,

    execute (index, _this, _BH) {
		if (_this.frame >= 5 && _this.frametimer >= 2) {
			
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
				args.action = 954;
				args.sprite = 'gaster_blaster_laser';
				args.width = 1470*2;
				args.height = 26*2;
				args.anchorx = 0;
				args.offsety = 0;
				args.offsetx = 0;
				args.opacity = 1;
				args.scaley = 0;
				args.collision_scaley = "scale";
				args.posx = _this.pos.x + _this.offset.x + (_this.anchor.x * (114));
				args.posy = _this.pos.y + _this.offset.y + (_this.anchor.y * (96-60));
				args.angle = _this.angle;
				args.collision_angle = "angle";
				args.direction = _this.angle-90;
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
				args.action = 955;
				args.sprite = _this.sprite.name;
				args.width = 114;
				args.height = 96;
				args.posx = _this.pos.x;
				args.posy = _this.pos.y;
				args.angle = _this.angle;
				args.direction = _this.angle-90;
				_BH.createBHObject(args)
			
		}
    },
};