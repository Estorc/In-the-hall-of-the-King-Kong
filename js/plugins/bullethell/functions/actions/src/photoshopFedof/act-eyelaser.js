module.exports = {
		
    name: 'Eye Laser',
	id: 813,

    execute (index, _this, _BH) {
		_this.hp -= 1;

		_this.opacity = Math.min(255,_this.hp*(255/30));
		if (_this.hp <= 30) {
			
			_BH.objects[_BH.getObjectByName(_this.name.replace('Laser', ''))].action = BHactions.find(action => action.name == 'OTF_Eye').execute;
			_this.collision = [{}];
			
		}
    },
};