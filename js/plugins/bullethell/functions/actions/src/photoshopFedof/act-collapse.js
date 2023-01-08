module.exports = {
		
    name: 'OTF_Collapse',
	id: 1105,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {
			
			AudioManager.playSe({name: 'Collapse2', pan: 0, pitch: 100, volume: 100});
			_this.hp = 1;
			_this.begin = 0;
			_BH.objects.map(x => x.action = 0);
			_BH.objects.map(x => x.collision = [{}]);
			_BH.objects.map(x => x.opacity /= 2);
			_this.action = BHactions.find(action => action.id == 1105).execute;
			
		}
		
		_this.hp += 1;
		
		_BH.objects.map(x => x.pos.y += 1);
		_BH.objects.map(x => x.pos.x += Math.cos(_this.hp*2)*5);
		_BH.objects.map(x => x.opacity -= 0.2);
		
		if (_this.hp % 20 == 0) {
			
			AudioManager.playSe({name: 'Collapse3', pan: 0, pitch: 100, volume: 100});
			
		}
		
		if (_this.opacity <= 0) {
			
			_BH.objects[0].hp = 0;
		}
		
	},
};