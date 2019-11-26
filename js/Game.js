class Game{
    constructor(){

    }
    getState(){
       var gameStateRef = database.ref('gameState');
       gameStateRef.on("value",function(data){
           gameState = data.val();
       });
    }

    updateState(state){
        database.ref('/').update({
            gameState : state
        });
    }

    async start(){
        if (gameState===0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
        }
        
    }

    play(){
        var index = 0;
                                       
        form.hide();

        Player.getPlayerInfo();

        player.getPositions();

        player1  = createSprite(200,500,50,50);
        player2  = createSprite(400,500,50,50);
        player3  = createSprite(500,500,50,50);
        player4  = createSprite(600,500,50,50);
        players=[player1,player2,player3,player4];

        
        if (allPlayers!==undefined){
            var yPosition=100;
            for (var plr in allPlayers){
                index=index+1;

                xPos=xPos+100;
                yPos=yPos+100;

                players[index-1].x = xPos;
                players[index-1].y = yPos;

                yPosition+=20;
                textSize(15);
                text(allPlayers[plr].name + ": " + allPlayers[plr].life,200,yPosition);

                if (keyIsDown(LEFT_ARROW)){
                    player.xPos=player.xPos-20;
                    player.update();
                }
                if (keyIsDown(UP_ARROW)){
                    player.yPos=player.yPos-20;
                    player.update();
                } 
            }  
            
        }
        
        
    }
    
}