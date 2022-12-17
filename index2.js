// Question NO 11

console.log("Question NO 11")

var friends_name = ['bilal' , 'ali' , 'junaid' , 'zia' ]

console.log("First Friend name is " + friends_name[0])
console.log("Second Friend name is " + friends_name[1])
console.log("Third Friend name is " + friends_name[2])
console.log("Fourth Friend name is " + friends_name[3])


// Question NO 12

console.log("Question NO 12")

var friends_name = ['bilal' , 'ali' , 'junaid' , 'zia' ]

console.log("Hi " + friends_name[0] + " How are you?")
console.log("Hi " + friends_name[1] + " How are you?")
console.log("Hi " + friends_name[2] + " How are you?")
console.log("Hi " + friends_name[3] + " How are you?")



// Question NO 13

console.log("Question NO 13")


let cars = ["Ferrari" , "Lamborgini" , "Buggati" , "GTR"];

console.log("I would like to have a " + cars[0])
console.log("My " + cars[1] + " Colour would be Red")
console.log("There are four " + cars[2] + "in my garage")
console.log("I will modify my " + cars[3])


// Question NO 14

console.log("Question NO 14")


var guests = ['Akram' , 'Ali' , 'Bilal' , 'Laraib'];

console.log("Hey " + guests[0] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");
console.log("Hey " + guests[1] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");
console.log("Hey " + guests[2] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");
console.log("Hey " + guests[3] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");


// Question NO 15

console.log("Question NO 15")


var guests = ['Akram' , 'Ali' , 'Bilal' , 'Laraib'];

console.log("Hey " + guests[0] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");
console.log("Hey " + guests[1] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");
console.log("Hey " + guests[2] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");
console.log("Hey " + guests[3] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");


console.log(guests[0] + " is not coming so we are inviting Qasim"  );

guests.splice(0,1,"Qasim")



console.log("Hey " + guests[0] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");
console.log("Hey " + guests[1] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");
console.log("Hey " + guests[2] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");
console.log("Hey " + guests[3] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");


// Question No 16

console.log("Question NO 16")

var guests = ['Akram' , 'Ali' , 'Bilal' , 'Laraib'];

console.log("Hey " + guests[0] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");
console.log("Hey " + guests[1] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");
console.log("Hey " + guests[2] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");
console.log("Hey " + guests[3] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");


console.log(guests[0] + " is not coming so we are inviting Qasim"  );

guests.splice(0,1,"Qasim")



console.log("Hey " + guests[0] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");
console.log("Hey " + guests[1] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");
console.log("Hey " + guests[2] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");
console.log("Hey " + guests[3] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");


console.log("Hey! Just found a bigger table table,  am thinkin to invite more Niggs!")  // informing about a new table


guests.unshift("Akbar"); // Adding guest in the beginning of an array

console.log(guests)

guests.splice(2,0,"Muneeb") // Adding guest in the middle of an array

console.log(guests)

guests.push("Misbah") // Adding guest in the ending of an array

console.log(guests)


console.log("Hey " + guests[0] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");
console.log("Hey " + guests[1] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");
console.log("Hey " + guests[2] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");
console.log("Hey " + guests[3] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");
console.log("Hey " + guests[4] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");
console.log("Hey " + guests[5] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");
console.log("Hey " + guests[6] + "! There is dinner on tuesday at my house, be there at 9pm Sharp");



// Question NO 17

console.log("Question NO 17")

//  Continue from Q # 16

console.log("Heyy mates! just informed that the table won't arrived on time. 'Now I can invite only 2 peoples!' ")

console.log("hey " + guests[6] + " Apology for the inconvenience at the last moment, please don't mind!")

guests.pop() //removes the last guest

console.log(guests)

console.log("hey " + guests[5] + " Apology for the inconvenience at the last moment, please don't mind!")

guests.pop() //removes the last guest

console.log(guests)

console.log("hey " + guests[4] + " Apology for the inconvenience at the last moment, please don't mind!")

guests.pop() //removes the last guest

console.log(guests)
console.log("hey " + guests[3] + " Apology for the inconvenience at the last moment, please don't mind!")

guests.pop() //removes the last guest

console.log(guests)
console.log("hey " + guests[2] + " Apology for the inconvenience at the last moment, please don't mind!")

guests.pop() //removes the last guest

console.log(guests)

console.log("Hey! " + guests[0] + " and " + guests[1] +  " Guys! You are still invited" )



// Question NO 18

console.log("Question NO 18")

places = ["Latvia" , "Finland" , "Canada" , "Las Vegas" , "Dubai"];

console.log("Original Array")
console.log(places) 

places.sort()   // Modifies the array in Alphabetical order

console.log("Alphabetical Order Array")
console.log(places)

places.reverse()

console.log("Reverse Alphabetical Order Array")
console.log(places)

places = ["Latvia" , "Finland" , "Canada" , "Las Vegas" , "Dubai"];

console.log(places) 

places.reverse() //printing the original array in reverse order

console.log(places)


// Question NO 19

console.log("Question NO 19")

console.log(guests)
var numberOfGuests = guests.length;
console.log("there are " + numberOfGuests + " guests invited for the dinner");

 
// Question NO 20

console.log("Question NO 20")

cities = ['Los Angeles' , 'Baku' , 'Interlaken' , 'New York'];

console.log(cities);
