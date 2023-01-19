
let i = 0;

function statementCycle(x){
    for (let j = 0; j < x; j++){
        if (x >= 5){
            console.log(i++);
        } else {
            console.log(i--);
        }
    }

}
statementCycle(4);


function basicOp(operation, value1, value2){
    if(typeof(operation) == "string" && typeof(value1) == "number" && typeof(value2) == "number"){
        if (operation === "+"){
           return value1 + value2;
        } else if (operation === "-") {
            return value1 - value2;
        } else if (operation === "*"){
            return value1 * value2;
        } else if (operation === "/"){
            if (value2 == 0){
                return 0;
            } else {
                return value1 / value2;
            }
        }
    } else {
        return `Enter the correct arguments`
    }
}
basicOp("/",5,1)



function simpleMultiplication(number){
    if (number % 2 == 0) {
        return number * 8;
    } else if(number % 2 == 1){
        console.log(number * 9)
        return number * 9;
    }
}
simpleMultiplication(5)


var countSheep = function (num){
    let str = "";
    for (let i = 1; i < num; i++){
        str += `${i} sheep...`
    }
    return str;
}
countSheep(5);


//
function evenOrOdd(number) {
    if (number%2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
evenOrOdd(5);

//

function check(a, x) {
        if (a.includes(x)){
            return true;
        } else if (!a.includes(x)){
            return false;
        } else {
            return "";
        }
}
check([1,5,7,9,0,1],1);


function grow(x){
    if (x !== null){
        return  x.reduce((a, b) => a * b);
    } else {
        return "";
    }
}
grow([1,3,4,5])

//

function findNeedle(haystack) {
    return `"found the needle at position ${haystack.indexOf("needle")}`
}

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with 1
// Return the resulting string.
// Note: input will never be an empty string

function fakeBin(x){
    let result = '';
    for(let i = 0; i < x.length; i++){
        if (x[i] < 5){
            result += 0;
        } else {
            result +=1
        }
    }
    return result;
}
fakeBin(511);

//Given an array of integers as strings and numbers,return the sum of the array values as if all were numbers
// Return your answer as a number.

function sumMix(x){
    let result = 0;
    for (let n of x) {
        result += parseInt(n);
    }
    return result;
}
sumMix([1,5,'4','2']);


//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l , w) {
    if (l == w){
        return l * w;
    } else if(l !== w){
        return ((l * 2)+(w * 2));
    }
};

// Complete the solution so that it reverses the string passed into it.

function solution(str){

    return str.split('').reverse().join("")
}
solution("world");

// Given a random non-negative number, you have to return the digits of this number
// within an array in reverse order.

function digitize(n) {
    let result;
    if (n > 0) {
       result = Array.from(String(n)).map(i => Number(i)).reverse();
       return result;
    } else {
        result = [0];
        return result;
    }
}

digitize(35213); // 1 3 2 5 3

//It's pretty straightforward. Your goal is to create a function that removes the first and last
// characters of a string. You're given one parameter, the original string.
// You don't have to worry with strings with less than two characters.

function removeChar(str){
    return str.slice(1, -1)
}
removeChar("hello");

// Your task is to make a function that can take any non-negative integer as an argument
// and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
      return Number(String(n).split("").sort((a,b) => b - a).join(''));
}
descendingOrder(7431228712);

// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    let hour = 3600000;
    let min = 60000;
    let sec = 1000;
    return h * hour + m * min + s * sec
}
past(1,2,3);

//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
//0.5 water - 1 hour
// 1 water - 3hour
function litres(time) {
    return Math.floor(time * 0.5);
}
litres(3);


function otherAngle(a, b) {
    return 180 - (a + b);
}
otherAngle(56,20);

//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
//n -number s-string
function repeatStr (n, s) {
    return s.repeat(n)
}
repeatStr(2,"hello");


function maps(x){
    if (x !== null){
       return x.map((i) => i * 2)
    } else {
        return "";
    }
}
maps([120,120]);


// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sumArray (numbers) {
    "use strict"
    if (numbers.length > 0){
        return numbers.reduce((a,b) => a + b);
    } else {
        return 0;
    }
}
sumArray([1,5,-10])

// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

function highAndLow(numbers){
    numbers = numbers.split(' ')
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
highAndLow("3 6 9 1 10 45 31 22 67");

//

function friend(friends){
    let arr = [];
    for (let i = 0; i < friends.length; i++){
        if (friends[i].length === 4){
            arr.push(friends[i]);
        }
    }
    return arr;

}
friend(["mark","oleh","andrii",1,"sasha","alex"]);

// delete all vowel letters

function disemvowel(str) {
    return str.replace(/[aeiouy]/gi, '')
}
disemvowel("This website is for losers LOL!");

//

function booleanToString(b){
    return String(b);
}

//Given an array of integers your solution should find the smallest integer.
// Given [34, 15, 88, 2] your solution will return 2
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function findSmallestInt(args) {
    return Math.min(...args);
}
findSmallestInt([78,56,232,12,8,-32]);

//Implement a function that accepts 3 integer values a, b, c.
// The function should return true if a triangle can be built with the sides of given length and false in any other case.

function isTriangle(a,b,c){
    return a + b > c && a + c > b && b + c > a;
}
isTriangle(1,2,3);

//Complete the function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.

function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ")
}
reverseWords("This is an example!")

//

function smash (words) {
    return words.join().replace(/[,]/gi, ' ')
}
smash(["hello", "world"]);

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".

function DNAStrand(dna) {

    let letters = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    };

    let arr = [];
    for (let i = 0; i < dna.length; i++) {
        arr[i] = letters[dna[i]];
    }

    return arr.join('');
}
DNAStrand("GTAT");

// 3 по цене 2   1 - 3 = 3

function mango(quantity, price){
    let qty = quantity - Math.floor(quantity / 2);
    return qty * price;
}
console.log(mango(7,3))
















