$(document).ready(()=>{
    sr.reveal('.scrollUp', {
        distance: '150%',
        origin: 'bottom',
        opacity: null
    });


    const textWords = document.querySelectorAll('.bio-bullet');

textWords.forEach((word, index) => {
  const delay = index * 1; // Adjust delay as needed
//   word.style.animation = `highlight 1s ease-in-out ${delay}s infinite`;
});

})