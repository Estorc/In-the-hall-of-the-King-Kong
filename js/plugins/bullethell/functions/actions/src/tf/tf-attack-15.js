module.exports = {
		
    name: 'PPG Attack 15',
	id: 65,

    execute (index, _this, _BH) {
			if(typeof _this.begin === 'undefined') {

				$gameVariables.setValue(83,640-36/2)
				$gameVariables.setValue(84,500)
				_BH.swapSoul("blue");
				_this.maxhp = _this.hp;
				_this.begin = 0;
				
				
				for (n = 1; n < 6; n++) {
					_BH.createSmallPlatform(-4+_BH.bhmaxwidth/2+452-16+64*n, 460-70 + _BH.bhmaxheight/2, 0)
				}
				
			}

			
			_this.hp -= 1;
			
			if (_this.hp % 60 == 0 && _this.hp > 700) {
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
				args.action = 40;
				args.sprite = 'ppg_explosivebulletWarning@10@3';
				args.width = 0;
				args.height = 0;
				args.posx = _BH.bhmaxwidth/2+452+Math.random()*376-32;
				args.posy = 0;
				args.offsety = 84+_BH.bhmaxheight/2;
				args.direction = 0;
				_BH.createBHObject(args)
			}
			
			if (_this.hp % 50 == 0 && _this.hp <= 700 && _this.hp >= 200) {
				AudioManager.playSe({name: 'Raise3', pan: 0, pitch: 150, volume: 80});
				
				args = {};
				args.name = "ForcedSpeed";
				args.speed = 0;
				args.directioniscircle = "false";
				args.hp = 7;
				args.candie = "true";
				args.canbetouched = "false";
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.cantbeinstakill = "true";
				args.action = 40;
				args.sprite = 'ppg_explosivebulletWarning@10@3';
				args.width = 0;
				args.height = 0;
				args.posy = 0;
				args.offsety = 84+_BH.bhmaxheight/2;
				args.direction = 0;
				args.posx = _BH.bhmaxwidth/2+452-16+37.6*((_this.hp-200)/50);
				_BH.createBHObject(args)
				args.posx = _BH.bhmaxwidth/2+452-16+376-37.6*((_this.hp-200)/50);
				_BH.createBHObject(args)
			}
    },
};