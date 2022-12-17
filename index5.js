console.log("Question 41 to 45")


// Question NO # 41 42 43

console.log("Question NO # 44 42 43")

magician_names = ['Paul', 'Alex', 'Tom']
console.log("Magicians Name.\n");

function show_magicians(n) {
    for (magician of n) {
        console.log(magician)
    }
}

show_magicians(magician_names)
console.log("\nModified List\n");
magician += " the Great"
magician = magician + " the Great Magician"

function make_great(list_magicians) {
    for (let i in list_magicians) {
        list_magicians[i] += " the Great Magician"
    }
}
make_great(magician_names)
show_magicians(magician_names)





// Question NO # 44 

console.log("Question NO # 44")

function sandwich(choices = []) {
    console.log("\nThe following will be included with the sandwich: ")
    for (let choice of choices) {
        console.log(choice)
    }
}
sandwich(['lettuce', 'onion', 'tomato', 'honey mustard'])
sandwich(['burger', 'ketchup', 'lettuce'])
sandwich(['subway', 'lettuce', 'onion', 'tomato'])





// Question NO # 45 


console.log("Question NO # 45")


function makeCar(manufacturer, model_name, color = "red", two_package = false) {
    car = { "Manufacturer": manufacturer, "Model": model_name, "Color": color, "Two Package": two_package }
    return car
}

car = makeCar("SUV", "outback", "red", true)
console.log(car)


car = makeCar("SUV", "outback", "Red")
console.log(car)


car = makeCar("SUV", "outback")
console.log(car)