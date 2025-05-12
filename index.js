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
    }
]
document.addEventListener('DOMContentLoaded', function() {
    populateVechileCard(car_details);
        const loginButton = document.getElementById("login");
        const registerButton =document.getElementById("register")

        loginButton.addEventListener("click", function (event) {
            window.location.href = "login.html";
        });
        registerButton.addEventListener("click",function(event){
            window.location.href = "register.html";
        });
});
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
                <h3>Swift 2022</h3>
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
