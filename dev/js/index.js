import $ from "jquery";
import TweenMax from "gsap";


$('.btn-default').css('margin-top' , '100px');
$('h1').css('font-size' , '80px');

console.log('jquery ok');

TweenMax.to('.login' , 1 , {
    x :100
});

console.log('tweenmax ok');



