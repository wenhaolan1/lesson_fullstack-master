//3.1

var empty_object={};

var stooge={
    "first-name":"jerome",
    "last-name":"howard"
};


var flight ={
    airline:"oceanic",
    number:815,
    departure:{
        iata :"syd",
        time :"2004-09-22 14:55",
        city :"sydney"
    },
    arrival:{
        iata :"lax",
        time:"2004-09-23 10:42",
        city:"los angeles"
    }
};//一对花括号所包围的零或多个“名/值”对称为对象字面量

//3.2
stooge ["first-name"]  //"joe"
flighe.departure.iata  //"syd"

stooge["middle-name"]  //undefined
flighe.status          //undefined

//||填充默认值
var middle = stooge["middle-name"] || "(none)";
var status =flight.status || "unknown";

//检索undefined值时出现 typeerror 异常，可通过&&运算符来避免
flight.equipment            //undefined
flight.equipment.model      //throw "typeerror"
flight.equipment && flight.equipment.model  //undefined

//3.3
//属性已存在则替换
stooge['first-name']='jerome';
//属性不存在则扩充加入
 stooge['middle-name']='lester'
 stooge.nickname='curly';
 flight.equipment={
     model:'Boeing 777'
 };
 flight.status = 'overdue';

//3.4
var x = stooge
x.nickname = 'curly';
var nick =stooge.nickname;
//x和stooge是指同一个对象的引用，所以nick为'curly'

var a = {}, b={} ,c={} ;//a、b、c都引用一个不同的空对象
a=b=c={};//a、b、c都引用同一个空对象

//3.5
//beget方法创建一个使用原对象作为其原型的新对象
if (typeof Object.beget !=='function'){
    Object.beget = function (O) {
        var F = function() {};
        F.prototype = O;
        return new F()
    };
}
var another_stooge = Object.beget(stooge)
//原型连接在更新时不起作用，对某个对象做出会改变时不会触及该对象的原型
     another_stooge['first_name']='harry';
     another_stooge['middle-name']='moses';
     another_stooge.nickname='moe';
//添加一个新的属性到原型中，该属性会立即对所有基于该原型创建的对象可见。
     stooge.profession = 'actor';
     another_stooge.profession   //'actor'

//3.6
//检查对象并确定对象有什么属性
 typeof flight.number    //'number'
 typeof flight.status    //'string'  
 typeof flight.arrival   //'object'
 typeof flight.manifest  //'undefind'

 //hasownproperty方法
 flight.hasownproperty('number')     //ture 拥有独有属性
 flight.hasownproperty('constructor') //false 没有独有属性

 //3。7
 //用hasownproperty方法和typeof来排除函数
  var name;
  for( name  in another_stooge){
      if (typeof another_stooge[name]!=='function'){
          document.writeln(name+':'+another_stooge[name]);
      }
  }
  //用数组代替for in
  var i;
  var prototypes = [
      'first-name',
      'middle-name',
      'last-name',
      'profession'
  ];
  for (i=0;i<properties.length;i+=1){
      document.writeln(prototypes[i]+';'+another_stooge[prototypes[i]]);
  }

//3.8
another_stooge.nickname  //'moe'
//删除 another_stooge的nickname 属性，从而暴露出原型的 nickname 属性