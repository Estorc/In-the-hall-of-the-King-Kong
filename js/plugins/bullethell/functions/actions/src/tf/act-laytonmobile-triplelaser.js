module.exports = {
		
    name: 'Layton Mobile Triple Laser',
	id: 47,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {
			_this.timer = 0; 
			_this.maxhp = _this.hp;
			_this.animt = 0; 
			_this.animy = _this.pos.y;
			_this.begin = 0;
		}
			
		
		if (_this.animt <= 60 && _this.hp == 1) {
			_this.animt += 1;
			_this.pos.y = _BH.easeOutSine(_this.animt,_this.animy,(84+376-200-32+_BH.bhmaxheight/2)-_this.animy,60);
		}
		if (_this.animt <= 60 && _this.hp == 2) {
			_this.animt += 1;
			_this.pos.y = _BH.easeOutSine(_this.animt,_this.animy,(84+376-100-32+_BH.bhmaxheight/2)-_this.animy,60);
		}
		if (_this.animt <= 60 && _this.hp == 3) {
			_this.animt += 1;
			_this.pos.y = _BH.easeOutSine(_this.animt,_this.animy,(84+376-32+_BH.bhmaxheight/2)-_this.animy,60);
		}
    },
};