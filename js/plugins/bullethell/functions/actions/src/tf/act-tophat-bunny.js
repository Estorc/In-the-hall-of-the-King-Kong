module.exports = {
		
    name: 'Top Hat Bunny',
	id: 36,

    execute (index, _this, _BH) {
		if (typeof _this.maxhp === 'undefined') { _this.maxhp = _this.hp }
			
		
		if (_this.speed > 0 && ((_this.direction.x < 0 && _this.sprite.name == 'ppg_tophat_left') || (_this.direction.x > 0 && _this.sprite.name == 'ppg_tophat_right'))) {
			if (_this.pos.x > _BH.bhmaxwidth/2 + 300 && _this.pos.x < 1280 - 300) {
				if (_this.speed <= 1) {
					
					_this.speed = 0;
					_this.pos.y = Math.ceil(_this.pos.y);
					_this.pos.x = Math.ceil(_this.pos.x);
					
				} else {
				
					_this.speed *= 0.25;
				
				}
			}
		} else {
			
			_this.hp -= 1;
			
			
			if (_this.hp == Math.floor(_this.maxhp*0.9)) {
				
					if (_this.direction.x < 0) {
						_BH.createGroundJumpingBullet(_this.pos.x-3,_this.pos.y-3+16,28,26,5,270,'ppg_smallBunny_left',-4,-6);
					}
					else {
						_BH.createGroundJumpingBullet(_this.pos.x-1+28,_this.pos.y-3+16,28,26,5,90,'ppg_smallBunny_right',-4,-6);
					}
			}
				
				
				
			if (_this.hp == Math.floor(_this.maxhp*0.7)) {
				
					if (_this.direction.x < 0) {
						_BH.createGroundJumpingBullet(_this.pos.x-3,_this.pos.y-3+16,28,26,5,270,'ppg_smallBunny_left',-4,-6);
					}
					else {
						_BH.createGroundJumpingBullet(_this.pos.x-1+28,_this.pos.y-3+16,28,26,5,90,'ppg_smallBunny_right',-4,-6);
					}
				
			}
				
				
				
			if (_this.hp == Math.floor(_this.maxhp*0.5)) {
				
					if (_this.direction.x < 0) {
						_BH.createGroundJumpingBullet(_this.pos.x-3,_this.pos.y-3+16,28,26,5,270,'ppg_smallBunny_left',-4,-6);
					}
					else {
						_BH.createGroundJumpingBullet(_this.pos.x-1+28,_this.pos.y-3+16,28,26,5,90,'ppg_smallBunny_right',-4,-6);
					}
				
			}
				
				
				
			if (_this.hp == Math.floor(_this.maxhp*0.3)) {
				
					if (_this.direction.x < 0) {
						_BH.createGroundJumpingBullet(_this.pos.x-3,_this.pos.y-3+16,28,26,5,270,'ppg_smallBunny_left',-4,-6);
					}
					else {
						_BH.createGroundJumpingBullet(_this.pos.x-1+28,_this.pos.y-3+16,28,26,5,90,'ppg_smallBunny_right',-4,-6);
					}
				
			}
				
				
				
			if (_this.hp == Math.floor(_this.maxhp*0.1)) {
				
					if (_this.direction.x < 0) {
						_BH.createGroundJumpingBullet(_this.pos.x-3,_this.pos.y-3+16,28,26,5,270,'ppg_smallBunny_left',-4,-6);
					}
					else {
						_BH.createGroundJumpingBullet(_this.pos.x-1+28,_this.pos.y-3+16,28,26,5,90,'ppg_smallBunny_right',-4,-6);
					}
				
			}
			
			if (_this.hp <= 0) {
				
				if (_this.speed == 0) {_this.direction.x *= -1; _this.speed = 1}
				_this.speed *= 1.25;
			}
			
		}
    },
};