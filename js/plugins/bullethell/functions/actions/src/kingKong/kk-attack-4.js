module.exports = {
		
    name: 'KK Attack 4',
	id: 4204,

    execute (index, _this, _BH) {
			if(typeof _this.begin === 'undefined') {

				_BH.swapSoul("blue");
				_this.maxhp = _this.hp;
				$gameVariables.setValue(83,640-18)
				$gameVariables.setValue(84,800)
				_this.begin = 0;
				_this.bones = [[],[]];
				
			}

			
			
			if (_this.hp % 70 == 0 && _this.maxhp - _this.hp > 50) {
				
				let random = Math.random()*10
				
				for (let i = 0; i<2; i++) {
					for (let j = 0; j<2; j++) {
						
						args = {};
						args.name = "";
						args.speed = 3+random/10;
						args.directioniscircle = "false";
						args.hp = (j == 0) ? 45-random : 2+random;
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
						args.posx = ((i == 0) ? 370 : 0) + 452+8 + _BH.bhmaxwidth/2;
						args.posy = ((j == 0) ? 76 : 460) + _BH.bhmaxwidth/2;
						args.angle = (j == 0) ? 90 : 270;
						args.collision_angle = "angle";
						args.direction = ((i == 0) ? -90 : 90);
						_this.bones[i].push(_BH.createBHObject(args));
					
					}
				}
			
			}
			
			_this.bones[0].filter(x => x.pos.x < 452+8+_BH.bhmaxwidth/2).forEach(x => x.hp = 0);
			_this.bones[1].filter(x => x.pos.x > 452+8+370+_BH.bhmaxwidth/2).forEach(x => x.hp = 0);
			
			_this.hp -= 1;


    },
};