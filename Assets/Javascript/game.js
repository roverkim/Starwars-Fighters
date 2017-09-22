$(document).ready(function() {

// Declaring an object that stores character information
var characters = {
  rey: {name: "Rey", hp: 100, attack: 5, attack_Storage: 0, visited: 0},
  finn: {name: "Finn", hp: 120, attack: 10, attack_Storage: 0, visited: 0},
  kylo: {name: "Kylo", hp: 180, attack: 25, attack_Storage: 0, visited: 0},
  captain: {name: "Captain", hp: 150, attack: 20, attack_Storage: 0, visited: 0}
};

// Player object
player = {};

// Enemy object
enemy = {};

//wins variable for tracking if game has been won
var win_Tracker;

//track variable for tracking if reset button is being clicked before or after entire game has been won
var tracker = 0;

// Unique variables to differiate rules
var a = 0;
var b = 0;
var c = 0;
var d = 0;


//Event Listeners
var clicks = 0;
var rey_Click = 0;
var finn_Click = 0;
var kylo_Click = 0;
var captain_Click = 0;

// Functions

//Function that displays character hp.
function hp_Display(){
  var i = 0;
  for (var selector in characters)
    {
      i++;
      $(".name_health_"+i).text(characters[selector].hp);
    }
};


// Logic function for choosing 1st character
function first_Movement()
  {
    clicks ++;
    // tracker assigned 0 to ensure reset button does not execute code meant for reseting the entire game
    tracker = 0;
    console.log("Check a: " + a + " check b: "+  b + " check c: "+  c + " check d: " + d);
    console.log("First movement function is being called");
      if (clicks == 1)
        {
          if (a == 1 || b == 1 || c == 1 || d == 1 )
            {
              console.log("Check a: " + a + " check b: "+  b + " check c: "+  c + " check d: " + d);
              console.log( "a b c or d is being runned");
              /////////////////////////////////
              // Logic Movements for Character 1
                if (rey_Click == 1)
                  {
                    console.log("Rey has been clicked. Click: " + rey_Click);
                    $(".second_Character, .third_Character, .forth_Character").detach().appendTo(".enemy_Staging_Area").css("background-color","red");
                    // rey_Click = 0;
                    //Asigning selected character as the player
                    player = Object.assign({}, characters.rey);
                    // rey_Click = 0;
                  }
                // Logic Movements for Character 2
                if (finn_Click == 1)
                  {
                     $(".first_Character, .third_Character, .forth_Character").detach().appendTo(".enemy_Staging_Area").css("background-color","red");
                    //  finn_Click=0;
                     player = Object.assign({}, characters.finn);
                    //  finn_Click = 0;
                  }
                // Logic Movements for Character 3
                if (kylo_Click == 1)
                  {
                      $(".first_Character, .second_Character, .forth_Character").detach().appendTo(".enemy_Staging_Area").css("background-color","red");
                      //  kylo_Click=0;
                       player = Object.assign({}, characters.kylo);
                      //  kylo_Click = 0;
                    }
                // Logic Movements for Character 4
                if (captain_Click == 1)
                  {
                    $(".first_Character, .second_Character, .third_Character").detach().appendTo(".enemy_Staging_Area").css("background-color","red");
                      //  captain_Click=0;
                       player = Object.assign({}, characters.captain);
                      //  captain_Click = 0;
                  }

            }
            else if(a == 0 && b == 0 && c == 0 && d == 0){
              console.log("clicks 1 is being called");
              /////////////////////////////////
              // Logic Movements for Character 1
                if (rey_Click == 1)
                  {
                    console.log("Rey has been clicked. Click: " + rey_Click);
                    $(".second_Character, .third_Character, .forth_Character").detach().appendTo(".enemy_Staging_Area").css("background-color","red");
                    // rey_Click = 0;
                    //Asigning selected character as the player
                    player = Object.assign({}, characters.rey);
                    // rey_Click = 0;
                    a++;
                  }
                // Logic Movements for Character 2
                if (finn_Click == 1)
                  {
                     $(".first_Character, .third_Character, .forth_Character").detach().appendTo(".enemy_Staging_Area").css("background-color","red");
                    //  finn_Click=0;
                     player = Object.assign({}, characters.finn);
                    //  finn_Click = 0;
                     b++;
                  }
                // Logic Movements for Character 3
                if (kylo_Click == 1)
                  {
                      $(".first_Character, .second_Character, .forth_Character").detach().appendTo(".enemy_Staging_Area").css("background-color","red");
                      //  kylo_Click=0;
                       player = Object.assign({}, characters.kylo);
                      //  kylo_Click = 0;
                       c++;
                    }
                // Logic Movements for Character 4
                if (captain_Click == 1)
                  {
                    $(".first_Character, .second_Character, .third_Character").detach().appendTo(".enemy_Staging_Area").css("background-color","red");
                      //  captain_Click=0;
                       player = Object.assign({}, characters.captain);
                      //  captain_Click = 0;
                       d++;
                  }

            }

        }

  }

///////////////////////////////////////////////////////////////////

// function for choosing enemy
function second_Movement(){
  console.log("Second movement function is being called!");
  console.log("Rey's current click is: " + rey_Click);
  console.log("Finn's click is: " + finn_Click);
  console.log("Kylo's click is: " + kylo_Click);
  console.log("Captain's click is: " + captain_Click);
  console.log("Check a: " + a + " check b: "+  b + " check c: "+  c + " check d: " + d);

  // logic for 2nd choosend enemy
  // Rey is the hero
  if (rey_Click == 1 && finn_Click == 1 && a == 1 )
    {
      $(".second_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
      //Asign selected enemy as the enemy
      enemy = Object.assign({}, characters.finn);
      console.log("This rule is being called 1");
      finn_Click = 0;
    }
  else if (rey_Click == 1 && kylo_Click == 1 && a == 1)
    {
      $(".third_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
      //Asign selected enemy as the enemy
      enemy = Object.assign({}, characters.kylo);
      console.log("This rule is being called 2");
      kylo_Click = 0;
    }
  else if (rey_Click == 1 && captain_Click == 1 && a == 1)
    {
      $(".forth_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
      //Asign selected enemy as the enemy
      enemy = Object.assign({}, characters.captain);
      console.log("This rule is being called 3");
      captain_Click = 0;
    }

  // Finn is the hero
  if (finn_Click == 1 && rey_Click == 1 && b == 1)
    {
      $(".first_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
      //Asign selected enemy as the enemy
      enemy = Object.assign({}, characters.rey);
      console.log("This rule is being called 4");
      rey_Click = 0;
    }
  else if (finn_Click == 1 && kylo_Click == 1 && b == 1)
    {
      $(".third_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
      //Asign selected enemy as the enemy
      enemy = Object.assign({}, characters.kylo);
      console.log("This rule is being called 5");
      kylo_Click = 0;
    }
  else if (finn_Click == 1 && captain_Click == 1 && b == 1)
    {
      $(".forth_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
      //Asign selected enemy as the enemy
      enemy = Object.assign({}, characters.captain);
      console.log("This rule is being called 6");
      captain_Click = 0;
    }

  //Kylo is the hero
  if (kylo_Click == 1 && rey_Click == 1 && c == 1)
    {
      $(".first_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
      //Asign selected enemy as the enemy
      enemy = Object.assign({}, characters.rey);
      console.log("This rule is being called 7");
      rey_Click = 0;

    }
  else if (kylo_Click == 1 && finn_Click == 1 && c == 1)
    {
      $(".second_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
      //Asign selected enemy as the enemy
      enemy = Object.assign({}, characters.finn);
      console.log("This rule is being called 8");
      finn_Click = 0;
    }
  else if (kylo_Click == 1 && captain_Click == 1 && c == 1)
    {
      $(".forth_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
      //Asign selected enemy as the enemy
      enemy = Object.assign({}, characters.captain);
      console.log("This rule is being called 9");
      captain_Click = 0;
    }

  // Captain is the hero
  if (captain_Click == 1 && rey_Click == 1 && d == 1  )
    {
      $(".first_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
      //Asign selected enemy as the enemy
      enemy = Object.assign({}, characters.rey);
      console.log("This rule is being called 10");
      rey_Click = 0;
    }
  else if (captain_Click == 1 && finn_Click == 1 && d == 1  )
    {
      $(".second_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
      //Asign selected enemy as the enemy
      enemy = Object.assign({}, characters.finn);
      console.log("This rule is being called 11");
      finn_Click = 0;
    }
    else if (captain_Click == 1 && kylo_Click == 1 && d == 1 )
    {
      $(".third_Character").detach().appendTo(".defender_Area").css({"background-color": "black", "color": "white"});
      //Asign selected enemy as the enemy
      enemy = Object.assign({}, characters.kylo);
      console.log("This rule is being called 12");
      kylo_Click = 0;
    }
}
///////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////

// function for reseting character counters
function reset_Char_Counter_Position(){
  console.log("Function reset Char Counter is being called")
  console.log("tracker is: " +tracker);
  if (tracker == 0)
    {
      // Reset variables

      rey_Click = 0;
      finn_Click = 0;
      kylo_Click = 0;
      captian_Click = 0;
      clicks = 0;
      characters.rey.hp = 100;
      characters.finn.hp =120;
      characters.kylo.hp = 180;
      characters.captain.hp = 150;
      // Call hp function to display resetted hp
      hp_Display();
      //Jquery to redisplay characters in staging area.
      $(".first_Character, .second_Character, .third_Character, .forth_Character").appendTo(".player_Staging_Area").css({"background-color": "white", "color": "black"});
      $(".player_Text").text("Select a Character to begin");
      $(".enemy_Text").text("May the force be with you!");
    }
    else
      {
        location.reload();
        // console.log("this code tracker 1 is being executed");

      }

}


//////////////////////////////////////////////////////////

// Execute Initial function to display characters hp on html
hp_Display();

//////////////////////////////// Event listenrs  /////////////////////////////////////
// Rey click
$(".first_Character ").on("click", function(){
    rey_Click++;
    first_Movement();
    second_Movement();

});

// Fin click
$(".second_Character").on("click", function(){
    finn_Click++;
    first_Movement();
    second_Movement();

});

// Kylo click
$(".third_Character").on("click", function(){
    kylo_Click++;
    first_Movement();
    second_Movement();
});

// Captain click
$(".forth_Character").on("click", function(){
    captain_Click++;
    first_Movement();
    second_Movement();
});

// Attack nutton event listenr
//Player clicks on Attack button
$(".button_Fight").on("click", function(){
  console.log("Attack button has been clicked!");
  console.log("Player has picked: "+ player.name + " and " + "Enemy has picked: "+ enemy.name);
  //Extract data counter variable from html that keeps track of wins
  win_Tracker = $(".player_Area").data("counter");
  console.log("If tracker is 1, the game is won. Current tracker is: "+ win_Tracker);

//////////////////// Attack Logic //////////////////////////////////////////////////////
// Executes this logic if enemy has been visited.
if (enemy.visited == 1)
  {

    // Code executes only if the player's current health is above 0
    if(player.hp > 0)
    {
      console.log("This rule enemy 1 is running. This enemy has been visited "+ enemy.visited);
      console.log("Enemy attack storage that is used for player's attack is: " + enemy.attack_Storage);

      var player_Attack = enemy.attack_Storage; // Retrive attack of player from enemy object
      player_Attack = player_Attack + 20; // Increase player attack by 5 each time it is called
      var player_Health = player.hp; // Retrive hp from pleyer object
      console.log("Player's attack is: " + player_Attack);

      var enemy_Attack = enemy.attack; // Retrive attack from enemy object
      var enemy_Health = enemy.hp; // Retrive hp from enemy object

      // Player attacks enemy once
      enemy_Health = enemy_Health - player_Attack;
      // Show player attack Message
      $(".player_Text").html("You attacked "+ enemy.name+ " for "+ player_Attack+ " damage." );

      //Enemy attacks player once
      player_Health = player_Health - enemy_Attack;
      // Show enemy attack Message
      $(".enemy_Text").html(enemy.name+ " attacked you for "+ enemy_Attack+ " damage." );

      // Assign enemy health back to the main Character object
      enemy.hp = enemy_Health
      console.log("Enemy's health has been assigned to the enemy object. Enemy's hp is " + enemy.hp)

      // Assign player health back to the main Character object
      player.hp = player_Health
      console.log("Player's health has been assigned to the player object. Player's hp is " + player.hp)

      // Loop through characters to store enemy and player objects in original object
      for (var check in characters)
        {
          console.log("Characters loop is running");
          // if statement to update enemy's health
          if (characters[check].name == enemy.name )
            {
              // enemy health is assigned into matched character object
              characters[check].hp = enemy.hp;
              //assign player's attack to enemy's attack storage to be called later
              characters[check].attack_Storage = player_Attack;
              console.log("Your attack is being stored in enemy "+ characters[check].attack_Storage);
              // Jquery to update display enemy's health
              $("[data-name=\"" + characters[check].name + "\"]").text(characters[check].hp);
              // If enemy's health is greater than or equal to 0
              if (enemy.hp <= 0)
                {
                  // Display message that enemy has been defeated
                  $(".player_Text").text("You have defeated " + enemy.name);
                  $(".enemy_Text").text("Choose another character to fight.");
                  // Removes the character from the DOM
                  $("[data-header=\"" + characters[check].name + "\"]").remove();
                  // Resets variables
                  // rey_Click = 0;
                  // finn_Click = 0;
                  // kylo_Click = 0;
                  // captain_Click = 0;
                  win_Tracker--;
                  //Reassigns enemy visited to character to prevent visited 1 or 2 condition from activating
                  enemy.visited = 2;
                  characters[check].visited = enemy.visited;
                  $(".player_Area").data("counter", win_Tracker);
                }
              //Reasigns enemy object with current enemy object
              enemy = Object.assign({}, characters[check]);
            }

          // if statement to update player's health
          if (characters[check].name == player.name )
            {
              //Assigns player hp to character object
              characters[check].hp = player.hp;
              //Displays current player health
              $("[data-name=\"" + characters[check].name + "\"]").text(characters[check].hp);
              //Reasigns player object with current player object
              player = Object.assign({}, characters[check]);
            }
          // End of for loop
        }
      //End of (player.hp > 0) condition
  }
// End of (enemy.visited == 1) condition
}
// Executes this logic if enemy has not been visited.
else if (enemy.visited == 0)
  {
    console.log("This rule enemy 0 is running. This enemy has not been visited "+ enemy.visited);

    // Assign visited to enemy object to keep track of enemy visited
    var visited = 1;
    enemy.visited = visited;

    var player_Attack = player.attack; // Retrive attack from player object
    var player_Health = player.hp; // Retrive hp from pleyer object

    var enemy_Attack = enemy.attack; // Retrive attack from enemy object
    var enemy_Health = enemy.hp; // Retrive hp from enemy object

    // Player attacks enemy once
    enemy_Health = enemy_Health - player_Attack;
    // Shows attack Player Message
    $(".player_Text").html("You attacked "+enemy.name+ " for "+ player_Attack+ " damage." );

    //Enemy attacks player once
    player_Health = player_Health - enemy_Attack;
    // Show enemy attack Message
    $(".enemy_Text").html(enemy.name+ " attacked you for "+ enemy_Attack+ " damage." );

    // Assign enemy health back to the main Character object
    enemy.hp = enemy_Health
    console.log("Enemy's health has been assigned to the enemy object. Enemy's hp is " + enemy.hp)

    // Assign player health back to the main Character object
    player.hp = player_Health
    console.log("Player's health has been assigned to the player object. Player's hp is " + player.hp)

    // Loop through Character object to compare which player and enemy has been selected
    for (var check in characters)
      {
        console.log("Characters loop is running");
        // if statement to update enemy's health
        if (characters[check].name == enemy.name )
          {
            // enemy health is assigned into matched character object
            characters[check].hp = enemy.hp;
            //assign visted to currrent enemy
            characters[check].visited = enemy.visited;
            console.log("visited: "+ characters[check].visited);
            //assign player's attack to enemy's attack storage to be called later
            characters[check].attack_Storage = player.attack;
            console.log("Your attack is being stored in enemy "+ characters[check].attack_Storage);
            // Jquery to update display enemy's health
            $("[data-name=\"" + characters[check].name + "\"]").text(characters[check].hp);
          // If enemy's health is greater than or equal to 0
          if (enemy.hp <= 0)
            {
              // Display message that enemy has been defeated
              $(".player_Text").text("You have defeated " + enemy.name);
              $(".enemy_Text").text("Choose another character to fight.");
              // Removes the character from the DOM
              $("[data-header=\"" + characters[check].name + "\"]").remove();
              // Resets variables
              rey_Click = 0;
              finn_Click = 0;
              kylo_Click = 0;
              captain_Click = 0;
              win_Tracker--;
              //Reassigns enemy visited to character to prevent visited 1 or 2 condition from activating
              enemy.visited = 2;
              characters[check].visited = enemy.visited;
              $(".player_Area").data("counter", win_Tracker);
            }
          //Reasigns enemy object with current enemy object
          enemy = Object.assign({}, characters[check]);

          }

        // if statement to update player's health
        if (characters[check].name == player.name )
          {
            //Assigns player hp to character object
            characters[check].hp = player.hp;
            //Displays current player health
            $("[data-name=\"" + characters[check].name + "\"]").text(characters[check].hp);
            //Reasigns player object with current player object
            player = Object.assign({}, characters[check]);
          }
      // End of for loop
      }
  // End of End of (enemy.visited == 0) condition
  }
  // Start of else Condition
else
  {
    //If above rules not met, character has not been selected. Display no enemy
    $(".player_Text").text("No Enemy has been selected.");
    $(".enemy_Text").text("Please select an enemy.");
  }


// Condition for Game over
if (player.hp <= 0)
  {
    //Display game over
    $(".player_Text").text("You have been defeated. Game over");
    $(".enemy_Text").text("Click the Restart button to try again!");
    // Displays button
    $(".button_Reset").css({"display": "block", "visibility": "visible"});
  }

//Condition for Game Won
if (win_Tracker <= 1)
  {
    //Display game won
    $(".player_Text").text("You have defeated all your enemies.");
    $(".enemy_Text").text("You Win! Click restart to play again.");
    // Displays button
    $(".button_Reset").css({"display": "block", "visibility": "visible"});
    // To tell program to reset the entire game
    tracker++;
  }

///////////////////////////////////////////////////////////////////////////////////////////
// End of button_Fight
});

///// PLayer Clicks on Reset Button //////
$(".button_Reset").on("click", function(){
  console.log("Button reset has been clicked");
  // Calls on reset function to reset the game
  reset_Char_Counter_Position()
  // Hides the button.
  $(".button_Reset").css({"display": "none", "visibility": "hidden"});


//End of Reset Button
});

//////////////////////////////// End of Event listenrs  /////////////////////////////////////


// End of document.ready()
});
