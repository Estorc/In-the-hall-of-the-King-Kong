module.exports = {
		
    name: 'TF Attack 10',
	id: 710,

    execute (index, _this, _BH) {
			if(typeof _this.begin === 'undefined') {

				$gameVariables.setValue(83,640-36/2)
				$gameVariables.setValue(84,500)
				_BH.swapSoul("yellow");
				_this.maxhp = _this.hp;
				_this.begin = 0;
				_BH.createCrystalStar(_BH.bhmaxwidth/2+640-43,_BH.bhmaxheight/2-87,100)
				_this.hammer = [];

				
			}
			
			
			if (!_BH.getObjectByName("CrystalStar") && _this.hp > 30) {
				
				_this.hp = 30;
				
			}
			
		
				if (_this.hp > _this.maxhp-50 && _this.hp % 4 == 0) {
				
				AudioManager.playSe({name: 'ppg_soulchange', pan: 0, pitch: 100, volume: 70});
				if ($gameScreen.picture(2)._name != "ppg_attackbgorange") {
					
					$gameScreen.picture(2)._name = "ppg_attackbgorange";
					
				} else {
					
					$gameScreen.picture(2)._name = "ppg_attackbgblue";
					
				}
				
			}
	
			if (_this.hp == _this.maxhp-50) {
				
				AudioManager.playSe({name: 'ppg_soulchange', pan: 0, pitch: 100, volume: 70});
				$gameScreen.picture(2)._name = "ppg_attackbg";
				
			}
			
			if (_this.hp == _this.maxhp-100) {
				
				$gameScreen.picture(2)._name = "ppg_attackbg";
				_this.hammer[0] = _BH.createGiantHammer(1,_this.maxhp,200,272,90,20)
				
				
				spinningAttackType = 2;
				
			}
			
			if (_this.hp == _this.maxhp-280 && $gameVariables.value(1000) != 1) {
				
				_this.hammer[1] = _BH.createGiantHammer(-1,_this.maxhp,1280-200,272,90,21)
				
				
				spinningAttackType = 2;
				
			}


			if (typeof _this.hammer[0] !== 'undefined' && typeof _this.hammer[0].angle !== 'undefined' && typeof _this.hammer[1] !== 'undefined' && typeof _this.hammer[1].angle !== 'undefined' &&(
			_this.hammer[0].angle - Math.floor(_this.hammer[0].angle/360)*360 == 270+48 || 
				 _this.hammer[1].angle - Math.floor(_this.hammer[1].angle/360)*360 == 270-48 )) {
				
				AudioManager.playSe({name: 'Wind1', pan: 0, pitch: 50, volume: 70});
				
			}
			
			if (typeof _this.hammer[0] !== 'undefined' && typeof _this.hammer[0].angle !== 'undefined' &&(
			_this.hammer[0].angle - Math.floor(_this.hammer[0].angle/360)*360 == 270-96)) {
				
				AudioManager.playSe({name: 'ppg_soulchange', pan: 0, pitch: 100, volume: 70});
				
				if (Math.random() > 0.5) {
					_this.hammer[0].sprite = _BH.loadImages("ppg_hammerorange");
					$gameScreen.picture(2)._name = "ppg_attackbgorange";
				} else {
					_this.hammer[0].sprite = _BH.loadImages("ppg_hammerblue");
					$gameScreen.picture(2)._name = "ppg_attackbgblue";
				}
				
			}
			
			if (typeof _this.hammer[1] !== 'undefined' && typeof _this.hammer[1].angle !== 'undefined' &&(
			_this.hammer[1].angle - Math.floor(_this.hammer[1].angle/360)*360 == 6)) {
				
				AudioManager.playSe({name: 'ppg_soulchange', pan: 0, pitch: 100, volume: 70});
				
				if (Math.random() > 0.5) {
					_this.hammer[1].sprite = _BH.loadImages("ppg_hammerorange");
					$gameScreen.picture(2)._name = "ppg_attackbgorange";
				} else {
					_this.hammer[1].sprite = _BH.loadImages("ppg_hammerblue");
					$gameScreen.picture(2)._name = "ppg_attackbgblue";
				}
				
			}
			
			
			_this.hp -= 1;
    },
};