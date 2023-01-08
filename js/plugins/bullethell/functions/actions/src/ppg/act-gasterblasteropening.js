module.exports = {
		
    name: 'Gaster Blaster Opening',
	id: 32,

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
				args.action = 33;
				args.sprite = (_this.sprite.name == 'gaster_blaster_opening@6@3') ? 'gaster_blaster_laser' : 'gaster_blaster_laser_left';
				args.width = 1470*2;
				args.height = 60;
				args.offsety = -4;
				args.offsetx = 0;
				args.opacity = 0;
				args.scaley = 0;
				args.posx = (_this.sprite.name == 'gaster_blaster_opening@6@3') ? _this.pos.x+55*2 : _this.pos.x - 1470*2 + 4
				args.posy = _this.pos.y+22;
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
				args.action = 34;
				args.sprite = _this.sprite.name;
				args.width = 57*2;
				args.height = 48*2;
				args.posx = _this.pos.x;
				args.posy = _this.pos.y;
				_direction = (Math.atan2(_this.direction.y,_this.direction.x) * 180 / Math.PI);
				if (_direction < 0) { _direction += 360; }
				args.direction = _direction;
				_BH.createBHObject(args)
			
		}
    },
};