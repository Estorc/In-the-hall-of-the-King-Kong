module.exports = {
		
    name: 'HP Bar',
	id: 1150,

    execute (index, _this, _BH) {
		
		let currentHp = $gameParty.battleMembers().reduce((a, b)=> a + b.hp,0)/$gameParty.battleMembers().reduce((a, b)=> a + b.mhp,0);
		
		if (!_this.name.contains("static")) {
		
			if (typeof _this.lastHp === 'undefined') {
				_this.lastHp = currentHp;
				_this.animt = 0; 
				_this.desto = 0;
			}
			
			if (_this.desto > 0) {
				
				_this.opacity = _BH.easeOutSine(_this.animt,0,255,30);
				_this.animt += (_this.desto == 1) ? 1 : -0.5;
				if (_this.animt == 30) _this.desto = 2;
				if (_this.desto == 2 && _this.animt == 0) {_this.desto = 0; _this.opacity = 0};
				
			}
		
		}
		
		if (_this.name.contains("hpbar")) {
			
			_this.scale.x = currentHp;
		
		}

		if (!_this.name.contains("static")) {
		
			_this.pos.x = $gameVariables.value(83)+37/2+_BH.bhmaxwidth/2-56/2;
			_this.pos.y = $gameVariables.value(84)+62/2+_BH.bhmaxwidth/2-25;
			
			if (currentHp != _this.lastHp) {
				
				_this.animt = 0;
				_this.desto = 1;
				
				_this.lastHp = currentHp;		
				
			}
		
		}
		
    },
};