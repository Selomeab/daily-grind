/*
    daily-grind.js
    
    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:
   
    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    
    A unique color that supports the image and paragraph of content
    The unique color could affect the background HTML, or an element on the page for each day of the week. All of the above must occur within one page.

    Here are the items we need for each coffee:

    name - Bubble Tea for example 
    pic - An image of a bubble tea 
    day - For example Wednesday 
    alt - The data in the alt tag 
    color- A color to match the coffee 
    desc - A description of the coffee 

*/


let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
 }
 
 myDay = parseInt(myDay);//must change to ineger for switch
//myDay = 3;//Testing only 




switch(myDay){

    case 0:
        today = "Sunday";

        coffee = {
            name: "Drip",
            pic: "images/drip.jpg",
            day: "Sunday",
            alt: "A pic of a Drip",
            color: "black",
            desc:`Simple has never tasted so good!`
         };
    break;

    case 1:
        today = "Monday";

        coffee = {
            name: "Pumpkin Spice",
            pic: "images/pumpkin-spice-latte.jpg",
            day: "Monday",
            alt: "A pic of a Pumpkin Spice",
            color: "orange",
            desc:`One of our best sellers!`
         };
    break;

    case 2:
        today = "Tuesday";

        coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            day: "Tuesday",
            alt: "A pic of a Mocha",
            color: "brown",
            desc:`The perfect Fall drink!`
         };
    break;

    case 3:
        today = "Wednesday";

        coffee = {
           name: "Bubble Tea",
           pic: "images/bubble-tea.jpg",
           day: "Wednesday",
           alt: "A pic of a Bubble Tea",
           color: "pink",
           desc:`I like me some Bubble Tea!`
        };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            day: "Thursday",
            alt: "A pic of a Frappaccino",
            color: "green",
            desc:`A sweet treat that will wake you up!`
         };
    break;

    case 5:
        today = "Friday";
        coffee = {
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            day: "Friday",
            alt: "A pic of a cold brew",
            color: "red",
            desc:`Our special today will surely get you through the end of the week slump!`
         };
    break;

    case 6:
        today = "Saturday";
        coffee = {
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            day: "Saturday",
            alt: "A pic of a caramel latte",
            color: "purple",
            desc:`Treat yourself for getting through the week!`
         };
    break;

    default:
        today = "Something went wrong";
}

//alert(today);
console.log(coffee);

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;
function coffeeTemplate(coffee){
    let myReturn = `<img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
           <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}!</p>`;

    return myReturn;
}