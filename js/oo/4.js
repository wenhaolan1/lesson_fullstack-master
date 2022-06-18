// 继承
// 父类
var Animal = {
    creatNew: function(){
        var animal = {};
        animal.sleep = function(){
            console.log('睡觉觉');
        }
        return animal;
    }
}
// 动物的子类， 猫
var Cat = {
    creatNew: function(name){
        var cat = Animal.creatNew();
        cat.name = name;
        var sound= '喵喵喵';// 私有
        cat.makeSound= function(){
            console.log(sound);
        }
        return cat;
    }
}

var tom= Cat.creatNew('Tom');
console.log(tom.name); // public  pricate protect static
console.log(tom.sound); // private
tom.makeSound();
tom.sleep();