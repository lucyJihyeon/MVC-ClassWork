const loginFormHandler = async (event) => {
  // TODO: Add a comment describing the functionality of this statement
  //prevent default (traditional behavior) when user clicks, it doesn't refresh 
  event.preventDefault();

  // TODO: Add a comment describing the functionality of these expressions
  //get the value entered in a email-login box, trim the whitespace on each ends, then store it
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // TODO: Add a comment describing the functionality of this expression
    //if user has entered the email and password, send a POST request 
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
