let openNav = document.getElementById('openNav');
let menu = document.getElementById('menuBtn');

let check = 0;

menu.addEventListener('click', () =>{
    if(check == 0){
        openNav.style.height = "100vh";
        openNav.style.paddingTop = "70px";
        menu.classList.replace('fa-bars', 'fa-xmark');
        check = 1;
    }
    else{
    openNav.style.height = "0";
    openNav.style.paddingTop = "0px";
    menu.classList.replace('fa-xmark', 'fa-bars');
    check = 0;
    }
})