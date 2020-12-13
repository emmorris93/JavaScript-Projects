var imgIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("druidSlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    imgIndex++;
    if (imgIndex > x.length) {imgIndex = 1} 
        x[imgIndex-1].style.display = "block";
        setTimeout(carousel, 2000);
}



// $("#slideshow > div:gt(0)").hide();

// setInterval(function() { 
//   $('#slideshow > div:first')
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .end()
//     .appendTo('#slideshow');
// },  3000);

