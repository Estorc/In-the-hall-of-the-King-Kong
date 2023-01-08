module.exports = {
		
    name: 'TF Attack 3',
	id: 703,

    execute (index, _this, _BH) {
			if(typeof _this.begin === 'undefined') {

				$gameVariables.setValue(83,640-36/2)
				$gameVariables.setValue(84,500)
				_BH.swapSoul("blue");
				_this.maxhp = _this.hp;
				_this.begin = 0;
				
				
				for (n = 2; n < 10; n++) {
					_BH.createTFPlatform(-4+_BH.bhmaxwidth/2+452+32*n, 460-70 + _BH.bhmaxheight/2, 0)
				}
				
			}

			
			_this.hp -= 1;
			
			if (_this.hp % 120 == 0) {
				AudioManager.playSe({name: 'Raise3', pan: 0, pitch: 150, volume: 80});
				
				args = {};
				args.name = "";
				args.speed = 0;
				args.directioniscircle = "false";
				args.hp = 1;
				args.candie = "true";
				args.canbetouched = "false";
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.cantbeinstakill = "true";
				args.action = 806;
				args.sprite = 'ppg_explosivebulletWarning@10@3';
				args.width = 0;
				args.height = 0;
				args.posx = _BH.bhmaxwidth/2+452+Math.random()*376-32;
				args.posy = 0;
				args.offsety = 84+_BH.bhmaxheight/2;
				args.direction = 0;
				_BH.createBHObject(args)
			}
    },
};