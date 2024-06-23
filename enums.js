/*                                         ENUMS
  Enum is the set of value
  Enum return index or define index or return value*/
// Example 1
/*
enum CoffeeType {
    Ristretto,
    Macchiato,
    Cappuccino,
    Affogato
    
}
let myCoffee : CoffeeType = CoffeeType.Cappuccino
console.log(myCoffee); // return index 2

let coffeeName = CoffeeType[2]
console.log(coffeeName); // return value Cappuccino*/
//--------------------------------------------------------------------------------------------------------//
// Example 2 
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
console.log(foodName); // return value Biryani

//---------------------------------------------------------------------------------------------------------//

*/
var Names;
(function (Names) {
    Names[Names["Hania"] = 0] = "Hania";
    Names[Names["Hoorain"] = 1] = "Hoorain";
    Names[Names["Nimra"] = 2] = "Nimra";
    Names[Names["Laiba"] = 3] = "Laiba";
    Names[Names["Sara"] = 4] = "Sara";
    Names[Names["Aleeze"] = 5] = "Aleeze";
    Names[Names["Arzo"] = 6] = "Arzo";
    Names[Names["Hira"] = 7] = "Hira";
})(Names || (Names = {}));
var myName = Names.Aleeze;
console.log(myName); // return index 5
var Student = Names[5];
console.log(Student); // return value Aleeze
