// btn01
$("#btn1").on('click', function(){

const randomNumber = Math.ceil(Math.random() * 10);

if(randomNumber >= 7 && randomNumber <=10){
    $('#result').html('<img src="images/tyoki.png" alt="">');
  }else if(randomNumber >= 4 && randomNumber <=6){
    $('#result').html('<img src="images/guu.png" alt="">');
  }else{
    $('#result').html('<img src="images/paa.png" alt="">');
  }
    // $('.result').html('チョキ');

if(randomNumber >= 7 && randomNumber <=10){
    $('#final-result').html('<img src="images/win.png" alt="">');
  }else if(randomNumber >= 4 && randomNumber <=6){
    $('#final-result').html('ひきわけ');
  }else{
    $('#final-result').html('<img src="images/lose.jpg" alt="">');
  }
});

// btn02
$("#btn2").on('click', function(){

  const randomNumber = Math.ceil(Math.random() * 10);
  
  if(randomNumber >= 7 && randomNumber <=10){
      $('#result').html('<img src="images/paa.png" alt="">');
    }else if(randomNumber >= 4 && randomNumber <=6){
      $('#result').html('<img src="images/tyoki.png" alt="">');
    }else{
      $('#result').html('<img src="images/guu.png" alt="">');
    }
      // $('.result').html('チョキ');
  
  if(randomNumber >= 7 && randomNumber <=10){
      $('#final-result').html('<img src="images/win.png" alt="">');
    }else if(randomNumber >= 4 && randomNumber <=6){
      $('#final-result').html('ひきわけ');
    }else{
      $('#final-result').html('<img src="images/lose.jpg" alt="">');
    }
  });

  // btn03
  $("#btn3").on('click', function(){

    const randomNumber = Math.ceil(Math.random() * 10);
    
    if(randomNumber >= 7 && randomNumber <=10){
        $('#result').html('<img src="images/guu.png" alt="">');
      }else if(randomNumber >= 4 && randomNumber <=6){
        $('#result').html('<img src="images/paa.png" alt="">');
      }else{
        $('#result').html('<img src="images/tyoki.png" alt="">');
      }
        // $('.result').html('チョキ');
    
    if(randomNumber >= 7 && randomNumber <=10){
        $('#final-result').html('<img src="images/win.png" alt="">');
      }else if(randomNumber >= 4 && randomNumber <=6){
        $('#final-result').html('ひきわけ');
      }else{
        $('#final-result').html('<img src="images/lose.jpg" alt="">');
      }
    });

