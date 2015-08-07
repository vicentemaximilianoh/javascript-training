
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