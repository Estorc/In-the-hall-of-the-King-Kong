module.exports = {
		
    name: 'Death Enemy 1',
	id: 4,

    execute (index, _this, _BH) {
			
		$gameSwitches.setValue(517, "true");
		
		_BH.spawnBonus("MinusBonus", 
						_this.pos.x + _this.width/2 - 8, 
						_this.pos.y + _this.height/2 - 8, 
						12, 12, 'SmallBonus', 1)
	
    },
};