
/*                                         ENUMS

           "Enums in Typescript are commonly used when you want to represent a set of related 
            values and choose one value from multiple options. Enums provide a convenient way
            to define a set of named values and associate them with specific meanings."


            "In typescript, when enums constants are not explicitly assigned numeric values,
            they are automatically assigned incremental numeric values starting from 0..
            The default numeric value for the first enum constant  is 0 and subsequent 
            enum constant is 0, and subsequent enum contants receive values incremented by 1."

 An Enum is a special "class" that represents a groups of constants (unchangeable variables)
 Enum comes in two flavors string and numeric       

  Enum is the set of value
  Enum return index or define index or return value*/

//--------------------------------------------------------------------------------------------------------------//

//                                        EXAMPLE 1

enum CoffeeType {
    Ristretto,
    Macchiato,
    Cappuccino,
    Affogato
    
}
let myCoffee : CoffeeType = CoffeeType.Cappuccino
console.log(myCoffee); // return index 2

let mycoffeeName = CoffeeType[2]
console.log(mycoffeeName); // return value Cappuccino

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

//    
//                             EXAMPLE 3
// Enum will initialize the first value 0 and add 1 to each additional value
enum Colors {
    Red= 100,
    Blue,
    Black,
    Pink,
    Purple,
    Orange,
    Green,
    White
}
let favoriteColor :Colors = Colors.Black
console.log(favoriteColor); // return index 102

let favoritecolorName = Colors[102]
console.log(favoritecolorName); // black

//---------------------------------------------------------------------------------------------------------//

