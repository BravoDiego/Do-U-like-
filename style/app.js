//declaration
var buttonSkip = document.querySelector("#close");
var main = document.querySelector("main");
var send = document.querySelector("#send");
var messagebox = document.querySelector("#message");

var li1 = document.querySelector("#liun");
var li2 = document.querySelector("#lideux");
var li3 = document.querySelector("#litrois");
var li4 = document.querySelector("#liquatre");
var li5 = document.querySelector("#licinq");


let li = [
    li1, li2, li3, li4, li5
]
let liarray = [];
let message = [
    "1/5 -- Pignolesque", "2/5 -- Nul...", "3/5 -- Passable.", "4/5 -- Au top !", "5/5 -- Fantasmagorique !!!"
];

//actions
buttonSkip.addEventListener("click", ClickSkip);
send.addEventListener("click", function(){
    send.classList.toggle("sendclick");
})

li.forEach(function(elem) {

    elem.addEventListener("click", function() {
        send.classList.add("sendactive")
        //Enleve les classes à tous les smileys
        if(elem.classList.contains("unselected") || elem.classList.contains("select")){
            Reset();
        }
        //execute le code de selection
            Basic(elem);
    });
});

//function
function ClickSkip() {
    buttonSkip.classList.toggle("active");
    Reset();
    send.classList.remove("sendactive");
}

function ToggleSelect() {
    //prend tous les autres elemnt qui n'ont pas était sélectionné et leur attribut la class "unselected"
    li.forEach(function(elem) {
        elem.classList.add("unselected")
    })
    liarray.forEach(function(elem) {
        //prend l'element selectionne (qui a etait deplacer dans le tableau liarray) et lui met la class "select"
        elem.classList.add("select")
    })
}

function Basic(elem) {
    //prend l'index de l'element en cours de traitement pour le splice après
    var myIndex = li.indexOf(elem) ;

    if(send.classList.contains("sendactive")){
        send.classList.remove("sendclick");
        li.splice(myIndex, 1);
        //l'ajoute a liarray
        liarray.push(elem);
        ToggleSelect();
        //et remet lélément la ou il etait et suppr les elems de liarray
        li.splice(myIndex, 0, elem);
        liarray.length = 0;
        messagebox.textContent = message[myIndex];
    }
}

function Reset() {
    li.forEach(function(elem) {
        elem.classList.remove("unselected");
        elem.classList.remove("select");
    })
    messagebox.textContent = "";
}