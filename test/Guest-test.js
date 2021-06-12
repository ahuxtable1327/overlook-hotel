import chai from 'chai';
const expect = chai.expect;
import Guest from '../src/classes/Guest'
import testUsers from './test-data/test-users'


describe.only('Guest', () => {
  let guest;

  beforeEach(() => {
    guest = new Guest(testUsers[0])
  });

  it('should be a function', () => {
    expect(Guest).to.be.a('function');
  });

  it('should be an instance of Guest', () => {
    expect(guest).to.be.an.instanceof(Guest);
  });

  it('should have an id', () => {
    expect(guest).to.have.a.property('id');
    expect(guest.id).to.equal(1);
  });

  it('should have a name', () => {
    expect(guest).to.have.a.property('name');
    expect(guest.name).to.equal('Leatha Ullrich');
  });

  it('should have a way to store all of a guests bookings', () => {
    expect(guest).to.have.a.property('bookings');
    expect(guest.bookings).to.deep.equal([]);
  })

})
