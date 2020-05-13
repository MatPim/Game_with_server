let i = 1

function color(){

    

        function color1(){
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];              
            }
            return color;
        }
        function color2(){
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];              
            }
            return color;
            /*
            switch(i){
                case 1:{return 'purple'}
                case 2:{return 'green'}
                case 3:{return 'blue'}
                case 4:{return 'orange'}
                case 5:{return 'red'}
            }
            */
        }
        function color3(){
            //console.log('entrou')
            
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            
            /*switch(i){
                case 1:{i = i + 1;return 'pink'}
                case 2:{i = i + 1;return 'gray'}
                case 3:{i = i + 1;return 'cadetblue'}
                case 4:{i = i + 1;return 'yellow'}
                case 5:{i = i + 1;return 'black'}
            }
            */
        }
        return{
            color1,
            color2,
            color3
        }

}
export default color;