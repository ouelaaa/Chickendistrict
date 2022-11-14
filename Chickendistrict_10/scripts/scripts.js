window.onload = function load() {
    var Barnav = document.getElementById("Barnav");
    var Bucket = document.getElementById("Bucket");
    var Sandwich = document.getElementById("Sandwich");
    var Carte = document.getElementById("Carte");
    var Salade = document.getElementById("Salad");
    var Delivery = document.getElementById("Delivery");
    var Drink = document.getElementById("Drink");

    var BarnavS = document.getElementById("BarnavS");
    var BucketS = document.getElementById("BucketS");
    var SandwichS = document.getElementById("SandwichS");
    var CarteS = document.getElementById("CarteS");
    var SaladeS = document.getElementById("SaladS");
    var DeliveryS = document.getElementById("DeliveryS");
    var DrinkS = document.getElementById("DrinkS");

    /*var All = {
        Barnav,
        Bucket,
        Sandwich,
        Carte,
        Salade,
        Delivery,
        Drink,
        BarnavS,
        BucketS,
        SandwichS,
        CarteS,
        SaladeS,
        DeliveryS,
        DrinkS,
    };*/

    Barnav.style.display = "none";
    Bucket.style.display = "none";
    Sandwich.style.display = "none";
    Carte.style.display = "none";
    Salade.style.display = "none";
    Delivery.style.display = "none";
    Drink.style.display = "none";
    //All.style.transition = "all 0.5s";
}

function toggle(ID, IDs) {
    var element = document.getElementById(ID);
    var elementS = document.getElementById(IDs);

    if (element.style.display === "none") {
        element.style.display = "block";
        document.getElementById(IDs).innerText = 'Voir -'

    } else {
        element.style.display = "none";
        document.getElementById(IDs).innerText = 'Voir +'
    }
}

function myFunction(x) {
    x.classList.toggle("change");
}