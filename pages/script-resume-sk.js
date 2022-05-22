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
        loadpro();
        loadExp();
        loadEdu();
        loadski();
        loadint();
        loadawa();
    }
    function loadpro(){
        let lastTasks=localStorage.getItem("profile");
        if(!lastTasks) return;
        task=JSON.parse(lastTasks);
        //profile
        let list=document.querySelectorAll(".profile");
        task.forEach((t,index)=>{
            let div=document.createElement("div");
            div.innerHTML=t.value.replace(/\n/g,"<br />");
         //   console.log(t.value,div.innterHTML);
            list[index].appendChild(div);
        })
    }
    function loadExp(){
        let lastTasks=localStorage.getItem("experience");
        if(!lastTasks) return ;
        task=JSON.parse(lastTasks);
        //profile
        let list=document.querySelectorAll(".experience");
        task.forEach((t,index)=>{
            let div=document.createElement("div");
            div.innerHTML=t.value.replace(/\n/g,"<br />");
            list[index].appendChild(div);
        })
    }
    function loadEdu(){
        let lastTasks=localStorage.getItem("education");
        if(!lastTasks) return ;
        task=JSON.parse(lastTasks);
        //profile
        let list=document.querySelectorAll(".education");
        task.forEach((t,index)=>{
            let div=document.createElement("div");
            div.innerHTML=t.value.replace(/\n/g,"<br />");
            list[index].appendChild(div);
        })
     /*   task.forEach((t,index)=>{
            let div=document.createElement("div");
            div.textContent=t.value;
            list[index].appendChild(div);
        })*/
    }
    function loadski(){
        let lastTasks=localStorage.getItem("skills");
        if(!lastTasks) return ;
        task=JSON.parse(lastTasks);
        //profile
        let list=document.querySelectorAll(".skills");
        task.forEach((t,index)=>{
            let div=document.createElement("div");
            div.innerHTML=t.value.replace(/\n/g,"<br />");
            list[index].appendChild(div);
        })
    }
    function loadint(){
        let lastTasks=localStorage.getItem("interests");
        if(!lastTasks) return ;
        task=JSON.parse(lastTasks);
        //profile
        let list=document.querySelectorAll(".interests");
        task.forEach((t,index)=>{
            let div=document.createElement("div");
            div.innerHTML=t.value.replace(/\n/g,"<br />");
            list[index].appendChild(div);
        })
    }
    function loadawa(){
        let lastTasks=localStorage.getItem("awards");
        if(!lastTasks) return ;
        task=JSON.parse(lastTasks);
        //profile
        //갯수 맞춰서 icon달아줄까
        let list=document.querySelectorAll(".awards");
        task.forEach((t,index)=>{
            let div=document.createElement("div");
            div.innerHTML=t.value.replace(/\n/g,"<br />");
            list[index].appendChild(div);
        })
    }
    loadResume();
    
});
