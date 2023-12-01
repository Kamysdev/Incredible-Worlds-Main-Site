let bg = document.querySelector('.mouse-parallax-bg');
window.addEventListener('mousemove', function(e) 
{
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});

///////////////////////////////////////////////////////////////////////////////////

function myFunction()
{
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event)
{
    if (!event.target.matches('.dropbtn'))
    {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++)
        {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

//////////////////////////////////////////////////////////////////////////////////

let header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance > lastScrollTop)
    {
        header.classList.add('header_animeted');        
    } else {
        header.classList.remove('header_animeted');
    }

    lastScrollTop = scrollDistance;
});
