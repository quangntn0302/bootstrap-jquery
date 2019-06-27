$(document).ready(function () {
    $('.ndmotkhoi').slideUp();

    $('.motkhoi h3').click(function (e) { 
        e.preventDefault();
        $('.ndmotkhoi').slideUp();
        $('.motkhoi h3').toggleClass('xanh');
        $(this).toggleClass('xanh');
        $(this).next('.ndmotkhoi').slideToggle();
    });
});