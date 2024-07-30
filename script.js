/*  @TODO - Add references to the elements we want to use  */
const changeButton = document.getElementById("change_button");
const addButton = document.getElementById("add_button");
const deleteButton = document.getElementById("delete_button");
let imageDiv = document.getElementById("image_div");
let firstImage = document.getElementById("first_image");

/*  @TODO - Create an array of Pokemon to select from  */
let pokeImages = ["bulbasaur.png", "charmander.png", "pikachu.png", "squirtle.png"]

/*  @TODO - Create a Function for our changeButton to change first Pokemon  */

let counter = 0;
function changeImage() {
    imageDiv.children[0].src = "images/" + pokeImages[counter];
    counter ++;
    if (counter > 3) {counter = 0}
}

changeButton.addEventListener("click", changeImage)

/*  @TODO - Create a Function for our addButton to Add New Pokemon  */

function addImage() {
    let newPoke = document.createElement("img");
    newPoke.src = "images/" + pokeImages[counter];
    imageDiv.appendChild(newPoke);
    counter++;
    if (counter > 3) {counter = 0}
}

addButton.addEventListener("click", addImage)

/*   @TODO - Create a Function for our deleteButton to Delete the First Pokemon   */

function removeImage() {
    imageDiv.removeChild(imageDiv.children[imageDiv.children.length - 1]);
}

deleteButton.addEventListener("click", removeImage)