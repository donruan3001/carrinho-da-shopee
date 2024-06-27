/*casos de uso dos itens    
criar item com subtotal certo
*/
export default createItem;

async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    }
}