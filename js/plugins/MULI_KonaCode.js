//=============================================================================
// MULI_KonaCode.js
//=============================================================================

/*:
 * @target MV
 * @plugindesc v1.0 Input cheat in title scene.
 * @author moonyoulove
 *
 * @help 
 * Use JavaScript KeyboardEvent.code in parameters. See https://keycode.info/. 
 * 
 * Use "KonaCode.active" in the script, and the value will be true 
 * after the cheat is successfully active.
 * You can use conditional branch on the initial map to apply cheat effect.
 * 
 * @param codeArray
 * @text Code Array
 * @desc The keys are connected by "+", means code sequnce.
 * @default ArrowUp+ArrowUp+ArrowDown+ArrowDown+ArrowLeft+ArrowLeft+ArrowRight+ArrowRight+KeyB+KeyA
 * @type string
 * 
 * @param commonEventId
 * @text Common Event Id
 * @desc Trigger when the code input is completed.
 * @default 0
 * @type number
 * @min 0
 * 
 * @param se
 * @text Sound Effect
 * @desc 
 * @default 
 * @type file
 * @dir audio/se/
 * @require 1
 */

/*:zh
 * @target MV
 * @plugindesc v1.0 在標題畫面輸入密技
 * @author moonyoulove
 *
 * @help 
 * 參數裡填上JavaScript的KeyboardEvent.code。可以參考網址https://keycode.info/。
 * 
 * 用腳本取得KonaCode.active，密技輸入成功後該值為true。
 * 可以在初始地圖用條件分支事件來發揮密技效果。
 * 
 * @param codeArray
 * @text 密技表
 * @desc 用"+"來按照順序連接按鍵名稱
 * @default ArrowUp+ArrowUp+ArrowDown+ArrowDown+ArrowLeft+ArrowLeft+ArrowRight+ArrowRight+KeyB+KeyA
 * @type string
 * 
 * @param commonEventId
 * @text 公用事件ID
 * @desc 密技輸入成功時會觸發
 * @default 0
 * @type number
 * @min 0
 * 
 * @param se
 * @text 音效
 * @desc 
 * @default 
 * @type file
 * @dir audio/se/
 * @require 1
 */

class KonaCode {}
KonaCode.parameters = PluginManager.parameters("MULI_KonaCode");
KonaCode.codeArray = KonaCode.parameters.codeArray.split("+").map(s => s.trim().replace("plus", "+"));
KonaCode.commonEventId = Number(KonaCode.parameters.commonEventId);
KonaCode.se = KonaCode.parameters.se;
KonaCode.active = false;

(() => {
    const _Scene_Title_initialize = Scene_Title.prototype.initialize;
    Scene_Title.prototype.initialize = function () {
        _Scene_Title_initialize.call(this);
        this._KonaCodeIndex = 0;
        this._KonaCodeHandler = null;
    };

    const _Scene_Title_start = Scene_Title.prototype.start;
    Scene_Title.prototype.start = function () {
        _Scene_Title_start.call(this);
        this._KonaCodeHandler = this._onKonaCodeTriggered.bind(this);
        document.addEventListener("keyup", this._KonaCodeHandler);
    }
	
Window_Selectable.prototype.drawBackgroundRect = function(rect) {
};

    Scene_Title.prototype._onKonaCodeTriggered = function (event) {
        if (KonaCode.codeArray.length > 0 && this._KonaCodeIndex < KonaCode.codeArray.length) {
            const key = KonaCode.codeArray[this._KonaCodeIndex];
            if (event.key === key) {
                this._KonaCodeIndex++;
                if (this._KonaCodeIndex >= KonaCode.codeArray.length) {
                    KonaCode.active = true;
                    AudioManager.playSe({
                        name: KonaCode.se,
                        volume: 90,
                        pitch: 100,
                        pan: 0
                    });
                }
            } else {
                this._KonaCodeIndex = 0;
            }
        }
    };

    const _Scene_Title_terminate = Scene_Title.prototype.terminate;
    Scene_Title.prototype.terminate = function () {
        _Scene_Title_terminate.call(this);
        document.removeEventListener("keyup", this._KonaCodeHandler);
    }
})();