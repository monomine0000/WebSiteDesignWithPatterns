var selector = document.getElementById("selector");
var home = document.getElementById('houseIcon');
var portfolio = document.getElementById('portfolioIcon');
var profile = document.getElementById('profileIcon');
var mail = document.getElementById('mailIcon');
var profileDiv = document.getElementById("profile");
var contactDiv = document.getElementById("contact");
var items = document.getElementById("items");

var arrItems = document.getElementsByClassName("item");

var images = ['DelPaso.jpg', 'GoldenRamen.jpg'];

for (var i = 0; i < images.length; i++) { //add images to home porfolio
    let div = document.createElement('div');
    div.className = 'item';
    div.id = i;
    div.style.backgroundImage = 'url(./public/' + images[i] + ')';

    items.appendChild(div);
}


buttons = [home, portfolio, profile, mail];

function homeF(e) {
    console.log("home");
    selector.className = "selectCircle";
    pick('house');
    home.className = 'houseIcon homeSelected';
    tabs[1].className = 'tab1 homeLabel';
    profileDiv.style.visibility = "hidden";
    contactDiv.style.visibility = "hidden";

    document.getElementById('preview').style.visibility = 'hidden';

}


function pfolio(e) {
    console.log("portfolio");
    selector.className = "selectCircle Setpfolio";
    pick('portfolio');
    portfolio.className = 'portfolioIcon portfolioSelected';
    tabs[2].className = 'tab2 portfolioLabel';
    profileDiv.style.visibility = "hidden";
    contactDiv.style.visibility = "hidden";

    document.getElementById('preview').style.visibility = 'hidden';


}

function aboutMe(e) {
    console.log("aboutMe");
    selector.className = "selectCircle Setpfile";
    pick('profile');
    profile.className = 'profileIcon profileSelected';
    tabs[3].className = 'tab3 profileLabel';
    profileDiv.style.visibility = "visible";
    contactDiv.style.visibility = "hidden";

    document.getElementById('preview').style.visibility = 'hidden';


}

function contactMe(e) {
    console.log("contactMe");
    selector.className = "selectCircle Setemail";
    pick('mail');
    mail.className = 'mailIcon mailSelected';
    tabs[4].className = 'tab4 mailLabel';
    profileDiv.style.visibility = "hidden";
    contactDiv.style.visibility = "visible";

    document.getElementById('preview').style.visibility = 'hidden';


}



function pick(name, color = "#FFFFFF") { //for buttons
    changeColorAll();
    let fName = '--' + name + '-border-color';
    document.documentElement.style.setProperty(fName, color);
    moveButtonsDown();
    removeLabels();

}

function changeColorAll() {
    names = ['house', 'portfolio', 'profile', 'mail'];

    names.forEach(element => {
        let fName = '--' + element + '-border-color';
        document.documentElement.style.setProperty(fName, '#142634');

    });

    fName = '--' + name + '-border-color';

}


function moveButtonsDown() {
    home.className = 'houseIcon';
    portfolio.className = 'portfolioIcon';
    profile.className = 'profileIcon';
    mail.className = 'mailIcon';

}

tabs = document.getElementsByClassName('nav')[0].children;

function removeLabels() {

    for (var i = 1; i < tabs.length; i++) {
        tabs[i].className = 'tab' + i;
    }
}

document.getElementById("view").addEventListener('click', function () {
    pfolio();
});



document.getElementById("portfolioLabel").addEventListener('click', function () {
    pfolio();
});





window.onclick = e => {
    if(e.target.className === 'item'){
        openPreview(e);
    } 
}


var touchmoved;
$('div').on('touchend', function(e){
    if(e.currentTarget.className === "item" && touchmoved != true){
        openPreview(e);
    }
}).on('touchmove', function(e){
    touchmoved = true;
}).on('touchstart', function(){
    touchmoved = false;
});


function openPreview(e){
    let url = e.target.style.backgroundImage;
    url = url.substring(5,url.length-2);
    console.log(url);

    document.getElementById('preview').style.visibility = 'visible';
    document.getElementById('previewImg').src = url;
}

document.getElementById("exitPreview").addEventListener('click',function(){
    document.getElementById('preview').style.visibility = 'hidden';
});