function playerState(keyPress, elements, mainPlayer){
    for(const element in elements.players){
        const player = elements.players[element]
        console.log(player,mainPlayer)
        if(player != null){
            if(player.id == mainPlayer){
                switch(keyPress){
                    case 'y-1': {player.y = player.y - 1;return}
                    case 'y+1': {player.y = player.y + 1;return}
                    case 'x-1': {player.x = player.x - 1;return}
                    case 'x+1': {player.x = player.x + 1;return}
                }   
            }
        
        }


    }

}
export default playerState;