var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []                            // some variables
var started = false
var level = 0

$(document).keypress(function(){
    if (!started){
        $("#level-title").text("Level "+level)                //detect the keypress for during         
        nextSequence()                                        //the start of the game 
        started = true
}}) 


$(".btn").click(function() {
    var userChosenColours = $(this).attr("id")
    userClickedPattern.push(userChosenColours)
    checkAnswer(userClickedPattern.length-1)           // to detect the click from mouse 
    playsound(userChosenColours)                       // and play sounds and animate
    animatePress(userChosenColours)                    // and check the answer
})

function startOver(){
    gamePattern = []
    level = 0                              // function when the game is over
    started = false
}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] == userClickedPattern[currentLevel]){
        if (userClickedPattern.length == gamePattern.length){
            setTimeout(function(){
                nextSequence()
            },1000)
        }
    }
    else{                                                   // this function will the check
        $("body").addClass("game-over")                     // the answer by matching the
        setTimeout(function(){                              // last index of gamepattern
            $("body").removeClass("game-over")              // and userclickedpattern
        },200)
        $("#level-title").text("Game Over, Press Any Key to Restart")
        playsound("wrong")
        startOver()
    }
}

function nextSequence(){
    userClickedPattern = []
    level = level + 1
    $("#level-title").text("Level "+level)                     //this will choose the random
    var randomNumber = Math.floor(Math.random()*4)             //color and the user have to
    var randomChosenColours = buttonColours[randomNumber]      // play it in order to play it
    gamePattern.push(randomChosenColours)                  
    $("#" + randomChosenColours).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColours)
}

function playsound(name){
    var audio = new Audio("sounds/"+name+".mp3")            //funtion will play the sound
    audio.play()                           
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed")              //will animate button after every
    setTimeout(function(){                                  // click
        $("#" + currentColour).removeClass("pressed")
    },100)
}