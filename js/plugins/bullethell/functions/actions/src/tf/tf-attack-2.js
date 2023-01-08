module.exports = {
		
    name: 'TF Attack 2',
	id: 702,

    execute (index, _this, _BH) {
			if(typeof _this.begin === 'undefined') {

				_BH.swapSoul("yellow");
				_this.maxhp = _this.hp;
				$gameVariables.setValue(83,640-36/2)
				$gameVariables.setValue(84,272)
				_this.begin = 0;
				
			}
			
			_this.hp -= 1;

			if (_this.hp % 3 == 0) {
			_BH.createTFBlaster(640-35 + Math.cos((_this.hp*2.5 % 360)/180*Math.PI)*350 + _BH.bhmaxwidth/2, 
			272-35 + Math.sin((_this.hp*2.5 % 360)/180*Math.PI)*350 + _BH.bhmaxheight/2, 
			20, 
			60, 
			(_this.hp*2.5 % 360)+180)
			}


    },
};