module.exports = {
		
    name: 'Crystal Star',
	id: 809,

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
			
			_this.begin = 0;
		}
		
		
		if (_this.hp <= 0) {
						
			if (_this.btimer == 0) {
			
				_BH.removeObjectByName(`${_this.name + _this.pos.x}`);
				
			}
			
			_this.scale.x = 1 + _this.btimer/30
			_this.scale.y = 1 + _this.btimer/30
			
					args = {};
					args.name = "";
					args.posx = _this.pos.x;
					args.posy = _this.pos.y;
					args.width = 0;
					args.height = 0;
					args.speed = 0;
					args.direction = 0;
					args.directioniscircle = "true";
					args.sprite = 'tf_crystalStar';
					args.hp = 1;
					args.candie = "true";
					args.canbetouched = "true";
					args.action = 1;
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.scalex = _this.scale.x + (_this.btimer % 10)/10;
					args.scaley = _this.scale.y + (_this.btimer % 10)/10;
					args.opacity = 255-((_this.btimer % 10)/10)*255
					args.isBonus = "false";
					_BH.createBHObject(args)
			
						
			if (_this.btimer % 10 == 0) {
				
				AudioManager.playSe({name: 'ppg_soulchange', pan: 0, pitch: 30, volume: 150});
				
			}
			_this.btimer += 1;
						
			if (_this.btimer >= 70) {
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
			}
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
			args.sprite = 'tf_crystalStar';
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
			
			if (_this.timer % 360 == 0) {
			
				_this.animt = 0;
				_this.animd = 30;
				_this.animy = _this.pos.y;
				_this.animx = _this.pos.x;
				
				_this.desty = 272+44+Math.random()*200-100 - _this.animy;
				_this.destx = 640+44+Math.random()*200-100 - _this.animx;
				
				let dir1 = _BH.getDirectionToPosition(_this.animx,_this.animy,_this.animx + _this.destx,_this.animy + _this.desty);
				let dir2 = _BH.getDirectionToPosition(_this.animx+44,_this.animy+44,$gameVariables.value(83)+18+_BH.bhmaxwidth/2,$gameVariables.value(84)+43+_BH.bhmaxheight/2)
				
				let i = 0;
				
				while (Math.abs(dir1-dir2) < 15 && i < 250) {
					_this.desty = 272+44+Math.random()*200-100 - _this.animy;
					_this.destx = 640+44+Math.random()*200-100 - _this.animx;
					i++
				}
				
				if (i >= 250) {
					
					_this.desty = 0;
					_this.destx = 0;
					
				}
				
			_this.anima = _this.angle;
			_this.desta = 360;
				
			}
			
			if (_this.timer % 360 == 1) {
			
				_BH.createTFHeartPointer(_this.pos.x+44,_this.pos.y+44,3,360,`${_this.name + _this.pos.x}`);
				
			}
			
			_this.timer += 1;
			
		}
		
    },
};