var header = document.querySelector('.header');
var scrollToTop = document.querySelector('.scroll-to-top');

var headerControl = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        if(direction == 'down'){
            header.classList.add('shadow');
            header.classList.add('animate__slideInDown');
            scrollToTop.classList.add('animate__slideInUp');
            scrollToTop.style.display = "block";
            
        }else{
            header.classList.remove('shadow');
            header.classList.remove('animate__slideInDown');
            scrollToTop.style.display = "none";
            scrollToTop.classList.remove('animate__slideInUp');
        }
    },
    offset: '75%'
})

ScrollReveal({
    origin : 'top',
    distance : '30px',
    duration : 2000,
    reset : true
}).reveal('.content',{
    interval : 200
});

window.addEventListener('load',function(){
    document.querySelector('.loader').style.display = 'none';
})