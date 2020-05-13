import express from 'express'
import http from 'http'
import socketio from 'socket.io'

const app = express()
const server = http.createServer(app)
const sockets = socketio(server)

app.use(express.static('./templates'))


//>GAME CONTENT<//
import addElement from './templates/scripts/add/addElement.js'
import deleteEL from './templates/scripts/delete/deleteEL.js'
const deleteElement = deleteEL()
const elements = {
    fruits : [],
    players : []
}
//><//
server.listen(3000, () => {
    console.log('opened')
})

sockets.on('connection', (socket) => {
    console.log(`user connected ${socket.id}`)
        
    addElement(elements, socket.id)

    
    socket.emit('setup', elements)

      socket.on('disconnect', () => {
      for(const player in elements.players){
          const playerElement = elements.players[player]
          console.log(playerElement)
          if(playerElement.id == socket.id){
              console.log('deleting')
              deleteElement.deleteP(elements, socket.id)
          }
      }
    })
})



