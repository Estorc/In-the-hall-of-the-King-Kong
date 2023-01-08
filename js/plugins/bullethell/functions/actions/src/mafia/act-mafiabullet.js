module.exports = {
		
    name: 'Mafia Bullet',
	id: 87,

    execute (index, _this, _BH) {
		if (_this.scale.x < 1) {
			
			_this.scale.x += (_this.speed/64)
			
		}
		
		if (_this.scale.x > 1) {
			
			_this.scale.x = 1
			
		}
    },
};