var Cat = cc.Sprite.extend({
    _radians:0,
    _speed:0,
    ctor:function () {
        this._super();
        this._speed = 300;
        this.initWithFile('game/res/cat.png');
    },
    update:function (dt) {
      this.setRotation(this._radians);
    },
    handleTouch:function(touchLocation)
    {
      this.stopAllActions();
      var distance = Math.sqrt( Math.pow(this.getPositionX() - touchLocation.x, 2) + Math.pow(this.getPositionY() - touchLocation.y, 2) );
      this.runAction( cc.MoveTo.create(distance / this._speed, touchLocation) );
    }
});