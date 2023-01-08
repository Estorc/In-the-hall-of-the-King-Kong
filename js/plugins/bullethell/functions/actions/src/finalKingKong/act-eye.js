module.exports = {
		
    name: 'OTF_Eye',
	id: 1101,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {

			_this.begin = 0;
			_this.timer = 0;
			_this.originx = _this.pos.x;
			_this.originy = _this.pos.y;
			
		}
		
		_this.angle = _BH.getDirectionToPlayer(index,37,37)
		
	},
};