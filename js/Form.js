class Form{
    constructor(){
        this.input = createInput("name");
        this.playButton = createButton('PLAY');     
        this.title = createElement('h2');  
        this.reset = createButton('RESTART'); 
    }

    /*hide(){
        this.input.hide();
        this.playButton.hide();
        //this.title.hide();
    }*/

    hide(){
        this.input.hide();
        this.playButton.hide();
    }



    display(){
        //this.title.html("BACKSTABBER");
        //this.title.position(550,50);
          
        this.input.position(550,300);
        this.playButton.position(720,300);

        this.reset.position(displayWidth-100,20);
            
            
            
        this.playButton.mousePressed(()=>{
        this.input.hide();
        this.playButton.hide();

        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update(); 
        player.updateCount(playerCount);
        });
            

        this.reset.mousePressed(()=>{
            game.updateState(0);
            player.updateCount(0);
        });

    }
}