function cart() {
    const itemSelect = document.getElementById('item');
    const itemQuantity = document.getElementById('Qty');
    const addToCartButton = document.getElementById('add-to-cart');
    const cartTableBody = document.querySelector('#cart-table tbody');
    const totalValueSpan = document.getElementById('total-value');

    const cart = new Map();

    function formatCurrency(value) {
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value);
    }

    function updateCart() {
        cartTableBody.innerHTML = '';
        let totalValue = 0;

        cart.forEach((item, name) => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = name;
            row.appendChild(nameCell);

            const quantityCell = document.createElement('td');
            quantityCell.textContent = item.quantity;
            row.appendChild(quantityCell);

            const priceCell = document.createElement('td');
            priceCell.textContent = formatCurrency(item.price);
            row.appendChild(priceCell);

            const totalCell = document.createElement('td');
            totalCell.textContent = formatCurrency(item.total);
            row.appendChild(totalCell);

            cartTableBody.appendChild(row);

            totalValue += item.total;
        });

        totalValueSpan.textContent = formatCurrency(totalValue);
    }

    addToCartButton.addEventListener('click', () => {
        const selectedItem = itemSelect.options[itemSelect.selectedIndex];
        const itemName = selectedItem.value;
        const itemPrice = parseFloat(selectedItem.getAttribute('data-price'));
        const quantity = parseInt(itemQuantity.value);

        if (isNaN(quantity) || quantity <= 0) {
            alert('Please enter a valid quantity');
            return;
        }

        if (cart.has(itemName)) {
            const existingItem = cart.get(itemName);
            existingItem.quantity += quantity;
            existingItem.total = existingItem.quantity * existingItem.price;
        } else {
            const newItem = {
                price: itemPrice,
                quantity: quantity,
                total: itemPrice * quantity
            };
            cart.set(itemName, newItem);
        }

        updateCart();
    });
}

document.addEventListener('DOMContentLoaded', cart);
