module.exports = {
		
    name: 'DEATH',
	id: 22,

    execute (index, _this, _BH) {
		_this.hp -= 1;

		if (_this.hp == 0) {
			
			$gameSwitches.setValue(517, "true");
			
		}
    },
};