module.exports = {
		
    name: 'Mafia Core',
	id: 80,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {
			_this.timer = 1; 
			_this.timerSpeed = 1; 
			_this.begin = 0;
			_this.dialogue = 0;
		}
		

		_BH.openBlackBars(_this.timer == 120);
		
		
			if (_this.timer == 180) {
				if (_this.dialogue < 1) {
					$gameMessage.setFaceImage("Oujnish6", 7);
					$gameMessage.setSpeakerName("Louis Émile de Réac");
					$gameMessage.add("Des hologrammes de mafieux vont apparaître, essaie");
					$gameMessage.add("de résister le plus lontemps possible !");
					_this.dialogue += 1;
				
				} 
				if ($gameMessage.isBusy())	{
					
					$gameVariables.setValue(83,_BH.lastX);
					$gameVariables.setValue(84,_BH.lastY); 
					return 0;
					
				}
				
			_BH.closeBlackBars(true);
			}
			
			_BH.deleteBlackBars(_this.timer == 240);		

			
			if (((_this.timer / 500 >> 0) % 4 < 3 || _this.timer > 5000) && _this.timer % (Math.floor(240*_this.timerSpeed)+1) == 0) {
			
				args = {};
				args.name = "";
				args.speed = 0;
				args.directioniscircle = "false";
				args.hp = 0;
				args.candie = "false";
				args.canbetouched = "false";
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.cantbeinstakill = "false";
				let random = Math.floor(Math.random()*2);
				args.action = (random) ? 81 : 82;
				args.sprite = (random) ? 'Mafia1@2' : 'Mafia2@2';
				args.width = 48;
				args.height = 96;
				args.offsety = 0;
				args.offsetx = 0;
				random = Math.floor(Math.random()*2);
				args.posx = 640+48*((random) ? -4 : 3) + $gameBulletHell.bhmaxwidth/2+((random) ? -20 : 20) + ((random) ? -1 : 1)*Math.floor(Math.random()*108);
				args.posy = 720;
				args.direction = 0;
				_BH.createBHObject(args)
				
			}
			
			
			if (((_this.timer / 1500  >> 0) % 2 == 0 || _this.timer > 30000) && _this.timer % (Math.floor(750*_this.timerSpeed)+1) == 0) {
			
				args = {};
				args.name = "";
				args.speed = 5;
				args.directioniscircle = "false";
				args.hp = 0;
				args.candie = "false";
				args.canbetouched = "false";
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.cantbeinstakill = "false";
				args.action = 83;
				args.sprite = 'Mafia5@2';
				let random = Math.floor(Math.random()*2);
				args.scalex = (random) ? -1 : 1
				args.direction = (random) ? 270 : 90;
				args.posx = (random) ? 1280+_BH.bhmaxwidth/2 : -48+_BH.bhmaxwidth/2;
				args.posy = 150+Math.floor(Math.random()*350);
				args.width = 48;
				args.height = 48;
				args.offsety = 0;
				args.offsetx = 0;
				args.zindex = 10;
				args.collision = [{}];
				_BH.createBHObject(args)
				
			}
			
			if ((_this.timer / 1500 + 1 >> 0) % 2 == 0 && _this.timer % (Math.floor(400*_this.timerSpeed)+1) == 0) {
			
				args = {};
				args.name = "";
				args.speed = 0;
				args.directioniscircle = "false";
				args.hp = 0;
				args.candie = "false";
				args.canbetouched = "false";
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.cantbeinstakill = "false";
				args.action = 88;
				args.sprite = 'Mafia4@2';
				args.direction = 180;
				args.posx = Math.random()*1328+_BH.bhmaxwidth/2-48;
				args.posy = -48;
				args.width = 48;
				args.height = 48;
				args.offsety = 0;
				args.offsetx = 0;
				args.zindex = 10;
				args.collision = [{}];
				_BH.createBHObject(args)
				
			}
			
				_this.timerSpeed -= _this.timer/1000000000
				if (_this.timerSpeed < 0.4) {
					
					_this.timerSpeed = 0.4
					
				}
			
			_this.timer += 1;
    },
};