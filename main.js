let userColour = "black";
const containerSize = 960;
const maxNumOfBoxes = 50;

const container = document.querySelector("#container");

const colourSelector = document.querySelector("#chosenColour");
colourSelector.addEventListener("change", function (e){
    userColour = document.getElementById('chosenColour').value;
})
colourSelector.addEventListener("click", function (e){
    userColour = document.getElementById('chosenColour').value;
})

const button = document.querySelector ("#button");
button.addEventListener("click", function (e){
    gridClear();
})

function createBoxes(userBoxSize) { //takes in the user input size
    for (let i = 0; i < userBoxSize; i++) { //column
        for (let j = 0; j < userBoxSize; j++) { //row
            const div = document.createElement('div'); //create div
            div.addEventListener("mouseover", function (e) { //e is the event
                hoverFunction(e); //pass the event into the function
            });
            let boxSize = (containerSize / userBoxSize) - 2; //divide the size of the container by number of boxes. Subtract 2 because that 2*borderWidth;
            div.style.width = boxSize + "px"; // set the size of the boxes
            div.style.height = boxSize + "px";
            div.style.backgroundColor = "white";

            div.style.borderWidth = "1px";
            div.style.borderStyle = "solid";
            container.appendChild(div); //append the div to the container
        }
        linebreak = document.createElement("br"); //line break to create new row
        container.appendChild(linebreak); //append line break to container
    }
}
function hoverFunction (e) {
    e.target.style.backgroundColor = userColour; //get the target of the event, change its background colour
}

function gridClear (e) {
    container.innerHTML = " "; //clears container
    let numberOfBoxes = prompt ("How many boxes do you want in your new grid? (max " + maxNumOfBoxes + ")");
    if (numberOfBoxes == undefined) { //if user closes the prompt without inputting any number
        numberOfBoxes = maxNumOfBoxes;
    }
    if (numberOfBoxes > maxNumOfBoxes) { //50 is the max before they start escaping the container
        numberOfBoxes = maxNumOfBoxes;
        createBoxes(Number(numberOfBoxes));
    } else {
        createBoxes(Number(numberOfBoxes));
    }
}

createBoxes(maxNumOfBoxes);