//server//

const socket = io()
const mainPlayer = []
socket.on('connect', () => {
    console.log(`player ${socket.id} connected in room`)
    let mainPlay = socket.id
    mainPlayer.push(mainPlay)
})
socket.on('setup', (data) => {
    const elements = data
    console.log(elements)
    const game = launch(elements)
    
})
//application part//
import render from './render/render.js'
import listener from './keyboard/key.js'

function launch(elements){
    const canvas = document.querySelector('canvas')
    const screen = canvas.getContext('2d')

    const elementsInGame = render(screen, elements)
    
    const key = listener(elements, mainPlayer[0])
    console.log(mainPlayer)
    document.addEventListener('keydown', (event) => {
        key.listen(event)
        render(screen,elements)
    })

    return{
        screen, 
        key
    }
}
