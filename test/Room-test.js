import chai from 'chai';
const expect = chai.expect;
import testRooms from './test-data/test-rooms';

import Room from '../src/classes/Room';


describe.only('Room', () => {
  let room, room2;

  beforeEach(() => {
    room = new Room(testRooms[0]);
    room2 = new Room(testRooms[1]);
  });

  it('should be a function', () => {
    expect(Room).to.be.a('function');
  })

  it('should be an instance of Room', () => {
    expect(room).to.be.an.instanceof(Room);
  })

  it('should have a room number', () => {
    expect(room).to.have.a.property('number');
    expect(room.number).to.equal(1);
  });

  it('should have a room type', () => {
    expect(room).to.have.a.property('roomType');
    expect(room.roomType).to.equal('residential suite');
  });

  it.skip('should state whether it has a bidet or not', () => {
    expect(room).to.have.a.property('bidet');
    expect(room.bidet).to.equal(true);
    expect(room2.bidet).to.equal(false);
  });

  it.skip('should have a bed size', () => {
    expect(room).to.have.a.property('bedSize');
    expect(room.bedSize).to.equal('queen');
  })

  it.skip('should tell the number of beds', () => {
    expect(room).to.have.a.property('numBeds');
    expect(room.numBeds).to.equal(1);
  });

  it.skip('should have a cost per night', () => {
    expect(room).to.have.a.property('costPerNight');
    expect(room.costPerNight).to.equal(358.4);
  });
})
