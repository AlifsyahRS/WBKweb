var modal = document.getElementById("myModal");
var input = document.getElementById("more");
var dropdown = document.getElementById("dropdown"); 
var span = document.getElementById("close-dropdown");
var dropScroll = document.getElementById("dropScroll");
var menu = document.getElementById("menu");
var menu2 = document.getElementById("menu2");
var btnTop = document.getElementById("btnTop");

function close() {
    dropdown.style.display = "none";
    input.style.color = "#FFFFFF";
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        dropScroll.style.display = "block";
        btnTop.style.display = "block";
    }
}




window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
    
    if ((document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) && dropdown.style.display == "none" && (window.innerWidth <= 568 || (window.innerHeight <=568 && screen.orientation.type.includes("landscape")))) {
        dropScroll.style.display = "block";
    } else {
        dropScroll.style.display = "none";
    }


    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        dropdown.style.top = "0px";
        if (window.innerHeight <= 540 && screen.orientation.type.includes("landscape")){
            menu.style.top = "25px";
            menu2.style.top = "25px";
        } else {
            menu.style.top = "15px";
            menu2.style.top = "15px";
        }
    } else {
        dropdown.style.top = "104px";
    }
}


function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


input.onclick = function(){
    if (dropdown.style.display == "none"){
        dropdown.style.display = "flex";
        input.style.color = "#32E57A";
    } else {
        close();
    }
}

dropScroll.onclick = function(){

    dropdown.style.display = "flex";
    dropScroll.style.display = "none";
    if (window.innerHeight <= 540 && screen.orientation.type.includes("landscape")){
        btnTop.style.display = "none";
    } 
}

span.onclick = function(){
    close();
}