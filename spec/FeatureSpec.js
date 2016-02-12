// spec/FeatureSpec.js

describe('Feature Test:', function(){
  var plane;
  var airport;
  var plane2;

  beforeEach(function(){
    plane = new Plane("Josh");
    airport = new Airport(3);
  });

  it('planes can be instructed to land at an airport', function(){
    spyOn(Math, 'random').and.returnValue(0);
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can be instructed to takeoff from an airport', function(){
    spyOn(Math, 'random').and.returnValue(0);
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });

  it('specific landed plane can be instructed to takeoff from airport', function(){
    spyOn(Math, 'random').and.returnValue(0);
    plane.land(airport);
    plane2 = new Plane("Winnie");
    plane2.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });

  it('prevents planes from taking off when stormy', function() {
    spyOn(Math, 'random').and.returnValue(0);
    plane.land(airport);
    spyOn(airport.weather, 'isStormy').and.returnValue(true);
    expect(function () {plane.takeoff();}).toThrowError('Cannot take off during storm');
    expect(airport.planes()).toContain(plane);
  });

  it('prevents planes from landing when stormy', function() {
    spyOn(airport.weather, 'isStormy').and.returnValue(true);
    expect(function () {plane.land(airport);}).toThrowError('Cannot land during storm');
    expect(airport.planes()).not.toContain(plane);
  });

  it('prevents planes from landing when airport is full', function(){
    spyOn(Math, 'random').and.returnValue(0);
    spyOn(airport, 'isFull').and.returnValue(true);
    expect(function () {plane.land(airport);}).toThrowError('Airport is full');
    expect(airport.planes()).not.toContain(plane);
  });

  it('has a default capacity that can be overwritten', function(){
    spyOn(Math, 'random').and.returnValue(0);
    plane.land(airport);
    plane.land(airport);
    plane.land(airport);
    expect(airport.isFull()).toBe(true);
    airport.capacity = 4;
    expect(airport.isFull()).toBe(false);

  });

});
