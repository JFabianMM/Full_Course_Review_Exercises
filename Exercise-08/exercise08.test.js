const flattenFunctional = require('./exercise08.js');
const flattenImperative = require('./exercise08.js')

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
test( 'flattenFunctional input = oldObj, name= oldObj to match with object (with undefined object)', () => {
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

test( 'flattenImperative input = oldObj, name= oldObj to match with object (with undefined object)', () => {
  expect(flattenImperative(oldObj, name)).toMatchObject(
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


// This is the object to be flatten
const oldObj2 = {
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
      other: null
  }
};

const name2= 'oldObj';

test( 'flattenFunctional input = oldObj, name= oldObj to match with object (with null object)', () => {
  expect(flattenFunctional(oldObj2, name2)).toMatchObject(
    {
      oldObj_name: 'Sara',
      oldObj_gender: 'Apache Attack Helicopter',
      oldObj_address_location_city: 'SF',
      oldObj_address_location_state: 'CA',
      oldObj_address_preferredLocation_city: 'SF',
      oldObj_address_preferredLocation_state: [ 'CA', 'MN' ],
      oldObj_address_other: null
    });
});

test( 'flattenImperative input = oldObj, name= oldObj to match with object (with null object)', () => {
  expect(flattenImperative(oldObj2, name2)).toMatchObject(
    {
      oldObj_name: 'Sara',
      oldObj_gender: 'Apache Attack Helicopter',
      oldObj_address_location_city: 'SF',
      oldObj_address_location_state: 'CA',
      oldObj_address_preferredLocation_city: 'SF',
      oldObj_address_preferredLocation_state: [ 'CA', 'MN' ],
      oldObj_address_other: null
    });
});