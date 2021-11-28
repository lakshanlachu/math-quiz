function login(){
    localStorage.setItem("player1" , document.getElementById("player1_name").value)
    localStorage.setItem("player2" , document.getElementById("player2_name").value)
    window.location = "game_page.html"
    }

    player1_name = localStorage.getItem("player1")
    player2_name = localStorage.getItem("player2")
    
    player1_score = 0;
    player2_score = 0;
    
    document.getElementById("player1_name").innerHTML = player1_name + ":";
    document.getElementById("player2_name").innerHTML = player2_name + ":";
    document.getElementById("player1_score").innerHTML = player1_score
    document.getElementById("player2_score").innerHTML = player2_score;
    document.getElementById("player_qu").innerHTML = "Question Turn" + ":" +player1_name;
    document.getElementById("player_ans").innerHTML = "Answer Turn" + ":" + player2_name;
    
    function send(){
        
        
    number1 = document.getElementById("ques_1").value;
    number2 = document.getElementById("ques_2").value;
    document.getElementById("ques_1").value = ""
        document.getElementById("ques_2").value = ""
    actual_ans = parseInt(number1) * parseInt(number2);
    console.log(number1);
    console.log(number2)
    console.log(actual_ans);
    question = "<h4>" + number1 + "X" + number2 + "</h4>"
    input_box = "<br><input type='text' placeholder='Answer' id='get_a'>"
    button_check = "<br><br><button type='button' class='btn btn-info' onclick='check()'>Check</button>"
    row = question + input_box + button_check
    document.getElementById("output").innerHTML = row
    }
    question_turn = "player1"
    answer_turn = "player2"
    function check(){
       
        get_answer = document.getElementById("get_a").value;
        document.getElementById("output").innerHTML = ""
        if (get_answer == actual_ans){
            if(answer_turn == "player1"){
                player1_score = player1_score + 1
                document.getElementById("player1_score").innerHTML = player1_score   
            }
            else{
                player2_score = player2_score + 1
                document.getElementById("player2_score").innerHTML = player2_score
            }
        }
        
        
        if(question_turn == "player1"){
            question_turn = "player2"
            answer_turn = "player1"
            document.getElementById("player_qu").innerHTML = "Question turn-" +player2_name
            document.getElementById("player_ans").innerHTML ="Answer Turn-"+player1_name
            
        }
        else{
            question_turn = "player1"
            answer_turn = "player2"
            document.getElementById("player_qu").innerHTML = "Question turn-" +player1_name
            document.getElementById("player_ans").innerHTML ="Answer Turn-"+player2_name
        }
        
    }