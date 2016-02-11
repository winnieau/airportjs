function Plane(name){
  this.name = name;
}

Plane.prototype.land = function (airport) {
  airport.clearForLanding(this);
  this._location = airport;
};
 Plane.prototype.takeoff = function() {
   this._location.clearForTakeoff(this);
 };
