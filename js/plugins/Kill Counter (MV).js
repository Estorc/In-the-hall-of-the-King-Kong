//==============================================================================
// Kill Counter
// by Shaz
// Last Updated: 2016.02.15
//==============================================================================

/*:
 * @plugindesc Allows you to track number of enemies killed
 * @author Shaz
 * @target MZ
 *
 * @help
 * This plugin allows you to track, in a variable, the number of a certain
 * type of enemy killed.  It only increments to the maximum number of enemies
 * required.
 *
 * @command StartKillCounter
 * @text Start Kill Counter
 * @desc 
 * @arg enemyId
 * @type number
 * @text Enemy ID
 * @desc 
 * @arg questID
 * @type number
 * @text Quest ID
 * @desc 
 * @arg maxRequired
 * @type number
 * @text Max Required
 * @desc 
 *
 * @command EndKillCounter
 * @text End Kill Counter
 * @desc 
 * @arg enemyId
 * @type string
 * @text Enemy ID
 * @desc 
 *
 * Plugin Commands:
 * StartKillCounter enemyId variableId maxRequired - tracks kills in specified variable
 * EndKillCounter enemyId - stops counting kills
 *
 * enemyId - the id (no leading zeros) of the enemy to be counted
 * variableId - the id (no leading zeros) of the variable to hold the kill count
 * maxRequired - how many enemies are required, in total - default is 0, which
 *               means no limit
 */

