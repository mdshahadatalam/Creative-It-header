

const aside = document.querySelector('aside');
const navbar = document.querySelector('.navbar')




window.addEventListener('scroll', ()=>{
    if(window.scrollY > 200){
       aside.classList.add('active')
    } else if( window.scrollY < 200){
        aside.classList.remove('active');
    }

})




window.addEventListener('scroll',()=>{
    if(window.scrollY > 80){
        navbar.classList.add('BigNav')
    } else if (window.scrollY < 60){
        navbar.classList.remove('BigNav')
    }
})

