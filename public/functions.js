// Open and Close Mobile Menu

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

function openMobileMenu() {
	var mobileMenuOpen = document.getElementById("desktopMenu");
	var menuToggler = document.getElementById("openMenuToggler");
	mobileMenuOpen.classList.toggle("open-mobile-menu");
	menuToggler.classList.toggle("clicked");
}

// Open and Close Interests Menu

const openInterests = document.getElementById("interestsLink");
const interestsAccordion = document.getElementById("interestsAccordion");

function openInterestsList() {
	var interestsList = document.getElementById("interestsList");
	interestsAccordion.classList.toggle("open-interests-list");
	openInterests.classList.toggle("clicked");
	interestsList.classList.toggle("openList");
}

console.log('Hey there, welcome to my website.');
// console.log('%c Hey there, welcome to my website.', 'font-family: montserrat; font-size: 15px;'); // Styled Log

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');
var currentSection = pageYOffset;

window.addEventListener('scroll', ()=> {

    let current = '';

    sections.forEach( section => {
        
const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;


if(pageYOffset >= (sectionTop - sectionHeight / 4)) {
    current = section.getAttribute('id');
    
}
    })

    navLi.forEach( li => {
        li.classList.remove('active');
if(li.classList.contains(current)){
    li.classList.add('active');
}
    })
})

// Get the button:
topButton = document.getElementById("topButton");
topButton.className = '';

// Initialize section top calculations
projectsSection = document.getElementById("Projects");
projectsRectTop = projectsSection.getBoundingClientRect().top;
contactSection = document.getElementById("Contact");
contactRectTop = contactSection.getBoundingClientRect().top;

// Change Button Color on Scroll
window.addEventListener('scroll', function () {
  // topButton.classList.toggle('navyMode', window.scrollY > 
 topButton.classList.toggle('redMode', window.scrollY > projectsRectTop - 610 && window.scrollY < contactRectTop);
 topButton.classList.toggle('blueMode', window.scrollY > contactRectTop);
})

// When the user scrolls down 0px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  let nav = document.querySelector(`nav`);
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    nav.classList.add(`scrolled`);
    topButton.style.display = "block";
  } else {
    nav.classList.remove(`scrolled`);
    topButton.style.display = "none";
  }
  
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// When user clicks Border Button, prompt for username
function getUsername() {

var person = prompt("Please enter your name");

	// When user replace Footer Text with username entered from prompt function
  document.getElementById("demoButton").innerHTML = "CLICK TO CHANGE NAME AGAIN";
  document.getElementById("footer-text").innerHTML = "THANKS FOR VISITING " + '<a id="insertName" onclick="getUsername()"></a>';
  document.getElementById("insertName").innerHTML = person + "!";

}

// Trying Intersection Observer
const options = {
  root: null,
  threshold: 0,
  rootMargin: "0px"
};

const observer = new IntersectionObserver(function(entries,observer) {
  entries.forEach(entry => {
  //  console.log(entry);
  })
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// Resume JS File for New Code
console.log(`JS for Resume Section!`);

// Fading In Main Body
// More Animation Variables Below
const body = $(`body`);
body.attr(`style`,`display: none`);
body.fadeIn(1000);

// Declaring Variables
var copyrightYear = $(`.copyright-year`);
copyrightYear.html(moment().format(`YYYY`));

// Slashes Styling
var slashes = $(`.slashes`);
slashes.parent().addClass(`slashContainer`);

// var codeResume = $(`.codeResume`);
// var codeResumeArray = codeResume.html().split(``);
// var slashOne = codeResumeArray[5];
// var slashTwo = codeResumeArray[6];
// slashOne.css(`color`,`var(--main-teal)`);
// slashTwo.css(`color`,`var(--main-teal)`);
// var newProjects = $(`.newProjects`);
// var newProjectsArray = newProjects.html().split(``);
// newProjectsArray[4] + ` ` + newProjectsArray[5];

// Image Hover Liquid Effect
// new hoverEffect({
//     parent: $(`.distortion`),
//     intensity: 0.2,
//     image1: `./assets/images/design/IphoneTransparentVersion.png`,
//     image2: `./assets/images/design/Portfolio-screenshotlarge.jpg`,
//     displacementImage: `./assets/images/displacement/heightMap.png`
// })

// When User Clicks the Change Text Button
// var modal = $(`.modal`);
// var changeTextArea = modal.find(`input`);
// changeTextArea.keypress(event => {
//     if (event.keyCode === 13) {
//         var textValue = changeTextArea.val();
//         if (!textValue) {
//             changeTextArea.attr(`placeholder`,`Please Enter Valid Word`);
//             return;
//         } else if (textValue.split(` `).length > 2) {
//             changeTextArea.val(``);
//             changeTextArea.attr(`placeholder`,`Please Enter Only One or Two Words`);
//             return;
//         } else {
//             modal.fadeOut(1000);
//             $(`.jquery-modal`).fadeOut(1000);
//             $(`.scaleText`).hide(10).show(10).html(textValue);
//         }
//     }
// })

// Intersection Observer
let options2 = {
    root: null,
    // rootMargin: `-150px 0px`,
    // threshhold: 0.05
};

// Declaring New Observer To Use for Observing All Elements with Class of .observe
var observedItems = $(`.observe`);
console.log(`Total Elements Being Observed: ${observedItems.length}`);

let observer2 = new IntersectionObserver(inView, options2);
observedItems.each((index,element) => {
    observer2.observe(element);
})

// If The Element Is In The View Port
function inView(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            $(entry.target).children().attr(`style,animation:none;`)
            $(entry.target).fadeIn(5000);
            $(entry.target).toggleClass(`inView`);
            $(entry.target).removeClass(`notInView`);
            $(entry.target).removeClass(`animationEnded`);
            $(entry.target).find(`text`).hide(10);
            $(entry.target).find(`text`).show(10);
            if ($(entry.target).parent().hasClass(`Resume`)) {
                $(`a[href="#Resume"]`).addClass(`active`);
                $(`#topButton`).attr(`class`,`resumeMode`);
            }
        } else {
            $(entry.target).toggleClass(`notInView`);
            $(entry.target).removeClass(`inView`);
            if ($(entry.target).parent().hasClass(`newSec`)) {
                $(`a[href="#Resume"]`).removeClass(`active`);
                $(`#topButton`).removeClass(`resumeMode`);
            }
        }
    })
}