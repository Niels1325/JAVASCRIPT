
pics = document.getElementById("pics");
createPicsHolders();
createMonkeyImages();

function createPicsHolders() {
    for(var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createMonkeyImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for(var i = 0; i < pictureHolders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i+1);
        monkeyPic = document.createElement("img");
        monkeyPic.src = "img/monkey" + (i+1) + ".jpg";
        monkeyPic.id = (i+1);
        monkeyPic.addEventListener("click", function () {
            maakFavoriet(this.id);
        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(monkeyPic);
    }
}

function maakFavoriet(id) {
    nietFavoriet = document.getElementsByClassName("favoriet");

    for(var i = 0; i < nietFavoriet.length; i++) {
        nietFavoriet[i].style.backgroundImage = "none";
    }

    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('img/cross.png')"
}