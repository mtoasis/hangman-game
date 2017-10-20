
var win_numb = 0;
var lose_numb = 0;
var guess_left = 9;

document.getElementById("start_btn").onclick = function init(){
  document.getElementById("heading").innerHTML="<span>Game is On</span>";


    var library=[
                    "advantage","advertisement","advice","agenda","apology","authorization","bill","brand","budget",
                    "commission","comparison","competition","competitor","confirmation","costs","creditor","customer","deadline",
                    "debt","debtor","decision","decrease","deficit","delivery","department","description","difference",
                    "disadvantage","distribution","employee","employer","enquiry","environment","equipment","estimate","experience",
                    "explanation","facilities","factory","feedback","goal","goods","growth","guarantee","improvement",
                    "increase","industry","instructions","interest","inventory","invoice","knowledge","limit","loss",
                    "margin","market","message","mistake","objective","offer","opinion","option","order",
                    "output","payment","penalty","permission","possibility","product","production","profit","promotion",
                    "purchase","reduction","refund","reminder","repairs","report","responsibility","result","retailer",
                    "rise","risk","salary","sales","schedule","share","signature","stock","success",
                    "suggestion","supply","support","target","transport","turnover","wholesaler"
                    ]

              
    var old_ans=library[Math.floor(Math.random()*97)];
    var comp_guess=old_ans.split("");
    
    console.log(comp_guess);
    var answer=[];
    var under_line="_ ";

     for (var i=0; i<comp_guess.length; i++){
        answer[i]=under_line;    
      }
      document.getElementById("answer").innerHTML = answer;
      var wrong_ans =[0];
      var j= -1;
      var sign2 = false;

 

    document.onkeyup = function(event){ 
        document.getElementById("winnerimg").innerHTML='';
        var user_guess = event.key;
        


        console.log(user_guess);
        
        var sign=0;
        var sign2=0;
        
        for (var i=0; i<comp_guess.length; i++){
         
          if (user_guess===comp_guess[i]){
            answer[i]=user_guess;
            sign +=1;
            sign2 = false;
            
          }
          else if(user_guess===answer[i] && sign===0){
            guess_left -=0;

          }
          if (user_guess===wrong_ans[i] && sign===0){
            guess_left -=0;

            }
          }
      

    

        for (var i=0; i<wrong_ans.length; i++){    

        if(sign===0 && user_guess!==wrong_ans[i]){
          sign2=true;
           }
         }     

        if (sign2===true){ 
          guess_left -=1;
          j +=1;
          wrong_ans[j]=user_guess;
        }
        console.log("wrong ans is: " +wrong_ans);
        



        if (guess_left===0){
          lose_numb +=1;
          guess_left =9;
          document.getElementById("winnerimg").innerHTML='<img src="asset/image/loser.jpg">';
          initialize(); 
          init();

        }

        for (var i=0; i<comp_guess.length; i++){
        
        if(answer[i]===comp_guess[i]){
          sign2 +=1;    
        }
      }                        
     

      document.getElementById("answer").innerHTML = answer; //display answers so far

      var x = document.createElement("span");
      x.appendChild(document.createTextNode(user_guess + ", ")); //display user's input.
      document.getElementById("your_guess").appendChild(x);



      if (sign2===comp_guess.length){ //if user answer the word correctly, 
          win_numb +=1; //win +1
          guess_left =9; //guess turns back to 9
          document.getElementById("winnerimg").innerHTML='<img src="asset/image/win.jpg">';
          initialize()         
          init()          
      }

      function initialize(){
        document.getElementById("your_guess").innerHTML = "Your: Guess: "; //initialize user's input
        document.getElementById("prev_ans").innerHTML = 'Previous Answer: <span id="red">' + old_ans + '</span>'; //show the previous answer.

      }
      document.querySelector("#score").innerHTML =  //displaying current status
            "<p> Win Number: <b> " +win_numb + "</b></p>"+
            "<p> Loses Number: <b> " +lose_numb + "</b></p>"+
            "<p> Guess Left: <b> " +guess_left + "</b></p>";


    }
  }
  

