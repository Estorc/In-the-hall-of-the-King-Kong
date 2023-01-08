module.exports = {
		
    name: 'Crystyl Blaster',
	id: 802,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {
			

			AudioManager.playSe({name: 'Push', pan: 0, pitch: 100, volume: 100});
			_this.sprite = _BH.loadImages('tf_crystyl');
			_this.begin = 0;
			
		}

		_this.speed /= 2;	
		if (_this.speed < 1 && _this.speed > 0)	 {
			
			_this.speed = 0;
			_this.pos.x = Math.ceil(_this.pos.x);
			_this.pos.y = Math.ceil(_this.pos.y);
			
		}
		_this.hp -= 1;

		if (_this.hp == 0) {
			
				args = {};
				args.name = "";
				args.speed = 0;
				args.directioniscircle = "false";
				args.hp = 0;
				args.candie = "false";
				args.canbetouched = "false";
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.cantbeinstakill = "true";
				args.action = 803;
				args.sprite = 'tf_crystyl';
				args.width = 70;
				args.height = 70;
				args.posx = _this.pos.x;
				args.posy = _this.pos.y;
				args.angle = _this.angle;
				let _direction = (Math.atan2(_this.direction.y,_this.direction.x) * 180 / Math.PI);
				if (_direction < 0) { _direction += 360; }
				args.direction = _direction;
				_BH.createBHObject(args)
			
		}
    },
};