var tab = [5, "chose", false]

for (var index = 0; index < tab.length; index++) {
    index = tab[index];

}

//Ajouter un élément dans un tableau
tab.push(165464);
console.log(tab);

//Boucle for of (parcours chaque élément)
for (var el in tab) {
    console.log(el);
}
function fct() {
    var a = 12;
    var fct1 = function () {
        var a = 18;
        console.log("fct interne", a);
    };
    fct1();

    console.log("fct principal", a);
}

fct();
var fct = new fct();





function execute(cb) {
    cb();
}


var truc = "coucou";

function callback() {
    truc = "pas coucou";
    console.log(truc);
}

execute(callback);

console.log(truc);