module.exports = {
		
    name: 'Gaster Blaster Laser',
	id: 33,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {

			AudioManager.playSe({name: 'ppg_gasterblasterlaser', pan: 0, pitch: 100, volume: 100});
			_this.begin = 0;
			
		}

		_this.begin += 1;

		if (_this.begin < 10) {
			
			_this.scale.y += 1/10
			_this.opacity += 255/10
			
		}
					
		if (_this.begin > 18) {
			
			_this.scale.y -= 1/20
			_this.opacity -= 255/10
			
			if (_this.opacity <= 0) {
			
				_this.candie = true;
				_this.hp = 0;
				
			}
			
		}
    },
};