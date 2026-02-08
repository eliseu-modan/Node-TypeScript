//order of execution of setTimeout with different timeouts
// The event loop will execute the callbacks of setTimeout in the order they were scheduled, regardless of the timeout value.
// In this example, the output will be:
// Inicio de programa
// Fin de programa
// Tercer Timeout
// Segundo Timeout
// Primer Timeout
// This is because the event loop will first execute the synchronous code (Inicio de programa and Fin de programa) 
// before executing the callbacks of setTimeout, even if they have a timeout of 0 or 1 milliseconds. The callbacks 
// will be executed in the order they were scheduled, so the Tercer Timeout will be executed before the Segundo Timeout, 
// and the Primer Timeout will be executed last.


console.log('Inicio de programa');

setTimeout( () => {
    console.log('Primer Timeout');
}, 3000 );


setTimeout( () => {
    console.log('Segundo Timeout');
}, 1 );


setTimeout( () => {
    console.log('Tercer Timeout');
}, 0 );


console.log('Fin de programa');