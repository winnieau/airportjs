function Airport () {
  this._hangar = [];
  this.weather = new Weather();
}

Airport.prototype.planes = function() {
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane) {
  if (this.weather.isStormy()) {
    throw new Error('Cannot land during storm');
  }
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeoff = function(plane) {
 if (this.weather.isStormy()) {
   throw new Error('Cannot take off during storm');
 }
 var index = this._hangar.indexOf(plane);
  if (index > -1) {
    this._hangar.splice(index, 1);
  }
};
