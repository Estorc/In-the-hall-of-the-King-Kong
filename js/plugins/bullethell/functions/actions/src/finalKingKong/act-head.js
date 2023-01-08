module.exports = {
		
    name: 'KK_Head',
	id: 1101,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {

			_this.begin = 0;
			_this.timer = 0;
			_this.originx = _this.pos.x;
			_this.originy = _this.pos.y;
			_this.stopTurning = false;
			
		}

		if (!_this.stopTurning) {
			
			let x = _this.pos.x+123
			let y = _this.pos.y+82
			_this.angle += ((_BH.getDirectionToPosition(x,y,$gameVariables.value(83)+18+_BH.bhmaxwidth/2,$gameVariables.value(84)+43+_BH.bhmaxheight/2)-90)-_this.angle)/50;
			
		}
		
		
		if (_BH.objects[0].hp % 500 == 0) {
			
			AudioManager.playSe({name: 'Laser2', pan: 0, pitch: 100, volume: 200});
			
					args = {};
					args.name = "";
					args.posx = _this.pos.x;
					args.posy = _this.pos.y;
					args.width = 0;
					args.height = 0;
					args.speed = 0;
					args.direction = 0;
					args.directioniscircle = "false";
					args.sprite = 'KK-CannonLoading@8@8';
					args.hp = 0;
					args.candie = "false";
					args.canbetouched = "false";
					args.action = "KK_HeadLoading";
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					let item = _BH.createBHObject(args)
					item.parent = _this;
		}
		
		
		
	},
};