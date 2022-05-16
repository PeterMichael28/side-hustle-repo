const hamb = document.querySelector('.heade .nav-ba .nav-lis .hamb'); //hamburger button
const mobile_menu = document.querySelector('.heade .nav-ba .nav-lis ul');
const mobile_item = document.querySelectorAll('.heade .nav-ba .nav-lis ul li a');

const togglePasswords = document.querySelectorAll('#togglePassword');
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phoneNo');
const form = document.querySelector('#my-form');
const success = document.querySelector('.success');






hamb.addEventListener('click', () => {
    hamb.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


mobile_item.forEach(item=> {
    item.addEventListener('click', () => {
    hamb.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    console.log('clicked')
    })
})


// password eye toggle

togglePasswords.forEach((togglePassword) => {
    togglePassword.addEventListener('click', () => {


        const inputGrp = togglePassword.parentElement;
        const input = inputGrp.querySelector('.password')
        if (input.getAttribute('type') === 'password') {
            input.setAttribute('type', "text");
            togglePassword.classList.add('activ')

        } else {
            input.setAttribute('type', 'password');
            togglePassword.classList.remove('activ') 
        }
    })
   
})

//form submit



function setErr(element, message) {
    let input = element.parentElement.parentElement;
    let error = input.querySelector('#error');
    error.innerText = message;
  
}


/*form validation*/

function validateForm() {
    const passVal = pass.value.trim();
    const pass2Val = pass2.value.trim();
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();

    if(usernameVal === '') {
    setErr(username, 'Username is required')

    } else {
     setErr(username, '')
    };

    if(emailVal === '' || emailVal.includes('@') === false) {
        setErr(email, 'enter a valid email')
    } else {
        setErr(email, '')
    };

    if(phoneVal === '') {
        setErr(phone, 'enter a valid number')
        
    } else {
         setErr(phone, '')
        
    };

    if(phoneVal === '') {
       setErr(phone, 'enter a valid number')
        
    } else {
        setErr(phone, '')
        
    }

    if(passVal === '') {
        setErr(pass, 'enter a password')
       
    } else {
        setErr(pass, '')
       
    }

    if(pass2Val === '' || pass2Val !== passVal) {
        setErr(pass2, 'password do not match')
     
    } else {
        setErr(pass2, '')

    }

    if (usernameVal !== '' && emailVal !== '' && phoneVal !== '' && passVal !== '' && pass2Val !== '') {
        form.style.display = 'none'
        success.style.display = 'flex'
    } 

   
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
   validateForm();
})
