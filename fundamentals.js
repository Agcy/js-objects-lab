const aCar = {
    owner : "Joe Bloggs",
    address : '3 Walkers Lane',
    previous_owners: [
        { name: "Pat Smith", address: "1 Main Street" },
        { name: "Sheila Dwyer", address: "2 High Street" }
    ],
    type : {
        make : 'Toyota',
        model : 'Corolla',
        cc : 1.8
    },
    features : ['Parking assist', 'Alarm', 'Tow-bar'],
    registration: { year: 20, stage: 1, county: "WD", number: 1058 },
    mileage : '10000',
    colour: {
        exterior: 'red',
        interior: {
            texture: 'leather',
            shade: 'cream'
        }
    }
  };
  console.log(aCar.owner);
  
  // owner information
  console.log(aCar.owner + ' drives a ' + aCar.type.make);
  
  // registration
  console.log(
    "Reg. = " +
      aCar.registration.year +
      "-" +
      aCar.registration.county +
      "-" +
      aCar.registration.number
  );
  
  // car information
  console.log('It is a '+aCar.colour.exterior+' car, '+aCar.mileage+' mileage, with '+aCar.colour.interior.texture+' interior')
  
  // previous owners information
  console.log(
    "First owner: " +
      aCar.previous_owners[0].name +
      ' - ' +
      aCar.previous_owners[0].address
  )

  // previous owners information loop format
  for (let i = 0 ; i < aCar.previous_owners.length ; i += 1) {
    console.log(aCar.previous_owners[i].name);
  }
  
  // loop display 1
  for (let i = 0 ; i < aCar.features.length ; i += 1) {
    console.log(aCar.features[i]) ;
  }

  // loop display 2
  for (let p in aCar.type)  {
    console.log(p.toUpperCase() + ' = ' + aCar.type[p] ) ;
  }