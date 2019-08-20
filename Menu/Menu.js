/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const createMenu = menuArray => {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');

  const menuUL = document.createElement('ul');
  menuDiv.appendChild(menuUL);

  // loop through the menu items array
  menuArray.forEach(item => {
    const link = document.createElement('li'); // creating a li element for each of the menu items in the array
    link.textContent = item; // using the menu items values to change the created link text content
    menuUL.appendChild(link); // appending the created link to the ul item created above.
  });

  const menuButton = document.querySelector('.menu-button');
  menuButton.classList.add('menu-button')
  menuButton.addEventListener('click', () => {
    menuDiv.classList.toggle('menu--open');
    menuAnimation();
  });

  // the function that animates the menu, will be called when the menu button gets clicked
  const menuAnimation = () => {
    !menuDiv.classList.contains('menu--open') ? TweenMax.to(menuDiv, 0.5, {left: -350}) : TweenMax.to(menuDiv, 0.5, {left: -50});
  };
  

  return menuDiv;
};


const body = document.querySelector('body');
body.appendChild(createMenu(menuItems));
