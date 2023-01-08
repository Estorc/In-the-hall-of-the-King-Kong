module.exports = {
		
    name: 'PPG Attack 12',
	id: 62,

    execute (index, _this, _BH) {
				
			if (_BH.playerHasMove) Math.random();

			if(typeof _this.begin === 'undefined') {

				$gameVariables.setValue(83,640-36/2)
				$gameVariables.setValue(84,500)
				_BH.swapSoul("yellow");
				_this.maxhp = _this.hp;
				_this.begin = 0;
				_BH.soulDirection = 4;
				_BH.createLaytonMobile(_BH.bhmaxheight/2+200,100)

				
			}
			
			
			if (!_BH.getObjectByName("LaytonMobile") && _this.hp > 120) {
				
				_this.hp = 120;
				
			}
			
			
			_this.hp -= 1;
    },
};