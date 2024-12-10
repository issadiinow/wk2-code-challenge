const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const addItemBtn = document.getElementById('add-item-btn');
const shoppingList = document.getElementById('shopping-list');
const clearListBtn = document.getElementById('clear-list-btn');
const searchInput = document.getElementById('search-input');
const sortBtn = document.getElementById('sort-btn');

// Array to store shopping list items
let items = [];

// Function to save items to local storage
function saveItems() {
    localStorage.setItem('shoppingListItems', JSON.stringify(items));
}

// Function to load items from local storage
function loadItems() {
    const savedItems = localStorage.getItem('shoppingListItems');
    if (savedItems) {
        items = JSON.parse(savedItems);
        renderItems();
    }
}

// Function to render items in the list and in order of priority
function renderItems(filter = '') {
    shoppingList.innerHTML = '';
    const filteredItems = items.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));

    filteredItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.toggle('purchased', item.purchased);

        const itemSpan = document.createElement('span');
        itemSpan.textContent = `${item.name} (Priority: ${item.priority})`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            items.splice(index, 1);
            saveItems();
            renderItems(filter);
        });

        li.addEventListener('click', () => {
            item.purchased = !item.purchased;
            saveItems();
            renderItems(filter);
        });

        li.appendChild(itemSpan);
        li.appendChild(deleteBtn);
        shoppingList.appendChild(li);
    });
}
// Event listener for clearing the list
clearListBtn.addEventListener('click', () => {
    items = [];
    saveItems();
    renderItems();
});

// Allow adding items by pressing Enter key
itemInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addItemBtn.click();
    }
});

// Event listener for sorting items by priority
sortBtn.addEventListener('click', sortItemsByPriority);

// Event listener for searching items
searchInput.addEventListener('input', (e) => {
    renderItems(e.target.value);
});
