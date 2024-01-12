console.log('Hello world. I am Javascript from console');

var nombre = 'Carlos';
var number1 = 5;
var number2 = 2;

var result = number1 + number2;
console.log(`The result is ${result}`);

var first_name = 'Juan';
var last_name = 'Cortez';

console.log(`Your name is ${first_name} ${last_name}`);

// Data types

const printFullName = (first_name, last_name) => {
    return `Hello, your full name is ${first_name} ${last_name}`;
}

console.log(printFullName('Juan', 'Cortez'));


// Increment and decrement

let temp = 4;
temp++;

console.log(temp);

// Logic Operators

const value1 = 1;
const value2 = 2;

console.log(value1 === value2);

// Arrays 

const friends = ['Angelito', 'Guirri', 'Sebas', 'Fufin'];

console.log(friends);
friends.push('Rafa')
console.log(friends);
friends.pop();
friends.unshift('Rafa');
const friendsJoin = friends.join(' ');
console.log(friendsJoin);


console.log(friends[1]);

const newFriendsArray = friends.map((friend, index) => {
    return `Hello, your friend number ${index + 1} is ${friend}`;
});

console.log(newFriendsArray);

friends.forEach((friend) => {
    console.log('Hello ' + friend);
})

for(index in friends) {

    if (friends[index] === 'Angelito'){
        break;
    }
    
    console.log(friends[index]);
}