module.exports = {
		
    name: 'Explosion',
	id: 90,

    execute (index, _this, _BH) {
		_this.hp -= 1;

		if (_this.pos.y + _this.offset.y < $gameVariables.value(84) + 44) {
			
			_this.zindex = 0.5;
			
		} else {
			
			_this.zindex = 1.5;
			
		}

		if (_this.frame < 9) {
			
			_this.collision = [{type:'circle',x:24,y:24,radius:16}]
			
		} else {
			
			_this.zindex = 1.5;
			_this.collision = [{}]
			
		}
    },
};