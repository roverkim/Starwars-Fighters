$(document).ready(function() {

// Declaring an object that stores character information
var characters = {
  rey: {name: "rey", hp: 100, attack: 20, attack_Storage: 0, visited: 0},
  finn: {name: "finn", hp: 120, attack: 25, attack_Storage: 0, visited: 0},
  kylo: {name: "kylo", hp: 180, attack: 20, attack_Storage: 0, visited: 0},
  captain: {name: "captain", hp: 150, attack: 15, attack_Storage: 0, visited: 0}
};


player = {}
enemy = {}



$(".click").on("click", function(){

// choose a random key
  var key = Object.keys(characters)[Math.floor(Math.random()*Object.keys(characters).length)];

  player = Object.assign({}, characters.rey);
  console.log("player has been assigned "+ player.name );

  enemy = Object.assign({}, characters[key]);
  console.log("enemy has been assigned: " + enemy.name);


  console.log("visited enemy: " + enemy.visited);
    console.log("working");

    if (enemy.visited == 1){
      console.log("enemy visited is 1");

      var player_Attack = enemy.attack_Storage; // Retrive attack of player from enemy object
      player_Attack = player_Attack +5; // Increase player attack by 5 each time it is called
      var player_Health = player.hp; // Retrive hp from pleyer object
      console.log("player attack should be twenty-five" + player_Attack);

      var enemy_Attack = enemy.attack; // Retrive attack from enemy object
      var enemy_Health = enemy.hp; // Retrive hp from enemy object

      // Player attacks enemy once
      enemy_Health = enemy_Health - player_Attack;

      //Enemy attacks player once
      player_Health = player_Health - enemy_Attack;

      // Assign enemy health back to the main Character object
      enemy.hp = enemy_Health
      console.log("Enemy's health has been assigned to the enemy object. enemy's hp should be a seventy-five: " + enemy.hp)

      // Assign player health back to the main Character object
      player.hp = player_Health
      console.log("Player's health has been assigned to the player object. player's hp should be a fifty: " + player.hp)
      for (var check in characters){
        console.log("loop is running");
        console.log(characters[check].name)
        // if statement to update enemy's health
        if (characters[check].name == enemy.name )
        {
        characters[check].hp = enemy.hp;
        //assign player's attack to enemy's attack storage to be called later
        characters[check].attack_Storage = player_Attack;
        }

        // if statement to update player's health
        if (characters[check].name == player.name )
        {
        characters[check].hp = player.hp;
        }
      }


    }
    else if (enemy.visited == 0) {
      var visited = 1;
      enemy.visited = visited;
      console.log("enemy visited is: " + enemy.visited);
      // Variable to Keep track of visited enemy
      var visted = 1;
      var player_Attack = player.attack; // Retrive attack from player object
      var player_Health = player.hp; // Retrive hp from pleyer object

      var enemy_Attack = enemy.attack; // Retrive attack from enemy object
      var enemy_Health = enemy.hp; // Retrive hp from enemy object

      // Player attacks enemy once
      enemy_Health = enemy_Health - player_Attack;

      //Enemy attacks player once
      player_Health = player_Health - enemy_Attack;

      // Assign enemy health back to the main Character object
      enemy.hp = enemy_Health
      console.log("Enemy's health has been assigned to the enemy object. enemy's hp should be a hundred: " + enemy.hp)

      // Assign player health back to the main Character object
      player.hp = player_Health
      console.log("Player's health has been assigned to the player object. player's hp should be a seventy-five: " + player.hp)

      // Loop through Character object to compare which enemy has been selected
      for (var check in characters){
        console.log("loop is running");
        console.log(characters[check].name)
        // if statement to update enemy's health
        if (characters[check].name == enemy.name )
        {
        characters[check].hp = enemy.hp;
        //assign visted to currrent enemy
        characters[check].visited = enemy.visited;
        console.log("visited: "+characters[check].visited);
        //assign player's attack to enemy's attack storage to be called later
        characters[check].attack_Storage = player.attack;
        }

        // if statement to update player's health
        if (characters[check].name == player.name )
        {
        characters[check].hp = player.hp;
        }
      }
    }
    // if enemy has been visited, use attack_Storage as the attack variable
    //
    // console.log("After assining player object hp back to original player char hp, char hp should be a seventy-five: " + characters.rey.hp);
    // console.log("After assining enemy object hp back to original enemy char hp, char hp should be a hundred: " + characters.finn.hp);
    // // finn hp should be 100


});



});
