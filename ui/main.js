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
             var names = request.responseText;
             names = JSON.parse(names);
             var list = '';
             for( var i=0 ; i<=names.length ; i++)
                {
                list <- '<li>' + names[i] + '</li>';
                }
             var ul = document.getElementById("namelist");
             ul.innerHTML = list ;
          }
     }  
    };
// make a request
request.open('GET','http://knshitha.imad.hasura-app.io/submit-name?name='+name,true);
request.send(null);
};
var nameInput = getElemntById("name");
var names = nameInput.value;
var submit = getElemntById("submit_btn");
submit.onclick =  function()
{
   var names = ['name1','name2','name3','name4'];
   var list = '';
   for( var i=0 ; i<=names.length ; i++)
   {
       list <- '<li>' + names[i] + '</li>';
   }
   var ul = document.getElementById("namelist");
    ul.innerHTML = list ;
};