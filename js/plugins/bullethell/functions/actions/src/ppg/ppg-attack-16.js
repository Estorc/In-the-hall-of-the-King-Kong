module.exports = {
		
    name: 'PPG Final Attack',
	id: 66,

    execute (index, _this, _BH) {
			if(typeof _this.begin === 'undefined') {

				$gameScreen.picture(2)._name = "ppg_finalattackbg";
				$gameVariables.setValue(83,640-36/2)
				$gameVariables.setValue(84,500)
				_BH.PlayerCollisionX1 = 17;
				_BH.PlayerCollisionX2 = 19;
				_BH.PlayerCollisionY1 = 42;
				_BH.PlayerCollisionY2 = 44;				
				_BH.swapSoul("yellow");
				_this.maxhp = _this.hp;
				_this.begin = 0;
				_BH.summonGenos(828+_BH.bhmaxwidth/2,460+_BH.bhmaxheight/2-88)
				GenosID = _BH.getObjectByName("Genos");
				_BH.changeDir(180,GenosID);
				_BH.objects[GenosID].attack = 0;
				
			}
			
			if (_this.hp == _this.maxhp-100) {
			
				_BH.objects[GenosID].speed = 25;
				_BH.objects[GenosID].attack = 1;
				args = {};
				args.name = "";
				args.speed = 0;
				args.directioniscircle = "true";
				args.hp = 1;
				args.candie = "true";
				args.canbetouched = "false";
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.cantbeinstakill = "true";
				args.action = 33;
				args.sprite = 'ppg_laser';
				args.width = 2940;
				args.height = 30;
				args.posx = 0;
				args.posy = _BH.objects[GenosID].pos.y+15;
				args.direction = 0;
				_BH.createBHObject(args)
				
			}
			
			if (_BH.objects[GenosID].attack == 1 && 
			   ((_BH.objects[GenosID].pos.x < _BH.bhmaxwidth/2 + 452 - 90 && _BH.objects[GenosID].direction.x < 0) || 
			   (_BH.objects[GenosID].pos.x > _BH.bhmaxwidth/2 + 828 && _BH.objects[GenosID].direction.x > 0))) {
				
				_BH.objects[GenosID].speed /= 1.5;
				if (_BH.objects[GenosID].speed < 1) {
					_BH.objects[GenosID].speed = 0;
					_BH.objects[GenosID].pos.x = Math.ceil(_BH.objects[GenosID].pos.x);
					_BH.objects[GenosID].attack = 2;
					_BH.objects[GenosID].dirxtemp = _BH.objects[GenosID].direction.x;
				}
				
			}
			
			if (_BH.objects[GenosID].attack == 1 && _this.hp % 10 == 0) {
				
				args = {};
				args.name = "";
				args.speed = 5;
				args.directioniscircle = "false";
				args.hp = 0.1;
				args.candie = "true";
				args.canbetouched = "false";
				args.deathaction = 39;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.cantbeinstakill = "true";
				args.action = 38;
				args.sprite = 'ppg_explosivebullet@2';
				args.width = 16;
				args.height = 16;
				args.offsety = -32;
				args.offsetx = -8;
				args.posx = _BH.objects[GenosID].pos.x;
				args.posy = _BH.objects[GenosID].pos.y;
				args.direction = 180;
				_BH.createBHObject(args)
				
			}
			
			if (_BH.objects[GenosID].attack == 2) {
				
				if (_BH.objects[GenosID].dirxtemp < 0) {
					_BH.changeDir(10,GenosID);
				} else {
					_BH.changeDir(-10,GenosID);
				}
				_BH.objects[GenosID].speed = 5;
				if (_BH.objects[GenosID].pos.y + _BH.bhmaxheight/2 - 88 < 84) {
					
					_BH.objects[GenosID].animt = 0; 
					_BH.objects[GenosID].attack = 3;
					
				}
				else if (_BH.objects[GenosID].direction.x == -_BH.objects[GenosID].dirxtemp) {

					_BH.objects[GenosID].speed = 25;
					_BH.objects[GenosID].attack = 1;
					args = {};
					args.name = "";
					args.speed = 0;
					args.directioniscircle = "true";
					args.hp = 1;
					args.candie = "true";
					args.canbetouched = "false";
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					args.cantbeinstakill = "true";
					args.action = 33;
					args.sprite = 'ppg_laser';
					args.width = 2940;
					args.height = 30;
					args.posx = 0;
					args.posy = _BH.objects[GenosID].pos.y+15;
					args.direction = 0;
					_BH.createBHObject(args)					

				}
				
			}
			
			
			if (_BH.objects[GenosID].attack == 3) {
				
				_BH.objects[GenosID].speed = 0;
				_BH.objects[GenosID].animx = _BH.objects[GenosID].pos.x;
				_BH.objects[GenosID].animy = _BH.objects[GenosID].pos.y;
					
				
				if (_BH.objects[GenosID].animt <= 60) {
					_BH.objects[GenosID].animt += 1;
					_BH.objects[GenosID].pos.x = _BH.easeOutSine(_BH.objects[GenosID].animt,_BH.objects[GenosID].animx,452+376/2-20+_BH.bhmaxwidth/2-_BH.objects[GenosID].animx,60);
					_BH.objects[GenosID].pos.y = _BH.easeOutSine(_BH.objects[GenosID].animt,_BH.objects[GenosID].animy,84+376/2-45+_BH.bhmaxheight/2-_BH.objects[GenosID].animy,60);
				
					if (_BH.objects[GenosID].animt == 60) {
						
						_this.temphp = _this.hp;
						
						_BH.createSmallHammer(1.5,360*3+60,452+376/2,84+376/2-30,270)
						
					}
				
				} 
				
				
			}
			
			
			
			if (_BH.objects[GenosID].attack == 3 && _this.hp <= _this.temphp-360*3) {
				
				_BH.clearSpinningAttack();
				_BH.objects[GenosID].attack = 4;
				_this.temphp = _this.hp;
				
			}
			
			if ((_this.temphp - _this.hp) % 360 == 0 && _BH.objects[GenosID].attack == 3) {
				
				_BH.createHeartPointer(_BH.bhmaxwidth/2+640-9,_BH.bhmaxwidth/2+272-9,3,360,"GenosPointer");
				
			}


			if ( _BH.objects[GenosID].attack == 3 && _this.hp % 60 == 0 ) {
				
				AudioManager.playSe({name: 'Wind1', pan: 0, pitch: 50, volume: 70});
				
			}
			
			
			if ( _BH.objects[GenosID].attack == 4 && _this.hp % 10 == 0 ) {
				
				let maxSpawn = 4;
				
				for (n = 0; n < maxSpawn; n++) {
					for (k = 0; k < 2; k++) {
						args = {};
						args.name = "RotateLock";
						args.speed = 2.5;
						args.directioniscircle = "true";
						args.hp = 1;
						args.candie = "true";
						args.canbetouched = "false";
						args.deathaction = 0;
						args.isPlayerShot = "false";
						args.isBonus = "false";
						args.cantbeinstakill = "true";
						args.action = 69 + k;
						args.sprite = "null";
						args.width = 58;
						args.height = 58;
						args.offsetx = -29;
						args.offsety = -29;
						args.scalex = 0;
						args.scaley = 0;
						args.posx = _BH.objects[GenosID].pos.x+20-29;
						args.posy = _BH.objects[GenosID].pos.y+44-29;
						args.direction = n * (360/maxSpawn) + _this.hp/2.5;
						args.collision = [{'type':'circle','x':args.width/2,'y':args.height/2,'radius': (args.width + args.height)/4}];
						_BH.createBHObject(args)	
					}
				}
				
			}
			
			if (_BH.objects[GenosID].attack == 4 && _this.hp <= _this.temphp-800) {
				
				_BH.objects[GenosID].attack = 5;
				_this.temphp = _this.hp;
				
			}
			
			
			if ( _BH.objects[GenosID].attack == 5 && _this.hp % 10 == 0 && _this.hp <= _this.temphp-100 && _this.hp >= _this.temphp-1500) {
				
				let maxSpawn = 12;
				_BH.objects[GenosID].animt = 0;
				
				for (n = 0; n < maxSpawn; n++) {
					args = {};
					args.name = "";
					args.speed = 1.5;
					args.directioniscircle = "true";
					args.hp = 1;
					args.candie = "true";
					args.canbetouched = "false";
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					args.cantbeinstakill = "false";
					args.action = 0;
					args.sprite = 'MicroPhantasmal_Sphere';
					args.width = 8;
					args.height = 8;
					args.offsetx = -12;
					args.offsety = -12;
					args.posx = _BH.objects[GenosID].pos.x+20-12;
					args.posy = _BH.objects[GenosID].pos.y+44-12;
					args.direction = _BH.getDirectionToPlayer(GenosID) + n * (360/maxSpawn) + _this.hp*5.489;
					_BH.createBHObject(args)	
				}
				
			}
			
			
			if ( _BH.objects[GenosID].attack == 5 && _this.hp <= _this.temphp-1600) {
				
				
				_BH.objects[GenosID].speed = 0;
				_BH.objects[GenosID].animx = _BH.objects[GenosID].pos.x;
				_BH.objects[GenosID].animy = _BH.objects[GenosID].pos.y;
					
				
				if (_BH.objects[GenosID].animt <= 60) {
					_BH.objects[GenosID].animt += 1;
					_BH.objects[GenosID].pos.x = _BH.easeOutSine(_BH.objects[GenosID].animt,_BH.objects[GenosID].animx,828+_BH.bhmaxwidth/2-_BH.objects[GenosID].animx,60);
					_BH.objects[GenosID].pos.y = _BH.easeOutSine(_BH.objects[GenosID].animt,_BH.objects[GenosID].animy,460+_BH.bhmaxheight/2-88-_BH.objects[GenosID].animy,60);
				
					if (_BH.objects[GenosID].animt == 60) {
						
						_BH.objects[GenosID].direction.y = 0;
						_BH.objects[GenosID].direction.x = -1;
						_BH.objects[GenosID].speed = 25;
						_BH.objects[GenosID].attack = 6;
						args = {};
						args.name = "";
						args.speed = 0;
						args.directioniscircle = "true";
						args.hp = 1;
						args.candie = "true";
						args.canbetouched = "false";
						args.deathaction = 0;
						args.isPlayerShot = "false";
						args.isBonus = "false";
						args.cantbeinstakill = "true";
						args.action = 33;
						args.sprite = 'ppg_laser';
						args.width = 2940;
						args.height = 30;
						args.posx = 0;
						args.posy = _BH.objects[GenosID].pos.y+15;
						args.direction = 0;
						_BH.createBHObject(args)	
						
					}
				
				} 
				
			}
			
			
			
			
			
			
			
			
			
			
			
			
			
			if (_BH.objects[GenosID].attack == 6 && 
			   ((_BH.objects[GenosID].pos.x < _BH.bhmaxwidth/2 + 452 - 90 && _BH.objects[GenosID].direction.x < 0) || 
			   (_BH.objects[GenosID].pos.x > _BH.bhmaxwidth/2 + 828 && _BH.objects[GenosID].direction.x > 0))) {
				
				_BH.objects[GenosID].speed /= 1.5;
				if (_BH.objects[GenosID].speed < 1) {
					_BH.objects[GenosID].speed = 0;
					_BH.objects[GenosID].pos.x = Math.ceil(_BH.objects[GenosID].pos.x);
					_BH.objects[GenosID].attack = 7;
					_BH.objects[GenosID].dirxtemp = _BH.objects[GenosID].direction.x;
				}
				
			}
			
			if (_BH.objects[GenosID].attack == 6 && _this.hp % 10 == 0) {
				
				args = {};
				args.name = "";
				args.speed = 5;
				args.directioniscircle = "false";
				args.hp = 0.1;
				args.candie = "true";
				args.canbetouched = "false";
				args.deathaction = 39;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.cantbeinstakill = "true";
				args.action = 38;
				args.sprite = 'ppg_explosivebullet@2';
				args.width = 16;
				args.height = 16;
				args.offsety = -32;
				args.offsetx = -8;
				args.posx = _BH.objects[GenosID].pos.x;
				args.posy = _BH.objects[GenosID].pos.y;
				args.direction = 180;
				_BH.createBHObject(args)
				
			}
			
			if (_BH.objects[GenosID].attack == 7) {
				
				_BH.objects[GenosID].animt = 0;
				
				if (_BH.objects[GenosID].dirxtemp < 0) {
					_BH.changeDir(10,GenosID);
				} else {
					_BH.changeDir(-10,GenosID);
				}
				_BH.objects[GenosID].speed = 5;
				if (_BH.objects[GenosID].pos.y + _BH.bhmaxheight/2 - 88 < 84) {
					
					_BH.objects[GenosID].animt = 0; 
					_BH.objects[GenosID].attack = 8;
					
				}
				else if (_BH.objects[GenosID].direction.x == -_BH.objects[GenosID].dirxtemp) {

					_BH.objects[GenosID].speed = 25;
					_BH.objects[GenosID].attack = 6;
					args = {};
					args.name = "";
					args.speed = 0;
					args.directioniscircle = "true";
					args.hp = 1;
					args.candie = "true";
					args.canbetouched = "false";
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					args.cantbeinstakill = "true";
					args.action = 33;
					args.sprite = 'ppg_laser';
					args.width = 2940;
					args.height = 30;
					args.posx = 0;
					args.posy = _BH.objects[GenosID].pos.y+15;
					args.direction = 0;
					_BH.createBHObject(args)					

				}
				
			}
			
			
			if (_BH.objects[GenosID].attack == 8) {
				
				_BH.objects[GenosID].speed = 0;
				_BH.objects[GenosID].animx = _BH.objects[GenosID].pos.x;
				_BH.objects[GenosID].animy = _BH.objects[GenosID].pos.y;
					
				
				if (_BH.objects[GenosID].animt <= 60) {
					_BH.objects[GenosID].animt += 1;
					_BH.objects[GenosID].pos.x = _BH.easeOutSine(_BH.objects[GenosID].animt,_BH.objects[GenosID].animx,452+376/2-20+_BH.bhmaxwidth/2-_BH.objects[GenosID].animx,60);
					_BH.objects[GenosID].pos.y = _BH.easeOutSine(_BH.objects[GenosID].animt,_BH.objects[GenosID].animy,84+376/2-45+_BH.bhmaxheight/2-_BH.objects[GenosID].animy,60);
				
					if (_BH.objects[GenosID].animt == 60) {
						
						_this.temphp = _this.hp;
						
						_BH.objects[GenosID].attack = 9;
						
					}
				
				} 
				
				
			}
			
			
			
			if ( _BH.objects[GenosID].attack == 9 && _this.hp % 180 == 0 && _this.temphp - _this.hp < 1150-60 ) {
				
				let maxSpawn = 5;
				
				for (n = 0; n < maxSpawn; n++) {
					for (k = 0; k < 2; k++) {
						args = {};
						args.name = "FinalRotate";
						args.speed = 0;
						args.directioniscircle = "true";
						args.hp = 1;
						args.candie = "true";
						args.canbetouched = "false";
						args.deathaction = 0;
						args.isPlayerShot = "false";
						args.isBonus = "false";
						args.cantbeinstakill = "true";
						args.action = 69 + k;
						args.sprite = "null";
						args.width = 58;
						args.height = 58;
						args.offsetx = -29;
						args.offsety = -29;
						args.scalex = 0;
						args.scaley = 0;
						args.posx = _BH.objects[GenosID].pos.x+20-29;
						args.posy = _BH.objects[GenosID].pos.y+44-29;
						args.direction = n * (360/maxSpawn);
						args.collision = [{'type':'circle','x':args.width/2,'y':args.height/2,'radius': (args.width + args.height)/4}];
						_BH.createBHObject(args)	
					}
				}
				
			}
			

			if ( _BH.objects[GenosID].attack == 9 && _this.temphp - _this.hp == 150 ) {
				
				AudioManager.playSe({name: 'ppg_gasterblaster', pan: 0, pitch: 50, volume: 100});
				AudioManager.playSe({name: 'ppg_gasterblasterlaser', pan: 0, pitch: 50, volume: 100});
				_BH.createDoomFinalLaser(2.5/2,1000,_BH.objects[GenosID].pos.x+20-_BH.bhmaxwidth/2,_BH.objects[GenosID].pos.y+44+10-_BH.bhmaxheight/2,_BH.getDirectionToPlayer(GenosID)-180);
				
			}
			
			
			if ( _BH.objects[GenosID].attack == 9 && _this.temphp - _this.hp == 1150 ) {
				
				_BH.clearSpinningAttack();
				
			}
			
			
			if ( _BH.objects[GenosID].attack == 9 && _this.temphp - _this.hp == 1500 ) {
				
				AudioManager.playSe({name: 'ppg_gasterblaster', pan: 0, pitch: 50, volume: 100});
				AudioManager.playSe({name: 'ppg_gasterblasterlaser', pan: 0, pitch: 50, volume: 100});
				_BH.createDoomFinalLaser(0,500,_BH.objects[GenosID].pos.x+20-_BH.bhmaxwidth/2,_BH.objects[GenosID].pos.y+44-_BH.bhmaxheight/2,-90,[{}]);
				_BH.objects[GenosID].collision = [{}];
				
			}
			
			
			if ( _BH.objects[GenosID].attack == 9 && _this.temphp - _this.hp == 2000-60 ) {
				
				_BH.objects[GenosID].animt = 0;
				
			}
			
			
			if ( _BH.objects[GenosID].attack == 9 && _this.temphp - _this.hp >= 2000 ) {
				
				_BH.objects[GenosID].speed = 0;
				_BH.objects[GenosID].animx = _BH.objects[GenosID].pos.x;
				_BH.objects[GenosID].animy = _BH.objects[GenosID].pos.y;
					
				
				if (_BH.objects[GenosID].animt <= 300) {
					_BH.objects[GenosID].animt += 1;
					_BH.objects[GenosID].pos.y = _BH.easeOutSine(_BH.objects[GenosID].animt,_BH.objects[GenosID].animy,460+_BH.bhmaxheight/2-88-_BH.objects[GenosID].animy,300);
				
				} else {
					
					_this.hp = 0;
					
				}
				
			}
			
			
			_this.hp -= 1;
    },
};