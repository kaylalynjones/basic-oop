/* global prompt:true */

var prompt = require('sync-prompt').prompt;

var dog = {};

dog.name = 'Fido';
dog.gender = 'male';
dog.age = 3;
dog.breed = 'Chihuahua';

console.log(dog);

var dog2 = {name: 'Sam', age: 4};
console.log(dog2);

//---task-----
//

var dogName = prompt('Dog Name: ');
var dogAge = prompt('Dog Age: ');
var dogBreed = prompt('Dog Breed: ');

dogAge = parseInt(dogAge);

var clientsDog = {};

clientsDog.name = dogName;
clientsDog.age = dogAge;
clientsDog.breed = dogBreed;

console.log( clientsDog );

//----task 2 ----
//

var dogs=[];


var response = prompt(' Create new dog? Y/N ');

response = response.toLowerCase();

while( response !== 'n'){
  var name = prompt(' Dog name: ');
  var age = prompt(' Dog age: ');
  var breed = prompt(' Dog breed: ');

  dog = {name:name, age:age, breed:breed};
  dogs.push(dog);

  response = prompt(' Create new dog? Y/N ');
}

console.log(dogs);

var desiredAge = dogs[1].age;
console.log(desiredAge);
