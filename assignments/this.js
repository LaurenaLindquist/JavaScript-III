/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding
* 2. Explicit Binding
* 3. New Binding
* 4. Window Binding
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Implicit Binding
//left of '.' 

var me = {  //object called me
    name: 'lauren',
    age: 23,
    sayName : function(){ //object has a say name method 
        console.log(this.name); //inside the method, console.log this name
    }
};


//So the question is what 'this' keyword is referencing. Implicit binding says that when you call
//a function, and the function is invoked, look to the left of the dot and that is what the 'this' key
//word is going to reference. 

me.sayName();

//We invoke the sayName function with (); To the left of the dot is 'me.' So it is referencing the
//me object, which contains name: Lauren. 

//MORE EXAMPLES BECAUSE I'M BAD AT JAVASCRIPT

var sayNameMixin = function (obj){ //say name mixin function takes in 1 obj
    obj.sayName(){//add sayName method onto this object
        console.log(this.name);
    };
};

var me = {
    name: 'jess',
    age: 25,  
};

var you = {
    name: 'kali',
    age: 30,
};

sayNameMixin(me);
sayNameMixin(you);

me.sayName(); // left of . is me, returns jess
you.sayName(); // left of . is you, returns kali 

//one more! 

var Person = function(name, age){
    return {
        name: name,
        age: age,
        sayName: function (){
            console.log(this.name);
        },
        mother: { 
            name: 'stacy',
            sayName: function(){
                console.log(this.name);
            }
        }
    };
};

var jim = Person('Jim', 42);
jim.sayName(); //returns Jim
jim.mother.sayName(); //returns Stacy




// Principle 2

// code example for Explicit Binding
//telling a function what the context of the 'this' keyword is going to be
//using call, apply, or bind

var sayName = function (lang1, lang2, lang3){
    console.log ('My name is ' + this.name + ' and I know' + lang1 + ', ' lang2 + ', and ' lang 3);
};

var stacey = {
    name: 'stacey',
    age: 34,
};

//how do you call the sayName function and refer to stacey? 
sayName.call(stacey); //every function has a .call property
// the very first argument you pass in .call is the context. 
// every arguments after that is going to be passed through sayName function as
// a normal argument. 

var languages = ['javascript', 'ruby', 'python'];
sayName.call(stacey, languages[0], languages[1], languages [2]);

//or 
//apply
sayName.apply(stacy, languages); //apply property can pass an array 
//or
//bind is almost the same as .call
sayName.bind(stacey, languages[0], languages[1], languages [2]);
//bind returns us a new function instead of invoking original function
var newFn = sayName.bind(Stacey, languages[0], languages[1], languages [2]);
console.log('HERE');
newFn(); 

//.call, .apply, .bind allow us to explicitly state what the 'this' keyword is going to be in any given function 
//.call and .bind behave the exact same way. They will immediately invoke the function
//but with .call you pass in arguments one by one
//.apply you pass them in as an array
//.bind is the exact same as .call but instead of immediately invoking the function
// ...it will return you a brand new function that you can invoke later 


////////////////////////////////////////////

// Principle 3
// code example for New Binding
//whenever you have a function invoked with the new keyword. This keyword is bound 
//to new object being constructed


var Animal = function(color, name, type) { 
    this.color = color;
    this.name = name;
    this.type = type;
    //capitalized A in Animal to inform us it is a CONSTRUCTOR function
    //and should be called with the NEW keyword
};

var zebra = new Animal ('black and white', 'zorro', 'zebra');
// when you invoke Animal with the 'new' keyword. 
//Javascript is going to create a brand new object for us
// and save it as 'this'
//new binding rule states that when a function is invoked
//with the new keyword that this keyword inside that function is bound to the new 
//object being constructed


// Principle 4
// code example for Window Binding
// when none of the other rules apply, then this keyword is going to 
//default to the window object unless you're in struct mode. Then it's 
//just going to be undefined. 

var sayAge = function(){}
'use strict'; //opt in to a more strict version of javascript
    console.elog(this.age);
};

var me = {
    age: 25
};

sayAge();
window.age = 35;
sayAge();