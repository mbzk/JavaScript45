// Question NO 21

console.log("Question NO 21")

// Creating Objects

let countries = {
    cityName: ['Interlaken' , 'Manhattan' , 'Santa Monica' , 'Salt lake City'],
    countryName: ['Switzerland' , 'Finland' , 'Cuba' , 'Belgium']

}

console.log(countries)

// Question No # 22

console.log("Question No # 22")

indexError = [65, "alex", 'dog']
console.log("Intentional Error calling for del element at -4 which is out of range hehehehehe........");

console.log(indexError[-4]);
console.log(indexError[0]);

// Question No # 23

console.log("Question NO 23")

// 01
let car = 'GTR';
console.log(car == "GTR")    

// 02

let city = 'Toronto';
console.log( city == 'Toronto')
    
// 03

let mountain = 'Himalya';
console.log(mountain == 'Himalya')

// 04

let song = "I ain't worried about";
console.log(song === "I ain't worried about");
 
// 05

let movie = 'Interstellar';
console.log(movie == 'Interstellar')
    
// 06

let ageOfMember = '18';

console.log(ageOfMember == 17 );


// 07

let date = 23;

console.log(date == 24)

// 08

let sports = "Cricket"

console.log(sports == "Soccer")

// 09

let dish = "Biryani"

console.log(dish == "curry")

// 10

let brand = "loui Vitton"

console.log(brand == "prada")


// Question NO 24

console.log("Question NO 24")

// Test for  equality and inequality in strings

let firstName = "Muhammad Bilal Zafar"

console.log(firstName == "Muhammad Bilal Zafar")      //Equality

let lastName = "khan"

console.log(lastName == "Zafar")    //Inequality


// Tests using the lower case function

console.log(firstName == "Muhammad Bilal Zafar")    // LOWER CASE

console.log(firstName == "MUHAMMAD BILAL ZAFAR KHAN")    // UPPER CASE


// Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to

let members = 20

console.log(members == 20)    // EQUALITY 

console.log(members == 21)    // INEQUALITY

console.log(members > 20 )    // GREATER THAN

console.log(members < 20 )    // LESS THAN

console.log(members >= 20 )    // GREATER THAN OR EQUAL TO

console.log(members <= 20 )    // LESS THAN OR EQUAL TO


// Tests using "and" and "or" operators

console.log(members > 19 && members < 21)  // AND OPERATOR

console.log(members > 19 || members < 21)  // AND OPERATOR

// Test whether an item is in a array

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango"));

//  Test whether an item is not in a array

console.log(fruits.includes("apricot"));


// Question No # 25

console.log("Question No 25")

// Pass Version
var alien_colour = 'green';

if(alien_colour == 'green'){
    console.log("Player just earned 5 points!!")
}

// Fail Version

if(alien_colour == 'red' ){   // No output
    console.log("Player just earned 5 points!!")
}



// Question No # 26

console.log("Question No 26")

// IF Version
var alien_colour = "green";

if(alien_colour == 'green'){
    console.log("Player Just earned 5 points!!")
}

else{
    console.log("player Just earned 10 points!!")
}


// Else Version

var alien_colour = "red";

if(alien_colour == 'green'){
    console.log("Player Just earned 5 points!!")
}

else{
    console.log("player Just earned 10 points!!")
}


// Queston NO # 27

console.log("Question NO 27")

// green 
var alien_colour = "green";

if(alien_colour == 'green'){
    console.log("Player Just earned 5 points!!")
}

else if(alien_colour == 'Yellow'){
    console.log("player Just earned 10 points!!")
}

else if (alien_colour == 'red'){
    console.log("player Just earned 15 points!!")
}

else{
    console.log("pick Color")
}

// yellow 
var alien_colour = "yellow";

if(alien_colour == 'green'){
    console.log("Player Just earned 5 points!!")
}

else if(alien_colour == 'yellow'){
    console.log("player Just earned 10 points!!")
}

else if (alien_colour == 'red'){
    console.log("player Just earned 15 points!!")
}

else{
    console.log("pick Color")
}

// red 
var alien_colour = "red";

if(alien_colour == 'green'){
    console.log("Player Just earned 5 points!!")
}

else if(alien_colour == 'Yellow'){
    console.log("player Just earned 10 points!!")
}

else if (alien_colour == 'red'){
    console.log("player Just earned 15 points!!")
}

else{
    console.log("pick Color")
}


// Question No # 028

console.log("Question No # 028")

var personAge = 22;

if(personAge < 2){
    console.log("The person is a baby")
}

else if (personAge > 2 && personAge < 4){
    console.log(" the person is a toddler.")
}

else if (personAge >= 4 && personAge < 13){
    console.log(" the person is a Kid.")
}

else if (personAge >= 13 && personAge < 20){
    console.log(" the person is a Teenager.")
}

else if (personAge >= 20 && personAge < 65){
    console.log(" the person is a Adult.")

}

else if (personAge >=65 ){
    console.log(" the person is a elder.")
}

else {
    console.log("Enter Your age")
}

// Question NO # 29

console.log("Question No # 29")


var favourite_fruits = ['Apple' , 'Mango' , 'Banana']
if(favourite_fruits.includes("Mango")){
    console.log("your array has Mango")
}

if(favourite_fruits.includes("Apple")){
    console.log("your array has Apple")
}
if(favourite_fruits.includes("Banana")){
    console.log("your array has Banana")
}

if(favourite_fruits.includes("Grapes")){
    console.log("your array has Grapes")
}

if(favourite_fruits.includes("Oranges")){
    console.log("your array has Oranges")
}


// Question NO # 30

console.log("Question NO # 30")

var staff = ['Eric' , 'John' , 'Alex' , 'Admin' , 'Chris']

for (let i = 0; i < staff.length; i++) {
    if(staff[i] == "Admin"){
        console.log("Hello admin, would you like to see a status report?")
    }
    else{
        console.log('Hello '+ staff[i] + ', thank you for logging in again.')
    }
}

