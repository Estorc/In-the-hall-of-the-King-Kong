module.exports = {
		
    name: 'Layton Mobile Ballon Bullet',
	id: 48,

    execute (index, _this, _BH) {
		if (_this.direction.x > 0.05) {
			_BH.changeDir(-0.5,index);
		}
    },
};