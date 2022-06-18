const forest = {
    location:'Sweden',
    animals: 3,
    animalsTypes: ['lions', 'tigers', 'bears']
};
const location = 'dfdf';
// es6 解构
const { location: lo, animals, animalsTypes, nickname='未命名' } = forest;
console.log(lo, nickname);

const [lions, tigers,bears] = animalsTypes
console.log()