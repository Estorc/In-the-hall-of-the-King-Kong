module.exports = {
		
    name: 'Cross bullet Spawner',
	id: 17,

    execute (index, _this, _BH) {
		_this.hp -= 1;


			if (Number.isInteger(_this.hp / 1)) {
				
				args = {};
				args.name = "";
				args.posx = _this.pos.x;
				args.posy = _this.pos.y;
				args.width = 16;
				args.height = 16;
				args.speed = 4;
				args.directioniscircle = "true";
				args.sprite = 'thanoscarbullet';
				args.hp = 1;
				args.candie = "true";
				args.canbetouched = "false";
				args.action = 16;
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.direction = 0+_this.hp*2;
				_BH.createBHObject(args)
				args.direction = 90+_this.hp*2;
				_BH.createBHObject(args)
				args.direction = 180+_this.hp*2;
				_BH.createBHObject(args)
				args.direction = 270+_this.hp*2;
				_BH.createBHObject(args)
				
			}
    },
};