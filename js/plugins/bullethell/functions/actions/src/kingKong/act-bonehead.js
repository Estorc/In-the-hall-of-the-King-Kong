module.exports = {
		
    name: 'Bonehead',
	id: 2401,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {

			_this.x = 0;
			_this.y = 0;
			_this.originx = _this.pos.x;
			_this.originy = _this.pos.y;
			_this.begin = 0;
			
			args = {};
			args.name = "";
			args.speed = 0;
			args.directioniscircle = "false";
			args.hp = _this.hp;
			args.candie = "true";
			args.canbetouched = "false";
			args.deathaction = 0;
			args.isPlayerShot = "false";
			args.isBonus = "false";
			args.cantbeinstakill = "true";
			args.action = 2402;
			args.sprite = "bonepart2";
			args.offsety = -2;
			args.width = 6;
			args.height = 6;
			args.anchorx = 0;
			args.posx = _this.pos.x+6*_this.direction.x;
			args.posy = _this.pos.y+2+6*_this.direction.y;
			args.angle = _this.angle;
			args.collision_angle = "angle";
			args.collision_scalex = "scale";
			args.collision_scaley = "scale";
			args.direction = _this.angle-270;
			args.scalex = _this.hp;
			_this.bone = _BH.createBHObject(args)
			
		}
		
		_this.bone.angle = _this.angle;
		
		_this.bone.changeDirection(_this.angle-270,false);
		_this.bone.pos.x = _this.pos.x+6*_this.bone.direction.x;
		_this.bone.pos.y = _this.pos.y+2+6*_this.bone.direction.y;
		_this.bone.scale.x = _this.hp;
		
		if (_this.hp <= 0) _this.bone.hp = 0;

    },
};