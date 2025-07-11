const trips=[
    {
        no:"1",
        clientname:"Priyanshu",
        cartype: "Maruti Suzuki Alto",
        carnumber:"TN 11 aq 4505",
        ownername:"Mohan M",
        tripstatus: "finished"
    },
    {
        no:"2",
        clientname:"Ashok s",
        cartype: "Maruti Suzuki Fronx",
        carnumber:"TN 21 aq 4778",
        ownername:"Magesh",
        tripstatus: "finished"
    },
    {
        no:"3",
        clientname:"Prithivi",
        cartype: "Tata  Punch",
        carnumber:"TN 11 aq 4506",
        ownername:"Mohan M",
        tripstatus: "finished"
    },
    {
        no:"4",
        clientname:"Ram",
        cartype: "Maruti Suzuki Alto",
        carnumber:"TN 11 aq 4565",
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
        clientname:"Raja",
        licensenumber:"TN-11-2024-1234567",
        contact:"9140480297",
        status:"verified"
    },
    {
        no:3,
        clientname:"Deva",
        licensenumber:"TN-11-2024-1234567",
        contact:"9140480297",
        status:"verified"
    },
    {
        no:4,
        clientname:"Praveen",
        licensenumber:"TN-11-2024-1234567",
        contact:"9140480297",
        status:"verified"
    },
    {
        no:5,
        clientname:"kamal",
        licensenumber:"TN-11-2024-1234567",
        contact:"9140480297",
        status:"verified"
    },
    {
        no:6,
        clientname:"Pavithara",
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
        ownername:"Ramesh",
        cartype:"Maruti Suzuki Alto",
        rcno:"TN 11 aq 4505",
        status:"verified"
    },
    {   no:3,
        ownername:"Rajesh",
        cartype:"Maruti Suzuki Alto",
        rcno:"TN 11 aq 4505",
        status:"verified"
    },
    {   no:4,
        ownername:"Madhavam",
        cartype:"Maruti Suzuki Alto",
        rcno:"TN 11 aq 4505",
        status:"verified"
    },
    {   no:5,
        ownername:"Boomika",
        cartype:"Maruti Suzuki Alto",
        rcno:"TN 11 aq 4505",
        status:"verified"
    },
    {   no:6,
        ownername:"Gayathri",
        cartype:"Maruti Suzuki Alto",
        rcno:"TN 11 aq 4505",
        status:"verified"
    }
]
document.addEventListener('DOMContentLoaded', function() {
    populateVechileTable(vechile);
    populateTripTable(trips);
    populateRenterTable(client); 
    setupEventListeners()
    
});
function setupEventListeners() {
    document.querySelectorAll('.change-st').forEach(button => {
        button.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            const dropdown = document.querySelector(`.renter-status-dropdown[data-id="${id}"]`);
            const newStatus = dropdown.value;

            const renter = client.find(r => r.no == id);
            if (renter) {
                renter.status = newStatus;
                alert(`Status updated to: ${newStatus}`);
            }
        });
    });
}
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
            <td>
                <select class="form-select form-select-sm renter-status-dropdown" data-id="${ren.no}">
                    <option value="pending" ${ren.status === 'pending' ? 'selected' : ''}>Pending</option>
                    <option value="verified" ${ren.status === 'verified' ? 'selected' : ''}>Verified</option>
                    <option value="rejected" ${ren.status === 'rejected' ? 'selected' : ''}>Rejected</option>
                </select>
            </td>
            <td>
                <button class="btn btn-primary btn-sm change-st" data-id="${ren.no}">Change Status</button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    setupEventListeners();
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
            <td>
            <select class="form-select form-select-sm status-dropdown">
                    <option value="pending" ${vechile.status === 'pending' ? 'selected' : ''}>Pending</option>
                    <option value="approved" ${vechile.status === 'approved' ? 'selected' : ''}>Approved</option>
                    <option value="rejected" ${vechile.status === 'rejected' ? 'selected' : ''}>Rejected</option>
                </select>
            </td>
            
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
function setActiveLink(event) {
    let links = document.querySelectorAll('.nav a');
    links.forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
}