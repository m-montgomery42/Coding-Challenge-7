// Task 1: Function Declaration
function calculateInvoice(subtotal, taxRate, discount) {
    // Calculate the total using the formula
    let total = (subtotal + (subtotal * taxRate)) - discount;
    
    // Return the total formatted as a string
    return `Total Invoice: $${total.toFixed(2)}`;
}
console.log(calculateInvoice(85, 0.08, 10));
console.log(calculateInvoice(250, 0.1, 15));

// Task 2: Function Expression
const calculateHourlyWage = function(salary, hoursPerWeek) {
    // Calculate the hourly wage using the formula
    let hourlyWage = salary / (hoursPerWeek * 52);
    
    // Return the hourly wage formatted as a string
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
};
// Logging the employee's hourly wage
console.log(calculateHourlyWage(60000, 40));
console.log(calculateHourlyWage(90000, 30));