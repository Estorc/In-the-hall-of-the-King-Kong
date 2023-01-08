module.exports = {
		
    name: 'PPG Attack Stop',
	id: 50,

    execute (index, _this, _BH) {
			for (z=0; z<_BH.objects.length; z++) {
				if (_BH.objects[z].name == "ppgPlatform") {
					_BH.objects[z].destroy();
					_BH.objects.splice(z,1);
					z -= 1;
					
				}	
			}	
			_BH.ppg_stop = 1;
    },
};