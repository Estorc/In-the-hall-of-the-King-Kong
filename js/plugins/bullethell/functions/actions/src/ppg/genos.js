module.exports = {
		
    name: 'Genos',
	id: 68,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {

			_this.begin = 0;
			
		}
		
		if (_this.direction.x > 0) {
			
			_this.sprite = _BH.loadImages('GenosRight@4@7');
			_BH.collisionSprite = null;
			_this.offset.x = -49;
			
		} else if (_this.direction.x < 0) {
			
			_this.sprite = _BH.loadImages('Genos@4@7'); 
			_BH.collisionSprite = null;
			_this.offset.x = 0;
			
		}
    },
};