import chai from 'chai';
const expect = chai.expect;
import Hotel from './src/classes/Hotel'
import Room from './src/classes/Room'
import Booking from './src/classes/Booking'
import testBookings from './test-data/test-bookings'
import testRooms from './test-data/test-rooms'
import testUsers from './test-data/test-users'



describe('Hotel', () => {
  let hotel, room, booking;

  beforeEach() => {

    hotel = new Hotel(testRooms, testBookings);
  }

  it.skip('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it.skip('should instantiate an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceof('Hotel');
  });

  it.skip('should store all rooms data', () => {
    expect(hotel.rooms).to.deep.equal(testRooms);
  });

  it.skip('should store all booking data', () => {
    expect(hotel.bookings).to.deep.equal(testBookings);
  });

  it.skip('should have a way to store all available rooms', () => {
    expect(hotel.availableRooms).to.deep.equal([]);
  });




})
