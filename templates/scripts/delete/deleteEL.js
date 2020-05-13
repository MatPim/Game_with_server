function deleteEL(){
    function deleteP(elements, id){
        for(const element in elements.players){
            const player =  elements.players[element]   
            if(player.id == id){
                delete elements.players[element]
            }
        }
    }
    function deleteF(elements, id){

    }
    return {
        deleteP,
        deleteF
    }
} 
export default deleteEL;