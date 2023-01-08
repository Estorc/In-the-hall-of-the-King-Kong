module.exports = {
		
    name: 'Eye Laser Appear',
	id: 812,

    execute (index, _this, _BH) {
		_this.hp -= 1;

		if (_this.hp == 0) {
			
			
			AudioManager.playSe({name: 'Darkness4', pan: 0, pitch: 100, volume: 90});
			
				args = {};
				args.name = _this.name;
				args.speed = 0;
				args.directioniscircle = "false";
				args.hp = 120;
				args.candie = "true";
				args.canbetouched = "false";
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.cantbeinstakill = "true";
				args.action = 813;
				
				args.sprite = 'DeathI';
				args.width = 8;
				args.height = 720;
				args.posx = _this.pos.x;
				args.posy = _this.pos.y;
				args.anchory = 0;
				
				args.scaley = _this.scale.y;
				args.angle = _this.angle;
				args.collision_scaley = "scale";
				args.collision_angle = "angle";
				_BH.createBHObject(args)
			
		}
    },
};