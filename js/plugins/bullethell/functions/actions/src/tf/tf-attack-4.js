module.exports = {
		
    name: 'TF Attack 4',
	id: 704,

    execute (index, _this, _BH) {
			if(typeof _this.begin === 'undefined') {

				$gameVariables.setValue(83,640-36/2)
				$gameVariables.setValue(84,272)
				_BH.swapSoul("yellow");
				_this.maxhp = _this.hp;
				_this.begin = 0;
				_this.varTemp = 0;
				
			}
			
			
			_this.hp -= 1;
			
			
			if (_this.varTemp == 0) {
				
				args = {};
				args.name = "WaruBullet";
				args.posx = 1280/2 + _BH.bhmaxwidth/2;
				args.posy = 0;
				args.width = 16;
				args.height = 16;
				args.speed = 5;
				args.direction = -5 + _BH.getRandomInt(180);
				args.directioniscircle = "true";
				args.sprite = 'thanoscarbullet';
				args.hp = 0;
				args.candie = "false";
				args.canbetouched = "false";
				args.action = 0;
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				_BH.createBHObject(args)
				
			}
			
			
			if (_this.hp % 150 == 0) {
				
				_this.varTemp += 1;
				
				switch (_this.varTemp) {
					case 1:
						$gameSwitches.setValue(517, "true");
						AudioManager.playSe({name: 'The-World', pan: 0, pitch: 100, volume: 20});
						BeastMusic = AudioManager.saveBgm();
						AudioManager.stopBgm();
					
						for (k=0; k<_BH.objects.length; k++) {
							if (_BH.objects[k].name == "WaruBullet") {
								_BH.objects[k].sprite = _BH.loadImages('WarudoBullet');
								_BH.objects[k].speed = 0;
								
							}	
						}
					
					break;
				
					case 2:
						$gameSwitches.setValue(517, "true");
						AudioManager.replayBgm(BeastMusic);
						
						for (k=0; k<_BH.objects.length; k++) {
							if (_BH.objects[k].name == "WaruBullet") {
								_BH.objects[k].sprite = _BH.loadImages('thanoscarbullet');
								_BH.objects[k].speed = Math.random()*2+2;
								_BH.objects[k].direction.x = Math.cos(Math.random()*2*Math.PI);
								_BH.objects[k].direction.y = Math.sin(Math.random()*2*Math.PI);
								
							}	
						}
						
					break;
					
					case 3:
						_this.varTemp = 0;
					
					break;
				}
				
				
			}
			
			
			if (_this.hp % 50 == 0) {
				
				
				if (_this.varTemp == 1) {
					
					AudioManager.playSe({name: 'Switch1', pan: 0, pitch: 90, volume: 100});
					
				}
				
				
			}
    },
};