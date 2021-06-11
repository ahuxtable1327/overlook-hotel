import chai from 'chai';
const expect = chai.expect;
import testRooms from './test/test-rooms'

import Room from './src/classes/Room';


describe('Room', () => {

  beforeEach() => {

  }

  it.skip('should be a function', () => {
    expect(Room).to.be.a('function');
  })

  it.skip('should be an instance of Room', () => {
    expect(room).to.be.an.instanceof(Room);
  })

  it.skip('should have a room number', () => {
    expect(room.roomNumber).to.equal(1);
  });

  it.skip('should have a room type', () => {
    expect(room.roomType).to.equal('residential suite');
  });

  it.skip('should state whether it has a bidet or not', () => {
    expect(room.hasBidet).to.equal(true);
    expect(room2.hasBidet).to.equal(false);
  });

  it.skip('should have a bed size', () => {
    expect(room.bedSize).to.equal('queen');
  })

  it.skip('should tell the number of beds', () => {
    expect(room.numBeds).to.equal(1);
  });

  it.skip('should have a cost per night', () => {
    expect(room.costPerNight).to.equal(358.4);
  });

})
