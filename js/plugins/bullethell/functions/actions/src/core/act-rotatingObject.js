module.exports = {
		
    name: 'Rotating Appear Disappear Object',
	id: 71,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {

			_this.begin = 0;
			_this.maxhp = _this.hp;
			_this.oldCollision = _this.collision
			
		}
		
		_this.hp -= 1;
		
		if (_this.maxhp - _this.hp <= 60) {
			
			_this.opacity += 255/60;
			if(_this.name == 'ppg_finalDoomLaser') {
				_this.scale.y += 1/60;
			}
			
		}
		
		if (_this.sprite.name == 'ppg_hammerorange' || _this.sprite.name == 'tf_hammerorange') {
			switch (_BH.playerHasMove) {
				
				case 1:

					_this.collision = [{}];
				
				break;
				
				case 0:
				
					_this.collision = _this.oldCollision;
				
				break;
				
			}
		}
		
		if (_this.sprite.name == 'ppg_hammerblue' || _this.sprite.name == 'tf_hammerblue') {
			switch (_BH.playerHasMove) {
			
				case 1:

					_this.collision = _this.oldCollision;
				
				break;
				
				case 0:
				
					_this.collision = [{}];
				
				break;
			
			}
		}
		
		if (_this.hp <= 60) {
			
			_this.opacity -= 255/60;
			if(_this.name == 'ppg_finalDoomLaser') {
				_this.scale.y -= 1/60;
			}
			
		}
    },
};