class Player{

    constructor(){
        this.index = null;
        this.kills = 0;
        this.name = null;
        this.life = 3;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
            playerCount = data.val()
        });
    }

    updateCount(count){
        database.ref('/').update({
            playerCount : count
        });       
    }

    getPositions(){
        var xPositionRef = database.ref('x');
        xPositionRef.on("value",(data)=>{
            xPos = data.val();
        });
        var yPositionRef = database.ref('y');
        yPositionRef.on("value",(data)=>{
            yPos = data.val();
        });
    }

    update(){
        var playerIndex = "players/player"+this.index ;
        database.ref(playerIndex).set({
            name:this.name,
            life:this.life,
            x: this.xPos,
            y: this.yPos
        });
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val()
        });
    }
}