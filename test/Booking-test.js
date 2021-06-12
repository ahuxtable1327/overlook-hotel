import chai from 'chai';
const expect = chai.expect;
import Booking from './src/classes/Booking'
import testBookings from './test-data/test-bookings'


describe('Booking', () => {
  let booking;

  beforeEach() => {
    booking = new Booking(testBookings[0]);
  }

  it.skip('should be a function', () => {
    expect(Booking).to.be.a('function');
  });

  it.skip('should instantiate a new booking', () => {
    expect(booking).to.be.an.instanceof(Booking);
  });

  it.skip('should have an id', () => {
    expect(booking).to.have.a.property('id');
    expect(booking.id).to.equal('5fwrgu4i7k55hl6sz')
  });

  it.skip('should have a user id associated with it', () => {
    expect(booking).to.have.a.property('userID');
    expect(booking.userID).to.equal(1);
  });

  it.skip('should have a date', () => {
    expect(booking).to.have.a.property('date');
    expect(booking.date).to.equal('2020/04/22');
  });

  it.skip('should have a room number associated with it', () => {
    expect(booking).to.have.a.property('roomNumber');
    expect(booking.roomNumber).to.equal(1);
  });

  it.skip('should have room service charges', () => {
    expect(booking).to.have.a.property('roomServiceCharges');
    expect(booking.roomServiceCharges).to.deep.equal([]);
  });

})
