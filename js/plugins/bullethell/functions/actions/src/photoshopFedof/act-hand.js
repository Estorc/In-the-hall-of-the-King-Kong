module.exports = {
		
    name: 'OTF_Hand',
	id: 1103,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {

			_this.begin = 0;
			_this.timer = 0;
			_this.originx = _this.pos.x;
			_this.originy = _this.pos.y;
			
		}
		
		_this.timer += 0.05;
		
		if (_this.name == "HandLeft") {
			
			_this.angle = _BH.getDirectionToPlayer(index,132,110)-37.60 + Math.sin(_this.timer)*10
		
		} else {
			 
			_this.angle = _BH.getDirectionToPlayer(index,187,110)+180+37.60 + -Math.sin(_this.timer)*10
		
		}
		
		_this.pos.y = _this.originy + Math.sin(_this.timer*2)*10+10
		
	},
};