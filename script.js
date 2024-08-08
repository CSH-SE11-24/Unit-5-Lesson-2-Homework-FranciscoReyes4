// Task 1: Create variable called 'storeName' and set it to "CSH Store". Console log "Welcome to [storeName]"
let storeName = "CSH Store"

console.log("Welcome to" + storeName)

// Task 2: Create a user object with properties 'username' (any), 'password' (any), and 'status' (online or offline). 

let user = {
username: "Francisco2",
Password: "CSH123",
Status: "online",

  
}


// Task 3: Console log "[username] is [status]".
console.log(user.username  +  " is " +   user.Status)

// Task 4: Prompt the user to enter their password and save it in a variable called passwordGuess

let user1 = prompt("Guess the password")

let passwordGuess = "CSH123"

if (user1 == passwordGuess){
  console.log("Welcome" + user.username + "Your are now online")
}else{
  console.log("Wrong password Status:offline")
}
// Task 5: If passwordGuess is equal to the password, console log "Welcome [username]" and change status to "online". Else, console log "Wrong password" and change status to "offline"

let hoodieInventory = {
name: "Sp5der Hoodie",
quantity:2,
price: "$120",

  
}

console.log(hoodieInventory.name + " cost "  + hoodieInventory.price)

// Task 6: Create an object called hoodieInventory with the properties 'name' ("hoodie"), 'quantity' (any number), and 'price' (any number). 


hoodieInventory.quantity = 1;

// Task 7: Console log "[name] costs [price]"


// Task 8: You just sold a hoodie! Change the quantity to be smaller. Console log "[quantity] [name] left in inventory." Confirm that the number changed!
console.log(hoodieInventory.quantity + hoodieInventory.name + "left in inventory")


// Extra credit: Change task 5 such that if the user guesses the password wrong, it keeps prompting them until they guess correctly!

