function Airport () {
  this._hangar = [];
  this.weather = new Weather();
  this.capacity = 3;
}

Airport.prototype.planes = function() {
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane) {
  if (this.weather.isStormy()) {
    throw new Error('Cannot land during storm');
  }
  if (this.isFull()) {
    throw new Error('Airport is full');
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

Airport.prototype.isFull = function(plane) {
  return this._hangar.length >= this.capacity;
};
