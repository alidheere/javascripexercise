let car = {
    modal : "civic",
    year : 2022,
    make: 'honda',

    star : function(){
        console.log('the car has started:' + this.make)
    }
}

console.log(car.modal)
console.log([car.year])
console.log(car.make)
console.log(car.year)

console.log(car.star())