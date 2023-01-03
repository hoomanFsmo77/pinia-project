import {defineStore} from "pinia";

const storeData = data => {
    localStorage.setItem('cart',JSON.stringify(data))
}
const getData = () => {
    return JSON.parse(localStorage.getItem('cart'))
}

export const cartStore=defineStore('cart',{
    state:()=>{
        return{
            cart:getData() ?? [],
            totalPrice:null
        }
    },
    getters:{
        cartLength(state){
            return state.cart.length
        },
        cartList(state){
            return state.cart
        },
        finalPrice(state){
            return state.totalPrice
        },
    },
    actions:{
        addToCart(product){
            this.cart.some(item=>item.id===product.id) || this.cart.push(product)
            storeData(this.cart)
        },
        clearCart(){
            this.cart=[]
            this.totalPrice=null
            storeData(this.cart)
        },
        updateTotalPrice(){
            let total=0
            this.cart.forEach(item=>{
                total+=item.price * item.count
            })
            this.totalPrice=total
        },
        increaseTotalPrice(payload){
            this.totalPrice+=payload.price
            if(payload.id){
                this.cart[this.cart.findIndex(item=>item.id===payload.id)].count=payload.count
            }
            storeData(this.cart)
        },
        decreaseTotalPrice(payload){
            this.totalPrice-=payload.price
            if(payload.id){
                this.cart[this.cart.findIndex(item=>item.id===payload.id)].count=payload.count
            }
            storeData(this.cart)
        },
        deleteProduct(payload){
            this.totalPrice-=payload.price * payload.count
            this.cart.splice(this.cart.findIndex(item=>item.id===payload.id),1)
            if(this.cart.length===0){this.totalPrice=null}
            storeData(this.cart)
        }
    }
})