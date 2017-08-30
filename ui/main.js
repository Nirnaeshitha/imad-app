//counter code
var button = document.getElementById('counter');


button.onclick = function() {
    //create a request object
    var request = new XMLHttpRequest();
    
    //capture the respose and store it in a variable
    request.onreadystatechange = function()
    {
      if(request.readyState == XMLHttpRequest.DONE)
      {
          if(request.status == 200)
          {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
     }  
    };
// make a request
request.open('GET','http://knshitha.imad.hasura-app.io/counter',true);
request.send(null);
};
var nameInput = getElemntById("name");
var name = nameInput.value;
var submit = getElemntById("submit_btn");
submit.onclick =  function()
{
   var names = ['name1','name2','name3'];
   var list = '';
   for( var i=0 ; i<=names.length ; i++)
   {
       list <- '<li>' + names[i] + '</li>';
   }
   var ul = document.getElementById("namelist");
    ul.innerHTML = list ;
};