function imgEffectPage1(){
    Shery.imageEffect(".images", { style : 5, config : 
        {"a":{"value":2,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.082236837977518},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":1,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value": 1},"noise_speed":{"value":0.69,"range":[0,10]},"metaball":{"value":0.18,"range":[0,2]},"discard_threshold":{"value":0.56,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":11.45,"range":[0,100]}
    } , gooey : true})
}

function navSlider(){
    document.addEventListener('DOMContentLoaded', function() {
        const menuIcon = document.querySelector('.ri-menu-line');
        const closeIcon = document.querySelector('.cross');
        const navSlider = document.querySelector('.nav-slider');
    
       
        menuIcon.addEventListener('click', function() {
            gsap.to(navSlider,{
                left: '0',
               
            })
        });
    
      
        closeIcon.addEventListener('click', function() {
            gsap.to(navSlider,{
                left: '-100%',
               
            })
        });
    });
}


function page3VideoAnimation(){
    var page3Center = document.querySelector(".page3-center")
var video = document.querySelector("#page3 video")


    page3Center.addEventListener("click",function(){
        video.play()
        gsap.to(video,{
            opacity:1,
            transform:"scaleX(1) scaleY(1)",
            borderRadius:"0"
           
        })
        video.addEventListener("click",function(){
            video.pause()
            gsap.to(video,{
                opacity:0,
                transform:"scaleX(0.7) scaleY(0)",
                borderRadius:"30px"
            })
        })
    })
}
function arrowDivAnimation(){
    var sliderBoxes = document.querySelectorAll(".slider-boxes");

    sliderBoxes.forEach(function(sliderBox) {
        var sliderImage = sliderBox.querySelector("img");
        var arrowDiv = sliderBox.querySelector(".arrow-div");
        
        sliderBox.addEventListener("mouseenter", function() {
            gsap.to(sliderImage, {
                scale: 1.1
            });
            gsap.to(arrowDiv, {
                opacity: 1,
                y: 10
            });
        });
    
        sliderBox.addEventListener("mouseleave", function() {
            gsap.to(sliderImage, {
                scale: 1
            });
            gsap.to(arrowDiv, {
                opacity: 0,
                y: -10
            });
        });
    });
}

    Shery.mouseFollower();


function checkScreenSize() {
    if (window.innerWidth > 768) {
    }
}

checkScreenSize();


window.addEventListener('resize', checkScreenSize);


Shery.makeMagnet(".elem h1 , .page2-text h1 ")
function sliderAnimation(){
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 1 ,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });
      
}

function openpageAnimation(){
    var tl = gsap.timeline()
tl.from(".page1" , {
    opacity : 0 ,
    duration : 0.2 ,
    delay : 0.2 ,

})
tl.from(".page1" ,{
transform : "scaleX(0.7) scaleY(0) translateY(80%)" ,
borderRadius : "150px" ,
duration :2 ,
ease : "expo.out"
})
tl.from("nav", {
    opacity:0,  
})
tl.from(".page1 img , .page1 h1",{
    opacity :0 ,
    duration : 0.5,
    stagger : 0.2 
})
} 

imgEffectPage1()
navSlider()
page3VideoAnimation()
arrowDivAnimation()
sliderAnimation()
openpageAnimation()