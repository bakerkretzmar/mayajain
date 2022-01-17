function start() {
    document.getElementById("nav").scrollIntoView({ behavior: 'smooth', block: 'start'});
}

function onlink(section, name) {
//    document.getElementById(name).scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'end'});
    console.log(section,name);
    document.getElementById("arrow" + section).style.display = "inline";
    document.getElementById("arrow" + section).style.opacity = "1";
    document.getElementById("link" + section).style.fontWeight = "900";
}
    
function offlink(section) {
    console.log(section);
    document.getElementById("arrow" + section).style.display = "none";
    document.getElementById("link" + section).style.fontWeight = "200";

}
function onAbout(section){
    document.getElementById("arrow" + section).style.display = "inline";
}
    
function onphoto(section, name){
    document.getElementById(name).style.transform= "translateX(550px)";
    document.getElementById("arrow" + section).style.display = "inline";
}
    
function offphoto(section, name) {
    document.getElementById(name).style.transform= "translateX(0)";
    document.getElementById("arrow" + section).style.display = "none";
}
function openNav() {
    document.getElementById("about").style.width = "100%";
}

function closeNav() {
    document.getElementById("about").style.width = "0%";
}
    
var x = 0
var number = 1 
function mayaChange(){
    x ++
    if (x > 6) {
        x = 1;
    }
    document.getElementById('introseq').src="images/animation"+x+".gif";
}   

function cursorChange() {
    number ++
    if (number > 11) {
            number = 1;
    }
    document.body.style.cursor="url(cursors/cursor"+number+".png), auto";
}

function Bold(){
    var b;
    var bold = document.getElementsByClassName("bold");
    for (b = 0; b < bold.length; b++) 
    {bold[b].style.fontWeight = "800";}
}

function unBold(){
    var b;
    var bold = document.getElementsByClassName("bold");
    for (b = 0; b < bold.length; b++) 
    {bold[b].style.fontWeight = "400";}
}

function onNext() {
    document.getElementById("nextimg").style.opacity="1";
}

function onPrev() {
    document.getElementById("previmg").style.opacity="1";
}

function offNext() {
    document.getElementById("nextimg").style.opacity="0";
}

function offPrev() {
    document.getElementById("previmg").style.opacity="0";
}

const pages = [ 
//    {title:"valuecollective",page:"vc.html",image:},
     
    {
        title:"hold",
        page:"hold.html",
        image:"1hold.jpg"
    },
    {
        title:"commensality",
        page:"commensality.html",
        image:"2commensality.jpg"
    },
    {
        title:"histoires",
        page:"histoires.html",
        image:"3histoires.jpg"
    }

     ]

function setPreviousPage(pageNumber) {
    let previouspage; 
    if (Number(pageNumber) === 0) {  
        previouspage = pages[pages.length - 1];
    } else {
        previouspage = pages[Number(pageNumber) - 1];
    }
    const image = document.getElementById("previmg");
    image.src = "images/menu/" + previouspage.image;
    const link = document.getElementById("prevlink");
    link.href = previouspage.page;
}

function setNextPage(pageNumber) {
    let nextpage;  
    if (Number(pageNumber) === pages.length - 1) {  
        nextpage = pages[0];
    } else {
        nextpage = pages[Number(pageNumber) + 1];
    }
    const image = document.getElementById("nextimg");
    image.src = "images/menu/" + nextpage.image;
    const link = document.getElementById("nextlink");
    link.href = nextpage.page;
}

const thisPage = document.getElementById("prevnext");
    if (thisPage) {
        setPreviousPage(thisPage.dataset.currentPage);
        setNextPage(thisPage.dataset.currentPage);
    }




