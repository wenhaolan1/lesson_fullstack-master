let foo = 'bar';
setTimeout(() => foo = 'barz',500);

const c = 'c';

const a = `2${c}`;

console.log(a);
setTimeout(() => console.log(foo), 1000);
