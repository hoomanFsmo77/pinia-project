import {computed} from "vue";
import {productStore} from "../store/products.js";
import {cartStore} from "../store/cart.js";
import Swal from "sweetalert2";

export default ()=>{
    const productSt=productStore()
    const cartSt=cartStore()
    const products=computed(()=>productSt.productList)
    const addToCart =async id => {
        let selectedProduct=computed(()=>productSt.selectedProduct(id))
        cartSt.addToCart(selectedProduct.value)
        await Swal.fire({
            title: "Product Added!",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top',
        });
    }
    return {addToCart,products}
}