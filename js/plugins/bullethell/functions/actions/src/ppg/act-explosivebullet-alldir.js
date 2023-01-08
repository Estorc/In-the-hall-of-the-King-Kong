module.exports = {
		
    name: 'Explosive Bullet All Direction',
	id: 42,

    execute (index, _this, _BH) {
		_this.explodePower = _this.hp;

		if (_this.pos.y-_BH.bhmaxheight/2+16 >=460 && _this.name.contains("2")) {
			
			_this.pos.y = 460+_BH.bhmaxheight/2-16;
			_this.hp = 0;
			
		}
		if (_this.pos.x-_BH.bhmaxwidth/2+16 >=828 && _this.name.contains("6")) {
			
			_this.pos.x = 828+_BH.bhmaxwidth/2-16;
			_this.hp = 0;
			
		}
		if (_this.pos.x-_BH.bhmaxwidth/2+16 <=452 && _this.name.contains("4")) {
			
			_this.pos.x = 452+_BH.bhmaxwidth/2+16;
			_this.hp = 0;
			
		}
		if (_this.pos.y-_BH.bhmaxheight/2+16 <=84 && _this.name.contains("8")) {
			
			_this.pos.y = 84+_BH.bhmaxheight/2+16;
			_this.hp = 0;
			
		} 
		if (typeof _BH.objects[i].collideWithPlayer !== 'undefined' && _BH.objects[i].collideWithPlayer == 1) {
			
				_this.hp = 0;
			
		}
    },
};