module.exports = {
		
    name: 'KK Attack 11',
	id: 4211,

    execute (index, _this, _BH) {
			if(typeof _this.begin === 'undefined') {

				$gameVariables.setValue(83,640-36/2)
				$gameVariables.setValue(84,272-40)
				_BH.swapSoul("blue");
				_this.maxhp = _this.hp;
				_this.begin = 0;
				_this.bones = [];
				$gameSwitches.setValue(176,true);
				
				
				for (n = 1; n < 6; n++) {
					_BH.createSmallPlatform(-4+_BH.bhmaxwidth/2+452-16+64*n, 272+20 + _BH.bhmaxheight/2, 0)
				}
				
			}
			
			
			
			if (_this.hp == _this.maxhp) {
				
				for (let j = 0; j<4; j++) {
					for (let i = 0; i<37; i++) {

						args = {};
						args.name = i.toString();
						args.speed = 0;
						args.directioniscircle = "false";
						args.hp = 3;
						args.candie = "true";
						args.canbetouched = "false";
						args.deathaction = 0;
						args.isPlayerShot = "false";
						args.isBonus = "false";
						args.cantbeinstakill = "true";
						args.action = 2401;
						args.sprite = "bonepart1";
						args.width = 0;
						args.height = 0;
						args.collision = [{}];
						args.anchorx = 0;						
		
						if (j < 2) {
							args.posx = 452+8 + i*10 + _BH.bhmaxwidth/2;
							args.posy = ((j == 0) ? 76 : 460) + _BH.bhmaxwidth/2;
							args.angle = (j == 0) ? 90 : 270;
							args.collision_angle = "angle";
							args.direction = args.angle-270;
						} else {
							args.posx = ((j == 2) ? 452-2 : 452+8 + 370) + _BH.bhmaxwidth/2;
							args.posy = 76+5 + i*10 + _BH.bhmaxwidth/2;
							args.angle = (j == 2) ? 0 : 180;
							args.collision_angle = "angle";
							args.direction = args.angle-270;
						}
						
						_this.bones.push(_BH.createBHObject(args))
						
					}
				}
			
			}
			
			_this.bones.forEach(function (x) {

					x.hp = Math.sin(_this.hp/50 + eval(x.name)/10)*5+5;
				
			})
			
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