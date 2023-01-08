	BulletHell.prototype.getAction = function(index) {

		$gameBulletHell.objects[index].action(index,$gameBulletHell.objects[index],$gameBulletHell);

	}
	
	BulletHell.prototype.getDeathAction = function(index) {

		$gameBulletHell.objects[index].deathaction(index,$gameBulletHell.objects[index],$gameBulletHell);

	}