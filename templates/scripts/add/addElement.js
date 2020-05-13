//import name from './nameGenerator.js'
import location from './locationGenerator.js'
import color from './colorGenerator.js'


function addElement(elements, id){
    console.log('creating', elements, id)
    //const playerID = name();
    //onsole.log(playerID.playerName)
    const playerLocation = location();
    //console.log(playerLocation.Y().location, playerLocation.X().location)
    const playerColors = color();
    //console.log(playerColors.color1(), playerColors.color2(), playerColors.color3())

    const playerCarac = {
            id: id,
            x: playerLocation.X().location,
            y: playerLocation.Y().location, 
            c1: playerColors.color1(),
            c2: playerColors.color2(),
            c3: playerColors.color3()
    }
    
    elements.players.push(playerCarac)
    
    return{
        id,
        playerLocation,
        playerColors
    }
}
export default addElement;