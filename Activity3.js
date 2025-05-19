// Display the List of Choices
console.log("Choose an item:");
console.log("A. Pepsi Cola             Php 45.00");
console.log("B. Coca Cola              Php 45.00");
console.log("C. Apple (per kg)         Php 150.00");
console.log("D. Orange (per kg)        Php 140.00");
console.log("E. Hotdogs (per kg)       Php 200.00");

// Ask the user for their item choice
let itemChoice = prompt("Enter your item choice (A, B, C, D or E):");

let quantity = parseInt(prompt("Enter the quantity to be ordered"));

let totalPrice; // Initialize total Price

switch(itemChoice){
    case "A":
        totalPrice = quantity * 45;
        alert(`You ordered ${quantity} Pepsi Cola(s). Total Price: Php ${totalPrice}`);
        break;
    case "B":
        totalPrice = quantity * 45;
        alert(`You ordered ${quantity} Coca Cola(s). Total Price: Php ${totalPrice}`);
        break;
    case "C":
        totalPrice = quantity * 150;
        alert(`You ordered ${quantity} kg of Apple(s). Total Price: Php ${totalPrice}`);
        break
    case "D":
        totalPrice = quantity * 140;
        alert(`You ordered ${quantity} kg of Orange(s). Total Price: Php ${totalPrice}`);
        break;
    case "E":
        totalPrice = quantity * 200;
        alert(`You ordered ${quantity} kg of Hotdog(s). Total Price: Php ${totalPrice}`);
        break;
    default:
        alert("Invalid choice! Please enter A, B, C, D, or E.");
}
