module.exports = {
		
    name: 'TF Attack 5',
	id: 705,

    execute (index, _this, _BH) {
			if(typeof _this.begin === 'undefined') {

				$gameVariables.setValue(83,640-36/2)
				$gameVariables.setValue(84,500)
				_BH.swapSoul("yellow");
				_this.maxhp = _this.hp;
				_this.begin = 0;
				_BH.createTFCrystalStar(_BH.bhmaxwidth/2+640-43,_BH.bhmaxheight/2-87,100)

				
			}
			
			
			if (!_BH.getObjectByName("CrystalStar") && _this.hp > 30) {
				
				_this.hp = 30;
				
			}
			
			_this.hp -= 1;
    },
};