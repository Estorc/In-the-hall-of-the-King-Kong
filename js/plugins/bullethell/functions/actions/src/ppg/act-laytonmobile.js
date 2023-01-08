module.exports = {
		
    name: 'Layton Mobile',
	id: 46,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {
			_this.timer = 0; 
			_this.subtimer = 0; 
			_this.subtimer2 = 0; 
			_this.maxhp = _this.hp;
			_this.animt = 0; 
			_this.animx = _this.pos.x;
			_this.begin = 0;
		}
			
		
		if (_this.animt <= 60) {
			_this.animt += 1;
			_this.pos.x = _BH.easeOutSine(_this.animt,_this.animx,242+_BH.bhmaxwidth/2,60);
		} else {
			
			if (_this.timer % 360 == 0) {
			
				_BH.createHeartPointer(_this.pos.x+246-8,_this.pos.y+144-8,3,360,`${_this.name + _this.pos.y}`);
				
			}
			

			if (_this.timer % 250 == 0) {
			
				AudioManager.playSe({name: 'Thunder10', pan: 0, pitch: 150, volume: 100});
				_this.subtimer = 15;
				
				
			}
			
			if (_this.timer % 230 == 0) {
			
				_this.subtimer2 = 7;
				
			}
			
			
			if (_this.subtimer > 0 && _this.timer % 4 == 0) {
			
				_this.subtimer -= 1;
				args = {};
				args.name = "";
				args.posx = _this.pos.x + 90;
				args.posy = _this.pos.y + 110-16;
				args.width = 32;
				args.height = 32;
				args.speed = 3;
				args.direction = 90;
				args.directioniscircle = "false";
				args.sprite = 'ppg_bigbullet';
				args.candie = "false";
				args.canbetouched = "false";
				args.action = 47;
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				
				args.hp = 1;
				_BH.createBHObject(args)
				args.hp = 2;
				_BH.createBHObject(args)
				args.hp = 3;
				_BH.createBHObject(args)
				
				
			}
			
			if (_this.subtimer2 > 0 && _this.timer % 20 == 0) {
			
				AudioManager.playSe({name: 'Water1', pan: 0, pitch: 180, volume: 80});
				_this.subtimer2 -= 1;
				args = {};
				args.name = "";
				args.posx = _this.pos.x + 234;
				args.posy = _this.pos.y + 215-8;
				args.width = 16;
				args.height = 16;
				args.speed = 5;
				args.direction = Math.random()*30-15;
				args.directioniscircle = "true";
				args.sprite = 'ppg_commonbullet';
				args.candie = "false";
				args.canbetouched = "false";
				args.action = 48;
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.hp = 0;
				_BH.createBHObject(args)
				
				
			}
			
			_this.timer += 1;
			
		}
		
		if (_this.hp <= 0) {
						
			AudioManager.playSe({name: 'Earth4', pan: 0, pitch: 150, volume: 200});
			AudioManager.playSe({name: 'Fire2', pan: 0, pitch: 100, volume: 200});
			_BH.removeObjectByName(`${_this.name + _this.pos.y}`);
			for (n = 0; n<100; n++) {
				
				args = {};
				args.name = "";
				args.posx = _this.pos.x + 242/2-8;
				args.posy = _this.pos.y + 264/2-8;
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
    },
};