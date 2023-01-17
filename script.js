
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
console.log(sumMix([1,5,'4','2']));


//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l , w) {
    if (l == w){
        return l * w;
    } else if(l !== w){
        return ((l * 2)+(w * 2));
    }
};





