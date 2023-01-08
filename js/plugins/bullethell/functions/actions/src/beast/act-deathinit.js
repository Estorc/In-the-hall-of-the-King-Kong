module.exports = {
		
    name: 'DEATH INIT',
	id: 20,

    execute (index, _this, _BH) {
				if (_this.hp == 1) {

				args = {};
				args.name = "";
				args.width = 0;
				args.height = 0;
				args.speed = 0;
				args.directioniscircle = "false";
				args.hp = 180;
				args.candie = "true";
				args.canbetouched = "false";
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.cantbeinstakill = "true";
				args.action = 21;
				
				
				args.sprite = 'DeathAppearI@5';
				for (d=1;d<8;d++) {
					args.posx = _BH.bhmaxwidth/2 + d*1280/8;
					args.posy = _BH.bhmaxheight/2;
					_BH.createBHObject(args)
				}
				
				
				args.sprite = 'DeathAppear-@5';
				for (d=1;d<5;d++) {
					args.posx = _BH.bhmaxwidth/2
					args.posy = _BH.bhmaxheight/2 + d*720/5;;
					_BH.createBHObject(args)
				}
				
				}


		_this.hp = 0;
    },
};