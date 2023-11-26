// Write a function createHelloWorld. 
// It should return a new function that always returns "Hello World".

function createHelloWorld(arg){
    return function f(arg){
        return "Hello World"
    }
};


createHelloWorld(null)