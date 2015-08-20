
function exercise1Handler(number){
    
    var result = exercises.exercise1(number);
    
    
    document.getElementById('result-1').innerHTML = number + ' is prime?: ' + result;
    
};

function exercise2Handler(){
        
    var oddOrEven;

    for(var i=0; i <= 15; i++){
        oddOrEven = ((i % 2) === 0) ? ' is odd' : ' is even'; 
        document.getElementById('result-2').innerHTML += '<div>' + i + ' ' + (exercises.exercise2(i) ? ' is even' : ' is odd') + '</div>';

    }
    
};

function exercise3Handler(){
    
    
    var resultContent = document.getElementById('result-3');
    resultContent.innerHTML = exercises.exercise3();
    
};

function exercise4Handler(){
    
    
    var resultContent = document.getElementById('result-4');
    resultContent.innerHTML = exercises.exercise4();
    
};

function exercise5Handler(number){
    
    
    var resultContent = document.getElementById('result-5');
    resultContent.innerHTML = exercises.exercise5(number);
    
};

function exercise6Handler(number1, number2){
    
    var number1 = parseInt(number1);
    var number2 = parseInt(number2);
    
    var resultContent = document.getElementById('result-6');
    resultContent.innerHTML = number1+ " * "+ number2 + " = " + exercises.exercise6a(number1, number2);
    resultContent.innerHTML += '<br/>' + number1 + " / "+ number2 + " = " + exercises.exercise6b(number1, number2);
    
};

function exercise7Handler(number1, number2){
    
    var number1 = parseInt(number1);
    var number2 = parseInt(number2);
    
    var resultContent = document.getElementById('result-7');
    resultContent.innerHTML = "The higher number is " + exercises.exercise7(number1, number2);
    
    
};

function exercise8Handler(word){
    
    var resultContent = document.getElementById('result-8');
    
    if(word.length === 0){
        resultContent.innerHTML = "You must enter a value.";
    }else{    
        resultContent.innerHTML = "The word " + word + " is palidrome: " + exercises.exercise8(word);
    }
    
    
};


function exercise9Handler(number1, number2, number3){
        
    var result = exercises.exercise9(number1, number2, number3);
    var resultContent = "";
    
    for(var i=0; i < result.length; i++){
        resultContent += result[i] + " - ";
    }    
    window.alert(resultContent);
    
};



function exercise10Handler(number1, number2){
        
    var resultContent = document.getElementById('result-10');
    
    var result = exercises.exercise10(number1, number2);
        resultContent.innerHTML = "The GCD is " + result;
    
    
};



function exercise11Handler(number1, number2, number3){
        
    var resultContent = document.getElementById('result-11');
    
    var result = exercises.exercise11(number1, number2, number3);
        resultContent.innerHTML = "Output: The sign is " + result;
    
    
};


function exercise12Handler(number1, number2){
    
    var number1 = parseInt(number1);
    var number2 = parseInt(number2);
    
    var resultContent = document.getElementById('result-12');
    
    var result = exercises.exercise12(number1, number2);
        resultContent.innerHTML = "The result is " + result;
    
    
    result = exercises.exercise12(number1)(number2);
        resultContent.innerHTML += "<br/>The result is " + result;
};

