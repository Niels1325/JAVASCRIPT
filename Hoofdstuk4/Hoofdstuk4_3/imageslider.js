var plaatjes = [1,2,3,4,5];
var teller = 1;
var slideholder1 = document.getElementById("slideholder1");
slideholder1.style.backgroundImage = "url('img/forehead1.png')";

slideholder1.addEventListener("click", function () {
    slideholder1.style.backgroundImage = "url('img/forehead"+ infTeller() +".png')";
});

var slideholder2 = document.getElementById("slideholder2");
slideholder2.style.backgroundImage = "url('img/nose1.png')";

slideholder2.addEventListener("click", function () {
    slideholder2.style.backgroundImage = "url('img/nose"+ infTeller() +".png')";
});

var slideholder3 = document.getElementById("slideholder3");
slideholder3.style.backgroundImage = "url('img/mouth1.png')";

slideholder3.addEventListener("click", function () {
    slideholder3.style.backgroundImage = "url('img/mouth"+ infTeller() +".png')";
});

function infTeller() {
    if (teller >= plaatjes.length) {
        teller = 0;
    }

    teller++;
    console.log(teller);
    return teller;
}