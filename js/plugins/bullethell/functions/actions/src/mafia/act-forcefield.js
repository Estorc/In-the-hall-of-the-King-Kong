module.exports = {
		
    name: 'Force Field',
	id: 89,

    execute (index, _this, _BH) {
			if (typeof _this.timer === 'undefined') {
				_this.timer = 0;
				_this.FFframe = 0;
				_this.connected = [];
				_this.timerFF = []
			}
			
			_this.forcesFields = _BH.objects.filter(object => object.actionid == 89);
			_this.selfFFid = _this.forcesFields.findIndex(item => item == _this);
			

			_this.timer += 1;
			
			if (_this.timer % 4 == 0) {
				
				_this.FFframe += 1;
				if (_this.FFframe >= 3) {
					_this.FFframe = 0;
				}
				
			}
			
				for (let z = 0; z<_this.forcesFields.length; z++) {
					let selfID = _this.selfFFid;
					let obj = _this.forcesFields[z];
					if (obj !== _this && typeof _this.connected !== 'undefined' && (typeof _this.connected[z] === 'undefined' || !_this.connected[z]) && _BH.getDistanceBetweenPoints(_this.pos.x,_this.pos.y,obj.pos.x,obj.pos.y) < 200) {
						if (typeof obj.connected === 'undefined') {
							obj.connected = [];
							obj.timerFF = [];
						}
						if (typeof obj.connected[selfID] === 'undefined') {
							AudioManager.playSe({name: 'Paralyze2', pan: 0, pitch: 100, volume: 70});
							obj.connected[selfID] = true;
							obj.timerFF[selfID] = 100;
						}
						args = {};
						args.name = "";
						args.speed = 0;
						args.directioniscircle = "true";
						args.hp = 0;
						args.candie = "true";
						args.canbetouched = "false";
						args.deathaction = 0;
						args.isPlayerShot = "false";
						args.isBonus = "false";
						args.cantbeinstakill = "false";
						args.action = 0;
						args.sprite = 'forceField@3';
						args.width = 48;
						args.height = 32;
						args.offsety = 0;
						args.offsetx = 0;
						args.posx = _this.pos.x+_this.width/2;
						args.posy = _this.pos.y-_this.height/2;
						args.anchorx = 0;
						args.scalex = _BH.getDistanceBetweenPoints(_this.pos.x,_this.pos.y,obj.pos.x,obj.pos.y)/48
						args.angle = _BH.getDirectionToPosition(_this.pos.x,_this.pos.y,obj.pos.x,obj.pos.y+8);
						args.collision_scalex = 'scale';
						args.collision_angle = 'angle';
						args.zindex = -0.1;
						let forceField = _BH.createBHObject(args)
						forceField.frame = _this.FFframe;
					}
					else if (obj !== _this && typeof _this.connected !== 'undefined' && (typeof _this.connected[z] !== 'undefined' && _this.connected[z]) && _BH.getDistanceBetweenPoints(_this.pos.x,_this.pos.y,obj.pos.x,obj.pos.y) >= 200 && _this.timerFF[z] > 0) {
						
						if (_this.timerFF[z] == 100) {
							AudioManager.playSe({name: 'Paralyze1', pan: 0, pitch: 150, volume: 70});
						}
						_this.timerFF[z] -= 10;
						args = {};
						args.name = "";
						args.speed = 0;
						args.directioniscircle = "true";
						args.hp = 0;
						args.candie = "true";
						args.canbetouched = "false";
						args.deathaction = 0;
						args.isPlayerShot = "false";
						args.isBonus = "false";
						args.cantbeinstakill = "false";
						args.action = 0;
						args.sprite = 'forceField@3';
						args.width = 48;
						args.height = 32;
						args.offsety = 0;
						args.offsetx = 0;
						args.posx = _this.pos.x+_this.width/2;
						args.posy = _this.pos.y-_this.height/2;
						args.anchorx = 0;
						args.scalex = _BH.getDistanceBetweenPoints(_this.pos.x,_this.pos.y,obj.pos.x,obj.pos.y)/48
						args.scaley = _this.timerFF[z]/100
						args.opacity = (_this.timerFF[z]/100)*255
						args.angle = _BH.getDirectionToPosition(_this.pos.x,_this.pos.y,obj.pos.x,obj.pos.y+8);
						args.collision_scalex = 'scale';
						args.collision_scaley = 0;
						args.collision_angle = 'angle';
						args.zindex = -0.1;
						let forceField = _BH.createBHObject(args)
						forceField.frame = _this.FFframe;
						
					}
				}
    },
};