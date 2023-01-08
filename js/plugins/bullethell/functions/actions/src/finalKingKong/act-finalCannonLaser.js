module.exports = {
		
    name: 'KK_FinalCannonLaser',
	id: 1101,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {

			AudioManager.playSe({name: 'ppg_gasterblaster', pan: 0, pitch: 50, volume: 100});
			AudioManager.playSe({name: 'ppg_gasterblasterlaser', pan: 0, pitch: 50, volume: 100});
			_this.begin = 0;
			
		}
		_this.angle = _this.parent.angle+90;
		_this.begin += 1;

		if (_this.begin < 10) {
			
			_this.scale.y += 1/10
			_this.opacity += 255/10
			
		}
    },
};