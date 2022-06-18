function sayHi(){
    console.log('hello',this.name);
}

    var person2 ={
    name:'Christina',
    sayHi: sayHi
    } 

    var person1 = {
        name:'Yvettelau',
        friend: person2
    }
    // 你不知道的JavaScript 
    // 当函数作为对象的方法时， this指向这个对象， 当前这个对象是 person2 
    var obj = person1.friend;
    obj.sayHi();
    // person1.friend.sayHi();