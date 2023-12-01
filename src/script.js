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

//////////////////////////////////////////////////////////////////////////////////

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.040518, 82.900451],
        zoom: 15,
        controls: [ ]
    }, {
        searchControlProvider: 'yandex#search'
    }),
    
    // Точка на карте
    myPlacemark = new ymaps.Placemark([55.040518, 82.900451], {
        balloonContentHeader: "Incredible World",
        balloonContentBody: "Главный офис компании-разработчика видеоигр",
        balloonContentFooter: "Красноярская улица, 35",
    },{
        iconColor: '#B349D9'
    });

    // Это путь в виде линии 
    var myPolyline = new ymaps.GeoObject({
        geometry: {
            type: "LineString",
            coordinates: [
                [55.040210, 82.900774],
                [55.040158, 82.900826],
                [55.040249, 82.901051],
                [55.040384, 82.900943],
                [55.040424, 82.901049],
                [55.038622, 82.903004],
                [55.036694, 82.897419],
                [55.036008, 82.897424]
            ]
        }
    },
    {
        strokeColor: "#B349D9",
        strokeWidth: 4,
        strokeOpacity: 0.5
    });

    // Это путь в виде пути, использует данные яндекса для просчета маршрута
    var multiRoute = new ymaps.multiRouter.MultiRoute({   
        referencePoints: [
            [55.040216, 82.900758],
            [55.036008, 82.897436],
        ],
        params: {
          routingMode: "pedestrian"  
        }
    }, {
          boundsAutoApply: true
    });

    myMap.geoObjects.add(myPlacemark).add(myPolyline).add(multiRoute);
}
