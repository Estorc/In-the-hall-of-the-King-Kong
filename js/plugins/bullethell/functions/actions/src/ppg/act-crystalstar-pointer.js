module.exports = {
		
    name: 'Crystal Star Pointer',
	id: 41,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {

			_this.x = 0;
			_this.y = 0;
			_this.originx = _this.pos.x;
			_this.originy = _this.pos.y;
			_this.begin = 0;
			
		}
		
		_this.hp -= 1;
			
		_this.direction.x = Math.cos(_BH.getDirectionToPosition(_this.x,_this.y,$gameVariables.value(83)+9+_BH.bhmaxwidth/2,$gameVariables.value(84)+34+_BH.bhmaxheight/2) *Math.PI/180);
		_this.direction.y = Math.sin(_BH.getDirectionToPosition(_this.x,_this.y,$gameVariables.value(83)+9+_BH.bhmaxwidth/2,$gameVariables.value(84)+34+_BH.bhmaxheight/2) *Math.PI/180);
		
		_this.direction.x = (_this.x == $gameVariables.value(83)+9+_BH.bhmaxheight/2) ? 0 : _this.direction.x
		_this.direction.y = (_this.y == $gameVariables.value(84)+34+_BH.bhmaxheight/2) ? 0 : _this.direction.y
		
		if (_BH.getDistanceBetweenPoints(_this.x,_this.y,$gameVariables.value(83)+9+_BH.bhmaxwidth/2,$gameVariables.value(84)+34+_BH.bhmaxheight/2) <= _this.speed) {
			
			_this.x = $gameVariables.value(83)+9+_BH.bhmaxwidth/2;
			_this.y = $gameVariables.value(84)+34+_BH.bhmaxheight/2;
			
		} else {
			
		_this.x += _this.pos.x;
		_this.y += _this.pos.y;
		
		}
		
		
		_this.offset.x = Math.ceil(_this.x);
		_this.offset.y = Math.ceil(_this.y);
		
		_this.pos.x = 0;
		_this.pos.y = 0;
		
		if (_this.hp <= 150 && _this.hp % 30 == 0 && _this.hp != 0) {
			
			AudioManager.playSe({name: 'ppg_soulchange', pan: 0, pitch: 70, volume: 80});
			_this.sprite = "null";
			
		} else if (_this.hp % 10 == 0) {
			
				if (_this.name.contains("LaytonMobile")) {
					_this.sprite = _BH.loadImages('crystalStarCursorLeft');
				} else {
					_this.sprite = _BH.loadImages('crystalStarCursor');
				}
			
		}
		
		if (_this.hp <= 0) {
			
			AudioManager.playSe({name: 'Ice2', pan: 0, pitch: 100, volume: 200});
			
			for (n=0;n<80;n++) {
				
				if (_this.name.contains("LaytonMobile")) {
					_BH.createPositionDirigedBullet(
					_this.originx+1,
					_this.originy+1,
					_this.offset.x+1+(Math.random()*5-5/2),
					_this.offset.y+1+(Math.random()*5-5/2),
					'ppg_commonbullet',16,16,10+Math.random()*4,0,0);
				} else {
					_BH.createPositionDirigedBullet(
					_this.originx+1,
					_this.originy+1,
					_this.offset.x+1+(Math.random()*5-5/2),
					_this.offset.y+1+(Math.random()*5-5/2),
					'ppg_commonbullet',16,16,2+Math.random()*5,0,0);
				}
				
			}
			
		args = {};
		if (_this.name.contains("LaytonMobile")) {
			args.name = "268";
		} else {
			args.name = "2468";
		}
		args.speed = 12;
		args.directioniscircle = "true";
		args.hp = 25;
		args.candie = "true";
		args.canbetouched = "false";
		args.deathaction = 39;
		args.isPlayerShot = "false";
		args.isBonus = "false";
		args.cantbeinstakill = "true";
		args.action = 42;
		args.sprite = 'ppg_commonbullet';
		args.width = 16;
		args.height = 16;
		args.posx = _this.originx+1;
		args.posy = _this.originy+1;
		args.direction = _BH.getDirectionToPosition(_this.originx+1,_this.originy+1,_this.offset.x+1,_this.offset.y+1);
		_BH.createBHObject(args)
			
		}
    },
};