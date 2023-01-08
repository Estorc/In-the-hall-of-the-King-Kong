module.exports = {
		
    name: 'Laser Danger',
	id: 11,

    execute (index, _this, _BH) {
		_this.hp -= 1;

		if (_this.hp != 0) {
			if (Number.isInteger(_this.hp / 30)) {
						
			_this.pos.y = 0;

			}

			if (Number.isInteger(_this.hp / 60)) {
						
			_this.pos.y = _BH.bhmaxheight/2;
			AudioManager.playSe({name: 'Siren', pan: 0, pitch: 150, volume: 100});

			}
		}

		if (_this.hp == 0) {
			
		if (typeof _this.timer === 'undefined') {
			_this.timer = 0;
			AudioManager.playSe({name: 'Darkness4', pan: 0, pitch: 100, volume: 90});
		}
		_this.timer += 1;
			
			args = {};
			args.name = "";
			args.posx = _this.pos.x;
			args.posy = _this.pos.y-32;
			args.width = 16;
			args.height = 16;
			args.speed = 16;
			args.direction = 180;
			args.directioniscircle = "false";
			args.sprite = 'thanoscarlaser';
			args.hp = 0;
			args.candie = "false";
			args.canbetouched = "false";
			args.action = 0;
			args.deathaction = 0;
			args.isPlayerShot = "false";
			args.isBonus = "false";
			_BH.createBHObject(args)
			
			
		if (_this.timer <= 60) {
			
			_this.hp = 1;
			
		}
			
		}
    },
};