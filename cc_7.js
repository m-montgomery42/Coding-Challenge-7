// Task 1: Function Declaration
function calculateInvoice(subtotal, taxRate, discount) {
    // Calculate the total using the formula
    let total = (subtotal + (subtotal * taxRate)) - discount;
    
    // Return the total formatted as a string
    return `Total Invoice: $${total.toFixed(2)}`;
}
console.log(calculateInvoice(85, 0.08, 10));
console.log(calculateInvoice(250, 0.1, 15));