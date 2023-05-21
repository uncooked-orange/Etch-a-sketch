const screen = document.querySelector(".screen");
const test = document.querySelector(".test");
let sizeinput = document.querySelector("#range").value;
const wrapper = document.querySelector(".colorwrapper");
const randombutton = document.querySelector(".random");
const clear = document.querySelector(".clear");
let colour = document.querySelector(".colorblock").value;
let randcolor = false;
let enablepaint = false;
//for clearing the screen
function clearscreen()
{
    let screenbits = document.querySelectorAll(".screenbit");
    for(let i = 0;i<screenbits.length;i++)
    {
        screenbits[i].style.backgroundColor = "white";
    }
}
//for enabling painting
function enablepainting()
{
    enablepaint = true;
}
//for diabling painting
function disablepainting()
{
    enablepaint = false;
}
//for enabling random color
function randifclick()
{
    randcolor = true
}
//for enabling normal color
function normalcolor()
{
    randcolor = false

    //for changing the background of the color input
    colour = document.querySelector(".colorblock").value;
    wrapper.style.backgroundColor = `${colour}`;
}
//for changing the screen size
function changescreensize()
{   
    sizeinput = document.querySelector("#range").value;
    size(sizeinput);
    document.getElementById("sizetext").innerHTML = `${sizeinput} x ${sizeinput} <br>`;
}
//for changing the screen color
function changescreencolor()
{
        colour = document.querySelector(".colorblock").value;
        screen.style.backgroundColor = `${colour}`;
}
//for deleting and resetting the grid
function resettinggrid()
{
    let screenbits = document.querySelectorAll(".screenbit");
    for(let i = 0;i<screenbits.length;i++)
    {
        screenbits[i].remove();
    }
}
//for changing the color of each bit
//this is used in combination with (size()) to change each bits color
function changecolor()
{
    if(enablepaint)
    {
        if(randcolor)
            this.style.backgroundColor = `hsl(${Math.floor(Math.random()*360)},100%,50%)`;
        else
        { 
            colour = document.querySelector(".colorblock").value;
            this.style.backgroundColor =  `${colour}`;
        }
    }  
}
//changing the size of the screen
function size(x)
{
    resettinggrid();
    for(let i = 0;i<x*x;i++)
    { 
        const div = document.createElement('div');
        div.style.backgroundColor = "white";
        div.classList.add("screenbit");
        screen.appendChild(div);
        div.addEventListener("mouseover",changecolor);
        div.addEventListener("mousedown",enablepainting);
        div.addEventListener("mouseup",disablepainting);

    }
    screen.style.gridTemplateColumns = `repeat(${x},1fr)`;
}
//default size
size(16);