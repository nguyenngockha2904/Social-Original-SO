console.log('form sign up');

document.getElementById('btn_Submit').addEventListener('click', () => {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let cofirmPassword = document.getElementById('cofirmPassword').value;
    let male = document.getElementById('male');
    console.log(firstName, lastName, email, password, cofirmPassword, male.checked ? 'male' : 'female');



});