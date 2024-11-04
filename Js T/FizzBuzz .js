// Loop from 1 to 100 to print Fizz, Buzz, or FizzBuzz based on divisibility
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); // Divisible by both 3 and 5
    } else if (i % 3 === 0) {
        console.log("Fizz");     // Divisible by 3 only
    } else if (i % 5 === 0) {
        console.log("Buzz");     // Divisible by 5 only
    } else {
        console.log(i);          // Not divisible by 3 or 5
    }
}
