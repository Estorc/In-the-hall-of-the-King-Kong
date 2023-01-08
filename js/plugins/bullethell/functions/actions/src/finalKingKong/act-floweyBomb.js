module.exports = {
		
    name: 'Flowey Bomb',
	id: 811,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {

			_this.originx = _this.pos.x;
			_this.originy = _this.pos.y;
			_this.begin = 0;
			
		}
		
		_this.hp -= 1;
			
		_this.direction.x = Math.cos(_BH.getDirectionToPosition(_this.pos.x+65,_this.pos.y+30,$gameVariables.value(83)+9+_BH.bhmaxwidth/2,$gameVariables.value(84)+34+_BH.bhmaxheight/2) *Math.PI/180);
		_this.direction.y = Math.sin(_BH.getDirectionToPosition(_this.pos.x+65,_this.pos.y+30,$gameVariables.value(83)+9+_BH.bhmaxwidth/2,$gameVariables.value(84)+34+_BH.bhmaxheight/2) *Math.PI/180);
		
		_this.angle = _BH.getDirectionToPosition(_this.pos.x+65,_this.pos.y+30,$gameVariables.value(83)+9+_BH.bhmaxwidth/2,$gameVariables.value(84)+34+_BH.bhmaxheight/2)
		
		if (_this.hp <= 150 && _this.hp % 30 == 0 && _this.hp != 0) {
			
			AudioManager.playSe({name: 'Blow3', pan: 0, pitch: 150, volume: 100});
			_this.sprite = _BH.loadImages("FloweyBombIgnite");
			
		} else if (_this.hp % 10 == 0) {
			
				_this.sprite = _BH.loadImages('FloweyBomb');
			
		}
		
		if (_this.hp <= 0 || _this.collideWithPlayer) {
			
			_this.hp = 0;
			AudioManager.playSe({name: 'Explosion2', pan: 0, pitch: 100, volume: 200});
			AudioManager.playSe({name: 'Ice2', pan: 0, pitch: 100, volume: 200});
				let nbBullet = 10;
				for (let n = 0; n<nbBullet; n++) {
					args = {};
					args.name = "";
					args.posx = _this.pos.x+133/2; 
					args.posy = _this.pos.y+79/2;
					args.width = 16;
					args.height = 16;
					args.speed = 3;
					args.direction = n*(360/nbBullet);
					args.directioniscircle = "true";
					args.sprite = 'WarudoBullet';
					args.hp = 0;
					args.candie = "false";
					args.canbetouched = "false";
					args.action = 0;
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					_BH.createBHObject(args)
				}
				for (let n = 0; n<nbBullet; n++) {
					args = {};
					args.name = "";
					args.posx = _this.pos.x+133/2; 
					args.posy = _this.pos.y+79/2;
					args.width = 16;
					args.height = 16;
					args.speed = 2.5;
					args.direction = n*(360/nbBullet)+(360/nbBullet)*(1/3);
					args.directioniscircle = "true";
					args.sprite = 'WarudoBullet';
					args.hp = 0;
					args.candie = "false";
					args.canbetouched = "false";
					args.action = 0;
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					_BH.createBHObject(args)
				}
				for (let n = 0; n<nbBullet; n++) {
					args = {};
					args.name = "";
					args.posx = _this.pos.x+133/2; 
					args.posy = _this.pos.y+79/2;
					args.width = 16;
					args.height = 16;
					args.speed = 2;
					args.direction = n*(360/nbBullet)+(360/nbBullet)*(2/3);
					args.directioniscircle = "true";
					args.sprite = 'WarudoBullet';
					args.hp = 0;
					args.candie = "false";
					args.canbetouched = "false";
					args.action = 0;
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					_BH.createBHObject(args)
				}
				
				args = {};
				args.name = "";
				args.speed = 0;
				args.directioniscircle = "false";
				args.hp = 29;
				args.candie = "true";
				args.canbetouched = "false";
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.cantbeinstakill = "true";
				args.action = 90;
				args.sprite = 'Explosion@29@1';
				args.width = 0;
				args.height = 0;
				args.offsety = -75+8;
				args.offsetx = -45+8;
				args.posx = _this.pos.x+133/2;
				args.posy = _this.pos.y+79/2;
				args.direction = 0;
				args.zindex = 0.5;
				args.collision = [{}];
				_BH.createBHObject(args)
			
		}
    },
};