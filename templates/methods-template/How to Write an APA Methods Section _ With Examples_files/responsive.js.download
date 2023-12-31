var mobileBP=768;var tabletStandingBP=992;var desktopBP=1200;var windowW;$(function(){windowW=$(window).width();centerVertically();if(windowW>tabletStandingBP){equaliseBoxHeights();fitSliderPriceCalc();enableMagnificPopup(!1)}else{apaExamplesSearchScroll();enableMagnificPopup(!0)}
var timer;$(window).on("resize",function(){clearTimeout(timer);timer=window.setTimeout(function(){windowW=$(window).width();if(windowW>tabletStandingBP){equaliseBoxHeights();fitSliderPriceCalc();reInitiateImageCarousel()}else{equaliseBoxHeights(!0);fitSliderPriceCalc(!0)}
centerVertically()},150)})});function reInitiateImageCarousel(){if($('.block--image-carousel').length>0){$('.block--image-carousel').stop();$('.block--image-carousel').css("margin-left","0");initiateImageCarousel()}}
function enableMagnificPopup(mobile){$('.colorbox, .imagePopup').magnificPopup({type:'image',removalDelay:400,mainClass:'mfp-fade',closeOnContentClick:!0,closeBtnInside:mobile});$('.colorbox-iframe, .imagePopup').magnificPopup({type:'iframe',removalDelay:400,mainClass:'mfp-fade',closeOnContentClick:!0,closeBtnInside:mobile})}
var resized=!1;var resizedWidth;function equaliseBoxHeights(reset){if(reset){$('.equalHeight').css("height","auto");resized=!1;return!1}
if(!resized){setTimeout(function(){var special=!1;var parents=$('.equalHeight').parents('.row');$.each(parents,function(){var eqH=0;$('.equalHeight',this).each(function(){if($(this).height()>eqH){eqH=$(this).height()}
if($(this).hasClass("special")){special=!0}});$('.equalHeight',this).height(eqH);if(special){$('.special',this).height(eqH+60)}});resizedWidth=windowW;resized=!0;return!1},50)}
if(resizedWidth>desktopBP&&windowW<desktopBP&&resized){equaliseBoxHeights(!0);equaliseBoxHeights()}
if(resizedWidth<desktopBP&&windowW>desktopBP&&resized){equaliseBoxHeights(!0);equaliseBoxHeights()}}
function apaExamplesSearchScroll(){$("#apaExamples_wrapper input").focusin(function(){$('html, body').animate({scrollTop:$("#voorbeelden-apa-stijl").offset().top},500)})}
function centerVertically(){$('.center-vertically').each(function(){var parentH=$(this).parent().height();var H=$(this).height();var topM=(parentH-H)/2;$(this).css("margin-top",topM)})}
function fitSliderPriceCalc(reset){if(!$('#priceCalculator').length>0){return!1}
if(reset){$('#slider').attr("style",'');return!1}
var parent=$('#slider-wrapper');var w1=Math.ceil($('label',parent).outerWidth(!0));var w2=Math.ceil($('input',parent).outerWidth(!0));var w3=Math.ceil($('.tooltip',parent).outerWidth(!0)+8);var outcome=Math.floor(parent.width()-w1-w2-w3-6-1);$('#slider',parent).width(outcome)}