(function() {
	const pluginName = "Kill Counter (MV)";
	$vidSprite = null;
	$battlebgm = null;
	$evbattlebgm = [];
	$AttackCostCoin = 0;
	$maxBattleMembers = 4;
	$waitFormationMenu = false;
var vid;
var w = "auto"; 
var h = "auto"; 
var x = 0; 
var y = 0;
var loopStart = 0;
var loopEnd = "end";
var opacity = 1;
var tint = 0xffffff;
var loop = "yes";
var muted = "no";
var playbackRate = 1.0;
var listeners = {};
$sceneBoot = null;




Window_SkillStatus.prototype[_0x2043a5(0x230)] = function() {
    const _0x38e51e = _0x2043a5;
    if (!Imported['VisuMZ_0_CoreEngine']) return;
    if (!Imported[_0x38e51e(0x1b6)]) return;
    const _0x32e728 = this['gaugeLineHeight']();
    let _0x1186be = this[_0x38e51e(0x248)]() / 0x2 + 0xb4 + 0xb4 + 0xb4,
        _0x27e8d8 = this['innerWidth'] - _0x1186be - 0x2;
    if (_0x27e8d8 >= 0x12c) {
        const _0x6d35f3 = VisuMZ[_0x38e51e(0x300)][_0x38e51e(0x34b)][_0x38e51e(0x458)]['DisplayedParams'],
            _0x53aab4 = Math[_0x38e51e(0x45b)](_0x27e8d8 / 0x2) - 0x18;
        let _0x3bc784 = _0x1186be,
            _0x1519d1 = Math[_0x38e51e(0x45b)]((this[_0x38e51e(0x341)] - Math[_0x38e51e(0x3e3)](_0x6d35f3[_0x38e51e(0x474)] / 0x2) * _0x32e728) / 0x2) + 0x16,
            _0x558c77 = 0x0;
        for (const _0xe4b667 of _0x6d35f3) {
            this[_0x38e51e(0x38a)](_0x3bc784, _0x1519d1, _0x53aab4, _0xe4b667), _0x558c77++;
            if (_0x558c77 % 0x2 === 0x0) {
                if (_0x38e51e(0x387) !== _0x38e51e(0x387)) {
                    function _0x23d258() {
                        const _0x38df9c = _0x38e51e,
                            _0x9b396a = _0x5c7c22[_0x38df9c(0x376)]('[' + _0x56bc6d['$1'][_0x38df9c(0x47c)](/\d+/g) + ']');
                        for (const _0x33293c of _0x9b396a) {
                            if (!this['_actor']['isLearnedSkill'](_0x33293c)) return !![];
                        }
                        return ![];
                    }
                } else _0x3bc784 = _0x1186be, _0x1519d1 += _0x32e728;
            } else _0x3bc784 += _0x53aab4 + 0x18;
        }
    }
    this['resetFontSettings']();
}





_Game_Actor_changeEquip = Game_Actor.prototype.changeEquip
Game_Actor.prototype.changeEquip = function(slotId, item) {
	if (slotId == 4) {
		if (item !== null && item.id == 1025) {
			this.addState(84);
		};
		if (this.armors().includes($dataArmors[1025])) {
			this.removeState(84)
		};
    }
	_Game_Actor_changeEquip.call(this, slotId, item)
};




Window_StatusBase.prototype.drawActorSimpleStatus = function(actor, x, y) {
    const lineHeight = this.lineHeight();
    const x2 = x + 180;
    this.drawActorName(actor, x, y, 370);
    this.drawActorLevel(actor, x, y + lineHeight * 1);
    this.drawActorIcons(actor, x, y + lineHeight * 2);
    this.drawActorClass(actor, x + 370, y);
    this.placeBasicGauges(actor, x2, y + lineHeight);
};





$replayMusicAfterEvent = function(name) {
	
	$evbattlebgm = $evbattlebgm.filter(bgm => bgm.name != name);
	if ($currentMusic == name) {
		if ($evbattlebgm.length != 0) {
			$currentMusic = $evbattlebgm[$evbattlebgm.length-1].name
			AudioManager.playBgm($evbattlebgm[$evbattlebgm.length-1].song);
		} else {
			AudioManager.replayBgm($battlebgm);
			$battlebgm = null;
		}
	}
	
}

$Window_ChoiceList_start = null;
$Window_ChoiceList_processCursorMove = null;

$initGramophone = function() {
	
	
	$Window_ChoiceList_start = Window_ChoiceList.prototype.start
	Window_ChoiceList.prototype.start = function() {
		$Window_ChoiceList_start.call(this)
		this.x = 650
		this.y = 50
		this.setBackgroundType(2)
	};
		
		
	$Window_ChoiceList_processCursorMove = Window_ChoiceList.prototype.processCursorMove
	Window_ChoiceList.prototype.processCursorMove = function() {
		$Window_ChoiceList_processCursorMove.call(this);
		if (this._list[this.index()].name.includes('603')) $gameScreen.picture(1)._name = "vinylOG2_01"
		if (this._list[this.index()].name.includes('604')) $gameScreen.picture(1)._name = "vinylOG2_02"
		if (this._list[this.index()].name.includes('605')) $gameScreen.picture(1)._name = "vinylOG2_03"
		if (this._list[this.index()].name.includes('606')) $gameScreen.picture(1)._name = "vinylOG2_04"
		if (this._list[this.index()].name.includes('607')) $gameScreen.picture(1)._name = "vinylOG2_05"
		if (this._list[this.index()].name.includes('608')) $gameScreen.picture(1)._name = "vinylOG2_06"
		if (this._list[this.index()].name.includes('609')) $gameScreen.picture(1)._name = "vinylOG2_07"
		if (this._list[this.index()].name.includes('610')) $gameScreen.picture(1)._name = "vinylOG2_08"
		if (this._list[this.index()].name.includes('611')) $gameScreen.picture(1)._name = "vinylOG2_09"
		if (this._list[this.index()].name.includes('612')) $gameScreen.picture(1)._name = "vinylOG2_10"
		if (this._list[this.index()].name.includes('613')) $gameScreen.picture(1)._name = "vinylOG2_11"
		if (this._list[this.index()].name.includes('614')) $gameScreen.picture(1)._name = "vinylOG2_12"
		if (this._list[this.index()].name.includes('615')) $gameScreen.picture(1)._name = "vinylOG2_13"
		if (this._list[this.index()].name.includes('616')) $gameScreen.picture(1)._name = "vinylOG2_14"
		if (this._list[this.index()].name.includes('617')) $gameScreen.picture(1)._name = "vinylOG2_15"
		if (this._list[this.index()].name.includes('618')) $gameScreen.picture(1)._name = "vinylOG2_16"
			
	};
	
}


$endGramophone = function() {
	
	
	Window_ChoiceList.prototype.start = $Window_ChoiceList_start;
	Window_ChoiceList.prototype.processCursorMove = $Window_ChoiceList_processCursorMove;
	
}

function Window_FinalFormation() {
    this.initialize(...arguments);
}

Window_FinalFormation.prototype = Object.create(Window_Selectable.prototype);
Window_FinalFormation.prototype.constructor = Window_FinalFormation;

Window_FinalFormation.prototype.initialize = function(rect) {
    Window_Selectable.prototype.initialize.call(this, rect);
    this.refresh();
};

Window_FinalFormation.prototype.colSpacing = function() {
    return 0;
};

Window_FinalFormation.prototype.refresh = function() {
    const rect = this.itemLineRect(0);
    const x = rect.x;
    const y = rect.y;
    const width = rect.width;
    this.contents.clear();
	this.contents.fontSize = 60;
	this.drawText("Choisissez votre ultime formation !", x, y+18, width, "center");
};

Window_FinalFormation.prototype.open = function() {
    this.refresh();
    Window_Selectable.prototype.open.call(this);
};

_Scene_Menu_create = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function() {
    _Scene_Menu_create.call(this);
	if ($waitFormationMenu) {
		$waitFormationMenu = false;
		this._commandWindow.hide();
		this._goldWindow.hide();
		this._playtimeWindow.hide();
		this._dummyWindow.hide();
		this._statusWindow.height = 550;
		this._statusWindow.innerHeight = 520;
		const rect = this.commandWindowRect();
		this._finalFormationWindow = new Window_FinalFormation(rect);
		this.addWindow(this._finalFormationWindow);
		this.commandFormation();
		this._statusWindow.setHandler("cancel", this.popScene.bind(this));
		
	}
};

$openFormationMenu = function() {

		
	if (SceneManager._scene !== Scene_Menu) {
		SceneManager.push(Scene_Menu)
		$waitFormationMenu = true;
	}
	
}


__Window_NumberInput_update = Window_NumberInput.prototype.update
Window_NumberInput.prototype.update = function() {
	if ($AttackCostCoin > 0) {
    Window_Selectable.prototype.update.call(this);
    this.processDigitChange();
	} else {
    __Window_NumberInput_update.call(this);
	}
};


__Window_NumberInput_processKeyboardDigitChange = Window_NumberInput.prototype.processKeyboardDigitChange
Window_NumberInput.prototype.processKeyboardDigitChange = function() {
	if ($AttackCostCoin == 0) {
		
		__Window_NumberInput_processKeyboardDigitChange.call(this)
	}
}

__Window_NumberInput_start = Window_NumberInput.prototype.start
Window_NumberInput.prototype.start = function() {
	if ($AttackCostCoin > 0) {
	this.itemX += 48;
    this._maxDigits = $gameMessage.numInputMaxDigits();
    this._number = $gameVariables.value($gameMessage.numInputVariableId());
    this._number = this._number.clamp(0, Math.pow(10, this._maxDigits) - 1);
    this.updatePlacement();
	this.y -= 48;
    this.placeButtons();
    this.createContents();
    this.resetTextColor();
    this.refresh();
    this.open();
    this.activate();
    this.select(0);
	} else {
    __Window_NumberInput_start.call(this);
	}
};


__Window_NumberInput_select = Window_NumberInput.prototype.select
Window_Selectable.prototype.select = function(index) {
	if ($AttackCostCoin > 0 && index == (this._maxDigits-1)) {
		
	} else {
		__Window_NumberInput_select.call(this,index)
	}
};


__Window_NumberInput_drawAllItems = Window_NumberInput.prototype.drawAllItems
Window_NumberInput.prototype.drawAllItems = function() {
	if ($AttackCostCoin > 0) {
		const topIndex = this.topIndex();
		for (let i = 0; i < this.maxVisibleItems(); i++) {
			const index = topIndex + i;
			if (index < this.maxItems()) {
				this.drawItemBackground(index);
				this.drawItem(index);
			}
		}
		if ($AttackCostCoin == 100000) {
			this.drawText((((this._number+$gameVariables.value(119))/$AttackCostCoin)*100+100).toString() + " %", 0, 0, this.width-110, "right");
			this.drawTextEx("\x1b" + "I[97]", this.width-110, 0, 80);
		} else {
			this.drawText((((this._number)/$AttackCostCoin)*1000).toString() + " %", 0, 0, this.width-110, "right");
			this.drawTextEx("\x1b" + "I[97]", this.width-110, 0, 80);
		}
	} else {
		__Window_NumberInput_drawAllItems.call(this);
	}
};

__Window_NumberInput_itemRect = Window_NumberInput.prototype.itemRect
Window_NumberInput.prototype.itemRect = function(index) {
	if ($AttackCostCoin > 0) {
    const rect = Window_Selectable.prototype.itemRect.call(this, index);
	rect.y += 48;
    const innerMargin = this.innerWidth - this.maxCols() * this.itemWidth();
    rect.x += innerMargin / 2;
    return rect;
	} else {
    return _Window_NumberInput_itemRect.call(this,index);
	}
};

__Window_NumberInput_buttonY = Window_NumberInput.prototype.buttonY
Window_NumberInput.prototype.buttonY = function() {
	if ($AttackCostCoin > 0) {
    return this.itemHeight() + this.buttonSpacing()+ 48;
	} else {
    __Window_NumberInput_buttonY.call(this);
	}
};

__Window_NumberInput_changeDigit = Window_NumberInput.prototype.changeDigit
Window_NumberInput.prototype.changeDigit = function(up) {
	if ($AttackCostCoin > 0) {
		const index = this.index();
		this._number += up ? Math.pow(10,this._maxDigits - 1 - index) : -Math.pow(10,this._maxDigits - 1 - index);
		this._number = (this._number < 0) ? 0 : this._number;
		if ($AttackCostCoin == 100000) {
			this._number = (this._number > $AttackCostCoin - $gameVariables.value(119)) ? $AttackCostCoin : this._number;
		} else {
			this._number = (this._number > $AttackCostCoin) ? $AttackCostCoin : this._number;
		}
		this.playCursorSound();
	
		$gameVariables.setValue($gameMessage.numInputVariableId(), this._number);
		if (this._number > $gameParty.gold() && $gameParty.gold() < $AttackCostCoin-(($AttackCostCoin == 100000) ? $gameVariables.value(119) : 0)) {
			
			this._number = up ? Math.floor($gameParty.gold()) : 0
			
		} else if (this._number > $AttackCostCoin-(($AttackCostCoin == 100000) ? $gameVariables.value(119) : 0)) {
		
			this._number = up ? $AttackCostCoin-(($AttackCostCoin == 100000) ? $gameVariables.value(119) : 0) : 0
		
		}
		
		this.refresh();
	
	} else {

    __Window_NumberInput_changeDigit.call(this,up)

	}
};








Game_Actor.prototype.setFabio = function() {

	$gameActors.actor(33)._name = this._name;
	$gameActors.actor(33)._faceName = this._faceName;
	$gameActors.actor(33)._faceIndex = this._faceIndex;
	$gameActors.actor(33)._skills = this._skills;
	$gameActors.actor(33)._tp = this._tp;
	this._tp = 100;
	this._skills = this._skills.filter(item => (item < 500 || item > 600))
	this._name = $gameActors.actor(32)._name;
	$gameActors.actor(6).setFaceImage("Oujnish9", 1);

}

Game_Actor.prototype.setTom = function() {

	$gameActors.actor(35)._name = this._name;
	$gameActors.actor(35)._faceName = this._faceName;
	$gameActors.actor(35)._faceIndex = this._faceIndex;
	$gameActors.actor(35)._skills = this._skills;
	$gameActors.actor(35)._tp = this._tp;
	this._tp = 100;
	this._skills = this._skills.filter(item => (item < 500 || item > 600))
	this._name = $gameActors.actor(34)._name;
	$gameActors.actor(14).setFaceImage("Oujnish10", 1);

}

Game_Actor.prototype.resetSavun = function() {
	
	this._name = $gameActors.actor(33)._name;
	$gameActors.actor(6).setFaceImage($gameActors.actor(33)._faceName, $gameActors.actor(33)._faceIndex);
	this._skills = $gameActors.actor(33)._skills;
	this._tp = $gameActors.actor(33)._tp;
	
}

Game_Actor.prototype.resetLunatic = function() {
	
	this._name = $gameActors.actor(35)._name;
	$gameActors.actor(14).setFaceImage($gameActors.actor(35)._faceName, $gameActors.actor(35)._faceIndex);
	this._skills = $gameActors.actor(35)._skills;
	this._tp = $gameActors.actor(35)._tp;
	
}


Game_Actor.prototype.selectNextCommand = function() {
	console.log(this);
    if (this._actionInputIndex < this.numActions() - 1) {
        this._actionInputIndex++;
		if (this.isStateAffected(61) && this._actionInputIndex == this.numActions() - 1) {
			this.setFabio()
		}
		if (this.isStateAffected(107) && this._actionInputIndex == this.numActions() - 1) {
			this.setTom()
		}
        return true;
    } else {
			if (this.isStateAffected(61)) {
				this.resetSavun()
			}
			if (this.isStateAffected(107)) {
				this.resetLunatic()
			}
        return false;
    }
};

Game_Actor.prototype.selectPreviousCommand = function() {
    if (this._actionInputIndex > 0) {
        this._actionInputIndex--;
		if (this.isStateAffected(61)) {
			this.resetSavun()
		}
		if (this.isStateAffected(107)) {
			this.resetLunatic()
		}
        return true;
    } else {
        return false;
    }
};

_BattleManager_changeCurrentActor = BattleManager.changeCurrentActor
BattleManager.changeCurrentActor = function(forward) {
	_BattleManager_changeCurrentActor.call(this,forward);
	if (this._currentActor && !forward) {
		if (this._currentActor.isStateAffected(61)) {
			this._currentActor.setFabio()
		}
		if (this._currentActor.isStateAffected(107)) {
			this._currentActor.setTom()
		}
	}
};


__BattleManager_processTurn = BattleManager.processTurn
BattleManager.processTurn = function() {
	if (this._subject && this._subject._actions.length == 1) {
		if (this._subject.isStateAffected(61)) {
			this._subject.setFabio()
		}
		if (this._subject.isStateAffected(107)) {
			this._subject.setTom()
		}
	}
	__BattleManager_processTurn.call(this);
};

_BattleManager_endBattlerActions = BattleManager.endBattlerActions
BattleManager.endBattlerActions = function(battler) {
    _BattleManager_endBattlerActions.call(this,battler);
	if(battler.isStateAffected(61) && battler._name == $gameActors.actor(32)._name) {
		battler.resetSavun();
		this.displayBattlerStatus(battler, true);
	}
	if(battler.isStateAffected(107) && battler._name == $gameActors.actor(34)._name) {
		battler.resetLunatic();
		this.displayBattlerStatus(battler, true);
	}
};




Window_BattleStatus.prototype.initialize = function(rect) {
    Window_StatusBase.prototype.initialize.call(this, rect);
    this.frameVisible = true;
    this.openness = 0;
    this._bitmapsReady = 0;
    this.preparePartyRefresh();
};

Window_BattleStatus.prototype.maxCols = function() {
    return 5;
};

Game_Party.prototype.maxBattleMembers = function() {
    return $maxBattleMembers;
};

Window_BattleStatus.prototype.scrollBaseX = function() {
	return (($gameParty.maxBattleMembers() <= 4) ? -this.itemWidth()/2 : 0);
};

_Window_BattleStatus_update = Window_BattleStatus.prototype.update
Window_BattleStatus.prototype.update = function() {
    _Window_BattleStatus_update.call(this);
	if (this._index >= 0) {
		this.smoothSelect(this._index);
	}
};

Scene_Battle.prototype.statusWindowRect = function() {
    const extra = 10;
    const ww = Graphics.boxWidth - 192;
    const wh = this.windowAreaHeight() + extra + 40;
    const wx = this.isRightInputMode() ? 0 : Graphics.boxWidth - ww;
    const wy = Graphics.boxHeight - wh + extra - 4;
    return new Rectangle(wx, wy, ww, wh);
};


_BattleManager_playBattleBgm = BattleManager.playBattleBgm;
BattleManager.playBattleBgm = function() {
    _BattleManager_playBattleBgm.call(this);
};


Game_Party.prototype.maxItems = function(item) {
    return ((this.hasItem($dataItems[512]) && DataManager['maxItemAmount'](item) == 30) ? 999 : DataManager['maxItemAmount'](item));
};



Graphics._createLoadingSpinnerEnd = function() {
        const loadingSpinnerEnd = document.createElement("div");
        const loadingSpinnerImageEnd = document.createElement("div");
        loadingSpinnerEnd.id = "loadingSpinnerEnd";
        loadingSpinnerImageEnd.id = "loadingSpinnerImageEnd";
        loadingSpinnerEnd.appendChild(loadingSpinnerImageEnd);
		if (typeof this._loadingSpinnerEnd === 'undefined') {
			this._loadingSpinnerEnd = null;
		}
        this._loadingSpinnerEnd = loadingSpinnerEnd;
};


Graphics._createAllElements = function() {
    this._createErrorPrinter();
    this._createCanvas();
    this._createLoadingSpinner();
	this._createLoadingSpinnerEnd();
    this._createFPSCounter();
};


Graphics._deleteLoadingSpinnerEnd = function() {
	if (typeof this._loadingSpinnerEnd !== 'undefined') { document.body.removeChild(this._loadingSpinnerEnd)}
}

Graphics._canDeleteLoadingSpinnerEndFun = function(_this) {
	this._canDeleteLoadingSpinnerEnd = 1;
}

Graphics.startLoading = function() {
    /*if (document.getElementById("loadingSpinnerEnd")) {
       if (typeof this._loadingSpinnerEnd !== 'undefined') { document.body.removeChild(this._loadingSpinnerEnd)};
    }*/
    if (!document.getElementById("loadingSpinner")) {
        document.body.appendChild(this._loadingSpinner);
		this._canDeleteLoadingSpinnerEnd = 0;
		setTimeout(this._canDeleteLoadingSpinnerEndFun.bind(this), 500);
    }
};

Graphics.endLoading = function() {
    if (document.getElementById("loadingSpinner")) {
        document.body.removeChild(this._loadingSpinner);
		
		if (!document.getElementById("loadingSpinner") && (typeof this._canDeleteLoadingSpinnerEnd !== 'undefined') && this._canDeleteLoadingSpinnerEnd == 1) {
			if (typeof this._loadingSpinnerEnd !== 'undefined') { document.body.appendChild(this._loadingSpinnerEnd)};
			setTimeout(this._deleteLoadingSpinnerEnd, 500);
		}
		
        return true;
    } else {
        return false;
    }
};




Game_Action.prototype.isDrainHP = function() {
	try {
		return ($dataWeapons[$gameActors.actor(this._subjectActorId)._equips[0]._itemId].meta.DrainHP && this._item._itemId == 1 && this._item._dataClass == "skill");
	} 
	catch (error) {
		return false;
	}
}
	
	
Game_Action.prototype.isDrainMP = function() {
	try {
		return ($dataWeapons[$gameActors.actor(this._subjectActorId)._equips[0]._itemId].meta.DrainMP && this._item._itemId == 1 && this._item._dataClass == "skill");
	} 
	catch (error) {
		return false;
	}
}




Game_Action.prototype.isHpEffect = function() {
	
    return (this.item() && (this.checkDamageType([1, 3, 5]) || this.isDrainHP()));
	
};

Game_Action.prototype.isMpEffect = function() {

    return (this.item() && (this.checkDamageType([2, 4, 6]) || this.isDrainMP()));

};
_BattleManager_startAction = BattleManager.startAction
BattleManager.startAction = function() {
    const subject = this._subject;
    const action = subject.currentAction();
	if (subject.isStateAffected(135)) {
		
		action._multipliers.damageRate += $gameTroop._turnCount/7.5;
		
	}
    const targets = action.makeTargets();
	if (typeof this._subject._equips !== 'undefined' && $dataWeapons[this._subject._equips[0]._itemId] !== null && $dataWeapons[this._subject._equips[0]._itemId].meta.damageYourself && !targets.includes(this._subject)) {
		targets.push(this._subject)	
	}
    this._phase = "action";
    this._action = action;
    this._targets = targets;
    subject.useItem(action.item());
    this._action.applyGlobal();
    this._logWindow.startAction(subject, action, targets);
};


_Scene_Boot_create = Scene_Boot.prototype.create
Scene_Boot.prototype.create = function() {
    _Scene_Boot_create.call(this);
    $sceneBoot = this;
};






Game_Action.prototype.makeDamageValue = function(target, critical) {
	const result = target.result();
    const item = this.item();
    const baseValue = this.evalDamageFormula(target);
    let value = baseValue * this.calcElementRate(target);
	
	
	if (typeof this.subject().armors !== 'undefined' && this.subject().armors().includes($dataArmors[1027])) {
		if (!this.subject().criticalForced) {
			
			result.critical = true;
			value *= 2;
			
		} else {
			
			result.critical = false;
			value *= 0.5;
			
		}
	}
	
    if (this.isPhysical()) {
        value *= target.pdr;
    }
    if (this.isMagical()) {
        value *= target.mdr;
    }
    if (baseValue < 0) {
        value *= target.rec;
    }
    if (result.critical) {
        value = this.applyCritical(value);
    }
	
	if (this.ppgDamage) {
		value = this.ppgDamage;
	}
	
    value = this.applyVariance(value, item.damage.variance);
    value = this.applyGuard(value, target);
    value = Math.round(value);
    return value;
};


__Game_Battler__removeState = Game_Battler.prototype.removeState
Game_Battler.prototype.removeState = function(stateId) {
    if (stateId !== this.deathStateId() || $gameVariables.value(1000) < 4) {
		__Game_Battler__removeState.call(this,stateId);
    }
};


__Game_BattlerBase_recoverAll = Game_BattlerBase.prototype.recoverAll
Game_BattlerBase.prototype.recoverAll = function() {
    __Game_BattlerBase_recoverAll.call(this);
	if (this._states.includes(1)) this._hp = 0;
};


__Game_Actor_clearStates = Game_Actor.prototype.clearStates
Game_Actor.prototype.clearStates = function() {
	let isDead = (typeof this._states !== 'undefined' && (this._states.includes(1) || this._states.includes(54)) && $gameVariables.value(1000) >= 4);
    __Game_Actor_clearStates.call(this);
    this._stateSteps = {};
	if (isDead) this.addState(1);
};



Game_Action.prototype.executeHpDamage = function(target, value) {
    if (this.isDrain() || this.isDrainHP()) {
        value = Math.min(target.hp, value);
    }
    this.makeSuccess(target);
		
	if (ConfigManager[_0x48a899(0x1fe)]) {
		value = target.hp;
	}
	if (typeof target.armors !== 'undefined' && target.armors().includes($dataArmors[1024]) && target.hp > 1) {

		value = Math.min(target.hp-1, value);
	}
    target.gainHp(-value);
	if (target.isStateAffected(99)) {
		target.gainMp(value/2);
	}
    if (value > 0) {
        target.onDamage(value);
    }
    this.gainDrainedHp(value);
};

Game_Action.prototype.gainDrainedHp = function(value) {
    if (this.isDrain() || this.isDrainHP()) {
        let gainTarget = this.subject();
        if (this._reflectionTarget) {
            gainTarget = this._reflectionTarget;
        }
		if (this.item().meta.DATFACE) {
			$gameParty.members().forEach(function(item){
				if (!item._states.includes(1) && !item._states.includes(54)) {
					item.gainHp(value);
				}
			})
		} else {
			gainTarget.gainHp(value);
		}
    }
};

Game_Action.prototype.gainDrainedMp = function(value) {
    if (this.isDrain() || this.isDrainMP()) {
        let gainTarget = this.subject();
        if (this._reflectionTarget) {
            gainTarget = this._reflectionTarget;
        }
        gainTarget.gainMp(value);
    }
};

StorageManager.jsonToZip = function(json) {
    return new Promise((resolve, reject) => {
        try {
            const zip = pako.deflate(json, { to: "string", level: 1 });
            if (zip.length >= 500000) {
                console.warn("Save data is too big.");
            }
            resolve(zip);
        } catch (e) {
            reject(e);
        }
    });
};



Game_Enemy.prototype.param = function(paramId) {
    let value =
        this.paramBasePlus(paramId) *
        this.paramRate(paramId) *
        this.paramBuffRate(paramId);
		
	if (paramId == 0 || paramId == 1 || paramId == 2 || paramId == 4 || paramId == 6 || paramId == 7){
		switch ($gameVariables.value(1000)) {
			case 0:
				value = value * 1;
			break;
			case 1:
				value = value * 0.75;
			break;
			case 2:
				value = value * 1;
			break;
			case 3:
				value = value * 1.5;
			break;
			case 4:
				if ((paramId == 2 || paramId == 4) && this.infernalParams) {
					value *= 1.5;
				} else {
					value *= 2;
				}
			break;
			case 5:
				if ((paramId == 2 || paramId == 4) && this.infernalParams) {
					value *= 1.5;
				} else {
					value *= 4;
				}
			break;
		}
	}
	
    const maxValue = this.paramMax(paramId)*10;
    const minValue = this.paramMin(paramId);
    return Math.round(value.clamp(minValue, maxValue));
};



_Game_Actor_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function(actorId) {
	_Game_Actor_setup.call(this,actorId)
	if ($gameVariables.value(1000) == 5 && actorId <= 21) {
		const actor = $dataActors[actorId];
		this._name = actor.nickname
		this._nickname = actor.name
	}
};

___BattleManager_playBattleBgm = BattleManager.playBattleBgm;
BattleManager.playBattleBgm = function() {
	
	if ($gameVariables.value(1000) >= 4) {
		switch ($gameSystem.battleBgm().name) {
			
			case "Battle3":
				$gameSystem._battleBgm = {name: "RMMV_03_Battle_to_the_Max", volume: 100, pitch: 100, pan: 0}
				break;
			case "Battle8":
				$gameSystem._battleBgm = {name: "RMMV_03_The_Final_Battle", volume: 100, pitch: 100, pan: 0}
				break;
			
		}
	}
	$gameSystem.battleBgm()
	___BattleManager_playBattleBgm.call(this)
};


__Spriteset_Battle_createBattleback = Spriteset_Battle.prototype.createBattleback
Spriteset_Battle.prototype.createBattleback = function() {
	__Spriteset_Battle_createBattleback.call(this);
	if ($gameVariables.value(1000) == 4) {
		this._overlaySprite = new Sprite();
		this._overlaySprite.bitmap = ImageManager.loadPicture("nightmareOverlay");
		this._baseSprite.addChild(this._overlaySprite);
	}
	if ($gameVariables.value(1000) == 5) {
		this._overlaySprite = new Sprite();
		this._overlaySprite.bitmap = ImageManager.loadPicture("lunaticOverlay");
		this._baseSprite.addChild(this._overlaySprite);
	}
};


	Game_Interpreter.prototype.command261 = function(params) {
		if ($gameMessage.isBusy()) {
			return false;
		}
		const name = params[0];
		if (name.length > 0) {
			const ext = this.videoFileExt();
			Video._volume = (WebAudio._masterVolume)*(AudioManager._bgmVolume/100)
			Video.play("movies/" + name + ext);
			this.setWaitMode("video");
		}
		return true;
	};



	$loadVideoOnBattle = function(videoname) {
		
var ext = Game_Interpreter.prototype.videoFileExt();
var vidFilePath = 'movies/' + videoname + ext;
var vidTexture = PIXI.Texture.fromVideo(vidFilePath);
vid = vidTexture.baseTexture.source;
$vidSprite = new PIXI.Sprite(vidTexture);
vid.volume = 1*(WebAudio._masterVolume)*(AudioManager._bgmVolume/100);
$vidSprite.blendMode = PIXI.BLEND_MODES["NORMAL".toUpperCase()] || PIXI.BLEND_MODES.NORMAL;


window.vid = vid;
$vidSprite.width = w === 'auto' ? Graphics.width : (parseInt(w) || Graphics.width);
$vidSprite.height = h === 'auto' ? Graphics.height : (parseInt(h) || Graphics.height);
$vidSprite.x = parseInt(x) || 0;
$vidSprite.y = parseInt(y) || 0;
$vidSprite.alpha = parseFloat(opacity) || 1.0;
$vidSprite.tint = parseInt(tint) || 0xffffff;
vid.loop = true;vid.muted = muted === 'yes' ? true : false;
vid.playbackRate = parseFloat(playbackRate) || 1.0;
$vidSprite.update = function() {vidTexture.update();}


vid.currentTime = 0;
vid.play();
$vidSprite.name = "vidsprite"
$vidSprite.vidname = videoname;
		
	}
	
	
	$destroyVideoOnBattle = function() {
		
if (typeof vid !== 'undefined' && vid != null) {
	vid.pause();
	vid.remove();
	vid = null;
	$vidSprite = new PIXI.Sprite();
	$vidSprite.name = "vidsprite"
	$vidSprite.vidname = "undefined";
}
		
	}
	
	
	_Spriteset_Battle_terminate = Spriteset_Battle.prototype.terminate;
    Spriteset_Battle.prototype.terminate = function() {
        _Spriteset_Battle_terminate.call(this);
		$destroyVideoOnBattle();
    };


_Scene_Boot_loadGameFonts = Scene_Boot.prototype.loadGameFonts
Scene_Boot.prototype.loadGameFonts = function() {
	_Scene_Boot_loadGameFonts.call(this);
    FontManager.load("kk-lyricsfont", "PersonifiedUXRegular.ttf");
};


_Spriteset_Battle_createBattleback = Spriteset_Battle.prototype.createBattleback;
Spriteset_Battle.prototype.createBattleback = function() {
    _Spriteset_Battle_createBattleback.call(this);
	if ($vidSprite === null || $vidSprite.vidname === "undefined") {
		$vidSprite = new PIXI.Sprite();
		$vidSprite.name = "vidsprite"
		$vidSprite.vidname = "undefined";
	} else {
		vid.pause();
		vid.remove();
		vid = null;
		$loadVideoOnBattle($vidSprite.vidname);
	}
	this._backvidSprite = $vidSprite;
	this._baseSprite.addChild(this._backvidSprite);
	
};
	
_Spriteset_Battle_updateBattleback = Spriteset_Battle.prototype.updateBattleback;
Spriteset_Battle.prototype.updateBattleback = function() {
    _Spriteset_Battle_updateBattleback.call(this);
	    for (var i = 0; i < this._baseSprite.children.length; i++)
	    {
	        if (this._baseSprite.children[i].name === "vidsprite" && this._backvidSprite != $vidSprite)
	        {
				this._backvidSprite = $vidSprite;
				this._baseSprite.removeChildAt(i);
				this._baseSprite.addChildAt(this._backvidSprite, i);
	        }
	    }
};
	
	
	
	
Game_CharacterBase.prototype.hasStepAnime = function() {
    return (this._stepAnime || (this._characterIndex == 4 && this._characterName == "BigFanta"));
};

Game_CharacterBase.prototype.isThrough = function() {
    return (this._through || (this._characterIndex == 4 && this._characterName == "BigFanta"));
};


_Game_Follower_update = Game_Follower.prototype.update
Game_Follower.prototype.update = function() {
    _Game_Follower_update.call(this);
    this.setStepAnime($gamePlayer._stepAnime);
};
	
	
	
_Game_Battler_addState = Game_Battler.prototype.addState
Game_Battler.prototype.addState = function(stateId) {
	
    if ((stateId === 1 || stateId === 54) && this._states.includes(161)) {
		this._hp = this.mhp;
		this.eraseState(54);
		this.eraseState(161);
		this.eraseState(1);
		this.refresh();
		this._result.pushRemovedState(1);
		AudioManager.playSe({name: 'Magic12', pan: 0, pitch: 100, volume: 100});
		return 0
	}
	
	if (stateId === 162) {
		
		this._hp = (this.mhp/2) << 0;
		this.eraseState(1);
		this.refresh();
		this._result.pushRemovedState(1);
		AudioManager.playSe({name: 'Magic12', pan: 0, pitch: 100, volume: 100});
		return 0
			
	}
	
	if (this.isStateAddable(stateId)) {
		if (stateId === 54) {
			stateId = 1;
			if (!this.isStateAffected(stateId)) {
				this.addNewState(stateId);
				this.refresh();
			}
			this.resetStateCounts(stateId);
			this._result.pushAddedState(stateId);
		} else {
			
			_Game_Battler_addState.call(this,stateId);
			
		}
	}

	
};
	
  
    PluginManager.registerCommand(pluginName, "StartKillCounter", args => {
		
		
		switch (eval(args.questID)) {
			
			case $gameVariables.value(22):
			
			var killvar = 25;
			break;
			
			case $gameVariables.value(23):
			
			var killvar = 26;
			break;
			
			case $gameVariables.value(24):

			var killvar = 27;
			break;
			
		};
		
		
        $gameParty.startKillCounter(eval(args.enemyId), eval(killvar), eval(args.maxRequired || 0));

    });
	
	
    PluginManager.registerCommand(pluginName, "EndKillCounter", args => {
		
        $gameParty.endKillCounter(eval(args[0]));

    });
	

  var _Game_Party_initialize = Game_Party.prototype.initialize;
  Game_Party.prototype.initialize = function() {
    _Game_Party_initialize.call(this);
    this._killCounter = [];
  };

  Game_Party.prototype.startKillCounter = function(enemyId, variableId, maxRequired) {
    if (!this._killCounter)
      this._killCounter = [];

    if (!maxRequired)
      maxRequired = 0;

    if (enemyId > 0)
      this._killCounter[enemyId] = [variableId, maxRequired];
  };

  Game_Party.prototype.endKillCounter = function(enemyId) {
    if (this._killCounter && enemyId > 0)
      this._killCounter[enemyId] = null;
  };

  Game_Party.prototype.incrementKillCounter = function(enemyId) {
    if (this._killCounter && enemyId > 0 && this._killCounter[enemyId]) {
      killVar = this._killCounter[enemyId][0];
      killLimit = this._killCounter[enemyId][1];
      if (killVar && (killLimit === 0 || killLimit > $gameVariables.value(killVar)))
        $gameVariables.setValue(killVar, $gameVariables.value(killVar) + 1);
    }
  }
	
	

  var _Game_Enemy_performCollapse = Game_Enemy.prototype.performCollapse;
  Game_Enemy.prototype.performCollapse = function() {
    _Game_Enemy_performCollapse.call(this);
    $cgmz.changeProfessionExp('Chasseur','+', 1);
    $gameParty.incrementKillCounter(this._enemyId);
  }

})();