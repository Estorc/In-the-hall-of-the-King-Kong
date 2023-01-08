module.exports = {
		
    name: 'KK Attack 8',
	id: 4208,

    execute (index, _this, _BH) {
			if(typeof _this.begin === 'undefined') {

				_BH.swapSoul("blue");
				_this.maxhp = _this.hp;
				$gameVariables.setValue(83,640-18-500)
				$gameVariables.setValue(84,272+15)
				_this.begin = 0;
				_this.bones = [];
				
			}


			if (_this.hp == _this.maxhp) {
				
				
			_this.platform = _BH.createSmallPlatform(640-18-200+24 + _BH.bhmaxwidth/2, 338 + _BH.bhmaxheight/2, 1.25)
				
				
			for (let i = 0; i<37; i++) {
					
				args = {};
				args.name = "";
				args.speed = 0;
				args.directioniscircle = "false";
				args.hp = 2;
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
				args.posy = 460 + _BH.bhmaxwidth/2;
				args.angle = 270;
				args.collision_angle = "angle";
				args.direction = args.angle-270;
				_BH.createBHObject(args)
				
			}
			
			}
			
			
			if (_this.hp % 30 == 0) {
				
				for (let i = 0; i < 3; i++) {
					
					args = {};
					args.name = "";
					args.speed = 2.5;
					args.directioniscircle = "false";
					args.hp = 0.1;
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
					args.posx = 640-5 + 100 * (i-1) + _BH.bhmaxwidth/2;
					args.posy = ((i == 1) ? 82 : 460-10) + _BH.bhmaxwidth/2;
					args.angle = ((i == 1) ? 270 : 90);
					args.collision_angle = "angle";
					args.direction = args.angle-90;
					_this.bones.push(_BH.createBHObject(args))
					
					
				
				}

			}
			
			
			if (_this.platform.pos.x > 452-20 + 370 + _BH.bhmaxwidth/2 || _this.platform.pos.x < 640-18-200+24 + _BH.bhmaxwidth/2) {
				
				_this.platform.direction.x *= -1;
				
			}
			
			_this.bones.forEach(function (x) {
				x.hp += 2.5/6
				if (x.hp > 5) {
					
					x.hp = 5;
					
				}
				
				if ((x.angle == 270 && x.pos.y > 460-5 + _BH.bhmaxwidth/2) || (x.angle == 90 && x.pos.y < 82-5 + _BH.bhmaxwidth/2)) {
					
					x.speed = 0;
					x.hp -= 2.5/3
					
				}
				
			})
			
			
			
			_this.hp -= 1;


    },
};