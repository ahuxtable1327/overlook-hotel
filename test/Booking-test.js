import chai from 'chai';
const expect = chai.expect;
import Booking from './src/classes/Booking'
import testBookings from './test-data/test-bookings'


describe('Booking', () => {
  let booking, booking1;

  beforeEach() => {
    booking = new Booking(testBookings[0]);
    booking1 = new Booking(testBookings[1]);
  }

  it.skip('should be a function', () => {
    expect(Booking).to.be.a('function');
  });

  it.skip('should instantiate a new booking', () => {
    expect(booking).to.be.an.instanceof(Booking);
  })

})
