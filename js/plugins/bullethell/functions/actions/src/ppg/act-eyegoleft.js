module.exports = {
		
    name: 'EyeGoLeft',
	id: 70,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {

			_this.begin = 0;
			_this.timer = 0;
			_this.originx = _this.pos.x;
			_this.originy = _this.pos.y;
			
		}
		if (_this.timer == 12) {
			
			_this.sprite = _BH.loadImages('Phantasmal_Sphere@2@5');
			
		}
		
		if (_this.name == "FinalRotate") {
			
			_BH.changeDir(-_this.hp,index)
			_this.pos.x = _this.originx;
			_this.pos.y = _this.originy;
			_this.speed = _this.timer;
			_this.pos.x += _BH.objects[i].speed*_this.direction.x
			_this.pos.y += _BH.objects[i].speed*_this.direction.y
			_this.speed = 0;
			
		} else {
		
			if (!(_this.name == "RotateLock" && (_this.timer * _this.hp) > 180)) {
				_BH.changeDir(-_this.hp,index)
			}
		
		}
		_this.opacity -= 0.3;
		if (_this.scale.x < 1) {
			_this.scale.x += 0.05;
			_this.scale.y += 0.05;
		}
		_this.timer += 1;
    },
};