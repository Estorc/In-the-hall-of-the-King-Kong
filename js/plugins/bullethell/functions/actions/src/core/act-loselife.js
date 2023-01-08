module.exports = {
		
    name: 'Lose Life progressively',
	id: 1,

    execute (index, _this, _BH) {
		_this.hp -= 1;
    },
};