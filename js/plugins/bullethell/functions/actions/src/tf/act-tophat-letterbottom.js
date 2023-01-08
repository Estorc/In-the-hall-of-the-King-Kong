module.exports = {
		
    name: 'Top Hat Letter Bottom',
	id: 801,

    execute (index, _this, _BH) {
		if (typeof _this.letters === 'undefined') { 

			if (_this.pos.x > 1280/2 + _BH.bhmaxwidth/2 + 16) {
				
				_this.letters = ['tf_letter1','tf_letter2','tf_letter3','tf_letter4','tf_letter1'];
				
			} else {
				
				_this.letters = ['tf_letter1','tf_letter4','tf_letter3','tf_letter2','tf_letter1'];
				
			}

		}
			
		if (typeof _this.maxhp === 'undefined') { _this.maxhp = _this.hp }
			
		
		if (_this.speed > 0 && _this.direction.y != -1) {
			if (_this.pos.y > 100) {
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
				
					_BH.createPlayerDirigedBullet(_this.pos.x+8,_this.pos.y+48,_this.letters[0],32,32,5,index,0,0,[{'type':'circle','x':32/2,'y':32/2,'radius': (64)/4}])
					AudioManager.playSe({name: 'Bow1', pan: 0, pitch: 150, volume: 100});
					
			}
				
				
				
			if (_this.hp == Math.floor(_this.maxhp*0.7)) {
				
					_BH.createPlayerDirigedBullet(_this.pos.x+8,_this.pos.y+48,_this.letters[1],32,32,5,index,0,0,[{'type':'circle','x':32/2,'y':32/2,'radius': (64)/4}])
					AudioManager.playSe({name: 'Bow1', pan: 0, pitch: 150, volume: 100});
					
			}
				
				
				
			if (_this.hp == Math.floor(_this.maxhp*0.5)) {
				
					_BH.createPlayerDirigedBullet(_this.pos.x+8,_this.pos.y+48,_this.letters[2],32,32,5,index,0,0,[{'type':'circle','x':32/2,'y':32/2,'radius': (64)/4}])
					AudioManager.playSe({name: 'Bow1', pan: 0, pitch: 150, volume: 100});
					
			}
				
				
				
			if (_this.hp == Math.floor(_this.maxhp*0.3)) {
				
					_BH.createPlayerDirigedBullet(_this.pos.x+8,_this.pos.y+48,_this.letters[3],32,32,5,index,0,0,[{'type':'circle','x':32/2,'y':32/2,'radius': (64)/4}])
					AudioManager.playSe({name: 'Bow1', pan: 0, pitch: 150, volume: 100});
					
			}
				
				
				
			if (_this.hp == Math.floor(_this.maxhp*0.1)) {
				
					_BH.createPlayerDirigedBullet(_this.pos.x+8,_this.pos.y+48,_this.letters[4],32,32,5,index,0,0,[{'type':'circle','x':32/2,'y':32/2,'radius': (64)/4}])
					AudioManager.playSe({name: 'Bow1', pan: 0, pitch: 150, volume: 100});
					AudioManager.playSe({name: 'DevourerAttack', pan: 0, pitch: 150, volume: 60});
					
			}
			
			if (_this.hp <= 0) {
				
				if (_this.speed == 0) {_this.direction.y *= -1; _this.speed = 1}
				_this.speed *= 1.25;
			}
			
		}
    },
};