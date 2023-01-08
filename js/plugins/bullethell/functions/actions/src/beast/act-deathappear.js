module.exports = {
		
    name: 'DEATH APPEAR',
	id: 21,

    execute (index, _this, _BH) {
		_this.hp -= 1;

		if (_this.hp == 0) {
			
			
			AudioManager.playSe({name: 'Darkness4', pan: 0, pitch: 100, volume: 90});
			
				args = {};
				args.name = "";
				args.speed = 0;
				args.directioniscircle = "false";
				args.hp = 60;
				args.candie = "true";
				args.canbetouched = "false";
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.cantbeinstakill = "true";
				args.action = 22;
			
			
			if (_this.sprite.name == 'DeathAppearI@5') {
				
				args.sprite = 'DeathI';
				args.width = 8;
				args.height = 720;
				for (d=1;d<8;d++) {
					args.posx = _BH.bhmaxwidth/2 + d*1280/8;
					args.posy = _BH.bhmaxheight/2;
					_BH.createBHObject(args)
				}
				
			}
			
			if (_this.sprite.name == 'DeathAppear-@5') {
				
				args.sprite = 'Death-';
				args.width = 1280;
				args.height = 8;
				for (d=1;d<5;d++) {
					args.posx = _BH.bhmaxwidth/2
					args.posy = _BH.bhmaxheight/2 + d*720/5;;
					_BH.createBHObject(args)
				}
				
			}
			
		}
    },
};