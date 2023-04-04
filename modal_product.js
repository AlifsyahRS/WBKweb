
var modal = document.getElementById("myModal");
var header = document.getElementById("header");

var wincoreFramework = document.getElementById("wincore-framework");
var bannerOne = document.getElementById("banner1");
var bannerTwo = document.getElementById("banner2");
var bannerThree = document.getElementById("banner3");
var bannerFour = document.getElementById("banner4");
var mcoreIcon = document.getElementById("mcore");
var wincoreIcon = document.getElementById("wincore");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");


mcoreIcon.onclick = function() {
    modal.style.display = "block";
    header.style.display ="none";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

wincoreIcon.onclick = function() {
    modal.style.display = "block";
    header.style.display ="none";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}


wincoreFramework.onclick = function() {
    modal.style.display = "block";
    header.style.display ="none";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

bannerOne.onclick = function() {
    modal.style.display = "block";
    header.style.display ="none";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

bannerTwo.onclick = function() {
    modal.style.display = "block";
    header.style.display ="none";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

bannerThree.onclick = function() {
    modal.style.display = "block";
    header.style.display ="none";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

bannerFour.onclick = function() {
    modal.style.display = "block";
    header.style.display ="none";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}


var span = document.getElementById("close-modal");
span.onclick = function() {
    modal.style.display = "none";
    header.style.display = "block";
};