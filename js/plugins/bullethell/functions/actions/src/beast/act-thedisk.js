module.exports = {
		
    name: 'THE DISK',
	id: 18,

    execute (index, _this, _BH) {
		_this.hp -= 1;
			

			if (_this.hp == 798 && _this.pos.x > _BH.bhmaxwidth/2-16) {
				
				args = {};
				args.name = "";
				args.width = 16;
				args.height = 720;
				args.speed = 0;
				args.directioniscircle = "true";
				args.sprite = 'THEDISK@20';
				args.hp = 800;
				args.candie = _this.candie;
				args.canbetouched = "false";
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.cantbeinstakill = "true";
				args.zindex = -1;
				
				args.action = 19;
				args.posx = _this.pos.x;
				args.posy = _this.pos.y - 1000;
				_BH.createBHObject(args)
				
				
				args.action = 18;
				_BH.changeDir(1.41,index);
				_direction = (Math.atan2(_this.direction.y,_this.direction.x) * 180 / Math.PI);

				if (_direction < 0) {
					_direction += 360;
				}
				args.direction = _direction;
				args.posx = _this.pos.x + 16*_this.direction.x;
				args.posy = _this.pos.y + 16*_this.direction.y;
				_BH.createBHObject(args)
				
			}
    },
};