//const { Profiler } = require("react");


window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    function loadResume(){
        let lastTasks=localStorage.getItem("profile");
        if(!lastTasks) return ;
        task=JSON.parse(lastTasks);
        //profile
        let list=document.querySelectorAll(".profile");
        task.forEach((t,index)=>{
            let div=document.createElement("div");
            div.textContent=t.value;
            list[index].appendChild(div);
        })
        
    }
    loadResume();
    
});
