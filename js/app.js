function multiply(num1, num2) {
    return (num1 + num2) * 5;
}

function bigstring(word) {
    if (word.length > 10) return true;
    else return false;
}

console.log(multiply(5, 5));
console.log(bigstring("thisisabigstringwoah"));

function startswith(array) {
    return array.startsWith("ph")
}

console.log(startswith("phat"));