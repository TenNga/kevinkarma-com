
  $(function() {
    $(document).on('scroll',function(){
        console.log($(document).scrollTop());
        if($(document).scrollTop() > 1740){
             $('.projectCard').addClass('animated jackInTheBox');
        }else{
            $('.projectCard').css('opacity',0);
        }

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

ScrollOut();

gsap.from('.heading h1',{opacity: 0, duration: 1, y: -50, ease: "power4.out"})
gsap.from('.heading h3',{opacity: 0, duration: 1, delay: .7})
gsap.from('.banner img',{opacity: 0, duration: 1.5, y:-100, delay: 1, ease: "bounce"})