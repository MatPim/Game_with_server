

function render(screen, elements){
    console.log('rendering')
    //console.log(`elements in game = ${elements}`)
    screen.clearRect(0,0,50,50)

    for(const fruit in elements.fruits){
        const fruitElement = elements.fruits[fruit]
        screen.fillStyle = 'green'
        screen.fillRect(fruitElement.x, fruitElement.y, 1, 1)
    }
    for(const player in elements.players){

        const playerElement = elements.players[player]
        if(playerElement != null){
            screen.fillStyle = playerElement.c1
            screen.fillRect(playerElement.x,playerElement.y,1,1)
            screen.fillStyle = playerElement.c2
            screen.fillRect(playerElement.x + 1, playerElement.y, 1, 1)
            screen.fillRect(playerElement.x - 1, playerElement.y, 1, 1)
            screen.fillRect(playerElement.x, playerElement.y + 1, 1, 1)
            screen.fillRect(playerElement.x, playerElement.y - 1, 1, 1)

            screen.fillStyle = playerElement.c3
            screen.fillRect(playerElement.x + 1, playerElement.y + 1, 1, 1)
            screen.fillRect(playerElement.x - 1, playerElement.y + 1, 1, 1)
            screen.fillRect(playerElement.x + 1, playerElement.y - 1, 1, 1)
            screen.fillRect(playerElement.x - 1, playerElement.y - 1, 1, 1)
            
            
        
        }



    }
}
export default render;