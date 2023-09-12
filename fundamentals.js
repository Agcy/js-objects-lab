const aCar = {
    owner : "Joe Bloggs",
    type : 'Toyota Corolla 1.8',
    year : '20',
    stage: '1',
    county: 'WD',
    number: '1058',
    registration : '201WD1058'
  };
  var Reg = aCar.year + aCar.stage + '-' + aCar.county + '-' + aCar.number;
  console.log(aCar.owner);
  console.log(aCar.owner + ' drives a ' + aCar.type.make + '\n' + 'The registration is ' + Reg);
