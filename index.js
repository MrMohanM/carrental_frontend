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
        img_url:"punch.jpeg",
        carname:"tata punch",
        price:"350",
        type:"manual",
        fuel:"petrol",
        seat:'5',
        location:"Chrompet, Chennai"
    },
    {
        img_url:"suzuki.jpeg",
        carname:"suzuki",
        price:"300",
        type:"manual",
        fuel:"petrol",
        seat:'5',
        location:"Chrompet, Chennai"
    },
    {
        img_url:"toyota.jpeg",
        carname:"toyota ",
        price:"250",
        type:"manual",
        fuel:"petrol",
        seat:'5',
        location:"porur, Chennai"
    },
    {
        img_url:"innova.jpeg",
        carname:"innova",
        price:"250",
        type:"manual",
        fuel:"petrol",
        seat:'5',
        location:"porur, Chennai"
    }, 
    {
        img_url:"Swift 2022.jpg",
        carname:"Swift 2023",
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
function setupEventListeners() {
    const loginButton = document.getElementById("login");
    const registerButton = document.getElementById("register");

    if (loginButton) {
        loginButton.addEventListener("click", function () {
            window.location.href = "login.html";
        });
    }

    if (registerButton) {
        registerButton.addEventListener("click", function () {
            window.location.href = "register.html";
        });
    }

    const search_icon = document.getElementById("search-icon");
    if (search_icon) {
        search_icon.addEventListener("click", function () {
            const searchTerm = document.getElementById('search-key').value.toLowerCase();
            const filteredcars = car_details.filter(car_detail => {
                return car_detail.price.toLowerCase().includes(searchTerm) ||
                    car_detail.carname.toLowerCase().includes(searchTerm) ||
                    car_detail.location.toLowerCase().includes(searchTerm);
            });
            populateVechileCard(filteredcars);
            
        });
    }
}


document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('view-details')) {
        const carData = JSON.parse(e.target.getAttribute('data-car'));
        const content = `
            <div class="row">
                <div class="col-md-6">
                    <img src="${carData.img_url}" alt="${carData.carname}" class="img-fluid rounded">
                </div>
                <div class="col-md-6">
                    <h4>${carData.carname}</h4>
                    <p><strong>Price:</strong> ₹${carData.price}/hr</p>
                    <p><strong>Type:</strong> ${carData.type}</p>
                    <p><strong>Fuel:</strong> ${carData.fuel}</p>
                    <p><strong>Seats:</strong> ${carData.seat}</p>
                    <p><strong>Location:</strong> ${carData.location}</p>
                    <button class="btn btn-success mt-3" id="modal-book-now">Book Now</button>
                </div>
            </div>
        `;

        document.getElementById('modal-body-content').innerHTML = content;
    }
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
            <button class="btn btn-info btn-sm view-details" data-car='${JSON.stringify(car)}' data-bs-toggle="modal" data-bs-target="#carDetailModal">View Details</button>
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
    event.currentTarget.classList.add('active');
}

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('div[id]');
    let scrollPos = window.scrollY + 120;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll('#navbar a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
});

