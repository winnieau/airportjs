
describe('Airport', function(){

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
    plane2 = jasmine.createSpy('plane2');
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for takeoff', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeoff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for takeoff', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeoff(plane);
    airport.clearForLanding(plane2);
    expect(airport.planes()).toEqual([plane2]);
  });

  it('knows whether it is stormy', function() {
    expect(airport.isStormy()).toBe(false);
  });

  it('throws an error if plane tries to takeoff while stormy', function() {
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function () {airport.clearForTakeoff(plane);}).toThrowError('Cannot take off during storm');
  });

});
