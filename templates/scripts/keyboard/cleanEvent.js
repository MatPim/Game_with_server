function cleaner(event){
    switch(event.key){
        case 'w' :{let value = 'y-1'; return value}
        case 's' :{let value = 'y+1'; return value}
        case 'a' :{let value = 'x-1'; return value}
        case 'd' :{let value = 'x+1'; return value}
    }
    console.log(`"${event.key}" is not a game function!`)
}
export default cleaner;