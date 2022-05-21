/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

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
    // Profile
    function saveResume(node){
        task={
            class:node.class,
            value:node.value
        }
        localStorage.setItem("task",JSON.stringify(tasks));


    }
    let finish_button=document.querySelector("#finishbt");
    finish_button.addEventListener("click",()=>{
        let profile_input=document.querySelectorAll("#FirstName, #LastName, #Address, #Introduce").forEach(saveResume);
        let experience_input=document.querySelectorAll(".experience, .timeline, .subhead .experienceexp").forEach(saveResume);
        let education_input=document.querySelectorAll(".education, .edutimeline, .edusubhead, .explainedu").forEach(saveResume);
        let skills_input=document.querySelectorAll(".skills, .workflow").forEach(saveResume);
        let interests_input=document.querySelectorAll(".interests").forEach(saveResume);
        let awards_input=document.querySelectorAll(".awards").forEach(saveResume);
        
        console.log(profile_input[0].value,profile_input[1].value,profile_input[2].value,profile_input[3].value);
        console.log(experience_input[0].value,experience_input[1].value,experience_input[2].value,experience_input[3].value);
        //let education_input=document.querySelectorAll("");
        //let skills_input=document.querySelectorAll("");
        //let interests_input=document.querySelectorAll("");
        //let awards_input=document.querySelectorAll("");
    })

    
});
