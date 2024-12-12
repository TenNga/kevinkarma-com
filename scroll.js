$(document).ready(()=>{
    sr.reveal('.scrollUp', {
        distance: '150%',
        origin: 'bottom',
        opacity: null
    });


    const highlightSequence = [
      { id: 'text1', delay: 0 },
      { id: 'text2', delay: 1000 },
      { id: 'text3', delay: 2000 },
      { id: 'text4', delay: 3000 }
  ];

  function loopHighlight() {
      highlightSequence.forEach(({ id, delay }, index) => {
          setTimeout(() => {
              document.getElementById(id).classList.add('highlighted');
              setTimeout(() => {
                  document.getElementById(id).classList.remove('highlighted');
              }, 1500); // Remove highlight after 1.5 seconds
          }, delay + index * 500);
      });

      // Restart the loop after the total duration
      setTimeout(loopHighlight, 6000);
  }

  loopHighlight();

})