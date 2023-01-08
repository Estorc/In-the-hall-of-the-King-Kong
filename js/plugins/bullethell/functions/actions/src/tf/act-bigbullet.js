module.exports = {
		
    name: 'Big Bullet',
	id: 45,

    execute (index, _this, _BH) {
			if(typeof _this.begin === 'undefined') {

				_this.explosionPower = _this.hp;
				_this.begin = 0;
				
			}
			
		_this.direction.x = Math.cos(_BH.getDirectionToPlayer(index) *Math.PI/180);
		_this.direction.y = Math.sin(_BH.getDirectionToPlayer(index) *Math.PI/180);
		
		if (_this.pos.y-_BH.bhmaxheight/2+16 <=460 &&
		    _this.pos.x-_BH.bhmaxwidth/2+16 <=828 &&
			_this.pos.x-_BH.bhmaxwidth/2+16 >=452 &&
			_this.pos.y-_BH.bhmaxheight/2+16 >=84) {
			
			_this.hp = 0;
			
		}
		if (typeof _BH.objects[i].collideWithPlayer !== 'undefined' && _BH.objects[i].collideWithPlayer == 1) {
			
				_this.hp = 0;
			
		}			
    },
};