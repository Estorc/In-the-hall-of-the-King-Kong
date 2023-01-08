module.exports = {
		
    name: 'Explosive Bullet',
	id: 807,

    execute (index, _this, _BH) {
		_this.explodePower = _this.hp;

		if (_this.pos.y-_BH.bhmaxheight/2+16 >=460) {
			
				_this.pos.y = 460+_BH.bhmaxheight/2-16;
				_this.hp = 0;
			
		} else if (typeof _BH.objects[i].collideWithPlayer !== 'undefined' && _BH.objects[i].collideWithPlayer == 1) {
			
				_this.hp = 0;
			
		}
    },
};