/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/* Define Global Variables */
const list = document.querySelectorAll('.landing__container');
const menu = document.querySelector('#navbar__list');
const mysection = document.querySelectorAll('section');
/* End Global Variables */

/* build the nav */
function CreateElements () {

    for(let i=0; i<list.length; i++)
  {
    const newElement = document.createElement('li');
    const newElement_a =  document.createElement('a');
    newElement_a.setAttribute('class', 'menu__link'); 
    newElement_a.classList.add(`section${i+1}`);
    const content = mysection[i].getAttributeNode("data-nav").value;
    newElement_a.textContent = content;
    
    newElement.appendChild(newElement_a);    
    menu.appendChild(newElement); 
  } 
}
  

 /* Start Helper Functions */

/* determine the top of section */
const sectionTop = (section) => {

    return section.getBoundingClientRect().top;
}

/* determine the bottom of section */
const sectionBottom = (section) => {

    return section.getBoundingClientRect().bottom;
}

/* add and remove class*/ 
function Add_Remove_Class ()
{
    for (let j=1; j<=mysection.length; j++) {
        const section = document.getElementById(`section${j}`);
        const nav_item = document.querySelector(`.section${j}`);

        if(sectionTop(section) <= 100 && sectionBottom(section) >=100)
        {
             nav_item.classList.add('active');
            section.classList.add('your-active-class');
        }

        else {
            nav_item.classList.remove('active');
            section.classList.remove('your-active-class');
        }
    } 
} 

/* End Helper Functions */

 /* Begin Main Functions */

/* add event onclick */
function event1(){

    let elements = document.querySelectorAll('li');
    
    for (let i=0; i<elements.length; i++)
    {
        elements[i].onclick = function func2_1 () {
            mysection[i].scrollIntoView();
        }
    }
}

 
/* call the function */
CreateElements();
event1(); 

/* add event scroll */
window.addEventListener('scroll', function() {
    Add_Remove_Class();
})

