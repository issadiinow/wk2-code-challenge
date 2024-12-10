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

/// Function to render items in the list and in order of priority
function renderItems(filter = '') {
    shoppingList.innerHTML = '';
    const filteredItems = items.filter((item) => 
        item.name.toLowerCase().includes(filter.toLowerCase())
    );

    filteredItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.toggle('purchased', item.purchased);

        const priorityText = {
            '1': 'Low',
            '2': 'Medium',
            '3': 'High'
        }[item.priority];

        const itemSpan = document.createElement('span');
        itemSpan.textContent = `${item.name} (Priority: ${priorityText})`;

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
// Event listener for adding items
addItemBtn.addEventListener('click', () => {
    const itemName = itemInput.value.trim();
    const priority = priorityInput.value;

    if (itemName && priority) {
        const newItem = {
            name: itemName,
            priority: priority,
            purchased: false
        };

        items.push(newItem);
        saveItems();
        renderItems();

        // Clear input fields
        itemInput.value = '';
        priorityInput.value = '';
    } else {
        alert('Please enter an item name and select a priority');
    }
});

// Event listener for clearing the list
clearListBtn.addEventListener('click', () => {
    items = []; // Clear the items array
    saveItems(); // Update local storage
    renderItems(); // Update the list display
});


// Function to sort items by priority
function sortItemsByPriority() {
    // Define priority order
    const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };

    items.sort((a, b) => {
        return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

    saveItems();
    renderItems();
}


loadItems();
