# Interactive Shopping List

## Description
This project is an **Interactive Shopping List** web application that allows users to manage their shopping lists effectively. 
Users can add, edit, mark as purchased, and remove items from their shopping list. 

The application also supports priority-based sorting, item searching, and data persistence using **local storage**.

## Features

### Core Features:
- **Add Items**: Users can add items to their shopping list.
- **Mark as Purchased**: Items can be marked as purchased, with a visual update (strikethrough and background color).
- **Clear List**: Remove all items from the shopping list.

### Bonus Features:
- **Search Items**: Search for specific items within the shopping list.
- **Priority Sorting**: Organize items by priority (higher priority items appear at the top).
- **Data Persistence**: Save and load shopping list data using **local storage**.

## How to Use the Application

### Setup
1. Clone the repository to your local machine
2. Open the project folder in Visual Studio Code
3. Install the Live Server extension if not already installed
4. Right-click on `index.html` and select "Open with Live Server"
5. The application will automatically open in your default web browser
6. Live Server will reload the page automatically when you make changes to your files

### Interaction Guide
- **Add Items:** 
  - Type an item name in the input field
  - Click the "Add" button or press Enter
  - Item will be added to the shopping list

- **Mark Items as Purchased:**
  - Click on an item in the list to toggle its purchased status
  - Purchased items will have a visual indication (e.g., strikethrough text)

- **Clear List:**
  - Click the "Clear List" button to remove all items from the list

## Technologies Used
- **HTML**: Provides the structure of the web page.
- **CSS**: Ensures responsive and user-friendly design.
- **JavaScript**: Adds interactivity with DOM manipulation and event handling.

## File Structure
```plaintext
├── index.html       # The main HTML file for the structure
├── style.css        # CSS file for styling (Flexbox layout)
├── script.js        # JavaScript file for functionality
├── README.md        # Documentation file (this file)
```