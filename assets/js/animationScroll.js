
let animacionPrincipal = document.getElementsByClassName("animacionPrincipal")[0]

var onScrollHandler = function () {
    var newImageUrl = animacionPrincipal.src;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 200) {
        newImageUrl = "assets/img/animationScroll/1maquina.png";
    }
    if (scrollTop > 300) {
        newImageUrl = "assets/img/animationScroll/2maquina.png";
    }
    if (scrollTop > 400) {
        newImageUrl = "assets/img/animationScroll/3maquina.png";
    }
    animacionPrincipal.src = newImageUrl;
};

document.addEventListener("scroll", onScrollHandler);