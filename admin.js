const trips=[
    {
        no:"1",
        clientname:"priyanshu",
        cartype: "Maruti Suzuki Alto",
        carnumber:"TN 11 aq 4505",
        ownername:"Mohan M",
        tripstatus: "finished"
    },
    {
        no:"2",
        clientname:"priyanshu",
        cartype: "Maruti Suzuki Alto",
        carnumber:"TN 11 aq 4505",
        ownername:"Mohan M",
        tripstatus: "finished"
    },
    {
        no:"3",
        clientname:"priyanshu",
        cartype: "Maruti Suzuki Alto",
        carnumber:"TN 11 aq 4505",
        ownername:"Mohan M",
        tripstatus: "finished"
    },
    {
        no:"4",
        clientname:"priyanshu",
        cartype: "Maruti Suzuki Alto",
        carnumber:"TN 11 aq 4505",
        ownername:"Mohan M",
        tripstatus: "finished"
    }
]
const client=[
    {
        no:1,
        clientname:"Leo William",
        licensenumber:"TN-11-2024-1234567",
        contact:"9140480297",
        status:"verified"
    },
    {
        no:2,
        clientname:"Leo William",
        licensenumber:"TN-11-2024-1234567",
        contact:"9140480297",
        status:"verified"
    },
    {
        no:3,
        clientname:"Leo William",
        licensenumber:"TN-11-2024-1234567",
        contact:"9140480297",
        status:"verified"
    },
    {
        no:4,
        clientname:"Leo William",
        licensenumber:"TN-11-2024-1234567",
        contact:"9140480297",
        status:"verified"
    },
    {
        no:5,
        clientname:"Leo William",
        licensenumber:"TN-11-2024-1234567",
        contact:"9140480297",
        status:"verified"
    },
    {
        no:6,
        clientname:"Leo William",
        licensenumber:"TN-11-2024-1234567",
        contact:"9140480297",
        status:"verified"
    }
]
const vechile=[
    {   no:1,
        ownername:"Mohan M",
        cartype:"Maruti Suzuki Alto",
        rcno:"TN 11 aq 4505",
        status:"verified"
    },
    {   no:2,
        ownername:"Mohan M",
        cartype:"Maruti Suzuki Alto",
        rcno:"TN 11 aq 4505",
        status:"verified"
    },
    {   no:3,
        ownername:"Mohan M",
        cartype:"Maruti Suzuki Alto",
        rcno:"TN 11 aq 4505",
        status:"verified"
    },
    {   no:4,
        ownername:"Mohan M",
        cartype:"Maruti Suzuki Alto",
        rcno:"TN 11 aq 4505",
        status:"verified"
    },
    {   no:5,
        ownername:"Mohan M",
        cartype:"Maruti Suzuki Alto",
        rcno:"TN 11 aq 4505",
        status:"verified"
    },
    {   no:6,
        ownername:"Mohan M",
        cartype:"Maruti Suzuki Alto",
        rcno:"TN 11 aq 4505",
        status:"verified"
    }
]
document.addEventListener('DOMContentLoaded', function() {
    populateVechileTable(vechile);
    populateTripTable(trips);
    populateRenterTable(client); 
});
function populateRenterTable(data) {
    const tableBody = document.getElementById('renter-details');
    tableBody.innerHTML = '';

    data.forEach(ren => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${ren.no}</td>
            <td>${ren.clientname}</td>
            <td>${ren.licensenumber}</td>
            <td>${ren.contact}</td>
            <td><span class="status ${ren.status}">${formatStatus(ren.status)}</span></td>
            
        `;
        tableBody.appendChild(row);
    });
}
function populateVechileTable(data) {
    const tableBody = document.getElementById('vehicle-details');
    tableBody.innerHTML = '';

    data.forEach(vechile => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${vechile.no}</td>
            <td>${vechile.ownername}</td>
            <td>${vechile.cartype}</td>
            <td>${vechile.rcno}</td>
            <td><span class="status ${vechile.status}">${formatStatus(vechile.status)}</span></td>
            
        `;
        tableBody.appendChild(row);
    });
}
function populateTripTable(data) {
    const tableBody = document.getElementById('trip-details');
    tableBody.innerHTML = '';

    data.forEach(trip => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${trip.no}</td>
            <td>${trip.clientname}</td>
            <td>${trip.cartype}</td>
            <td>${trip.carnumber}</td>
            <td>${trip.ownername}</td>
            <td><span class="status ${trip.tripstatus}">${formatStatus(trip.tripstatus)}</span></td>
            
        `;
        tableBody.appendChild(row);
    });
}
function formatStatus(status) {
    switch(status) {
        case 'pending': return 'Pending';
        case 'in-progress': return 'In Progress';
        case 'resolved': return 'Resolved';
        case 'rejected': return 'Rejected';
        default: return status;
    }
}
function trip(){
        document.getElementById("trip").style.display="block";
    
        document.getElementById("owner").style.display="none";   

        document.getElementById("renter").style.display="none";   
}
function owner(){
    document.getElementById("owner").style.display="block";

    document.getElementById("trip").style.display="none";   

    document.getElementById("renter").style.display="none";   
}
function renter(){
    document.getElementById("renter").style.display="block";   

    document.getElementById("owner").style.display="none";

    document.getElementById("trip").style.display="none";   
}
function complaints(){
    window.location.href="complaint.html"
}
// Function to handle link clicks and add underline
function setActiveLink(event) {
    let links = document.querySelectorAll('.nav a');
    links.forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
}

function adjustForm(selectElement) {
    const value = selectElement.value;
    if (value === "ver") {
        selectElement.style.color = "green";
    } else if (value === "pro") {
        selectElement.style.color = "orange"; 
    } else if (value === "rej") {
        selectElement.style.color = "red";
    } else {
        selectElement.style.color = "black";
    }
}
