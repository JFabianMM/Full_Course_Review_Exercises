const flattenFunctional = require('./exercise08.js')

// This is the object to be flatten
const oldObj = {
  name: 'Sara',
  gender: 'Apache Attack Helicopter',
  address: {
      location: {
          city: 'SF',
          state: 'CA'
      },
      preferredLocation: {
          city: 'SF',
          state: ['CA', 'MN']
      },
      other: undefined
  }
};

const name= 'oldObj';

test( 'flattenFunctional input = oldObj, name= oldObj to match with object', () => {
  expect(flattenFunctional(oldObj, name)).toMatchObject(
    {
      oldObj_name: 'Sara',
      oldObj_gender: 'Apache Attack Helicopter',
      oldObj_address_location_city: 'SF',
      oldObj_address_location_state: 'CA',
      oldObj_address_preferredLocation_city: 'SF',
      oldObj_address_preferredLocation_state: [ 'CA', 'MN' ],
      oldObj_address_other: undefined
    });
});

