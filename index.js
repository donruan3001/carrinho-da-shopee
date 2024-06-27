import createItem from "./services/itens.js"
import * as cartService from "./services/cart.js"


const myCart = []
const myWishList = []

console.log('welcome to your shopee cart')

const item1 = await createItem('hotwealls', 34.33, 1);
const item2 = await createItem('larborguini', 54.99, 3);

await cartService.addItem(myCart, item2)
await cartService.addItem(myCart, item1)

await cartService.removeItem(myCart, 2)

await cartService.showCart(myCart)
await cartService.calculateTotal(myCart);