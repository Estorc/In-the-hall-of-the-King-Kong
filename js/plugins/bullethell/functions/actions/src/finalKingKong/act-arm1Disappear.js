module.exports = {
		
    name: 'KK_Arm1Disappear',
	id: 1102,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {

			_this.begin = 0;
			_this.timer = 0;
			_this.originx = _this.pos.x;
			_this.originy = _this.pos.y;
			
		}
		
		_BH.objects[0].armCleared = true;
		
		_this.hp = 1;
		_this.collision = [{}];
		_this.action = BHactions.find(action => action.name == 'KK_Arm1Disappear').execute;
		
		if (_this.opacity > 255/2 || _BH.objects[0].headCleared) {
			
			_this.opacity -= 10;
			
		}
		
	},
};