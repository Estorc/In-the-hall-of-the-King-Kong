module.exports = {
		
    name: 'Beast Big Laser Bullet',
	id: 16,

    execute (index, _this, _BH) {
		_this.speed -= 0.05;


		if (_this.speed <= 0) {
			
			_this.hp = 0;
			
		}
    },
};