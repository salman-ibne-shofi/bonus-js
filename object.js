const nayok = {
    name: 'shakib khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'Shihab', 'Amir'],
    movies: [{name: 'no. 1', year: 2015,}, {name: 'king khan', year: 2018}],
    act: function(){
        console.log('acting like shakib khan')
    },
    car: {
        brand: 'tesla',
        price: 50000000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
}

// console.log(student.car);
console.log(nayok.act);
nayok.act();