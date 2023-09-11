const {flattenFunctional, flattenImperative} = require('./exercise08.js');

test('Flatten function (with imperative style approach) will flat the object oldObj (input = oldObj), with name= oldObj. (with undefined object)', () => { 
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

test('Flatten function (with functional style approach) will flat the object oldObj (input = oldObj), with name= oldObj. (with undefined object).', () => { 
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

test('Flatten function (with imperative style approach) will flat the object oldObj (input = oldObj), with name= oldObj. (with null object)', () => {
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
      other: null
    }
  };
  const name= 'oldObj';
  expect(flattenImperative(oldObj, name)).toMatchObject(
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

test('Flatten function (with functional style approach) will flat the object oldObj (input = oldObj), with name= oldObj. (with null object)', () => {
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
      other: null
    }
  };
  const name= 'oldObj';
  expect(flattenFunctional(oldObj, name)).toMatchObject(
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

