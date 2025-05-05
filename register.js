
function adjustForm(form){
    if(form.elements["usertype"].value == "owner")
    {
        document.getElementById('owner-info').style.display = 'block';
        document.getElementById('renter-info').style.display = 'none';
    }
    else  if(form.elements["usertype"].value == "renter")
    {
        document.getElementById('renter-info').style.display = 'block';
        document.getElementById('owner-info').style.display = 'none';
    }
    else{
        document.getElementById('owner-info').style.display = 'none';
        document.getElementById('renter-info').style.display = 'none';
    }
}

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Password validation
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPsw').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Form validation
    const userType = document.getElementById('usertype').value;
    if (userType === '') {
        alert('Please select a user type');
        return;
    }
    
    if (userType === 'owner' && document.getElementById('rc_no').value === '') {
        alert('RC Number is required for owners');
        return;
    }
    
    if (userType === 'renter' && document.getElementById('license_no').value === '') {
        alert('License Number is required for renters');
        return;
    }
    
    // If all validations pass, you would typically submit the form to a server
    alert('Registration successful!');
    // Here you would typically send the data to your server
});