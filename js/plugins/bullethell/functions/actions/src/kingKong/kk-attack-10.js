module.exports = {
		
    name: 'KK Attack 10',
	id: 4210,

    execute (index, _this, _BH) {
			if(typeof _this.begin === 'undefined') {

				_BH.swapSoul("blue");
				_this.maxhp = _this.hp;
				$gameVariables.setValue(83,640-18)
				$gameVariables.setValue(84,800)
				_this.begin = 0;
				_this.bones = [];
				
			}


			if (_this.hp == _this.maxhp) {
				
				
			for (let i = 0; i<37; i++) {
					
				args = {};
				args.name = "";
				args.speed = 0;
				args.directioniscircle = "false";
				args.hp = 34+Math.random()*8;
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
				args.posy = 76 + _BH.bhmaxwidth/2;
				args.angle = 90;
				args.collision_angle = "angle";
				args.direction = args.angle-270;
				_BH.createBHObject(args)
				
			}
			
			}
			
			
			if (_this.hp % 30 == 0) {
			
			for (let j = 0; j<2; j++) {
					
				args = {};
				args.name = "";
				args.speed = 2.5;
				args.directioniscircle = "false";
				args.hp = (j == 0) ? 58.5 : 2.5;
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
				args.posx = 452+8-5 + j*370 + _BH.bhmaxwidth/2;
				args.posy = ((j == 0) ? 76 : 460) + _BH.bhmaxwidth/2;
				args.angle = (j == 0) ? 90 : 270;
				args.collision_angle = "angle";
				args.direction = (j == 0) ? 90 : -90;
				_this.bones.push(_BH.createBHObject(args))
				
			}
			
			}
			
			
			
			
			_this.bones.forEach(function (x) {
				if ((x.angle == 270 && x.pos.x < 452+8-5 + _BH.bhmaxwidth/2) || (x.angle == 90 && x.pos.x > 452+8 + 370-5+ _BH.bhmaxwidth/2)) {
					
					x.hp = 0
					
				}
				
			})
			
			
			_this.hp -= 1;


    },
};