﻿Sprite = ClassFactory.createClass(Layer, {
    init: function () {

        // Layer构造函数
        Layer.init.call(this);

        // 帧属性
        this.frameIndex = -1;
        this.frameSequence = [];

        // 重复计数器，默认值播放1次
        this.repeatCounter = new Counter(0, true, true);

        // 帧计数器，默认每2帧进入下一帧
        this.frameCounter = new Counter(2, true, true);


        // 计算帧的纵横个数
    },
    setRepeat: function (repeat) {
        if (repeat <= 0) {
            this.repeatCounter = null;
        }
        else {
            this.repeatCounter = new Counter(repeat - 1, true, true);
        }
    },
    setFrameOffset: function (x, y) {
        this.frameOffsetX = x;
        this.frameOffsetY = y;
        this.updateFrame();
    },
    setFrameCounter: function (count) {
        this.frameCounter.setCount(count);
    },
    setFrameSequence: function (sequence) {
        if (!sequence || sequence.constructor != Array) {
            throw Error("sequence must be an array");
        }
        this.frameSequence = sequence;
    },
    restoreFrameSequence: function () {
        this.frameSequence = [];
        var frameLength = this.frameCols * this.frameRows;
        for (var i = 0; i < frameLength; i++) {
            this.frameSequence[i] = i;
        }
    },
    moveToNextFrame: function () {
        
        if (this.frameCounter.countdown()) {
            return true;
        }

        if (this.frameIndex < 0) {
            return false;
        }

        if (this.frameIndex == this.frameSequence.length) {
            if (!this.repeatCounter) {
                this.frameIndex = 0;
            }
            else {
                if (!this.repeatCounter.countdown()) {
                    this.reset();
                    return false;
                }
                this.frameIndex = 0;
            }
        }

        if (!this.visible) {
            this.setVisible(true);
        }

        this.updateFrame();
        this.frameIndex++;
        return true;
    },
    moveToFrame: function (frameIndex) {
        this.frameIndex = frameIndex;
        this.updateFrame();
    },
    updateFrame: function () {
        var currentFrame = this.frameSequence[this.frameIndex];
        if (!currentFrame || currentFrame.x === undefined || currentFrame.y === undefined) {
            return;
        }

        var left = -currentFrame.x;
        var top = -currentFrame.y;

        this.style.backgroundPosition = (isNaN(left) ? 0 : left + "px") + " " + (isNaN(top) ? 0 : top + "px");
    },
    reset: function () {
        this.frameIndex = -1;
        this.setVisible(false);
    },
    start: function () {
        if (this.frameIndex < 0) {
            this.frameIndex = 0;
        }
        this.moveToFrame(0);
    },
});