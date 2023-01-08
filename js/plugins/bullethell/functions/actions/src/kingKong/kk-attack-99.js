module.exports = {
		
    name: 'KK Final Attack',
	id: 4299,

    execute (index, _this, _BH) {
			if(typeof _this.begin === 'undefined') {

				AudioManager.playBgm({name: 'KingKongLastSurprise', pan: 0, pitch: 100, volume: 200});

				_this.varTemp = 0;
				_this.pos.x+=5;
				
				
				_this.armCleared = false;
				_this.headCleared = false;
				
				_BH.objects[1].pos.x = 585+_BH.bhmaxheight/2;
				_BH.objects[1].collision = [{}];
				_BH.objects[1].zindex = -1;
				
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
				args.sprite = 'KK-PART7';
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
				
				args.width = 108;
				args.height = 380;
				
				args.collision = [{type:'circle',x:123,y:96,radius:100},{type:'rect',x1:69,x2:108,y1:191,y2:190}]
				
				args.speed = 0;
				args.direction = 0;
				args.directioniscircle = "true";
				args.sprite = 'KK-PART4';
				args.hp = 6500;
				args.candie = "false";
				args.canbetouched = "true";
				args.action = 'KK_Head';
				args.deathaction = 'KK_HeadDisappear';
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.posx = 517 + _BH.bhmaxwidth/2;
				args.posy = 51 + _BH.bhmaxheight/2;
				args.collision_angle = 'angle';
				args.anchorx = 0.5;
				args.anchory = 123/401;
				_BH.createBHObject(args)
				

				args.candie = "false";
				args.canbetouched = "true";
				args.width = 1280;
				args.height = 274;
				args.collision = [{'type':'rect','x1':0,'y1':0,'x2':args.width,'y2':args.height}];
				args.hp = 3000;
				args.name = "Arm1";
				args.posx = _BH.bhmaxwidth/2;
				args.posy = _BH.bhmaxheight/2;
				
				args.width = 0;
				args.height = 0;
				
				args.sprite = 'KK-PART2';
				args.anchory = 0.3;
				args.action = 'KK_Arm1';
				args.deathaction = 'KK_Arm1Disappear';
				args.zindex = -1;
				_BH.createBHObject(args)
				args.anchory = 0.5;
				
				_this.timer = 0;
				
				
				
			}
			
			
			_this.timer += 1;

				_BH.showPictureBellow = 0;
				
				$gameScreen.erasePicture(1);
				$gameScreen.erasePicture(2);
				$gameScreen.erasePicture(3);
				$gameScreen.erasePicture(4);
				$gameScreen.erasePicture(5);
				
			if (_this.timer > 60) {
				PluginManager.callCommand(this, 'TextPicture', 'set', {
				  text: "\\FontChange<kk-lyricsfont>\\{" + $getLyrics()
				});
		
				params = [57, "", 1, 0, 640, 72, 100, 100, 255, 0]
				
				point = Game_Interpreter.prototype.picturePoint.call(null, params);
				// prettier-ignore
				
				$gameScreen.showPicture(
					params[0], params[1], params[2], point.x, point.y,
					params[6], params[7], params[8], params[9]
				);
			
			}
			
			
			Game_Interpreter.prototype.iterateActorEx(0, 0, actor => {
				Game_Interpreter.prototype.changeHp(actor, 1, true);
			});
			
			
			if (!_this.headCleared || !_this.armCleared) {
				
				if (_this.hp == 100) {
					
					args = {};
					args.name = "";
					args.speed = 0;
					args.opacity = 0;
					args.directioniscircle = "false";
					args.hp = 100;
					args.candie = "true";
					args.canbetouched = "false";
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					args.cantbeinstakill = "true";
					args.action = 'KK_Hand1';
					args.sprite = 'KK-HAND1';
					args.width = 0;
					args.height = 0;
					args.posx = 0;
					args.posy = 450 + Math.random()*200-100;
					args.damage = 2;
					args.direction = 90;
					args.collision = [{type:'rect',x1:69,x2:226,y1:14,y2:117},{type:'rect',x1:195,x2:94,y1:195,y2:30},{type:'rect',x1:185,x2:68,y1:81,y2:122}];
					_BH.createBHObject(args)
					
				}
				
				if (_this.hp == 200) {
					
					args = {};
					args.name = "";
					args.speed = 0;
					args.opacity = 0;
					args.directioniscircle = "false";
					args.hp = 100;
					args.candie = "true";
					args.canbetouched = "false";
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					args.cantbeinstakill = "true";
					args.action = 'KK_Hand1';
					args.sprite = 'KK-HAND1';
					args.scalex = -1;
					args.width = 0;
					args.height = 0;
					args.posx = 1280+_BH.bhmaxheight-365;
					args.posy = 450 + Math.random()*200-100;
					args.damage = 2;
					args.direction = -90;
					args.collision = [{type:'rect',x1:365-69-226,x2:226,y1:14,y2:117},{type:'rect',x1:365-195-94,x2:94,y1:195,y2:30},{type:'rect',x1:365-185-68,x2:68,y1:81,y2:122}];
					_BH.createBHObject(args)
					
				}
				
				
				if (_this.hp == 300) {
					
					args = {};
					args.name = "";
					args.speed = 0;
					args.opacity = 0;
					args.directioniscircle = "false";
					args.hp = 400;
					args.candie = "true";
					args.canbetouched = "false";
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					args.cantbeinstakill = "true";
					args.action = 4251;
					args.sprite = 'null';
					args.width = 0;
					args.height = 0;
					args.posx = 0;
					args.posy = 0;
					args.direction = 0;
					args.collision = [{}];
					_BH.createBHObject(args)
					
				}
				
				
				if (_this.hp == 800) {
					
					args = {};
					args.name = "";
					args.speed = 0;
					args.opacity = 0;
					args.directioniscircle = "false";
					args.hp = 100;
					args.candie = "true";
					args.canbetouched = "false";
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					args.cantbeinstakill = "true";
					args.action = 'KK_Hand2';
					args.sprite = 'KK-HAND2';
					args.width = 0;
					args.height = 0;
					args.posx = 0;
					args.posy = 450 + Math.random()*200-100;
					args.damage = 0.5;
					args.direction = 90;
					args.collision = [
					{type:'rect',x1:69,x2:226,y1:14,y2:117},
					{type:'rect',x1:195,x2:94,y1:195,y2:30},
					{type:'rect',x1:220,x2:244,y1:16,y2:90},
					{type:'rect',x1:408,x2:81,y1:57,y2:51},
					{type:'rect',x1:185,x2:68,y1:81,y2:122}];
					_BH.createBHObject(args)
					
				}
				
				if (_this.hp == 900) {
									
					
					args = {};
					args.name = "";
					args.speed = 0;
					args.opacity = 0;
					args.directioniscircle = "false";
					args.hp = 100;
					args.candie = "true";
					args.canbetouched = "false";
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					args.cantbeinstakill = "true";
					args.action = 'KK_Hand2';
					args.sprite = 'KK-HAND2';
					args.scalex = -1;
					args.width = 0;
					args.height = 0;
					args.posx = 1280+_BH.bhmaxheight-505;
					args.posy = 450 + Math.random()*200-100;
					args.damage = 0.5;
					args.direction = -90;
					args.collision = [
					{type:'rect',x1:505-69-226,x2:226,y1:14,y2:117},
					{type:'rect',x1:505-195-94,x2:94,y1:195,y2:30},
					{type:'rect',x1:505-220-244,x2:244,y1:16,y2:90},
					{type:'rect',x1:505-408-81,x2:81,y1:57,y2:51},
					{type:'rect',x1:505-185-68,x2:68,y1:81,y2:122}];
					_BH.createBHObject(args)
					
				}
				
				if (_this.hp == 1200) {
									
					
					args = {};
					args.name = "";
					args.speed = 0;
					args.opacity = 0;
					args.directioniscircle = "false";
					args.hp = 100;
					args.candie = "true";
					args.canbetouched = "false";
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					args.cantbeinstakill = "true";
					args.action = 'KK_Hand1';
					args.sprite = 'KK-HAND1';
					args.damage = 3;
					args.width = 0;
					args.height = 0;
					args.posx = 400;
					args.posy = 0;
					args.direction = 180;
					args.zindex = 80;
					args.collision = [{type:'rect',x1:69,x2:226,y1:14,y2:117},{type:'rect',x1:195,x2:94,y1:195,y2:30},{type:'rect',x1:185,x2:68,y1:81,y2:122}];
					_BH.createBHObject(args)
					
					args = {};
					args.name = "";
					args.speed = 0;
					args.opacity = 0;
					args.directioniscircle = "false";
					args.hp = 100;
					args.candie = "true";
					args.canbetouched = "false";
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					args.cantbeinstakill = "true";
					args.action = 'KK_Hand1';
					args.sprite = 'KK-HAND1';
					args.damage = 3;
					args.scalex = -1;
					args.width = 0;
					args.height = 0;
					args.posx = 1280+_BH.bhmaxheight-365-400;
					args.posy = 0;
					args.direction = 180;
					args.zindex = 80;
					args.collision = [{type:'rect',x1:365-69-226,x2:226,y1:14,y2:117},{type:'rect',x1:365-195-94,x2:94,y1:195,y2:30},{type:'rect',x1:365-185-68,x2:68,y1:81,y2:122}];
					_BH.createBHObject(args)
					
				}
				
				
				if (_this.hp > 1500) {
					
					_this.hp = 1;
					$gameVariables.setValue(94,$gameVariables.value(94)+1);
					
					if ($gameVariables.value(94) > 5) {
						
						$gameVariables.setValue(94,5);
						
					}
					
				}
				
			}
			
			_this.hp += 1;
    },
};