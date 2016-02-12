
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
    spyOn(Math, 'random').and.returnValue(0);
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for takeoff', function(){
    spyOn(Math, 'random').and.returnValue(0);
    airport.clearForLanding(plane);
    airport.clearForTakeoff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for takeoff', function(){
    spyOn(Math, 'random').and.returnValue(0);
    airport.clearForLanding(plane);
    airport.clearForTakeoff(plane);
    airport.clearForLanding(plane2);
    expect(airport.planes()).toEqual([plane2]);
  });


  it('throws an error if plane tries to takeoff while stormy', function() {
    spyOn(Math, 'random').and.returnValue(0);
    spyOn(airport.weather, 'isStormy').and.returnValue(true);
    expect(function () {airport.clearForTakeoff(plane);}).toThrowError('Cannot take off during storm');
  });

  it('throws an error if plane tries to land while stormy', function() {
    spyOn(Math, 'random').and.returnValue(1);
    expect(function () {airport.clearForLanding(plane);}).toThrowError('Cannot land during storm');
  });

  it('prevents planes from landing when airport is full', function(){
    spyOn(Math, 'random').and.returnValue(0);
    spyOn(airport, 'isFull').and.returnValue(true);
    expect(function () {airport.clearForLanding(plane);}).toThrowError('Airport is full');
  });

});
