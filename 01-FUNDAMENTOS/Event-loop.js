// 1 - callbacks and the mircrotask execution first
// 2 - all callbascks of the timer queue se execution after the execution of the current code and the microtasks queue
// 3 - the microtasks queue is executed after the current code and before the timer queue

console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
