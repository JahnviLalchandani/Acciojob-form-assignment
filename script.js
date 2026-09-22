document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form-container');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nameInput = document.getElementById('name').value;
        const emailInput = document.getElementById('email').value;
        const genederInputs = document.querySelector('input[name="gender"]:checked');
        const car = document.getElementById('cars').value;
        const tel = document.getElementById('tel').value;
        const age = document.getElementById('age').value;
        const dob = document.getElementById('dob').value;
        const tos = document.getElementById('tos').checked;
        const passwordInput = document.getElementById('password').value;

        if (!nameInput || !emailInput || !genederInputs || !tel || !age || !dob || !tos || !passwordInput) {
            alert('Please fill in all the required fields.');
            return;
        }

        if (car === 'choose') {
            alert('Please select a car.');
            return;
        }
        window.location.href = 'next-page.html';

    });
});