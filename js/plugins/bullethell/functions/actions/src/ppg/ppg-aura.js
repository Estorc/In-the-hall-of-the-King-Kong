module.exports = {
		
    name: 'PPG Aura',
	id: 70,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {

			_this.x = 0;
			_this.y = 0;
			_this.originx = _this.pos.x;
			_this.originy = _this.pos.y;
			_this.begin = 0;
			_this.genosid = _BH.getObjectByName("Genos");
			
		}
		
		_this.x = _BH.objects[_this.genosid].pos.x-9;
		_this.y = _BH.objects[_this.genosid].pos.y-2;
		
		
		_this.offset.x = Math.ceil(_this.x);
		_this.offset.y = Math.ceil(_this.y);
		
		_this.pos.x = 0;
		_this.pos.y = 0;
    },
};