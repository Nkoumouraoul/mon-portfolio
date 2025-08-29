// Met à jour l'année dans le footer automatiquement
document.getElementById('year').textContent = new Date().getFullYear();


    
// --- Logique pour le bouton "Retour en haut" ---
const backToTopButton = document.querySelector("#back-to-top");

window.addEventListener("scroll", () => {
    // Si l'utilisateur a scrollé de plus de 300px
    if (window.scrollY > 300) {
        backToTopButton.classList.add("active");
    } else {
        backToTopButton.classList.remove("active");
    }
});


// --- Logique pour l'animation Typed.js ---
document.addEventListener('DOMContentLoaded', function() {

  const typedColors = [
        '#32a016ff', // Couleur associée au premier texte
        '#F7DF1E', // Couleur associée au second texte
        '#007bff', // Couleur associée au 3eme texte
        '#E34F26'  // Couleur associée au dernier texte
    ];


    const options = {
        strings: [
            'développeur PHP.',
            'amoureux du responsive design.',
            'créateur d\'expériences web.',
            'passionné de code.'
        ],
        
        typeSpeed: 50,  // Vitesse de frappe
        backSpeed: 25,  // Vitesse de suppression
        backDelay: 1500, // Délai avant de commencer à supprimer
        startDelay: 500, // Délai avant de commencer à taper
        loop: true,     // Répéter l'animation
        showCursor: true,
        cursorChar: '|',
          // 3. La fonction de rappel magique !
        preStringTyped: function(arrayPos, self) {
            // 'arrayPos' est l'index de la chaîne de texte actuelle dans notre tableau
            // 'self' est l'instance de Typed.js
            
            // On cible notre span et on lui applique la couleur correspondante
            const typedSpan = document.querySelector('#typed-text');
            typedSpan.style.color = typedColors[arrayPos];
        }
    
    };

   
    const typed = new Typed('#typed-text', options);


     // 1. Changer le style de la navbar au scroll
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);


   // 2. Logique "Scrollspy" améliorée pour gérer le thème de la navbar
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbar = document.querySelector('#main-navbar'); 
    function updateActiveLink() {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        // Mise à jour des liens actifs
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSectionId) {
                link.classList.add('active');
            }
        });
        
        //  Logique d'inversion des couleurs**
        const currentSection = document.getElementById(currentSectionId);
        if (currentSection) {
            const navTheme = currentSection.getAttribute('data-nav-theme');
            if (navTheme === 'dark') {
                navbar.classList.remove('navbar-light-mode');
            } else {
                navbar.classList.add('navbar-light-mode');
            }
        }
    }

    window.addEventListener('scroll', updateActiveLink);

    window.addEventListener('scroll', updateActiveLink);
    
    // 3. Fermer le menu mobile après un clic sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                // On utilise le "toggler" pour fermer proprement le menu
                const navbarToggler = document.querySelector('.navbar-toggler');
                navbarToggler.click();
            }
        });
    });
});