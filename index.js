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
    // Function to fetch weather forecast data
    async function fetchWeatherForecast(city) {
        try {
            const apiKey = 'ce110725e27568ef1be3b5e132c9ab86';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            
            const response = await fetch(url);
            const data = await response.json();
            
            return data;
        } catch (error) {
            console.error('Error fetching weather forecast:', error);
            return null;
        }
    }

    // Function to display weather forecast on the webpage
    function displayWeatherForecast(weatherData) {
        if (!weatherData) {
            alert('Failed to fetch weather forecast.');
            return;
        }

        alert(`Current weather in ${weatherData.name}: ${weatherData.main.temp}°C, ${weatherData.weather[0].description}`);
    }
    // Event listener for the weather link
    const weatherLink = document.getElementById("weatherLink");
    weatherLink.addEventListener('click', async (e) => {
        e.preventDefault();
        const city = "Lagos";
        const weatherData = await fetchWeatherForecast(city);
        displayWeatherForecast(weatherData);
    });
    // Event listener for Input
    document.addEventListener('DOMContentLoaded', () => {
        const pickDate1 = document.getElementById('pickDate1');
        const pickDate2 = document.getElementById('pickDate2');
        //set date in MM-DD-YYYY format
        pickDate1.value = 'January 10, 2009';
        pickDate2.value = 'January 25, 2009';

    });
     // toggle the click
    const toggleReadMore = (moreContent, readMore) => {
       
        if (moreContent.style.display === 'none') {
            moreContent.style.display = 'inline';
            readMore.textContent = 'Read Less';
        } else {
            moreContent.style.display = 'none';
            readMore.textContent = 'Read More';
        }
    };

    //initialize all sections with display none
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.moreContent').forEach(content => {
            content.style.display = 'none';
        });
    });

    // Event listeners for each read more
    document.querySelector('.readMore1').addEventListener('click', () => {
        const moreContent = document.querySelector('.moreContent1');
        const readMore = document.querySelector('.readMore1');
        toggleReadMore(moreContent, readMore);
    });

    document.querySelector('.readMore2').addEventListener('click', () => {
        const moreContent = document.querySelector('.moreContent2');
        const readMore = document.querySelector('.readMore2');
        toggleReadMore(moreContent, readMore);
    });
    // Event listeners for the readmore button
    document.querySelector('.action-btn').addEventListener('click', () => {
        const moreContent = document.querySelector('.moreContent3');
        const readMore = document.querySelector('.readMore3');
        toggleReadMore(moreContent, readMore);
    });
       
    
    
        
