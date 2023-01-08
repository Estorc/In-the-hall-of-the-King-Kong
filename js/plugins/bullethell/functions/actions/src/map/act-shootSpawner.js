module.exports = {
		
    name: 'Shoot Spawner',
	id: 503,

    execute (index, _this, _BH) {
		
		_this.hp +=1;
		
		if (_this.hp % 30 == 0) {
			
			args = {};
			args.name = "shootSpawner";
			args.speed = 5;
			args.directioniscircle = "false";
			args.hp = (_this.distance*48+24)/5;
			args.candie = "true";
			args.canbetouched = "false";
			args.deathaction = 502;
			args.isPlayerShot = "false";
			args.isBonus = "false";
			args.cantbeinstakill = "false";
			args.action = function(index, _this, _BH) 
			{
				_this.hp -= 1;
				if(_this.scale.x < 1) {
					_this.scale.x += 0.1;
					_this.scale.y += 0.1;
				}
			};
			args.sprite = 'thanoscarbullet';
			args.width = 16;
			args.height = 16;
			args.scalex = 0;
			args.scaley = 0;
			args.posx = _this.pos.x-8;
			args.posy = _this.pos.y-8;
			args.direction = (Math.atan2(_this.direction.y,_this.direction.x) * 180 / Math.PI)+90;
			_BH.createBHObject(args)
			
		}
		
    },
};