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
/*
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
*/
//--------------------------------------------------------------------------------------------------------//
//                                        EXAMPLE 2
/*
enum Food {
    Biryani,
    Pasta,
    Pizza,
    Burger
}
let myDinner :Food= Food.Biryani
console.log(myDinner); // return index 0

let foodName = Food[0]
console.log(foodName); // return value Biryani*/
//---------------------------------------------------------------------------------------------------------//
//    
//                             EXAMPLE 3
// Enum will initialize the first value 0 and add 1 to each additional value
/*enum Colors {
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
*/
//---------------------------------------------------------------------------------------------------------//
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var person1 = {
    name: "Aleeze",
    email: "alizey649@gmail.com",
    password: 1710,
    role: Roles.admin // Using enum value Roles.admin
};
var person2 = {
    name: "Hoorain",
    email: "hoorain123@gmail.com",
    password: 167,
    role: Roles.user // Using enum value Roles.user
};
console.log("Person 1: \nName: ".concat(person1.name, "\nEmail: ").concat(person1.email, "\nPassword: ").concat(person1.password, "\nRole: ").concat(Roles[person1.role])); // Displaying enum value explicitly
console.log("Person 2: \nName: ".concat(person2.name, "\nEmail: ").concat(person2.email, "\nPassword: ").concat(person2.password, "\nRole: ").concat(Roles[person2.role])); // Displaying enum value explicitly
