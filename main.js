// main.js
import { greet, add, PI } from './js/test.js';

console.log(greet('World')); // Output: Hello, World!
console.log(add(3, 5)); // Output: 8
console.log(PI); // Output: 3.14159

module.exports =
{
    greet,
    add,
}
