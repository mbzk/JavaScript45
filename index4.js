console.log("Question 31 to 40")
// Question NO # 31

console.log(" Question NO # 31")

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



// Question NO # 32

console.log("Question NO # 32")

var new_users = ['Jerry' , 'Eric' , 'Mark' , 'Chris' , 'Harry']
var current_users = ['Eric' , 'John' , 'Alex' , 'Admin' , 'Chris']


for (let i = 0; i < new_users.length; i++) {
    for(let j=0; j < current_users.length; j++){
        if(new_users[i] == current_users[j]){
            console.log("This username is not available!")
        }
        else{
            console.log("This username is available!")
        }
    }

}


// Question NO # 33

console.log(" Question NO # 33")

const ordinalNUmbers = [1,2,3,4,5,6,7,8,9]

for(let i = 0; i < ordinalNUmbers.length; i++){
    if (ordinalNUmbers[i] == 1 ){
        console.log(ordinalNUmbers[i] + "st")
    }
    if(ordinalNUmbers[i] == 2){
        console.log(ordinalNUmbers[i] + "nd")
    }
    if(ordinalNUmbers[i] == 3){
        console.log(ordinalNUmbers[i] + "rd")
    }
    if(ordinalNUmbers[i] > 3){
        console.log(ordinalNUmbers[i] + "th")
    }

}


// Question NO # 34

console.log(" Question NO # 34")

const pizza = ["Tikka" , "Peperonni" , "Fajita"]

for (let i = 0; i < pizza.length; i++){
    if(pizza[i] == "Tikka"){
        console.log("I like " + pizza[i] + " Pizza" )
    }
    if(pizza[i] == "Peperonni"){
        console.log("I like " + pizza[i] + " Pizza" )
    }
    if(pizza[i] == "Fajita"){
        console.log("I like " + pizza[i] + " Pizza" )
    }
}

console.log("My favourite pizza is " + pizza[2] + ". Its a desi flavour with a fine test. I suggest you to try it ")


// Question NO # 35

console.log(" Question NO # 35")

const animals = ["Cat" , "Dog" , "Goat"]

// for(let i =0; i<animals.length; i++){
//     console.log(animals[i] + " are pet")
// }   
// console.log(  "They all are Pet Animals")


for (let i = 0; i < animals.length; i++) {
    console.log(  animals[i]  + " is a pet animal")
    
}

console.log("They all are Tetrapoda which means they all have four legs")



// Question NO # 36

console.log(" Question NO # 36")

const shirt_make =  (message,  size) => {
    console.log(message + size)

}

shirt_make("My Shirt size is " , 8)
 

// Question NO # 37

console.log(" Question NO # 37")

shirt_make("I love JavaScript" , "large")
shirt_make("I love React" , "Medium")
shirt_make("I love TypeScript" , "Small")


// Question NO # 38

console.log(" Question NO # 38")

const describe_city = (city = "karachi" , country = "Pakistan") =>{
    console.log( city + " is in " + country) 

}

describe_city()
describe_city("Frankfurt" , "Germany")
describe_city("Los Angeles","USA")
describe_city("Baku" , "Azerbaijan ")


// Question NO # 39

console.log(" Question NO # 39")

const city_country = (city,country) => {
    console.log(`"${city} , ${country}"`)
}

city_country("Karachi" , "Pakistan")
city_country("London" , "UK")
city_country("Dubai" , "UAE")


// Question NO # 40

console.log(" Question NO # 40")


const make_album = (artistName,albumTitle,numberOfTracks) => {
    Album = {
        "Artist Name" : artistName,
        "Album Title": albumTitle,
        "Number Of Tracks": numberOfTracks
    }
    return Album

}

console.log(make_album("Atif Aslam" , "Jal"))
console.log(make_album("Purpose" , "Justin Beiber" , 15))
console.log(make_album("Divide" , "Ed Sheeran"))

