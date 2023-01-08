module.exports = {
		
    name: 'SP_Crystal Star',
	id: 135,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {
			_this.timer = 0; 
			_this.btimer = 0;
			_this.maxhp = _this.hp;
			
			_this.animt = 0; 
			_this.animy = _this.pos.y;
			_this.animx = _this.pos.x;
			_this.anima = _this.angle;
			_this.animd = 60;
			_this.desty = 272+44;
			_this.destx = 0;
			_this.desta = 0;
			_this.explode = false;
			
			_this.begin = 0;
		}
		
		
		if (_this.hp <= 0) {
			
				_BH.removeObjectByName(`${_this.name} 54`);
				AudioManager.playSe({name: 'Earth4', pan: 0, pitch: 150, volume: 200});
				AudioManager.playSe({name: 'Fire2', pan: 0, pitch: 100, volume: 200});
				for (n = 0; n<100; n++) {
					
					args = {};
					args.name = "";
					args.posx = _this.pos.x + 43-8;
					args.posy = _this.pos.y + 43-8;
					args.offsetx = -8;
					args.offsety = -8;
					args.width = 16;
					args.height = 16;
					args.speed = 2+Math.random()*5;
					args.direction = Math.random()*360;
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
				
				_this.candie = true;
			return 0;
			
		}
			
		
		if (_this.animt < _this.animd) {
			_this.animt += 1;
			_this.pos.y = _BH.easeOutSine(_this.animt,_this.animy,_this.desty,_this.animd);
			_this.pos.x = _BH.easeOutSine(_this.animt,_this.animx,_this.destx,_this.animd);
			_this.angle = _BH.easeOutSine(_this.animt,_this.anima,_this.desta,_this.animd);
			args = {};
			args.name = "";
			args.posx = _this.pos.x;
			args.posy = _this.pos.y;
			args.width = 0;
			args.height = 0;
			args.speed = 0;
			args.direction = 0;
			args.directioniscircle = "true";
			args.sprite = 'crystalStar';
			args.hp = 10;
			args.candie = "true";
			args.canbetouched = "true";
			args.action = 'Disappear Object';
			args.deathaction = 0;
			args.isPlayerShot = "false";
			args.scalex = _this.scale.x;
			args.scaley = _this.scale.y;
			args.collision = [{}];
			args.isBonus = "false";
			args.zindex = -1;
			args.angle = _this.angle;
			_BH.createBHObject(args)
			
		} else {
			
			if (_this.explode) {
				
				_BH.objects[0].explode = true;
				if (_this.maxhp == 9999) {
					_BH.damageValue = (10000 - _this.hp)*10;
				} else {
					_BH.damageValue = (10000 - _this.hp)*30;
				}
				_this.hp = 0;
				
			}
			
			if (_this.timer % 360 == 0 && _this.maxhp == 9999) {
			
				_this.animt = 0;
				_this.animd = 30;
				_this.animy = _this.pos.y;
				_this.animx = _this.pos.x;
				_this.desty = 272+44+Math.random()*200-100 - _this.animy;
				_this.destx = 640+44+Math.random()*200-100 - _this.animx;
				
			_this.anima = _this.angle;
			_this.desta = 360;
				
			}
			
			if (_this.timer % 360 == 1 && _this.maxhp != 1) {
				if (_this.maxhp == 9999) {
					
					_BH.createTFHeartPointer(_this.pos.x+44,_this.pos.y+44,3,360,`${_this.name} 54`);
				
				} else {
					
					_BH.createHeartPointer(_this.pos.x+44,_this.pos.y+44,3,360,`${_this.name} 54`);
					
				}
			}
			
			_this.timer += 1;
			
		}
		
    },
};