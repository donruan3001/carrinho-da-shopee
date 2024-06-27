/*quais ações meu carrinho pode fazer
adicionar um item,
deletar item,
remover um item,
calcular o total
*/export { addItem, calculateTotal, deleteItem, removeItem, showCart }

async function addItem(userCart, item) {
    userCart.push(item);
}
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name == name);
    if (index != -1) {
        userCart.splice(index, 1);
    }
}
async function removeItem(userCart, index) {
    //transforma o indice visual do usuario ,para o indice do bakend
    const deleteIndex = index - 1
    //é maior que 0 e se é menor que o tamanho do carrinho
    if (index >= 0 && userCart.length) {
        userCart.splice(index, 1)
    }
}
async function showCart(userCart) {
    console.log('Shopee cart list:')
    userCart.forEach((item, index) => {
        console.log(`${index + 1}.${item.name}-- ${item.price}|\n${item.quantity}| Subtotal:${item.subtotal()}\n`)

    })
}
async function calculateTotal(userCart) {

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log('o preço total do meu carrinho: ' + result)
}
