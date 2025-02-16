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

// Task 3: Arrow Function
const calculateLoyaltyDiscount = (amount, years) => {
    // Determine the discount based on years of loyalty
    let discount;
    if (years >= 5) {
        discount = 0.15;  // 15% discount
    } else if (years >= 3) {
        discount = 0.10;  // 10% discount
    } else {
        discount = 0.05;  // 5% discount
    }

    // Calculate the discounted price
    let discountedPrice = amount - (amount * discount);

    // Return the discounted price formatted as a string
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
};

// Logging the customer's discount
console.log(calculateLoyaltyDiscount(150, 7));
console.log(calculateLoyaltyDiscount(350, 4));

// Task 4: Parameters and Arguments
const calculateShippingCost = (weight, location, expedited = false) => {
    let baseCost;
    let costPerLb;

    // Determine the base cost and cost per lb based on location
    if (location === "USA") {
        baseCost = 5;
        costPerLb = 0.5;
    } else if (location === "Canada") {
        baseCost = 10;
        costPerLb = 0.7;
    } else {
        return "Invalid location"; // Handle invalid location
    }

    // Calculate the shipping cost
    let shippingCost = baseCost + (weight * costPerLb);

    // Add an additional $10 fee if expedited shipping is selected
    if (expedited) {
        shippingCost += 10;
    }

    // Return the shipping cost formatted as a string
    return `Shipping Cost: $${shippingCost.toFixed(2)}`;
};

// Logging the shipping cost
console.log(calculateShippingCost(8, "USA", true));
console.log(calculateShippingCost(12, "Canada", false));

// Task 5: Returning Values
const calculateLoanInterest = (principal, rate, years) => {
    // Calculate the total interest
    let interest = principal * rate * years;
    
    // Return the total interest formatted as a string
    return `Total Interest: $${interest.toFixed(2)}`;
};

// Logging the total loan interest
console.log(calculateLoanInterest(2000, 0.04, 4));
console.log(calculateLoanInterest(8000, 0.06, 6));

// Task 6: Higher-Order Functions
let transactions = [800, 1500, 700, 2500, 300, 1200, 1800];

const filterHighValueTransactions = (transactions, filterFunction) => {
    return transactions.filter(filterFunction);
};

// Logging high value transacton amounts
console.log(filterHighValueTransactions(transactions, amount => amount > 1000));

// Task 7: Closures
// Function to create a budget tracker
function createBudgetTracker() {
    let balance = 0; // Initialize the balance to 0, representing the starting amount
  
    // Return a function that accepts an expense and updates the balance
    return function(expense) {
      // Subtract the expense from the current balance
      balance -= expense; 
      
      // Log the current balance after the expense
      console.log(`Current Balance: -$${balance}`);
    };
  }
  
  // Create a budget tracker instance
  let budget = createBudgetTracker();
  
  // Add an expense of 150
  budget(150); // Balance will decrease by 150
  
  // Add another expense of 100
  budget(100); // Balance will decrease by 100 more