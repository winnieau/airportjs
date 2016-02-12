// spec/FeatureSpec.js

describe('Feature Test:', function(){
  var plane;
  var airport;
  var plane2;

  beforeEach(function(){
    plane = new Plane("Josh");
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can be instructed to takeoff from an airport', function(){
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });

  it('specific landed plane can be instructed to takeoff from airport', function(){
    plane.land(airport);
    plane2 = new Plane("Winnie");
    plane2.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });

  it('prevents planes from taking off when stormy', function() {
    plane.land(airport);
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function () {plane.takeoff();}).toThrowError('Cannot take off during storm');
    expect(airport.planes()).toContain(plane);
  });

  it('prevents planes from landing when stormy', function() {
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function () {plane.land(airport);}).toThrowError('Cannot land during storm');
    expect(airport.planes()).not.toContain(plane);
  });

});
