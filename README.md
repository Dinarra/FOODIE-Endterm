# Foodie Restaurant Website

A responsive and interactive restaurant website developed for the **Web Technologies Endterm Project**.

## Live Website

**Website:** https://dinarra.github.io/FOODIE-Endterm/

**GitHub Repository:** https://github.com/Dinarra/FOODIE-Endterm

## Project Overview

Foodie is a restaurant website originally created for the Midterm assignment and improved for the Endterm assignment.

The project uses HTML, CSS, Bootstrap, JavaScript, and jQuery to provide an interactive and user-friendly experience.

Visitors can explore the restaurant menu, search for dishes, save favorites, learn about the restaurant, request a table reservation, and send messages through a contact form.

## Team Members and Responsibilities

### 1. Nurzhaubay Dinara
**Home and Menu Functionality**
- Home page development
- Dynamic popular dish cards
- Random dish recommendation
- Menu search and category filtering
- Favorite dishes using localStorage

### 2. Balzhan Amantaeva
**Reservation and Contact Functionality**
- Reservation and Contact pages
- JavaScript form validation
- Field-specific error messages
- jQuery events and animation effects
- Form success messages

### 3. Li Yuixin
**About Page and Website Design**
- About page development
- Interactive information buttons
- CSS styling and responsive layouts
- Bootstrap integration
- Website design consistency

### Team Collaboration
All team members participated in project testing, reviewing functionality, preparing documentation, and final presentation.

All team members are responsible for reviewing their assigned parts, testing the website, and preparing for the final presentation.

## Technologies Used

- **HTML5** — Website structure and semantic elements
- **CSS3** — Styling, layouts, and responsive design
- **Bootstrap 5.3.3** — Responsive grid system and UI components
- **JavaScript** — Interactive functionality and DOM manipulation
- **jQuery 3.7.1** — Form interactions and animation effects
- **localStorage** — Saving favorite dishes in the browser

## Website Pages

### Home

- Displays popular restaurant dishes
- Creates dish cards dynamically using JavaScript
- Includes a Surprise Me button that recommends a random dish
- Provides navigation to the Menu and About pages

### Menu

- Displays restaurant dishes and prices
- Provides live dish search
- Filters dishes by category
- Allows users to add and remove favorites
- Saves favorites using localStorage
- Includes a price overview table

### About

- Introduces the restaurant and its story
- Displays information about the atmosphere, team, and ingredients
- Includes interactive buttons that update information dynamically

### Reservation

- Provides a table reservation request form
- Validates name, email, phone, date, time, and guest count
- Displays field-specific error messages
- Prevents invalid form submissions
- Shows a success message for valid requests

### Contact

- Displays restaurant contact information
- Provides a contact message form
- Validates name, email, subject, and message
- Uses jQuery for event handling and visual effects
- Displays animated error and success messages

## JavaScript Implementation

The project demonstrates the following concepts:

**Arrays and Loops**
- Arrays for restaurant dishes, categories, and favorites
- `forEach()` and `for...of` loops

**Functions**
- Reusable functions with parameters
- Functions that return values
- Separate functions for filtering, rendering, and validation

**DOM Manipulation**
- `createElement()`
- `appendChild()`
- `innerHTML`
- `textContent`
- `classList`
- Dynamic creation and removal of elements

**Event Handling**
- `click`
- `input`
- `change`
- `submit`
- `focusin` and `focusout`
- `addEventListener()`
- `preventDefault()`

## jQuery Implementation

The Contact page uses jQuery for:

- ID and element selectors
- DOM traversal using `closest()`
- DOM insertion using `after()` and `append()`
- Event handling using `.on()`
- `fadeIn()` for displaying errors
- `fadeOut()` for removing errors
- `slideDown()` for success messages

## Responsive Design

The website uses Bootstrap's responsive grid system and CSS media queries to support different screen sizes.

The layout is designed for:

- Mobile devices
- Tablets
- Desktop computers

## Project Structure

```text
FOODIE-Endterm/
├── index.html
├── foodie-home.html
├── foodie-menu.html
├── foodie-about.html
├── foodie-reservation.html
├── foodie-contact.html
├── foodie.css
├── home.js
├── menu.js
├── about.js
├── reservation.js
├── contact.js
└── README.md
```

## How to Run the Project

1. Download or clone the GitHub repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` using a browser or Live Server.
4. Navigate between the five website pages.
5. Test the interactive features.

An internet connection is required for external libraries, fonts, and images.

## Testing Instructions

1. Open all five pages and check navigation links.
2. Click Surprise Me on the Home page.
3. Search for dishes on the Menu page.
4. Filter dishes by category.
5. Add and remove favorite dishes.
6. Refresh the Menu page to check saved favorites.
7. Test all interactive buttons on the About page.
8. Submit the Reservation form with invalid and valid data.
9. Submit the Contact form with invalid and valid data.
10. Check the website on mobile, tablet, and desktop screen sizes.
11. Check the browser Console for JavaScript errors.

## Important Notes

The Reservation and Contact forms are frontend demonstrations. They validate user input and display success messages but do not send information to a backend server.

## Conclusion

The Foodie Endterm project extends the original static restaurant website with interactive JavaScript functionality, dynamic content, form validation, browser storage, and jQuery effects.

The project demonstrates practical frontend development skills and responsive web design.