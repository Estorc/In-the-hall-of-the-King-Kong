module.exports = {
		
    name: 'Crystal Star',
	id: 43,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {
			_this.timer = 0; 
			_this.btimer = 0;
			_this.maxhp = _this.hp;
			_this.animt = 0; 
			_this.animy = _this.pos.y;
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
					args.sprite = 'crystalStar';
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
					args.width = 16;
					args.height = 16;
					args.speed = 2+Math.random()*5;
					args.direction = Math.random()*360;
					args.directioniscircle = "true";
					args.sprite = 'ppg_commonbullet';
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
			
		
		if (_this.animt <= 60) {
			_this.animt += 1;
			_this.pos.y = _BH.easeOutSine(_this.animt,_this.animy,272+44,60);
		} else {
			
			if (_this.timer % 360 == 0) {
			
				_BH.createHeartPointer(_BH.bhmaxwidth/2+640-9,_BH.bhmaxwidth/2+272-9,3,360,`${_this.name + _this.pos.x}`);
				
			}
			
			_this.timer += 1;
			
		}
		
    },
};