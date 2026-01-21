document.addEventListener('DOMContentLoaded',()=>{

    window.addEventListener('beforeunload', () => {
        window.scrollTo(0, 0);
    });
    
    document.querySelectorAll('.nav-btn').forEach(function(btn){
        btn.addEventListener('click', function(){
            navDashboard.classList.toggle('nav-dashboard-active');
        });
    });

    document.querySelector('.nav-dashboard-wrappe').addEventListener('click', function(e){
        e.stopPropagation();
    });

    const navDashboard = document.querySelector('.nav-dashboard');
    
    document.querySelector('.nav-dashboard').addEventListener('click',()=>{
        if (navDashboard.classList.contains('nav-dashboard-active')) {
            navDashboard.classList.remove('nav-dashboard-active');
        }
    });

    const navbarLinks = document.querySelectorAll(".nav-dashboard-link a[href^='#']");
    navbarLinks.forEach(function(link){
        link.addEventListener('click', function(e){
            e.preventDefault();
            const linkHref = link.getAttribute('href');
            const targerElement = document.querySelector(linkHref);
            if (targerElement) {
                const navbar = document.querySelector('.nav');
                const navbarHeight = navbar.clientHeight;
                const ElementTop = targerElement.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top:ElementTop - navbarHeight,
                    behavior:'smooth'
                });
            }
        });
    });

    const footerLinks = document.querySelectorAll(".footer-links a[href^='#']");    
    footerLinks.forEach(function(link){
        link.addEventListener('click', function(e){
            e.preventDefault();
            const linkHref = link.getAttribute('href');
            const targerElement = document.querySelector(linkHref);
            if (targerElement) {
                const navbar = document.querySelector('.nav');
                const navbarHeight = navbar.clientHeight;
                const ElementTop = targerElement.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top:ElementTop - navbarHeight,
                    behavior:'smooth'
                });
            }
        });
    });


    const btnShare = document.querySelector('.share');
    btnShare.addEventListener('click', async(e)=>{
        e.preventDefault();
        if (navigator.share) {
            try {
            await navigator.share({
                title: 'My Portfolio',
                text: 'Check out my website!',
                url: window.location.href
            });
            } catch (error) {
            console.log('Share cancelled', error);
            }
        } else {
            console.log('Share cancelled', error);
        }
    });

});