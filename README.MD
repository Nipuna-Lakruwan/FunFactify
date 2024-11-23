# Fun Facts Generator

This is a simple web application that generates random fun facts and displays them on the screen. It also keeps a history of the generated fun facts and rotates the theme every 5 minutes.

## Features

- Generates random fun facts
- Displays the generated fun fact
- Keeps a history of generated fun facts
- Rotates the theme every 5 minutes

## Project Structure

```
index.html
style.css
script.js
```

## Usage

1. Clone the repository or download the files.
2. Open 
```
index.html
```
 in your web browser.

## Files

### 

index.html



This file contains the HTML structure of the application.

### 

style.css



This file contains the CSS styles for the application, including theme colors and animations.

### 

script.js



This file contains the JavaScript code for generating random fun facts, rotating themes, and handling DOM interactions.

## Functions

### rotateTheme

Rotates the theme every 5 minutes.

```javascript
function rotateTheme() {
  themeIndex = (themeIndex + 1) % themes.length;
  document.body.className = themes[themeIndex];
}
```

### generateFunFact

Generates a random fun fact and updates the display and history.

```javascript
function generateFunFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const newFact = facts[randomIndex];

  // Update the display
  factDisplay.style.opacity = 0;
  setTimeout(() => {
      factDisplay.textContent = newFact;
      factDisplay.style.opacity = 1;
  }, 300);

  // Add to history
  const listItem = document.createElement('li');
  listItem.textContent = newFact;
  historyList.prepend(listItem);
}
```