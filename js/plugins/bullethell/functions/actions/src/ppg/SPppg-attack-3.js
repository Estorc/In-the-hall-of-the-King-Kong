module.exports = {
		
    name: 'SP_PPG Attack 3',
	id: 133,

    execute (index, _this, _BH) {
			if(typeof _this.begin === 'undefined') {

				$gameVariables.setValue(83,640-36/2)
				$gameVariables.setValue(84,500)
				_BH.swapSoul("yellow");
				_this.maxhp = _this.hp;
				_this.begin = 0;
				_BH.createSPCrystalStar(_BH.bhmaxwidth/2+640-43,_BH.bhmaxheight/2-87,1)
				_this.explode = false;
				_this.hp = 750;

				
			}
			
			_this.hp -= 1;

			if (_this.hp % 3 == 0 && _this.hp > 80) {
			_BH.createRotGasterBlaster(640-35 + Math.cos((_this.hp*2.5 % 360)/180*Math.PI)*350 + _BH.bhmaxwidth/2, 
			272-35 + Math.sin((_this.hp*2.5 % 360)/180*Math.PI)*350 + _BH.bhmaxheight/2, 
			20, 
			60, 
			(_this.hp*2.5 % 360)+180)
			}
			
			if (_this.hp == 80) {
						 
				params = [2, 3, 0, 0, 0, 0, 100, 100, 0, 0, 60, false, 0]
						
				point = Game_Interpreter.prototype.picturePoint.call(null, params);
						
				$gameScreen.movePicture(
					params[0], params[2], point.x, point.y, params[6], params[7],
					params[8], params[9], params[10], params[12] || 0
				);
				if (params[11]) {
					thisTurn.wait(params[10]);
				}
						
				let id = _BH.getObjectByName("CrystalStar")
						
				_BH.objects[id].animt = 0;
				_BH.objects[id].animd = 30;
				_BH.objects[id].animy = _BH.objects[id].pos.y;
				_BH.objects[id].animx = _BH.objects[id].pos.x;
				_BH.objects[id].desty = 100 - _BH.objects[id].animy;
				_BH.objects[id].destx = 640+44 - _BH.objects[id].animx;
				_BH.objects[id].anima = _BH.objects[id].angle;
				_BH.objects[id].desta = 360;
				
				_BH.objects[id].explode = true;
				
				_this.hp = 80;
				
			}
			
			if (_this.hp < 80 && !_this.explode) {
				
				_this.hp = 79;
				
			}


    },
};