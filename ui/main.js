//counter code
var button = document.getElementById("counter");
var counter = 0;

button.onclick = function() {
    //make request to counter endpoint
    
    //capture the respose and store it in a variable
    
    //render the variable in the correct span
    counter = counter+1;
    var span = document.getElementById("count");
    span.innerHtml = counter.toSrting();
};