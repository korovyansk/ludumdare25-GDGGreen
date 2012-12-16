var AngerBar = cc.Sprite.extend({
    _progressMax:0,
    _progress:0,
    _bar:null,
    ctor:function () {
      this._super();

      this.initWithFile('game/res/transparent.png');
      this.setPosition(cc.p(60, 30));
      this.setAnchorPoint(cc.p(1, 0));
      this.setOpacity(190);

      this._bar = cc.Sprite.create('game/res/progress.png');
      this._bar.setAnchorPoint(cc.p(0, 0));
      this.addChild(this._bar);
    },
    addMaxProgress:function(value){
      this._progressMax += value;
    },
    progress:function(value){
      this._progress += value;
    },
    isWin:function(){
      console.log(this._progressMax);
      console.log(this._progress);
      return this._progressMax - this._progress < 0.1
    },
    update:function(dt) {
      var scale = parseFloat(this._progress) / parseFloat(this._progressMax);
      this._bar.setScaleX(scale);
    }
});