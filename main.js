//const product = 'Socks'

//Creamos a Vue App
const app = Vue.createApp({
    //data: function() -> recortado por es6
    data(){
        return{
            //Nos devolvera nuestra data
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inventory: 100,
            //Reto 
            onSale: true

        }
    }
})
