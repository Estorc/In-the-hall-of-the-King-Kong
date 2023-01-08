module.exports = {
		
    name: 'Beast Big Laser Danger',
	id: 14,

    execute (index, _this, _BH) {
		if (_this.hp != 0) {
			if (Number.isInteger(_this.hp / 30)) {
						
			_this.offset.y -= 1000;

			}

			if (Number.isInteger(_this.hp / 60)) {
						
			_this.offset.y = 0;
			AudioManager.playSe({name: 'Siren', pan: 0, pitch: 130, volume: 100});

			}
		}

		_this.hp -= 1;

		if (_this.hp == 0) {
			
			_this.offset.y = 0;
			
		if (typeof _this.timer === 'undefined') {
			_this.timer = 0;
			AudioManager.playSe({name: 'Darkness4', pan: 0, pitch: 100, volume: 90});
		}
			
			args = {};
			args.name = "";
			args.posx = _this.pos.x;
			args.posy = _this.pos.y;
			args.offsetx = -8;
			args.offsety = 0;
			args.width = 64;
			args.height = 128;
			args.speed = 0;
			args.direction = 0;
			args.directioniscircle = "false";
			args.sprite = 'beastbiglaser';
			args.hp = 300;
			args.candie = "true";
			args.canbetouched = "false";
			args.cantbeinstakill = "true";
			args.action = 15;
			args.deathaction = 0;
			args.isPlayerShot = "false";
			args.isBonus = "false";
			_BH.createBHObject(args)
			
		}
    },
};