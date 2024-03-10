const icon_theme = document.getElementById('icon');


// slick slider
$(document).ready(function() {
    $(".image-slider").slick({
        slideToSlow: 1,
        slideToScroll: 1,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 900,
        cssEase: 'ease-in-out',
        touchThreshold: 100,
        fade: true
    });
});
function link_direction(myUrl){
    location.assign("https://"+myUrl);
}


function changeTheme() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon_theme.src = './image/moon.png';
    } else {
        icon_theme.src = './image/sun.png';
    }
};
