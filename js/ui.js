//PREPEND DIFFERENT
$(document).ready(function() {
        
   $("form").submit(function() {
//       Get data input at name
       var myName, myAge = "";
       myName = $("input#name").val();
       myAge = $("input#age").val();
       console.log(myName);
       console.log(myAge);
       
       
//       Display result
       $("#n_result").append(myName).addClass("span_");      
       $("#a_result").append(myAge).addClass("span_");
   
       event.preventDefault();
    });
  });