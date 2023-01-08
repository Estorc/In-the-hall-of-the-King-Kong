module.exports = {
		
    name: 'Mafia 1',
	id: 81,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {
			_this.timer = 0; 
			_this.maxhp = _this.hp;
			_this.animt = 0; 
			_this.animy = _this.pos.y;
			_this.begin = 0;
			_this.randomy = Math.random()*(-200);
		}
			
		
		if (_this.animt <= 60) {
			_this.animt += 1;
			_this.pos.y = _BH.easeOutSine(_this.animt,_this.animy,_this.randomy-72-44,60);
		} else {
			
			if (_this.timer == 0) {
				
				_this.pos.y = Math.floor(_this.pos.y);
				
			}
			
		if (typeof _this.flash !== 'undefined') {
			
			
			_this.flash.hp = 0;
			
		}
			
			if (_this.timer % 60 == 0) {
			
				AudioManager.playSe({name: 'Gun1', pan: 0, pitch: 100, volume: 100});
				args = {};
				args.name = "";
				args.speed = 10;
				args.directioniscircle = "true";
				args.hp = 0;
				args.candie = "false";
				args.canbetouched = "false";
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.cantbeinstakill = "false";
				args.action = 87;
				args.sprite = 'MafiaBullet';
				args.width = 2;
				args.height = 2;
				args.offsety = 0;
				args.offsetx = 0;
				args.anchorx = 1;
				args.scalex = 0;
				args.posx = _this.pos.x - _this.width/2-16;
				args.posy = _this.pos.y + _this.height/2+24;
				args.angle = _BH.getDirectionToPlayer(index,64 - _this.width-16,24);
				args.direction = _BH.getDirectionToPlayer(index,64 - _this.width-16,24);
				args.collision =[{type:'rect',x1:60,y1:0,x2:2,y2:2}];
				args.zindex = 10;
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
			
			if (_this.timer == 500) {
			
				_this.direction.x = 0;
				_this.direction.y = 1;
				_this.speed = 2;
				
			}
			
			_this.timer += 1;
			
		}
			_this.zindex = _this.pos.y/10000
    },
};