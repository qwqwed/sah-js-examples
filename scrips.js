
$('h1').html('This is done by <em>Javaskcript</em>');

$('h2').toggleClass('blue');
//$('h2').toggleclass('blue');

function mylittlefunction(){
  $('main').append('<p> A p is appended in the main</p>')
  $('p').css('border','1px solid red');
  $('p').css('padding','10');
} 


$('#add').click(mylittlefunction);
$('#remove').click(function(){
    $('p:last-child').remove();
});

console.log('Skript file is loaded')
/* let oldetd = true;
undefined}
'Hello, ' + name;
"Hello, stayathome"
true && true
true
true && false
false
true || false
true
false || false
false
let post ="This ismy first post";
undefined
let p
undefined
let post2 ="This ismy second post";
undefined
post2
"This ismy second post"
let color1="orange";
undefined
let color2="blue";
undefined
let colors = ["orange","blue","green"]
undefined
colors[0]
"orange"
colors[2]
"green"
let pickedColor= 2;
undefined
colors[pickedColor];
"green"
colors[1]  = "yellow"
"yellow"
colors
(3) ["orange", "yellow", "green"]
name.length
10
name
"stayathome"
colors[3]='lime';
"lime"
colors.push="black";
"black"
colors
(4) ["orange", "yellow", "green", "lime", push: "black"]
colors.push=('black)';
VM2166:1 Uncaught SyntaxError: Unexpected token ';'
colors.push=('black');
"black"
colors
(4) ["orange", "yellow", "green", "lime", push: "black"]
colors[color.length]= 'cyan'
VM2418:1 Uncaught ReferenceError: color is not defined
    at <anonymous>:1:8
(anonymous) @ VM2418:1
colors[colors.length]= 'cyan'
"cyan"
colors
(5) ["orange", "yellow", "green", "lime", "cyan", push: "black"]
colors.push(colors);
VM2494:1 Uncaught TypeError: colors.push is not a function
    at <anonymous>:1:8
(anonymous) @ VM2494:1
colors.push(colors)
VM2504:1 Uncaught TypeError: colors.push is not a function
    at <anonymous>:1:8
(anonymous) @ VM2504:1
let notgoodexample=['text',123, true]
undefined
notgoodexample
(3) ["text", 123, true]
let person = {
}
undefined
let person = {
name:'Adam',
age:25,
favoriteColors:colors,
}
undefined
person
{name: "Adam", age: 25, favoriteColors: Array(5)}age: 25favoriteColors: (5) ["orange", "yellow", "green", "lime", "cyan", push: "black"]name: "Adam"__proto__: Object
'Hello, dear '+ person.name
"Hello, dear Adam"
person.name="Peti"
"Peti"
person.food='pizza'
"pizza"
person
{name: "Peti", age: 25, favoriteColors: Array(5), food: "pizza"}age: 25favoriteColors: (5) ["orange", "yellow", "green", "lime", "cyan", push: "black"]food: "pizza"name: "Peti"__proto__: Object
person.oldenoughtodrive= true
true
person
{name: "Peti", age: 25, favoriteColors: Array(5), food: "pizza", oldenoughtodrive: true}
*/
