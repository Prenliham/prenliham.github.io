document.addEventListener('DOMContentLoaded',()=>{
    
    // btn ham menu 
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
    

});