const container = document.querySelector("#container");
const containerSize = 960;
let thisDiv;

function createBoxes(userBoxSize) { //takes in the user input size
    for (let i = 0; i < userBoxSize; i++) { //column
        for (let j = 0; j < userBoxSize; j++) { //row
            const div = document.createElement('div'); //create div
            div.addEventListener("mouseover", function (e) { //e is the event
                hoverFunction(e); //pass the event into the function
            });
            let boxSize = containerSize / userBoxSize; //divide the size of the container by number of boxes
            div.style.width = boxSize + "px"; // set the size of the boxes
            div.style.height = boxSize + "px";
            thisDiv = div;
            container.appendChild(div); //append the div to the container
        }
        linebreak = document.createElement("br"); //line break to create new row
        container.appendChild(linebreak); //append line break to container
    }
}

function hoverFunction (e) {
    console.log ("Hey, I'm hovering!");
    e.target.style.backgroundColor = "black"; //get the target of the event, change its background colour
}

createBoxes(50);