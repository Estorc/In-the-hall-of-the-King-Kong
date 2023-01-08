module.exports = {
		
    name: 'Mafia 4',
	id: 88,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {
			_this.timer = 0; 
			_this.maxhp = _this.hp;
			_this.animt = 0; 
			_this.animy = _this.pos.y;
			_this.begin = 0;
		}
			
		
		if (_this.animt <= 60) {
			_this.animt += 1;
			_this.pos.y = _BH.easeOutSine(_this.animt,_this.animy,200,60);
		} else {
			
			if (_this.timer == 0) {
				
				_this.pos.y = Math.floor(_this.pos.y);
				
			}
			
		if (typeof _this.flash !== 'undefined') {
			
			
			_this.flash.hp = 0;
			
		}
			
			if (_this.timer % 60 == 0 && _this.timer < 500) {
			
				AudioManager.playSe({name: 'Thunder5', pan: 0, pitch: 150, volume: 70});
				AudioManager.playSe({name: 'Wind3', pan: 0, pitch: 100, volume: 70});
				args = {};
				args.name = "";
				args.speed = 6;
				args.directioniscircle = "true";
				args.hp = 0;
				args.candie = "false";
				args.canbetouched = "false";
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.cantbeinstakill = "false";
				args.action = 89;
				args.sprite = 'forceFieldCore@3';
				args.width = 16;
				args.height = 16;
				args.offsety = -16;
				args.offsetx = -16;
				args.posx = _this.pos.x + _this.width/2;
				args.posy = _this.pos.y + _this.height/2;
				let random = Math.random()
				args.direction = _BH.getDirectionToPlayer(index,_this.width/2-8)+random*10
				_BH.createBHObject(args)
				args.direction = _BH.getDirectionToPlayer(index,_this.width/2-8)-random*10
				_BH.createBHObject(args)
				
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
					args.cantbeinstakill = "false";
					args.action = 0;
					args.sprite = 'MafiaBulletFlash';
					args.width = 0;
					args.height = 0;
					args.offsety = -80;
					args.offsetx = -16;
					args.posx = _this.pos.x - _this.width/2;
					args.posy = _this.pos.y + _this.height/2+24;
					args.collision = [{}];
					args.zindex = 15;
					_this.flash = _BH.createBHObject(args)
				
			}
			
			if (_this.timer >= 500) {
			
				let objDir = _this.getDirection()
			
				if (_this.pos.x+24 > 640 + _BH.bhmaxwidth/2 && objDir > 0 && objDir <=90)  {
					_this.direction = _this.initDir(objDir-2,true);
				}
				if (_this.pos.x+24 < 640 + _BH.bhmaxwidth/2 && objDir < 180 && objDir >=90)  {
					_this.direction = _this.initDir(objDir+2,true);
				}
				_this.speed = 4;
				
			}
			
			_this.timer += 1;
			
		}
			_this.zindex = _this.pos.y/10000
    },
};