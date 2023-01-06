# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop](https://raw.githubusercontent.com/GHWhite419/News-homepage-coding-challenge/main/screenshots/Desktop.png)
![Mobile](https://raw.githubusercontent.com/GHWhite419/News-homepage-coding-challenge/main/screenshots/Desktop.png)
![Tablet portrait](https://raw.githubusercontent.com/GHWhite419/News-homepage-coding-challenge/main/screenshots/Tablet%20portrait.png)
![Tablet landscape](https://raw.githubusercontent.com/GHWhite419/News-homepage-coding-challenge/main/screenshots/Tablet%20landscape.png)

### Links

- Solution URL: (https://www.frontendmentor.io/solutions/news-homepage-9LivtaYvik)
- Live Site URL: (https://ghwhite419.github.io/News-homepage-coding-challenge/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

The big challenge I dealt with in this project was creating my first collapsible and responsive navbar. It took a long time for me to figure out how to create a nav menu that will slide open and closed when clicked, and that simply stays open on the desktop viewport without needing the button. My solution involved creating two nav ULs: one that displays on the desktop viewport but with a default display of none, and a second that's contained entirely within the sidebar that displays only on mobile viewports.


```html

  <header>
    <img src="assets/images/logo.svg" aria-hidden="true">
    <!-- Navbar code -->
    <nav>
      <ul class="navmenu">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </nav>
    <img class="menu-open" src="assets/images/icon-menu.svg" aria-hidden="true">
    <div class="sidebar">
      <img class="menu-close" src="assets/images/icon-menu-close.svg" aria-hidden="true">
      <ul class="navmenu">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </div>
  </header>
```
```css

.sidebar {
    width: 0rem;
    position: fixed;
    height: 100%;
    right: 0;
    transition: 0.2s;
    margin-top: -1.5rem;
    background-color: hsl(36, 100%, 99%);
    display: flex;
    flex-direction: column;
}

    /* Navbar modifications */
    header {
        align-items: center;
    }

    nav {
        display: flex;
    }

    nav ul {
        padding-right: 1rem;
    }

    nav li {
        padding-left: 3rem;
    }

    .menu-open {
        display: none;
    }

    .sidebar {
        display: none;
    }
}
```
```js

const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');

menuOpen.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('sidebar-open');
    console.log('Success');
})

menuClose.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('sidebar-open');
    console.log('Success');
})
```

### Continued development

Though I'm proud of the work I did on this project, I do wonder about best practices as far as creating the two nav ULs: is there a more efficient way to achieve the same result? Either way this is something I look forward to working on more.

### Useful resources

These two links helped me to come up with my gameplan for the navbar.

- (https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapse_sidebar) - This example helped me create the collapsible sidebar div and the button to open it.
- (https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav) - This example outlines a responsive navbar. Combining this with the link above helped me create the navbar in the final product.

## Author

- Github - [GHWhite419](https://github.com/GHWhite419)
- Frontend Mentor - [@JudasThePriest](https://www.frontendmentor.io/profile/JudasThePriest)
