
/*                                         ENUMS
  Enum is the set of value
  Enum return index or define index or return value*/

//                                        EXAMPLE 1

enum CoffeeType {
    Ristretto,
    Macchiato,
    Cappuccino,
    Affogato
    
}
let myCoffee : CoffeeType = CoffeeType.Cappuccino
console.log(myCoffee); // return index 2

let coffeeName = CoffeeType[2]
console.log(coffeeName); // return value Cappuccino

//--------------------------------------------------------------------------------------------------------//

//                                        EXAMPLE 2

enum Food {
    Biryani,
    Pasta,
    Pizza,
    Burger
}
let myDinner :Food= Food.Biryani
console.log(myDinner); // return index 0

let foodName = Food[0]
console.log(foodName); // return value Biryani

//---------------------------------------------------------------------------------------------------------//

//                                 EXAMPLE 3
enum Names {
    Hania,
    Hoorain,
    Nimra,
    Laiba,
    Sara,
    Aleeze,
    Arzo,
    Hira,
    
}

let myName: Names = Names.Aleeze
console.log(myName); // return index 5

let Student = Names[5]
console.log(Student); // return value Aleeze

//-------------------------------------------------------------------------------------------------------------//


