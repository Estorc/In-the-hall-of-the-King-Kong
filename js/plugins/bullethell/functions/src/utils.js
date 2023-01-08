
BulletHell.prototype.easeOutSine = function (t, b, c, d) {
		return c * Math.sin(t / d * (Math.PI / 2)) + b;
}

BulletHell.prototype.getRandomInt = function(max) {
	  return Math.floor(Math.random() * max);
}


BulletHell.prototype.openBlackBars = function (condition) {
	
	if (condition) {
				params = [8, "CutsceneBlacksBars", 1, 0, 640, 360, 150, 150, 0, 0]
				
				point = Game_Interpreter.prototype.picturePoint.call(null, params);
				// prettier-ignore
				$gameScreen.showPicture(
					params[0], params[1], params[2], point.x, point.y,
					params[6], params[7], params[8], params[9]
				);
				
				params = [8, 3, 1, 0, 640, 360, 100, 100, 255, 0, 60, false, 0]
				
				point = Game_Interpreter.prototype.picturePoint.call(null, params);
				
				$gameScreen.movePicture(
					params[0], params[2], point.x, point.y, params[6], params[7],
					params[8], params[9], params[10], params[12] || 0
				);
				if (params[11]) {
					thisTurn.wait(params[10]);
				}
	}
	
}



BulletHell.prototype.closeBlackBars = function (condition) {
	
	if (condition) {
				params = [8, 3, 1, 0, 640, 360, 150, 150, 0, 0, 60, false, 0]
				
				point = Game_Interpreter.prototype.picturePoint.call(null, params);
				
				$gameScreen.movePicture(
					params[0], params[2], point.x, point.y, params[6], params[7],
					params[8], params[9], params[10], params[12] || 0
				);
				if (params[11]) {
					thisTurn.wait(params[10]);
				}
	}
	
}


BulletHell.prototype.deleteBlackBars = function (condition) {
	
	if (condition) {
				params = [8, "CutsceneBlacksBars", 1, 1, 640, 360, 150, 150, 0, 0]
				
				point = Game_Interpreter.prototype.picturePoint.call(null, params);
				// prettier-ignore
				$gameScreen.showPicture(
					params[0], params[1], params[2], point.x, point.y,
					params[6], params[7], params[8], params[9]
				);
				$gameScreen.erasePicture(8);
	}
	
}


