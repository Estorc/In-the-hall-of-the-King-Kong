module.exports = {
		
    name: 'Bone',
	id: 2402,

    execute (index, _this, _BH) {
		
		
		_this.scale.x = _this.hp;
		
		_this.hp = 0;

		args = {};
		args.name = "";
		args.speed = 0;
		args.directioniscircle = "false";
		args.hp = _this.scale.x;
		args.candie = "true";
		args.canbetouched = "false";
		args.deathaction = 0;
		args.isPlayerShot = "false";
		args.isBonus = "false";
		args.cantbeinstakill = "true";
		args.action = 2403;
		args.anchorx = 0;
		args.sprite = "bonepart3";
		
		args.width = 0;
		args.height = 0;
		args.collision = [{}];
		
		args.posx = _this.pos.x;
		args.posy = _this.pos.y-2;
		args.angle = _this.angle;
		args.direction = _this.angle-270;
		_BH.createBHObject(args)
	
		_this.pos.x += 6*_this.direction.x
		_this.pos.y += 6*_this.direction.y

    },
};