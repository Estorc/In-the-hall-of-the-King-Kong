module.exports = {
		
    name: 'Death Enemy 2',
	id: 6,

    execute (index, _this, _BH) {
			
		$gameSwitches.setValue(517, "true");
		
		_BH.spawnBonus("BigBonus", 
						_this.pos.x + _this.width/2 - 8, 
						_this.pos.y + _this.height/2 - 8, 
						16, 16, 'BigBonus', 3)
	
    },
};