let deleteBtn = document.getElementsByClassName('cart-delete-item');
let rowToRemove = document.getElementsByClassName('products');

let removeItem = (target) => {
    rowToRemove.remove()
}
deleteBtn.addEventListener('click', rowToRemove)