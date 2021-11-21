const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');

sign_up_btn.addEventListener('click', () => {
  container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
  container.classList.remove('sign-up-mode');
});

function signup() {
  document.getElementById('Username').value = '';
  document.getElementById('Firstname').value = '';
  document.getElementById('Lastname').value = '';
  document.getElementById('Emailaddress').value = '';
  document.getElementById('Address').value = '';
  document.getElementById('Password').value = '';
}

// const addUser = async () => {
//   const Username = document.getElementById('Username');
//   const Firstname = document.getElementById('Firstname');
//   const Lastname = document.getElementById('Lastname');
//   const EmailAddress = document.getElementById('Emailaddress');
//   const Address = document.getElementById('Address');
//   const Password = document.getElementById('Password');
//   //console.log(Password.value);
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       responseType: 'json',
//     },
//     body: JSON.stringify({
//       UserName: Username.value,
//       FirstName: Firstname.value,
//       LastName: Lastname.value,
//       EmailAddress: EmailAddress.value,
//       Address: Address.value,
//       Password: Password.value,
//     }),
//   };

//   const response = await fetch('http://localhost:2108/api/add/client', options);
//   const resData = await response.json();
//   console.log(resData);
//   if (response.status === 200) {
//     alert(resData.message);
//     container.classList.remove('sign-up-mode');
//     signup();
//     // window.location.replace('./FRONTEND/signup.html');
//   } else {
//     alert(resData.message);
//   }
// };

// const registerForm = document.getElementById('Registerform');
// registerForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   addUser();
// });
