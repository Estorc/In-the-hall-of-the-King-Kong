module.exports = {
		
    name: 'Bone End',
	id: 2403,

    execute (index, _this, _BH) {
		
		_this.pos.x += Math.cos(_this.angle * Math.PI / 180)*(6*_this.hp+3)
		_this.pos.y += Math.sin(_this.angle * Math.PI / 180)*(6*_this.hp+3)
		
		_this.hp = 0;

    },
};