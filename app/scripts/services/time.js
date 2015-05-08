engine.service('time', [function () {
  'use strict';

  var self = this;
  self.pause = false;

  self.previousFrame = null;
  self.currentFrame = null;
  self.elapsed = 0;
  self.deltaTime = undefined;

  self.tick = function (timestamp) {
    console.log("time elapsed", self.elapsed);
    console.log("delta time", self.deltaTime);
    self.previousFrame = self.currentFrame;
    self.currentFrame = timestamp;

    if (!self.previousFrame || !self.currentFrame || self.pause) {
      self.deltaTime = 0;
    } else {
      self.deltaTime = self.currentFrame - self.previousFrame;
      self.elapsed += self.deltaTime;
    }
  };
  
  self.reset = function () {
    console.log('time reset!');
    self.previousFrame = null;
    self.currentFrame = null;
    self.elapsed = null;
    self.deltaTime = null;
    self.pause = false;
  };
}]);