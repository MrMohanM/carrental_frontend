const car_details=[
    {
        img_url:"Swift 2022.jpg",
        carname:"Swift 2022",
        price:"215",
        type:"manual",
        fuel:"petrol",
        seat:'5',
        location:"Chrompet, Chennai"
    },
    {
        img_url:"Swift 2022.jpg",
        carname:"Swift 2022",
        price:"215",
        type:"manual",
        fuel:"petrol",
        seat:'5',
        location:"Chrompet, Chennai"
    },
    {
        img_url:"Swift 2022.jpg",
        carname:"Swift 2022",
        price:"300",
        type:"manual",
        fuel:"petrol",
        seat:'5',
        location:"Chrompet, Chennai"
    },
    {
        img_url:"Swift 2022.jpg",
        carname:"toyota 2022",
        price:"250",
        type:"manual",
        fuel:"petrol",
        seat:'5',
        location:"porur, Chennai"
    },
    {
        img_url:"Swift 2022.jpg",
        carname:"Tata 2022",
        price:"250",
        type:"manual",
        fuel:"petrol",
        seat:'5',
        location:"porur, Chennai"
    }, 
    {
        img_url:"Swift 2022.jpg",
        carname:"toyota 2022",
        price:"300",
        type:"manual",
        fuel:"petrol",
        seat:'5',
        location:"vadapalni, Chennai"
    }
]
document.addEventListener('DOMContentLoaded', function() {
    populateVechileCard(car_details);
    setupEventListeners()
});
function setupEventListeners(){
    const loginButton = document.getElementById("login");
    const registerButton =document.getElementById("register")

        loginButton.addEventListener("click", function (event) {
            window.location.href = "login.html";
        });
        registerButton.addEventListener("click",function(event){
            window.location.href = "register.html";
        });
        const search_icon= document.getElementById("search-icon");
        search_icon.addEventListener("click",function(event){
            const searchTerm = document.getElementById('search-key').value.toLowerCase();
            const filteredcars = car_details.filter(car_detail => {
                
                const searchMatch = 
                    car_detail.price.toLowerCase().includes(searchTerm) || 
                    car_detail.carname.toLowerCase().includes(searchTerm) || 
                    car_detail.location.toLowerCase().includes(searchTerm);
                return searchMatch;
            });
            populateVechileCard(filteredcars);
            setupEventListeners();
        });
}
function populateVechileCard(data) {
    const card = document.getElementById('car');
    card.innerHTML = '';

    data.forEach(car => {
        const con = document.createElement('div');
        con.innerHTML = `
        <div class="car-card">
        <div class="car-image-container">
            <img class="car-image" src="${car.img_url}" alt="${car.carname}">
        </div>
        
        <div class="car-details">
            <div class="car-title">
                <h3>${car.carname}</h3>
                <span class="car-price">${car.price}/hours</span>
            </div>
            <div class="car-specs">
                <span>${car.type}</span>
                <span>${car.fuel}</span>
                <span>${car.seat} Seats</span>
            </div>
            <div class="car-location">
                <span>${car.location}</span>
            </div>
            <div class="car-button">
                <button class="view-details">View Details</button>
                <button class="book-now">Book Now</button>
            </div>
        </div>
    </div>    
        `;
        card.appendChild(con);
    });
}
function setActiveLink(event) {
    let links = document.querySelectorAll('.nav a');
    links.forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
}

