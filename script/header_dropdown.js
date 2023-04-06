
var input = document.getElementById("more");
var dropdown = document.getElementById("dropdown"); 
var span = document.getElementById("close-dropdown");


function close() {
    dropdown.style.display = "none";
    input.style.color = "#FFFFFF";
}


input.onclick = function(){
    if (dropdown.style.display == "none"){
        dropdown.style.display = "flex";
        input.style.color = "#32E57A";
    } else {
        close();
    }
}

span.onclick = function(){
    close();
}