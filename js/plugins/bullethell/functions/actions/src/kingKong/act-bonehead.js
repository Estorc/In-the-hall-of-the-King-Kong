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
			
		}
		
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
		args.posx = _this.pos.x;
		args.posy = _this.pos.y+2;
		args.angle = _this.angle;
		args.collision_angle = "angle";
		args.collision_scalex = "scale";
		args.collision_scaley = "scale";
		args.direction = _this.angle-270;
		_BH.createBHObject(args)

    },
};