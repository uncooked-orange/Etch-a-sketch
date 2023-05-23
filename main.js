const screen = document.querySelector(".screen");
let sizeinput = document.querySelector("#range").value;
const wrapper = document.querySelector(".colorwrapper");
const randombutton = document.querySelector(".random");
const clear = document.querySelector(".clear");
let colour = document.querySelector(".colorblock");
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
function statuspainting()
{
    if(enablepaint == false)
    {
        enablepaint = true;
        let screenbits = document.querySelectorAll(".screenbit");
        for(let i = 0;i<screenbits.length;i++)
        {
            screenbits[i].addEventListener("mouseover",changecolor);
        }
        document.querySelector(".status").innerHTML = "Painting : ON";
    }
    else
    {
        let screenbits = document.querySelectorAll(".screenbit");
        for(let i = 0;i<screenbits.length;i++)
        {
            screenbits[i].removeEventListener("mouseover",changecolor);
        }
        enablepaint = false;
        document.querySelector(".status").innerHTML = "Painting : OFF";
    }
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
    let colour = document.querySelector(".colorblock").value;
    wrapper.style.backgroundColor = `${colour}`;
}
//for changing the screen size
function changescreensize()
{   
    sizeinput = document.querySelector("#range").value;
    size(sizeinput);
    document.getElementById("sizetext").innerHTML = `${sizeinput} x ${sizeinput} <br>`;
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
//this is used in combination with (size()) to change each bits color and other functions aswell
function changecolor()
{
    if(enablepaint)
    {
        if(randcolor)
            this.style.backgroundColor = `hsl(${Math.floor(Math.random()*360)},100%,50%)`;
        else
        {
            let colour = document.querySelector(".colorblock").value;
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
        div.addEventListener("click",statuspainting);
        div.addEventListener("click",changecolor);
    }
    screen.style.gridTemplateColumns = `repeat(${x},1fr)`;
}
//updating the color tag name
function updatename()
{
    document.querySelector(".colorname").value = colour.value;
    document.querySelector("#title").innerHTML = `${colour.value}`;
}
//updating the color circle
function updatecolor()
{
    colour.value = document.querySelector(".colorname").value;
    wrapper.style.backgroundColor = document.querySelector(".colorname").value;
}
//default size
size(16);

colour.addEventListener("change",updatename);
document.querySelector(".colorname").addEventListener("change",updatecolor);
