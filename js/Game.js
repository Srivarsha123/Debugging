class Game {
  constructor(){
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      background(backgroundImg)
      form = new Form()
      form.display();
    }

    basket1 = createSprite(1,100);
    basket1.addImage(basketImg);
    basket2 = createSprite(1,1);
    basket2.addImage(basketImg);
    baskets = [basket1, basket2];
  }

  play(){
    background(backgroundImg)
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      if (index === player.index){
        stroke(0);
        fill("black");
        text(player.name, x, y)
        //camera.position.x = windowWidth/2;
        //camera.position.y = baskets[index-1].y
      }

      var index = 0;

      var x = x + 300;
      var y = 600;

      for(var plr in allPlayers){
        index = index + 1 ;

        //x = x + 500;
        //use data form the database to display the cars in y direction
        x = windowHeight - allPlayers[plr].distance;
        baskets[index-1].x = x;
        baskets[index-1].y = y;
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance -=10
      player.update();
    }
    else if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    //if(player.distance>4500){
      //gameState = 2
    //}

    drawSprites();
  }

  end(){
    console.log("Game over")
  }
}
