// Decision Making (if-else and switch)

function ticketPricing(){
    let age = prompt("enter your age :")
    if (age <= 12)
        return "movie ticket price is 10$"
    else if (age >= 13 && age <=17)
        return "movie ticket price is 15$"
    else 
        return "movie ticket price is 20$"
}


function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        }
        return true;
    }
    return false;
}


// Recursion

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function power(x, n) {
    if (n === 0) {
        return 1;
    }
    
    if (n < 0) {
        return 1 / power(x, -n);
    }
    
    return x * power(x, n - 1);
}