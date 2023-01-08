module.exports = {
		
    name: 'KK Attack 5',
	id: 4205,

    execute (index, _this, _BH) {
			if(typeof _this.begin === 'undefined') {

				_BH.swapSoul("blue");
				_this.maxhp = _this.hp;
				$gameVariables.setValue(83,640-18)
				$gameVariables.setValue(84,800)
				_this.begin = 0;
				_this.bones = [];
				_this.circle = 0;
				_this.maxCircle = 6;
				
			}

			
			
			if (_this.hp % 20 == 0) {
			
			_this.bones[_this.circle] = [];
			
			for (let i = 0; i<_this.maxCircle; i++) {
					
				args = {};
				args.name = "";
				args.speed = 0;
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
				args.posx = 640-5 + _BH.bhmaxwidth/2;
				args.posy = 272-5 + _BH.bhmaxwidth/2;
				args.angle = 0;
				args.collision_angle = "angle";
				args.direction = 0;
				_this.bones[_this.circle][i] = _BH.createBHObject(args)

			}
			
			_this.bones[_this.circle][_this.maxCircle] = Math.random()*10;
			_this.bones[_this.circle][_this.maxCircle+1] = 3;
			_this.bones[_this.circle][_this.maxCircle+2] = Math.floor(Math.random()*2);
			
			_this.circle++;
			
			}
			
			
			
			
			for (let j = 0; j<_this.circle; j++) {
				for (let i = 0; i<_this.maxCircle; i++) {
						
					_this.bones[j][_this.maxCircle] += (_this.bones[j][_this.maxCircle+2] == 0) ? 0.0025 : -0.0025;
					_this.bones[j][_this.maxCircle+1] *= 1.005;
					
					let x = 640-5 + Math.cos(_this.bones[j][_this.maxCircle] + ((2*Math.PI)/_this.maxCircle)*i)*_this.bones[j][_this.maxCircle+1] + _BH.bhmaxwidth/2
					let y = 272-5 + Math.sin(_this.bones[j][_this.maxCircle] + ((2*Math.PI)/_this.maxCircle)*i)*_this.bones[j][_this.maxCircle+1] + _BH.bhmaxheight/2
					_this.bones[j][i].pos.x = x;
					_this.bones[j][i].pos.y = y;
					_this.bones[j][i].angle = _this.bones[j][_this.maxCircle]*180/Math.PI + ((360)/_this.maxCircle)*i+90;
					
				}
			}
			
			
			_this.hp -= 1;


    },
};