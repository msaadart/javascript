// What is Garbage Collection in JavaScript?
// JavaScript's garbage collection is an automatic process that helps manage memory by identifying and freeing up memory that is no longer being used by the application. 
// This occurs in scenarios where the JavaScript engine identifies no longer needed or referenced objects and reclaims the memory they occupy.


// Unreferenced Variables
// When variables go out of scope or are no longer referenced, 
// the memory they occupy becomes eligible for garbage collection.
function example() {
    let data = { name: "Alice" };
    // `data` is only accessible within this function
} 
// After the function executes, `data` is no longer referenced and can be garbage collected


// Nullifying References
// Explicitly setting variables or properties to null helps the garbage collector identify them as no longer needed.
let element = document.getElementById('myElement');
element = null; // This indicates that the object is no longer needed


// Out-of-Scope Variables
// Variables that were once in scope (like local variables in a function) are no longer accessible after the function exits.
function compute() {
    let result = 42; 
    return result;
}
// After `compute()` finishes, `result` is out of scope and can be garbage collected


// Removing DOM Elements
// When a DOM element is removed from the document and there are no more references to it, it becomes eligible for garbage collection.
let div = document.createElement('div');
document.body.appendChild(div);
document.body.removeChild(div);
div = null; // Clear reference to allow garbage collection


// Closures and Lexical Scope
// Objects captured by closures can prevent garbage collection if the closure outlives the original context. 
// If a function holds onto an object after the function that created it has finished, 
// that object can't be garbage collected until the closure itself is no longer needed.
function outer() {
    let largeObject = { data: new Array(1000).fill("data") };
    return function inner() {
        console.log(largeObject);
    };
}
const innerFunc = outer(); 
// `largeObject` is kept in memory because `innerFunc` still references it
