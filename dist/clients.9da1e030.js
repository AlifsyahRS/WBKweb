var input = document.getElementById("more");
var dropdown = document.getElementById("dropdown"); // 
input.onclick = function() {
    if (dropdown.style.display == "none") {
        dropdown.style.display = "flex";
        this.style.color = "#32E57A";
    } else {
        dropdown.style.display = "none";
        this.style.color = "#FFFFFF";
    }
};

//# sourceMappingURL=clients.9da1e030.js.map
