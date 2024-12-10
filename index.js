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