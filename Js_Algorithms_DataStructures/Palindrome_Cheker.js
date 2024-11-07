function palindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return str === str.split("").reverse().join("");
}

palindrome("eye");
