var i = 0;
function name(){
    i = i + 1
    let playerName = 'player' + i
    //console.log(playerName)
    return {playerName}
}
export default name;