module.exports = {
		
    name: 'Ground Bounce Prop',
	id: 37,

    execute (index, _this, _BH) {
			if (typeof _this.gravity === 'undefined') { _this.gravity = 0 }
			_this.gravity -= 0.25;
			
			_this.pos.y -= _this.gravity;
			
		
		if (_this.pos.y > 460+_BH.bhmaxheight/2-_this.height && _this.pos.x < 828 + _BH.bhmaxwidth/2 - _this.width && _this.pos.x > 452 + _BH.bhmaxwidth/2) {
			
				_this.pos.y = 460+_BH.bhmaxheight/2-_this.height;
				_this.gravity = Math.abs(_this.gravity*0.75);
				if (_this.direction.y < 0) {
					_this.gravity /= 1+Math.abs(_this.direction.y);
				}
				_this.direction.y = 0;
			
		}
    },
};