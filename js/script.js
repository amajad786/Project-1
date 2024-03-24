let header=document.getElementById("header"),scrollIcon=document.getElementById("scroll-top");function scrollFunction(){document.body.scrollTop>200||document.documentElement.scrollTop>200?scrollIcon.style.display="block":scrollIcon.style.display="none"}function scrollTop(){document.body.scrollTop=0,document.documentElement.scrollTop=0}scrollIcon.onclick=()=>{scrollTop()},window.onscroll=()=>{scrollFunction(),scrollToggle()};let items=document.querySelectorAll(".team-carousel .carousel-item");function Welcome(){window.location.href="demo-class-registration.html"}console.log(items),items.forEach(b=>{let a=b.nextElementSibling;for(var c=1;c<4;c++){a||(a=items[0]);let d=a.cloneNode(!0);b.appendChild(d.children[0]),a=a.nextElementSibling}})

const shareBtn = document.getElementById('shareBtn')
shareBtn.addEventListener('click', event=>{
    if(navigator.share){
        navigator.share({
            text :'AIYO IT',
            url :'https://www.aiyoit.com/'
        }).then(()=>{
            console.log('Thank for Sharing!');
        })
        .catch((err) => console.error);
    }else{
        alert("The current browser doesn't support share funtion. Please, manually share the link");
    }
})