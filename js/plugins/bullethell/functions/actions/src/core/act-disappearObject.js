module.exports = {
		
    name: 'Disappear Object',
	id: 299,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {

			_this.begin = 0;
			_this.maxhp = _this.hp;
			
		}
		
		_this.hp -= 1;
		_this.opacity = _this.hp*(255/_this.maxhp)
		
    },
};