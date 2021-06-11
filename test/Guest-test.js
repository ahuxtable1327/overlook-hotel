import chai from 'chai';
const expect = chai.expect;
import Guest from './src/classes/Guest'


describe('Guest', () => {

  beforeEach() => {

  }

  it.skip('should be a function', () => {
    expect(Guest).to.be.a('function');
  });

  it.skip('should be an instance of Guest', () => {
    expect(guest).to.be.an.instanceof(Guest);
  });

  it.skip('should have an id', () => {
    expect(guest.id).to.equal(1);
  });

  it.skip('should have a name', () => {
    expect(guest.name).to.equal('Leatha Ullrich');
  });

  it.skip('should have a way to get all of a travelers bookings', () => {

  })

  it.skip('should have way to get the total amount spent at the hotel', () => {

  })

})
