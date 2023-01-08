module.exports = {
		
    name: 'Hell Bullet',
	id: 23,

    execute (index, _this, _BH) {
		_this.direction.x = Math.cos(_BH.getDirectionToPlayer(index) *Math.PI/180);
		_this.direction.y = Math.sin(_BH.getDirectionToPlayer(index) *Math.PI/180);
    },
};