$getLyrics = function() {
	
	if (AudioManager._bgmBuffer == null) {
		return "";
	}
	
	if (AudioManager._bgmBuffer.seek() > 14.834 && 19.867  > AudioManager._bgmBuffer.seek()) {
		return "Aaaaahaaaaa !";
	}

	if (AudioManager._bgmBuffer.seek() > 31.655 && 33.112  > AudioManager._bgmBuffer.seek()) {
		return "You try to run me through"
	}

	if (AudioManager._bgmBuffer.seek() > 33.112 && 34.279  > AudioManager._bgmBuffer.seek()) {
		return "Hold on"
	}

	if (AudioManager._bgmBuffer.seek() > 34.569 && 35.486  > AudioManager._bgmBuffer.seek()) {
		return "Think again"
	}

	if (AudioManager._bgmBuffer.seek() > 35.486 && 36.556  > AudioManager._bgmBuffer.seek()) {
		return "Don't you know"
	}

	if (AudioManager._bgmBuffer.seek() > 36.556 && 38.410  > AudioManager._bgmBuffer.seek()) {
		return "What you're starting?"
	}

	if (AudioManager._bgmBuffer.seek() > 38.410 && 40.927  > AudioManager._bgmBuffer.seek()) {
		return "But you sure ain't got a clue"
	}

	if (AudioManager._bgmBuffer.seek() > 40.927 && 42.251  > AudioManager._bgmBuffer.seek()) {
		return "How bad"
	}

	if (AudioManager._bgmBuffer.seek() > 42.251 && 43.444  > AudioManager._bgmBuffer.seek()) {
		return "This will go"
	}

	if (AudioManager._bgmBuffer.seek() > 43.444 && 44.371  > AudioManager._bgmBuffer.seek()) {
		return "Don't you know"
	}

	if (AudioManager._bgmBuffer.seek() > 44.371 && 45.298  > AudioManager._bgmBuffer.seek()) {
		return "Know my art"
	}

	if (AudioManager._bgmBuffer.seek() > 45.298 && 46.092  > AudioManager._bgmBuffer.seek()) {
		return "(Art of war)"
	}

	if (AudioManager._bgmBuffer.seek() > 46.092 && 48.609  > AudioManager._bgmBuffer.seek()) {
		return "And as you look to the horizon"
	}

	if (AudioManager._bgmBuffer.seek() > 48.609 && 49.934  > AudioManager._bgmBuffer.seek()) {
		return "Not a cloud"
	}

	if (AudioManager._bgmBuffer.seek() > 49.934 && 53.775  > AudioManager._bgmBuffer.seek()) {
		return "But then stormy weather's caught you cold"
	}

	if (AudioManager._bgmBuffer.seek() > 53.775 && 56.424  > AudioManager._bgmBuffer.seek()) {
		return "Seems like it crept up out of nowhere"
	}

	if (AudioManager._bgmBuffer.seek() > 56.424 && 58.145  > AudioManager._bgmBuffer.seek()) {
		return "All around you"
	}

	if (AudioManager._bgmBuffer.seek() > 58.145 && 60+1.192  > AudioManager._bgmBuffer.seek()) {
		return "It's not quite what you foretold"
	}

	if (AudioManager._bgmBuffer.seek() > 60+1.192 && 60+5.695  > AudioManager._bgmBuffer.seek()) {
		return "You'll never see it coming"
	}

	if (AudioManager._bgmBuffer.seek() > 60+5.695 && 60+9.933  > AudioManager._bgmBuffer.seek()) {
		return "You'll see that my mind is too fast for eyes"
	}

	if (AudioManager._bgmBuffer.seek() > 60+9.933 && 60+13.317  > AudioManager._bgmBuffer.seek()) {
		return "You're done in"
	}

	if (AudioManager._bgmBuffer.seek() > 60+13.317 && 60+18.145  > AudioManager._bgmBuffer.seek()) {
		return "By the time it's hit you, your last surprise"
	}

	if (AudioManager._bgmBuffer.seek() > 60+18.145 && 60+21.324  > AudioManager._bgmBuffer.seek()) {
		return "Oooohoohoh"
	}

	if (AudioManager._bgmBuffer.seek() > 60+21.986 && 60+25.298  > AudioManager._bgmBuffer.seek()) {
		return "Oooohoohoh"
	}

	if (AudioManager._bgmBuffer.seek() > 60+25.960 && 60+29.139 > AudioManager._bgmBuffer.seek()) {
		return "Oooohoohoh"
	}

	if (AudioManager._bgmBuffer.seek() > 60+30.132 && 60+31.755  > AudioManager._bgmBuffer.seek()) {
		return "You think you got your game"
	}

	if (AudioManager._bgmBuffer.seek() > 60+31.755 && 60+33.311  > AudioManager._bgmBuffer.seek()) {
		return "Planned out"
	}

	if (AudioManager._bgmBuffer.seek() > 60+33.311 && 60+34.205  > AudioManager._bgmBuffer.seek()) {
		return "To a T"
	}

	if (AudioManager._bgmBuffer.seek() > 60+34.205 && 60+35.033  > AudioManager._bgmBuffer.seek()) {
		return "Yet I'm two"
	}

	if (AudioManager._bgmBuffer.seek() > 60+35.033 && 60+36.887  > AudioManager._bgmBuffer.seek()) {
		return "Steps ahead yeah"
	}

	if (AudioManager._bgmBuffer.seek() > 60+36.887 && 60+39.403  > AudioManager._bgmBuffer.seek()) {
		return "So, you step into my way"
	}

	if (AudioManager._bgmBuffer.seek() > 60+39.403 && 60+40.993  > AudioManager._bgmBuffer.seek()) {
		return "Stand down"
	}

	if (AudioManager._bgmBuffer.seek() > 60+40.993 && 60+41.920  > AudioManager._bgmBuffer.seek()) {
		return "It's a trap"
	}

	if (AudioManager._bgmBuffer.seek() > 60+41.920 && 60+42.947  > AudioManager._bgmBuffer.seek()) {
		return "One more step"
	}

	if (AudioManager._bgmBuffer.seek() > 60+42.947 && 60+43.874  > AudioManager._bgmBuffer.seek()) {
		return "And you're dead"
	}

	if (AudioManager._bgmBuffer.seek() > 60+43.874 && 60+44.569  > AudioManager._bgmBuffer.seek()) {
		return "(Yeah you're dead)"
	}

	if (AudioManager._bgmBuffer.seek() > 60+44.569 && 60+47.086  > AudioManager._bgmBuffer.seek()) {
		return "Why just a picosecond ago"
	}

	if (AudioManager._bgmBuffer.seek() > 60+47.086 && 60+48.543  > AudioManager._bgmBuffer.seek()) {
		return "Clear blue skies"
	}

	if (AudioManager._bgmBuffer.seek() > 60+48.543 && 60+52.483  > AudioManager._bgmBuffer.seek()) {
		return "But now lightning's struck your last resolve"
	}

	if (AudioManager._bgmBuffer.seek() > 60+52.483 && 60+54.933  > AudioManager._bgmBuffer.seek()) {
		return "It's not an accident that no one"
	}

	if (AudioManager._bgmBuffer.seek() > 60+54.933 && 60+56.390  > AudioManager._bgmBuffer.seek()) {
		return "Hears your cries"
	}

	if (AudioManager._bgmBuffer.seek() > 60+56.390 && 60+59.768  > AudioManager._bgmBuffer.seek()) {
		return "As your last strength seems to dissolve"
	}

	if (AudioManager._bgmBuffer.seek() > 60+59.768 && 120+4.138  > AudioManager._bgmBuffer.seek()) {
		return "You'll never see it coming"
	}

	if (AudioManager._bgmBuffer.seek() > 120+4.138 && 120+8.576  > AudioManager._bgmBuffer.seek()) {
		return "You'll see that my mind is too fast for eyes"
	}

	if (AudioManager._bgmBuffer.seek() > 120+8.576 && 120+12.019  > AudioManager._bgmBuffer.seek()) {
		return "You're done in"
	}

	if (AudioManager._bgmBuffer.seek() > 120+12.019 && 120+16.324  > AudioManager._bgmBuffer.seek()) {
		return "By the time it's hit you, your last surprise"
	}

	if (AudioManager._bgmBuffer.seek() > 120+16.324 && 120+19.768  > AudioManager._bgmBuffer.seek()) {
		return "I'm coming"
	}

	if (AudioManager._bgmBuffer.seek() > 120+19.768 && 120+20.993  > AudioManager._bgmBuffer.seek()) {
		return "For you"
	}

	if (AudioManager._bgmBuffer.seek() > 120+20.993 && 120+24.171  > AudioManager._bgmBuffer.seek()) {
		return "My game's always so fast, so fine"
	}

	if (AudioManager._bgmBuffer.seek() > 120+24.171 && 120+27.549  > AudioManager._bgmBuffer.seek()) {
		return "You're spun in"
	}

	if (AudioManager._bgmBuffer.seek() > 120+27.549 && 120+32.251  > AudioManager._bgmBuffer.seek()) {
		return "By the net, you didn't catch it in time"
	}

	if (AudioManager._bgmBuffer.seek() > 120+32.251 && 120+35.430  > AudioManager._bgmBuffer.seek()) {
		return "Oooohoohoh"
	}

	if (AudioManager._bgmBuffer.seek() > 120+36.224 && 120+38.873  > AudioManager._bgmBuffer.seek()) {
		return "Oooohoohoh"
	}

	if (AudioManager._bgmBuffer.seek() > 120+40.065 && 120+42.979  > AudioManager._bgmBuffer.seek()) {
		return "Oooohoohoh"
	}

	if (AudioManager._bgmBuffer.seek() > 120+44.039 && 120+47.350  > AudioManager._bgmBuffer.seek()) {
		return "Oooohoohoh"
	}

	if (AudioManager._bgmBuffer.seek() > 120+48.608 && 120+49.668  > AudioManager._bgmBuffer.seek()) {
		return "Better think"
	}

	if (AudioManager._bgmBuffer.seek() > 120+50.595 && 120+52.449  > AudioManager._bgmBuffer.seek()) {
		return "About your game"
	}

	if (AudioManager._bgmBuffer.seek() > 120+52.449 && 120+53.377  > AudioManager._bgmBuffer.seek()) {
		return "Are you sure"
	}

	if (AudioManager._bgmBuffer.seek() > 120+53.377 && 120+56.291  > AudioManager._bgmBuffer.seek()) {
		return "Your next move's the right one for you?"
	}

	if (AudioManager._bgmBuffer.seek() > 120+56.291 && 120+57.350  > AudioManager._bgmBuffer.seek()) {
		return "Are you sure"
	}

	if (AudioManager._bgmBuffer.seek() > 120+57.350 && 180+0.264 > AudioManager._bgmBuffer.seek()) {
		return "You won't get outmaneuvered"
	}

	if (AudioManager._bgmBuffer.seek() > 180+0.264 && 180+4.238  > AudioManager._bgmBuffer.seek()) {
		return "Again and again my friend?"
	}

	if (AudioManager._bgmBuffer.seek() > 180+4.238) {
		return "You'll never see it coming"
	}
	
	return "";
	
}