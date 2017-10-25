$(document).ready(function(){
    
    //declaring variables
    var a, b, c, f, s, t, sent_, output = "";
    var ran_num = 0;
    var word = [];
    
    
    a = "first word";
    console.log("a",a);
    b = "second word";
    c = "third word";
    
    word = [a, b, c];
    console.log("word",word);
    
    ran_num = 3;
    
    
  
    output = parseInt(1 + Math.floor(Math.random() * 3));
    console.log("output",output);
    
    
    f = word [output];
    console.log("f",f);
    s = word [output];
    t = word [output];
    
    sent_ = f + " " + s + " " + t;
     console.log("sent_",sent_);
    
    
    
    
    
    
    
    
    
    
     
   
    
    
    
    
    
    //On CLick
    
    $("#ran_btn").click(function() {
        event.preventDefault();

        // Get data input at name
        output = 1 + Math.floor(Math.random() * 3);
        console.log("output",output);
        
        // clear and display cntents in p tag
        $("#ran_word").empty().append(output); 
        
         
        // getting random words from array
        
    
    });
  
    
    //       Display result
      

})
