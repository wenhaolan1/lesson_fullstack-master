var regex = /hello/;
console.log( regex.test("hello") ); 
// => true
var regex = /ab{2,5}c/g;
var string = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
console.log( string.match(regex) ); 
// => ["abbc", "abbbc", "abbbbc", "abbbbbc"]
var regex = /a[123]b/g;
var string = "a0b a1b a2b a3b a4b";
console.log( string.match(regex) ); 
// => ["a1b", "a2b", "a3b"]
var regex = /\d{2,5}/g;
var string = "123 1234 12345 123456";
console.log( string.match(regex) ); 
// => ["123", "1234", "12345", "12345"]
var regex = /id=".*"/
var string = '<div id="container" class="main"></div>';
console.log(string.match(regex)[0]); 
// => id="container" class="main"
var result = "hello".replace(/^|$/g, '#');
console.log(result); 
// => "#hello#"
