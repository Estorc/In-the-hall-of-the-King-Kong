module.exports = {
		
    name: 'Bone',
	id: 2402,

    execute (index, _this, _BH) {
		
		
		if(typeof _this.begin === 'undefined') {
			
			_this.begin = 0;
			
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
			args.action = 0;
			args.anchorx = 0;
			args.sprite = "bonepart3";
			
			args.width = 0;
			args.height = 0;
			args.collision = [{}];
			
			args.posx = _this.pos.x;
			args.posy = _this.pos.y-2;
			args.angle = _this.angle;
			args.direction = _this.angle-270;
			_this.bone = _BH.createBHObject(args)
			
		}
		
		_this.bone.pos.x = _this.pos.x + Math.cos(_this.angle * Math.PI / 180)*(6*_this.scale.x-3)
		_this.bone.pos.y = _this.pos.y-2 + Math.sin(_this.angle * Math.PI / 180)*(6*_this.scale.x-3)
		_this.bone.angle = _this.angle;
		
		if (_this.hp <= 0) _this.bone.hp = 0;

    },
};