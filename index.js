const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnSvg = document.querySelector('.toggle_btn svg');
const dropdownMenu = document.querySelector('.dropdown');
const link = document.querySelectorAll('li');
link.forEach
    ((links) => {
        links.addEventListener("click", () => {
            document.querySelector("li.active").classList.remove("active");
            links.classList.add("active");
        });
    });
    toggleBtn.onclick = function () {
        dropdownMenu.classList.toggle('open')
        const isOpen = dropdownMenu.classList.contains('open')

        toggleBtnSvg.classList = isOpen
        ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
         </svg>`

        : `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>`
    }
    
    const mapLink = document.getElementById("mapLink");

    mapLink.addEventListener('click', (e) =>{
        e.preventDefault();
        const preDefinedLocation = "Lagos";
        const encodedLocation = encodeURIComponent(preDefinedLocation);
        // Build a Map
        const mapUrl = `https://www.google.com/maps/place/${encodedLocation}`;    
       window.open(mapUrl, '_blank');
    });
    // for transportation
    const newsLink = document.getElementById("newsLink");
    newsLink.addEventListener('click', (e) => {
        e.preventDefault();
        const preDefinedLocation = "Lagos";
        const encodedLocation = encodeURIComponent(preDefinedLocation);
    
        const newsUrl = `https://news.google.com/home?hl=en-NG&gl=NG&ceid=NG:en${encodedLocation}`;
        
        window.open(newsUrl, '_blank');

    });
    // function to choose
    document.addEventListener('DOMContentLoaded', () => {
        const pickDate1 = document.getElementById('pickDate1');
        const pickDate2 = document.getElementById('pickDate2');
        //set date in MM-DD-YYYY format
        pickDate1.value = 'January 10, 2009';
        pickDate2.value = 'January 25, 2009';

    });
    //add a read more content
    const toggleReadMore = () => {
        // get the specific content and link
        const moreContent = document.querySelector('.moreContent');
        const readMore = document.querySelector('.readMore');
        const moreContent2 = document.getElementById('moreContent2');
        const readMore2 = document.getElementById('readMore2');

        // toggle the click
        if (moreContent.style.display === 'none' || moreContent2.style.display === 'none') {
            moreContent.style.display = 'inline';
            readMore.textContent = 'Read Less';
            moreContent2.style.display = 'inline';
            readMore2.textContent = 'Read Less';


        } else {
            moreContent.style.display = 'none';
            readMore.textContent = 'Read More';
            moreContent2.style.display = 'none';
            readMore2.textContent = 'Read More';
            
        }
    };
    //initialize all sections with display none
    document.addEventListener('DOMContentLoaded', () => {
       document.querySelectorAll('.moreContent').forEach(content => {
           content.style.display = 'none';
       });
       document.querySelectorAll('.'moreContent2').forEach(content => {
        content.style.display = 'none';
    });
       
    })
    
        
