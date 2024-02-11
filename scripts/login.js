  const loginBtn = document.getElementById('login-button');
  const user_name = document.getElementById('username');
  const pass_word = document.getElementById('password');

  user_name.value ='';
  pass_word.value ='';

loginBtn.addEventListener('click', () => {
    let username = user_name.value;
    let password = pass_word.value;
 
  // Check if the username and password are correct9
  if (username === 'aditya_manchandani' && password === 'aditya05@') {
    // Redirect to another page or perform some action
    window.location.href = '../HTML/AdityaProfile.html';
  }
  else if (username == "" || password == "" ) {
    alert("all fields are mandatory")
    return false;
} 
  else {
    window.location.href='../HTML/profile.html';
    // console.log(window.location.href);
  }
});