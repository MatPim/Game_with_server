import cleaner from './cleanEvent.js'
import playerState from './state.js'

function listener(elements, mainPlayer){
    console.log(mainPlayer)
    function listen(event){

        const clean = cleaner(event)
        //console.log(clean, elements, mainPlayer)
        const state = playerState(clean, elements, mainPlayer)

        return {
            clean,
            state
        }
    }
    return { 
        listen
    }
}


export default listener;