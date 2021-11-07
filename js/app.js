// Creating a function that takes two arguments and add's them together, then multiplies by 5 and returns the result.

function multiply(num1, num2) {
    return (num1 + num2) * 5;
}

// Creating a function that takes one argument, and it checks to see if the string length is less than ten, if it is returns true/ false if not.
function bigstring(word) {
    if (word.length > 10) return true;
    else return false;
}

// Creates a function that takes in one argument. It then loops through the array, and will return  true to the first array element that starts with "ph"
function start_with(arg) {
    // setting up local variables for the loop
    var i = 0;
    var found = "";
    while (i < arg.length) {
        if (arg[i].startsWith("ph")) {
            found = arg[i];
            return found;
        }
        i++
    }
    return found;
}


// console logging my results 
console.log(start_with(["hat", "no", "photo"]));
console.log(start_with(["phat", "no", "to"]));
console.log(start_with(["hat", "photons", "potato"]));
console.log(multiply(2, 4));
console.log(multiply(8, 2));
console.log(multiply(12, 34));
console.log(bigstring("thisisnot"));
console.log(bigstring("thisisoverten"));
console.log(bigstring("thisisalsooverten"));