module.exports = {
		
    name: 'KK_HeadFinalLoading',
	id: 1101,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {

			_this.begin = 0;
			_this.timer = 0;
			_this.originx = _this.pos.x;
			_this.originy = _this.pos.y;
			
		}

		_this.angle = _this.parent.angle;
		_this.anchor.y = _this.parent.anchor.y;
		
		if (_this.frame >= 7 && _this.frametimer >= 4) {
			
			_this.frametimer = 4;
			
			if (_this.timer == 0) {
				
				args = {};
				args.name = "";
				args.posx = _this.pos.x+123;
				args.posy = _this.pos.y+123-30;
				args.width = 1470*2 + 316;
				args.height = 60;
				args.speed = 0;
				args.direction = 0;
				args.directioniscircle = "false";
				args.sprite = 'KK-CannonLaser';
				args.hp = 1;
				args.candie = "false";
				args.opacity = 0;
				args.canbetouched = "false";
				args.cantbeinstakill = "true";
				args.action = "KK_FinalCannonLaser";
				args.anchorx = 0;
				args.deathaction = 0;
				args.anchory = 0.5;
				args.scaley = 0;
				args.angle = _this.angle+90;
				args.collision_angle = "angle";
				args.isPlayerShot = "false";
				args.isBonus = "false";
				let item = _BH.createBHObject(args)
				item.parent = _this;
				_this.child = item;
			
			}
			
			_this.timer += 1;
			
		}
		
	},
};