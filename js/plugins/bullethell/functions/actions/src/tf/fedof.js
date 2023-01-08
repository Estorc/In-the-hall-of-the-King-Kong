module.exports = {
		
    name: 'Fedof',
	id: 750,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {

			_this.begin = 0;
			
		}
		
		if (_this.direction.x > 0) {
			
			_this.sprite = _BH.loadImages('FedofRight@4@7');
			_BH.collisionSprite = null;
			_this.offset.x = -32;
			
		} else if (_this.direction.x < 0) {
			
			_this.sprite = _BH.loadImages('Fedof@4@7'); 
			_BH.collisionSprite = null;
			_this.offset.x = -15;
			
		}
    },
};