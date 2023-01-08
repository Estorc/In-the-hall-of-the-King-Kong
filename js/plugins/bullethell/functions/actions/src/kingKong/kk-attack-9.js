module.exports = {
		
    name: 'KK Attack 9',
	id: 4209,

    execute (index, _this, _BH) {
			if(typeof _this.begin === 'undefined') {

				_BH.swapSoul("yellow");
				_this.maxhp = _this.hp;
				$gameVariables.setValue(83,640-36/2)
				$gameVariables.setValue(84,272)
				_this.begin = 0;
				
			}
			
			_this.hp -= 1;

			if (_this.hp % 80 == 0) {
			
				for (let i = 0; i< 3; i++) {
					let angle = Math.random()*2*Math.PI;
					let x = 640-35 + Math.cos(angle)*350 + _BH.bhmaxwidth/2
					let y = 272-35 + Math.sin(angle)*350 + _BH.bhmaxheight/2
					_BH.createRotGasterBlaster(x, y, 20, 60, 
					_BH.getDirectionToPosition(x+96/2,y+96/2,$gameVariables.value(83)+18+_BH.bhmaxwidth/2,$gameVariables.value(84)+43+_BH.bhmaxheight/2));
				}
			
			}


    },
};