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
    }
]
const client=[
    {
        no:1,
        clientname:"Leo William",
        contact:"9140480297",
        date:"12/05/2025",
        time:"9:00 AM",
        hours:"8",
        status:"pending"
    },
    {
        no:2,
        clientname:"Leo William",
        contact:"9140480297",
        date:"12/05/2025",
        time:"9:00 AM",
        hours:"8",
        status:"pending"
    },
    {
        no:3,
        clientname:"Leo William",
        contact:"9140480297",
        date:"12/05/2025",
        time:"9:00 AM",
        hours:"8",
        status:"pending"
    }
]
document.addEventListener('DOMContentLoaded', function() {
    populateVechileCard(car_details);
    Request_Listing(client);


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
            <div class="Owner-button">
                <button class="edit-details">Edit Details</button>
                <button class="delete">Delete</button>
                <select id="car_status" name="car_status" required style="padding:8px; border-radius:5px;">
                <option value="" disabled selected>Avaliablity</option>
                <option value="avaliable">Avaliable</option>
                <option value="not">Not Avaliable</option>
            </select>
            </div>
        </div>
    </div>    
        `;
        card.appendChild(con);
    });
}
function Request_Listing(data) {
    const tableBody = document.getElementById('request-details');
    tableBody.innerHTML = '';

    data.forEach((request) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${request.no}</td>
            <td>${request.clientname}</td>
            <td>${request.contact}</td>
            <td>${request.date}</td>
            <td>${request.time}</td>
            <td>${request.hours}</td>
            <td>
                <select class="status-dropdown" >
                    <option class="pen" value="pending" ${request.status === 'pending' ? 'selected' : ''}>Pending</option>
                    <option class="app" value="approved" ${request.status === 'approved' ? 'selected' : ''}>Approved</option>
                    <option class="rej" value="rejected" ${request.status === 'rejected' ? 'selected' : ''}>Rejected</option>
                </select>
            </td>
        `;
        tableBody.appendChild(row);
    });
}
function Addcar(){
    document.getElementById("upload-container").style.display="block";
}
