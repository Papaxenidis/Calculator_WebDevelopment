var x = "";

$(".button-29").click(function() {

   
    if($(this).text() !=="Calculate" && $(this).text()!=="Clean")
    {
      x = x.concat($(this).text());
      $("input").val(x);

    }

  });


  $("#calc").click(function() {

   

    try{

      const calc = s => Function(`return(${s})`)();
      calc(x);
      alert(calc(x));
  

    }catch{

        alert("Calculation is not possible, some mistake occured!");
    }
   
    


 
   });




  $("#clean").click(function() {

    
    $("input").val("");
    x= "";


 
   });