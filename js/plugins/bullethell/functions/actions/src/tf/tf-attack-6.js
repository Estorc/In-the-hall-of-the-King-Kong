module.exports = {
		
    name: 'Photoshop Fedof',
	id: 706,

    execute (index, _this, _BH) {
			if(typeof _this.begin === 'undefined') {


				_this.varTemp = 0;
				_this.pos.x+=5;

				$gameSwitches.setValue(163,true);
				SceneManager._scene._statusWindow.visible = false;
				$gameVariables.setValue(83,640-36/2)
				$gameVariables.setValue(84,500)
				_BH.swapSoul("yellow");
				_this.maxhp = _this.hp;
				_this.begin = 0;
				
				args = {};
				args.name = "Background";
				args.posx = _BH.bhmaxwidth/2;
				args.posy = _BH.bhmaxheight/2;
				
				args.width = 0;
				args.height = 0;
				
				args.speed = 0;
				args.direction = 0;
				args.directioniscircle = "true";
				args.sprite = 'FEDOF-PART7';
				args.hp = 0;
				args.candie = "false";
				args.canbetouched = "false";
				args.action = 0;
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.zindex = -3;
				_BH.createBHObject(args)
				
				
				args = {};
				args.name = "Head";
				args.posx = _BH.bhmaxwidth/2;
				args.posy = _BH.bhmaxheight/2;
				
				args.width = 1280;
				args.height = 274;
				
				args.speed = 0;
				args.direction = 0;
				args.directioniscircle = "true";
				args.sprite = 'FEDOF-PART4';
				args.hp = 650;
				args.candie = "true";
				args.canbetouched = "true";
				args.action = 0;
				args.deathaction = 1105;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				_BH.createBHObject(args)
				

				args.candie = "false";
				args.canbetouched = "false";
				args.collision = [{}]
				args.name = "Arm1";
				args.posx = _BH.bhmaxwidth/2;
				args.posy = _BH.bhmaxheight/2;
				
				args.width = 0;
				args.height = 0;
				
				args.sprite = 'FEDOF-PART2';
				args.hp = 0;
				args.anchory = 0.3;
				args.action = 'OTF_Arm1';
				args.deathaction = 0;
				args.zindex = -1;
				_BH.createBHObject(args)
				args.anchory = 0.5;
				
				
				
				args.name = "Arm2";
				args.posx = _BH.bhmaxwidth/2;
				args.posy = _BH.bhmaxheight/2;
				
				args.width = 0;
				args.height = 0;
				
				args.sprite = 'FEDOF-PART1';
				args.hp = 0;
				args.action = "OTF_Arm2";
				args.deathaction = 0;
				args.zindex = -2;
				_BH.createBHObject(args)
				
				
				
				args.width = 0;
				args.height = 0;

				args.zindex = 0;
				args.hp = 0;
				args.action = "OTF_Hand";
				args.deathaction = 0;
				
				args.sprite = 'FEDOF-PART3';
				args.name = "HandLeft";
				args.posx = _BH.bhmaxwidth/2+134;
				args.posy = _BH.bhmaxheight/2+404;
				
				args.anchorx = 0.4;
				args.anchory = 0.4;
				_BH.createBHObject(args)

				args.sprite = 'FEDOF-PART3left';
				args.name = "HandRight";
				args.posx = _BH.bhmaxwidth/2+826;
				args.posy = _BH.bhmaxheight/2+404;
				args.anchorx = 0.6;
				_BH.createBHObject(args)
				args.anchorx = 0.5;
				args.anchory = 0.5;
				
				
				args.width = 0;
				args.height = 0;
				
				args.hp = 0;
				args.deathaction = 0;
				
				args.sprite = 'FEDOF-PART5';
				args.name = "EyeCover";
				args.action = 0;
				args.posx = _BH.bhmaxwidth/2+385;
				args.posy = _BH.bhmaxheight/2+80;
				args.zindex = 2;
				_BH.createBHObject(args)
				args.sprite = 'FEDOF-PART6';
				args.name = "Eye1";
				args.action = "OTF_Eye";
				args.zindex = 1;
				_BH.createBHObject(args)

				args.sprite = 'FEDOF-PART5';
				args.name = "EyeCover";
				args.action = 0;
				args.posx = _BH.bhmaxwidth/2+424;
				args.posy = _BH.bhmaxheight/2+227;
				args.zindex = 2;
				_BH.createBHObject(args)
				args.sprite = 'FEDOF-PART6';
				args.name = "Eye2";
				args.action = "OTF_Eye";
				args.zindex = 1;
				_BH.createBHObject(args)
				
				args.sprite = 'FEDOF-PART5';
				args.name = "EyeCover";
				args.action = 0;
				args.posx = _BH.bhmaxwidth/2+782;
				args.posy = _BH.bhmaxheight/2+227;
				args.zindex = 2;
				_BH.createBHObject(args)
				args.sprite = 'FEDOF-PART6';
				args.name = "Eye3";
				args.action = "OTF_Eye";
				args.zindex = 1;
				_BH.createBHObject(args)
				
				args.sprite = 'FEDOF-PART5';
				args.name = "EyeCover";
				args.action = 0;
				args.posx = _BH.bhmaxwidth/2+821;
				args.posy = _BH.bhmaxheight/2+80;
				args.zindex = 2;
				_BH.createBHObject(args)
				args.sprite = 'FEDOF-PART6';
				args.name = "Eye4";
				args.action = "OTF_Eye";
				args.zindex = 1;
				_BH.createBHObject(args)
				
				args.anchorx = 0;
				args.opacity = 0;
				args.sprite = 'hpbarCover';
				args.name = "hpbarCover";
				args.action = 'HP Bar';
				args.posx = _BH.bhmaxwidth/2+640-224/2;
				args.posy = _BH.bhmaxheight/2+720-45;
				args.zindex = 20;
				_BH.createBHObject(args)
				
				args.sprite = 'hpbar';
				args.name = "hpbar";
				args.action = 'HP Bar';
				args.posx = _BH.bhmaxwidth/2+640-224/2;
				args.posy = _BH.bhmaxheight/2+720-45;
				args.zindex = 21;
				_BH.createBHObject(args)
				
			}
			

			if (_this.hp > 300) {

				if (_this.hp % 1000 == 0) {
					args = {};
					args.name = "Eye1Laser";
					args.width = 8;
					args.height = 720;
					args.speed = 0;
					args.direction = 0;
					args.directioniscircle = "true";
					args.anchory = 0;
					args.sprite = 'DeathAppearI@5';
					args.hp = 120;
					args.candie = "true";
					args.canbetouched = "false";
					args.cantbeinstakill = "true";
					args.action = 812;
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					args.posx = _BH.bhmaxwidth/2+417;
					args.posy = _BH.bhmaxheight/2+112;
					args.scaley = 10;
					args.angle = _BH.getDirectionToPosition(args.posx,args.posy,$gameVariables.value(83)+9+_BH.bhmaxwidth/2,$gameVariables.value(84)+34+_BH.bhmaxheight/2)-90
					args.collision_scaley = "scale";
					args.collision_angle = "angle";
					args.collision = [{}];
					_BH.createBHObject(args)
					_BH.objects[_BH.getObjectByName('Eye1')].action = 0;
				}
				
				if (_this.hp % 1000 == 30) {
					args = {};
					args.name = "Eye4Laser";
					args.width = 8;
					args.height = 720;
					args.speed = 0;
					args.direction = 0;
					args.directioniscircle = "true";
					args.anchory = 0;
					args.sprite = 'DeathAppearI@5';
					args.hp = 120;
					args.candie = "true";
					args.canbetouched = "false";
					args.cantbeinstakill = "true";
					args.action = 812;
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					args.posx = _BH.bhmaxwidth/2+850;
					args.posy = _BH.bhmaxheight/2+112;
					args.scaley = 10;
					args.angle = _BH.getDirectionToPosition(args.posx,args.posy,$gameVariables.value(83)+9+_BH.bhmaxwidth/2,$gameVariables.value(84)+34+_BH.bhmaxheight/2)-90
					args.collision_scaley = "scale";
					args.collision_angle = "angle";
					args.collision = [{}];
					_BH.createBHObject(args)
					_BH.objects[_BH.getObjectByName('Eye4')].action = 0;
				}
				
				if (_this.hp % 1000 == 60) {
					args = {};
					args.name = "Eye3Laser";
					args.width = 8;
					args.height = 720;
					args.speed = 0;
					args.direction = 0;
					args.directioniscircle = "true";
					args.anchory = 0;
					args.sprite = 'DeathAppearI@5';
					args.hp = 120;
					args.candie = "true";
					args.canbetouched = "false";
					args.cantbeinstakill = "true";
					args.action = 812;
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					args.posx = _BH.bhmaxwidth/2+810;
					args.posy = _BH.bhmaxheight/2+258;
					args.scaley = 10;
					args.angle = _BH.getDirectionToPosition(args.posx,args.posy,$gameVariables.value(83)+9+_BH.bhmaxwidth/2,$gameVariables.value(84)+34+_BH.bhmaxheight/2)-90
					args.collision_scaley = "scale";
					args.collision_angle = "angle";
					args.collision = [{}];
					_BH.createBHObject(args)
					_BH.objects[_BH.getObjectByName('Eye3')].action = 0;
				}
				
				if (_this.hp % 1000 == 90) {
					args = {};
					args.name = "Eye2Laser";
					args.width = 8;
					args.height = 720;
					args.speed = 0;
					args.direction = 0;
					args.directioniscircle = "true";
					args.anchory = 0;
					args.sprite = 'DeathAppearI@5';
					args.hp = 120;
					args.candie = "true";
					args.canbetouched = "false";
					args.cantbeinstakill = "true";
					args.action = 812;
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					args.posx = _BH.bhmaxwidth/2+453;
					args.posy = _BH.bhmaxheight/2+258;
					args.scaley = 10;
					args.angle = _BH.getDirectionToPosition(args.posx,args.posy,$gameVariables.value(83)+9+_BH.bhmaxwidth/2,$gameVariables.value(84)+34+_BH.bhmaxheight/2)-90
					args.collision_scaley = "scale";
					args.collision_angle = "angle";
					args.collision = [{}];
					_BH.createBHObject(args)
					_BH.objects[_BH.getObjectByName('Eye2')].action = 0;
				}
			
			}
			
			
			if (_this.hp % 4000 > 1700) {
				
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
						AudioManager.playSe({name: 'Damage4', pan: 0, pitch: 150, volume: 450});
						$gameScreen.startFlash([255, 255, 255, 221], 20);
						AudioManager.playSe({name: 'The-World', pan: 0, pitch: 100, volume: 160});
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
						AudioManager.playSe({name: 'Damage4', pan: 0, pitch: 150, volume: 450});
						$gameScreen.startFlash([255, 255, 255, 221], 20);
						AudioManager.replayBgm(BeastMusic);
						
						for (k=0; k<_BH.objects.length; k++) {
							if (_BH.objects[k].name == "WaruBullet") {
								_BH.objects[k].sprite = _BH.loadImages('thanoscarbullet');
								_BH.objects[k].speed = Math.random()*2+16;
								_BH.objects[k].direction.x = Math.cos(_BH.getDirectionToPosition(_BH.objects[k].pos.x+8,_BH.objects[k].pos.y+8,$gameVariables.value(83)+9+_BH.bhmaxwidth/2,$gameVariables.value(84)+34+_BH.bhmaxheight/2)/180*Math.PI);
								_BH.objects[k].direction.y = Math.sin(_BH.getDirectionToPosition(_BH.objects[k].pos.x+8,_BH.objects[k].pos.y+8,$gameVariables.value(83)+9+_BH.bhmaxwidth/2,$gameVariables.value(84)+34+_BH.bhmaxheight/2)/180*Math.PI);
								
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
					
					AudioManager.playSe({name: 'Switch1', pan: 0, pitch: 90, volume: 500});
					
				}
				
				
			}
				
			}


			if (_this.hp % 1000 == 0) {
				args = {};
				args.name = "";
				args.width = 133;
				args.height = 79;
				args.speed = 2.5;
				args.direction = 0;
				args.directioniscircle = "false";
				args.sprite = 'FloweyBomb';
				args.hp = 300;
				args.candie = "true";
				args.canbetouched = "false";
				args.cantbeinstakill = "true";
				args.action = 811;
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.collision_angle = "angle";
				args.posx = _BH.bhmaxwidth/2+316-133/2;
				args.posy = _BH.bhmaxheight/2+548-79/2;
				args.collision = [{'type':'circle','x':90,'y':38,'radius': 23}]
				_BH.createBHObject(args)
			}
			else if (_this.hp % 500 == 0) {
				args = {};
				args.name = "";
				args.width = 133;
				args.height = 79;
				args.speed = 2.5;
				args.direction = 0;
				args.directioniscircle = "false";
				args.sprite = 'FloweyBomb';
				args.hp = 300;
				args.candie = "true";
				args.canbetouched = "false";
				args.cantbeinstakill = "true";
				args.action = 811;
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.collision_angle = "angle";
				args.posx = _BH.bhmaxwidth/2+977-133/2;
				args.posy = _BH.bhmaxheight/2+548-79/2;
				args.collision = [{'type':'circle','x':90,'y':38,'radius': 23}]
				_BH.createBHObject(args)
			}					



			if (_this.hp % 2000 == 1960)	AudioManager.playSe({name: 'Teh Fedof Laugh', pan: 0, pitch: 50, volume: 200});
			if (_this.hp % 2000 == 0) {
				args = {};
				args.name = "";
				args.width = 0;
				args.height = 0;
				args.speed = 0;
				args.direction = 0;
				args.directioniscircle = "false";
				args.sprite = 'beastdanger';
				args.hp = 180;
				args.candie = "true";
				args.canbetouched = "false";
				args.action = 14;
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.posx = _BH.bhmaxwidth/2+621-13;
				args.posy = _BH.bhmaxheight/2+360;
				_BH.createBHObject(args)
			}
			
			
			
			
			_this.hp += 1;
    },
};