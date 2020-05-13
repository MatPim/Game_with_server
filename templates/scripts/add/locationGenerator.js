function location(){
    function X(){
        var location = Math.floor(Math.random() * (48 - 1)) + 2
        return{
            location
        }
    }
    function Y(){
        var location =  Math.floor(Math.random() * (48 - 1)) + 2
        return{
            location
        }
    }
    return{
        X,
        Y
    }
}
export default location;