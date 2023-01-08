module.exports = {
		
    name: 'Beast Big Laser',
	id: 15,

    execute (index, _this, _BH) {
		if (_this.hp == 299) {

			args = {};
			args.name = "";
			args.posx = _this.pos.x;
			args.posy = _this.pos.y+_this.height;
			args.offsetx = -8;
			args.offsety = 0;
			args.width = 64;
			args.height = 32;
			args.speed = 0;
			args.direction = 0;
			args.directioniscircle = "false";
			args.sprite = 'beastbiglaser2';
			args.hp = 300;
			args.candie = "true";
			args.canbetouched = "false";
			args.action = 15;
			args.deathaction = 0;
			args.isPlayerShot = "false";
			args.cantbeinstakill = "true";
			args.isBonus = "false";
			_BH.createBHObject(args)

		}



			if (Number.isInteger(_this.hp / 5) && _BH.getRandomInt(5) == 0) {
				
				args = {};
				args.name = "";
				args.posx = _this.pos.x + _this.width/2-8;
				args.posy = _this.pos.y + Math.random()*_this.height;
				args.width = 16;
				args.height = 16;
				args.speed = 6;
				args.direction = (Math.floor(Math.random()*2) * 180)-90;
				if (args.direction < 0) {
					args.direction += 360;
				}
				args.directioniscircle = "false";
				args.sprite = 'thanoscarbullet';
				args.hp = 1;
				args.candie = "true";
				args.canbetouched = "false";
				args.action = 16;
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				_BH.createBHObject(args)
				
			}



		_this.hp -= 1;
    },
};