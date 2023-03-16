var modal = document.getElementById("myModal");
var header = document.getElementById("header");
var background = document.getElementById("modal-background");
const clientImg = [].slice.call(document.getElementsByClassName("clients-img"));
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
clientImg.forEach((img)=>{
    img.onclick = function() {
        if (this.id == "mandiri" || this.id == "sleman") background.style.backgroundColor = "#F0FFFF";
        modal.style.display = "block";
        header.style.display = "none";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
});
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
    header.style.display = "block";
    background.style.backgroundColor = "rgba(0, 0, 0, .0)";
};

//# sourceMappingURL=clients.2f7d2672.js.map
