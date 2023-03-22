//const product = 'Socks'

//Creamos a Vue App
const app = Vue.createApp({
    //data: function() -> recortado por es6
    data(){
        return{
            //Nos devolvera nuestra data
            cart:0,
            priceTotal:0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                //RETO CLASE
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', price: 10 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', price: 15 },
            ]

        }
    },

    //Métodos
    methods: {
        addToCart(variantColor){
            this.cart += 1
            
            this.color = variantColor

            if (variantColor = 'green') {
                variantPrice = 10
            } else {
                variantPrice = 15
            }
            
            this.priceTotal += variantPrice
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        //RETO CURSO
        removeItem(variantColor){
            this.cart -= 1
            this.color = variantColor

            if (variantColor = 'green') {
                variantPrice = 10
            } else {
                variantPrice = 15
            }
            
            this.priceTotal -= variantPrice
        }
        
    }
})
