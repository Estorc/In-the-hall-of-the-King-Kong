module.exports = {
		
    name: 'Ground Bounce Prop',
	id: 86,

    execute (index, _this, _BH) {
			if (typeof _this.gravity === 'undefined') { 
				_this.random = Math.floor(Math.random()*2);
				_this.baseX = _this.pos.x;
				_this.maxY = _this.pos.y+20;
				_this.gravity = 5
				_this.zindex = 3;
				_this.oldCollision = _this.collision;				
				
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
				args.cantbeinstakill = "true";
				args.action = 0;
				args.sprite = 'BombBulletShadow';
				args.width = 0;
				args.height = 0;
				args.offsety = 0;
				args.offsetx = 0;
				args.posx = _this.pos.x;
				args.posy = _this.maxY-16;
				args.direction = 0;
				args.zindex = -0.5;
				args.collision = [{}];
				_this.shadow = _BH.createBHObject(args)
				_this.cantbeinstakill = true;
				_this.hp = 1;
			}
			_this.gravity -= 0.25;
			_this.maxY += ((_this.random) ? 2 : -1)/(1+Math.abs(_this.baseX-_this.pos.x)/10);
			
			_this.pos.y -= _this.gravity;
			if (typeof _this.shadow !== 'undefined' && typeof _this.shadow.pos.y !== 'undefined') {
				_this.shadow.pos.y = _this.maxY-16;
				_this.shadow.pos.x = _this.pos.x
			}
		
		if (_this.pos.y < _this.maxY-48) {
			
			_this.collision = [{}]
			_this.zindex = 3;
			
		} else {
			
			_this.collision = _this.oldCollision;
			_this.zindex = 0.5;
			
		}
		
		if (_this.pos.y > _this.maxY-_this.height && _this.pos.x < 808 + _BH.bhmaxwidth/2 - _this.width && _this.pos.x > 472 + _BH.bhmaxwidth/2) {
			
				_this.pos.y = _this.maxY-_this.height;
				_this.gravity = Math.abs(_this.gravity*((_this.random) ? 0.75 : 1));
				if (_this.direction.y < 0) {
					_this.gravity /= 1+Math.abs(_this.direction.y);
				}
				_this.direction.y = 0;
			
		}
		if ((_this.pos.x > 808 + _BH.bhmaxwidth/2 - _this.width || _this.pos.x < 472 + _BH.bhmaxwidth/2) || _this.pos.y > 720+$gameBulletHell.bhmaxheight/2) {
			
				_this.shadow.hp = 0;
			
		}
		
		
		let maxYTruck = 302;
		
		if (_this.pos.x > 808-90 + _BH.bhmaxwidth/2 - _this.width && !(_this.pos.x > 808 + _BH.bhmaxwidth/2 - _this.width)) {
			
				maxYTruck = 302;
				maxYTruck += 73 * ((_this.pos.x-(808-90 + _BH.bhmaxwidth/2 - _this.width))/(808 + _BH.bhmaxwidth/2 - _this.width -(808-90 + _BH.bhmaxwidth/2 - _this.width)));
			
		}
		
		if (_this.pos.x < 472+90 + _BH.bhmaxwidth/2 && !(_this.pos.x < 472 + _BH.bhmaxwidth/2)) {
			
				maxYTruck = 375;
				maxYTruck -= 73 * ((_this.pos.x-(472 + _BH.bhmaxwidth/2))/((472+90 + _BH.bhmaxwidth/2) - (472 + _BH.bhmaxwidth/2)));
			
		}
		
		if (_BH.objects[i].collideWithPlayer || (_this.maxY < maxYTruck+$gameBulletHell.bhmaxheight/2 && _this.pos.y > _this.maxY-32)) {
			
			_this.shadow.hp = 0;
			_this.hp = 0;
			_this.candie = true;
			
		}
    },
};