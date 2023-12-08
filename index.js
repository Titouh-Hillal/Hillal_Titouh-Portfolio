
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-56px"; // Adjust this value based on the navbar height
            }
            prevScrollpos = currentScrollPos;
        };

        let section = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('a.nav-link');
        
        window.onscroll = () =>{
          section.forEach(sec =>{
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height  = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height ) {
              navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelectorAll('a.nav-link[href*=' + id + ']').forEach(link => {
                    link.classList.add('active');
                });

              });
            }
          });
        }


/*  Scroll reveal  */
ScrollReveal({
    reset:true,
    distance:'100px',
    duration:2000,
    delay:150
});


ScrollReveal().reveal('.here', {origin:'top'});
ScrollReveal().reveal('.hometext',{origin:'left'})
ScrollReveal().reveal('.big-box0', {origin:'left'});
ScrollReveal().reveal('.big-box', {origin:'left'});
ScrollReveal().reveal('#card1', {origin:'left'});
ScrollReveal().reveal('#card2', {origin:'top'});
ScrollReveal().reveal('#card3', {origin:'left'});
ScrollReveal().reveal('#card4', {origin:'bottom'});
ScrollReveal().reveal('#skil1', {origin:'top'});
ScrollReveal().reveal('#skil2', {origin:'left'});
ScrollReveal().reveal('#skil3', {origin:'left'});
ScrollReveal().reveal('#cont', {origin:'bottom'});
ScrollReveal().reveal('#txt', {origin:'left'});
ScrollReveal().reveal('.col-fluid', {origin:'left'});
ScrollReveal().reveal('.small-box', {origin:'left'});

/* multiple text */

const typed = new Typed('#multiple-text',{
    strings:['Web Developper','Mobile Developper','UI/UX Designer','Logo Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    cursorChar: '|',
});


