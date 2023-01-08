module.exports = {
		
    name: 'KK Attack 7',
	id: 4207,

    execute (index, _this, _BH) {
			if(typeof _this.begin === 'undefined') {

				_BH.swapSoul("yellow");
				_this.maxhp = _this.hp;
				$gameVariables.setValue(83,640-18)
				$gameVariables.setValue(84,272-43)
				_this.begin = 0;
				_this.bones = [[],[]];
				
			}


			if (_this.hp == _this.maxhp) {
			for (let i = 0; i<37; i++) {
				for (let j = 0; j<2; j++) {
					
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
					args.action = 2401;
					args.sprite = "bonepart1";
					args.width = 0;
					args.height = 0;
					args.collision = [{}];
					args.anchorx = 0;
					args.posx = 452+8 + i*10 + _BH.bhmaxwidth/2;
					args.posy = ((j == 0) ? 76 : 460) + _BH.bhmaxwidth/2;
					args.angle = (j == 0) ? 90 : 270;
					args.collision_angle = "angle";
					args.direction = args.angle-270;
					_this.bones[j][i] = _BH.createBHObject(args)
				
				}
			}
			
			}
			
			
			
			if (_this.maxhp - _this.hp > 70 && _this.hp % 30 == 0) {
				
				let random = Math.floor(Math.random()*3)-1;
						
				args = {};
				args.name = "";
				args.speed = 5;
				args.directioniscircle = "false";
				args.hp = 5;
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
				args.posx = 1280 + _BH.bhmaxwidth/2;
				args.posy = 272-5 + 50 * random + _BH.bhmaxwidth/2;
				args.angle = 0;
				args.collision_angle = "angle";
				args.direction = args.angle-90;
				_BH.createBHObject(args)

			}
			
			
			
			if (_this.maxhp - _this.hp < 60) {
				
				for (let i = 0; i<37; i++) {
					for (let j = 0; j<2; j++) {
						
						_this.bones[j][i].hp = ((Math.sin((_this.maxhp-_this.hp)/15 + i/10 + j*(Math.PI))*(_this.maxhp-_this.hp)/300) * 5 + 0.1 + (_this.maxhp - _this.hp)/3);
					
					}
				}
				
			} else {
			
			
				for (let i = 0; i<37; i++) {
					for (let j = 0; j<2; j++) {
						
						_this.bones[j][i].hp = (Math.sin((_this.maxhp-_this.hp)/15 + i/10 + j*(Math.PI))*Math.min(3,(_this.maxhp-_this.hp)/300)) * 5 + 20;
					
					}
				}
			
			}
			
			_this.hp -= 1;


    },
};