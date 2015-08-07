
var exercises = (function exercises() {
    
    "use strict";

    /* 
    Write an isPrime() function that returns true if a number is prime and false otherwise.
    */
    var exercise1 = function exercise1(number) {
        
        if (number === undefined) { throw 'A number is required.'; }
        if (number < 2) { throw 'The number must be greater than 1.'; }
        
        for (var i = 2; i < number; i++){
            if((number % i) === 0){ 
                return false; 
            }
        }
        
        return number > 1;
        
    };
    
    /*
    Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. (For ex: “0 is even”, “1 is odd”, “2 is even”)
    */
    var exercise2 = function exercise2(number) {
        
        return (number % 2);
        
    };
    
    /*
    Write a JavaScript program to sum the multiples of 3 and 5 under 1000
    */
    var exercise3 = function exercise3() {
        
        var result = 0;
        for(var i=0; i <= 1000; i++){            
            if((i % 3) === 0 && (i % 5) === 0){
                result += i;
            }            
        }
        
        return result;
        
    };
    
    /* 
    Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
    */
    var exercise4 = function exercise4() {
        
        //Heron's Formula sqrt(s(s - a)(s - b)(s - c)), as s = (a + b + c)/2
        //Reference: http://www.mathopenref.com/heronsformula.html
        var a = 2, b = 3, c = 4;
        var s = (a + b + c)/2;
        
        var result = Math.sqrt(s*(s - a)*(s - b)*(s - c));
        
        return result;
        
    };
    
    
    /* 
    Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a 
message "Good Work" otherwise display a message "Not matched"
    */
    var exercise5 = function exercise5(number) {
        
        var random;
        var min = 1, max = 10, number = parseInt(number);
        
        if (number === undefined) { throw 'A number is required.'; }
        if (number < min || number > max) { throw 'The number must be between ' + min + ' and ' + max; }
        
        random = Math.floor(Math.random() * (max - min) + min); //Rretrieves random value between 1 and 10.
        
        return (number === random) ? 'Good work' : 'Not matched.';
        
    };
    
    return {
        exercise1: exercise1,
        exercise2: exercise2,
        exercise3: exercise3,
        exercise4: exercise4,
        exercise5: exercise5
    }
    
})();
