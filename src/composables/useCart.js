import {cartStore} from "../store/cart.js";
import {productStore} from "../store/products.js";
import {computed} from "vue";

export default ()=>{
    const cartSt=cartStore()
    const productSt=productStore()
    const cart=computed(()=>cartSt.cartList)
    const finalPrice=computed(()=>cartSt.finalPrice)
    const clearCart = () => {
        cartSt.clearCart()
        productSt.$reset()
    }
    return {cartSt,cart,finalPrice,clearCart}
}