//Object
const car = {
    brand: "Toyota",
    color: "Red",
    year: 2020,

    start: function() {
        console.log("the " + this.color + " " + this.brand + " Is starting.")
    }
}

console.log(car.brand)

car.start()


const ema = {
    name: "Emanuel",
    age: 21,
    favoriteFodd: "Piza",
    
}

const mouse = {
    color: "black",
    year: 2022,
    user: "Ema",
}