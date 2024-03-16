
function supportsWebp(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRhIAAABXRUJQVlA4TAYAAAAvAAAA/AAA/wAAQUxQSAIAAAAADwAwAABAA//aAAA';
}

supportsWebp(function(supported) {
    if (supported) {
        document.getElementById('homepage-hero').style.backgroundImage = 'url(../assets/images/homepage-hero.webp)';
    } else {
        document.getElementById('homepage-hero').style.backgroundImage = 'url(../assets/images/homepage-hero.jpg)';
    }
});


window.addEventListener('scroll', function() {
var scrollThreshold = 100;
var fixedContainer = document.getElementById('fixed-bottom-container');

if (window.scrollY > scrollThreshold) {
    fixedContainer.classList.add('visible');
} else {
    fixedContainer.classList.remove('visible');
}
});
