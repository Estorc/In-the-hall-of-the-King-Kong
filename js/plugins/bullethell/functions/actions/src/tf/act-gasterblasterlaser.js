module.exports = {
		
    name: 'Gaster Blaster Laser',
	id: 804,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {

			_this.pos.x += -25*_this.direction.x
			_this.pos.y += -25*_this.direction.y
			AudioManager.playSe({name: 'Battle4', pan: 0, pitch: 150, volume: 100});
			AudioManager.playSe({name: 'DevourerAttack', pan: 0, pitch: 80, volume: 100});
			_this.begin = 0;
			
		}

		_this.begin += 1;

		if (_this.begin < 10) {
			
			_this.scale.y += 1/10
			_this.opacity += 255/10
			
		}
					
		if (_this.begin > 18) {
			
			_this.collision = [{}];
			_this.scale.y -= 1/20
			_this.opacity -= 255/10
			
			if (_this.opacity <= 0) {
			
				_this.candie = true;
				_this.hp = 0;
				
			}
			
		}
    },
};