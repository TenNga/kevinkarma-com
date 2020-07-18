

  $(function() {
    $(document).on('scroll',function(){
        // console.log($(document).scrollTop());
        if($(document).scrollTop() > 1800){
             $('.projectCard').addClass('animated fadeInRight');
        }else{
            $('.projectCard').css('opacity',0);
        }
        $('.itemCard img').each(function(){
            if($(document).scrollTop() < 1100){
                $(this).css('opacity',0);
            }else{
                $(this).addClass('animated fadeIn');
            }
        });
        $('nav').each(function(){
            if($(document).scrollTop() > 200){
                $(this).css('min-height','4vh');
            }else{
                $(this).css('min-height','8vh');
            }
        });
    });
    
});

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    const navRoll = () =>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link,index)=>{

            link.addEventListener('click', ()=>{
                navRoll();
            });

            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    }
        burger.addEventListener('click', ()=>{
            navRoll();
        });
}
navSlide();

let scene = document.getElementById('scene');
console.log("scene", scene);
let parallaxInstance = new Parallax(scene);