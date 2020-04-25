$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var userProgress = 0;//this is the current number the user's crystals add up to 

    $("#winstext").text("Wins: " + wins);
    $("#lossestext").text("Losses: " + losses);
    
    //targetNumber is the number that the user wants to add their crystals to achieve
    var targetNumber = Math.floor(Math.random() * (121-19) + 19); 
    $("#targettext").text("Target number: " + targetNumber);
    console.log("targetNumber: "+ targetNumber);

    //crystalNumber is a random value assigned to each crystal
    var crystalNumber1 = Math.floor(Math.random() * (13-1) + 1); 
    var crystalNumber2 = Math.floor(Math.random() * (13-1) + 1);
    var crystalNumber3 = Math.floor(Math.random() * (13-1) + 1);
    var crystalNumber4 = Math.floor(Math.random() * (13-1) + 1);
    console.log("crystalNumber1: " + crystalNumber1);
    console.log("crystalNumber2: " + crystalNumber2);
    console.log("crystalNumber3: " + crystalNumber3);
    console.log("crystalNumber4: " + crystalNumber4);

    function reset(){
        targetNumber = Math.floor(Math.random() * (121-19) + 19); 
        $("#targettext").text("Target number: " + targetNumber);
        console.log("targetNumber: "+ targetNumber);

        crystalNumber1 = Math.floor(Math.random() * (13-1) + 1); 
        crystalNumber2 = Math.floor(Math.random() * (13-1) + 1);
        crystalNumber3 = Math.floor(Math.random() * (13-1) + 1);
        crystalNumber4 = Math.floor(Math.random() * (13-1) + 1);
        console.log("crystalNumber1: " + crystalNumber1);
        console.log("crystalNumber2: " + crystalNumber2);
        console.log("crystalNumber3: " + crystalNumber3);
        console.log("crystalNumber4: " + crystalNumber4);
        
        userProgress = 0;
        $("#progressnum").text(userProgress);
    }
    
    function userWins() {
        wins++;
        alert("Win!");
        $("#winstext").text(wins);
        reset();
    }

    function userLoses() {
        losses++;
        alert("Lose :(");
        $("#lossestext").text(losses);
        reset();
    }

    $("#crystal-1").on("click", function(){
    userProgress = userProgress + crystalNumber1;
    $("#progressnum").text(userProgress);
    console.log("userProgress after clicking crystal 1: " + userProgress);

        if (userProgress == targetNumber){
            userWins();
        }
        else if (userProgress > targetNumber){
            userLoses();
    }
    })

    $("#crystal-2").on("click", function(){
        userProgress = userProgress + crystalNumber2;
        $("#progressnum").text(userProgress);
        console.log("userProgress after clicking crystal 2: " + userProgress);
    
        if (userProgress == targetNumber){
            userWins();
        }
        else if (userProgress > targetNumber){
            userLoses();
        }
    })

    $("#crystal-3").on("click", function(){
        userProgress = userProgress + crystalNumber3;
        $("#progressnum").text(userProgress);
        console.log("userProgress after clicking crystal 3: " + userProgress);
    
        if (userProgress == targetNumber){
            userWins();
        }
        else if (userProgress > targetNumber){
            userLoses();
        }
    })

    $("#crystal-4").on("click", function(){
        userProgress = userProgress + crystalNumber4;
        $("#progressnum").text(userProgress);
        console.log("userProgress after clicking crystal 4: " + userProgress);
    
        if (userProgress == targetNumber){
            userWins();
        }
        else if (userProgress > targetNumber){
            userLoses();
        }
    })
    

});
