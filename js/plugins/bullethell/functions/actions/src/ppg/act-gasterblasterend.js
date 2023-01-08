module.exports = {
		
    name: 'Gaster Blaster End',
	id: 34,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {
					
				_this.frame = 5;
				_this.frametimer = 0;
		}
    },
};