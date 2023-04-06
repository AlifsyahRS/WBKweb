var modal = document.getElementById("myModal");
var header = document.getElementById("header");
var btnTop = document.getElementById("btnTop");
var dropScroll = document.getElementById("dropScroll");

const eventImg = [].slice.call(document.getElementsByClassName("event-img"));
const eventImgLeft = [].slice.call(document.getElementsByClassName("event-img-left"));
const eventImgRight = [].slice.call(document.getElementsByClassName("event-img-right"));
const eventImgOne = [].slice.call(document.getElementsByClassName("event-img-1"));
const eventImgTwo = [].slice.call(document.getElementsByClassName("event-img-2"));
const eventImgThree = [].slice.call(document.getElementsByClassName("event-img-3"));
const eventImgTimeline = [].slice.call(document.getElementsByClassName("event-timeline-img"));
var wincoreFramework = document.getElementById("wincore-framework");
var wincoreBannerOne = document.getElementById("banner1");
var wincoreBannerTwo = document.getElementById("banner2");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");


function hideButtons (){
    if (btnTop.style.display == "block" || dropScroll.style.display == "block") {
        dropScroll.style.display = "none";
        btnTop.style.display = "none";
    }
}

eventImg.forEach(img => {
    img.onclick = function(){
        modal.style.display = "block";
        header.style.display ="none";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        hideButtons();
    }
});


eventImgLeft.forEach(img => {
    img.onclick = function(){
        modal.style.display = "block";
        header.style.display ="none";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        hideButtons();
    }
});

eventImgRight.forEach(img => {
    img.onclick = function(){
        modal.style.display = "block";
        header.style.display ="none";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        hideButtons();
    }
});

eventImgTimeline.forEach(img => {
    img.onclick = function(){
        modal.style.display = "block";
        header.style.display ="none";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        hideButtons();
    }
});

eventImgOne.forEach(img => {
    img.onclick = function(){
        modal.style.display = "block";
        header.style.display ="none";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        hideButtons();
    }
});

eventImgTwo.forEach(img => {
    img.onclick = function(){
        modal.style.display = "block";
        header.style.display ="none";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        hideButtons();
    }
});

eventImgThree.forEach(img => {
    img.onclick = function(){
        modal.style.display = "block";
        header.style.display ="none";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        hideButtons();
    }
});



var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
    header.style.display = "block";
};
