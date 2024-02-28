const logout = async () => {
  // TODO: Add a comment describing the functionality of this expression
  //when use clicks #logout, call logout function where it sends a POST request to the url wieh endpoints 
  ///api/users/logout 
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // TODO: Add a comment describing the functionality of this statement
    //
    document.location.replace('/login');
  } else {
    alert('Failed to log out');
  }
};

document.querySelector('#logout').addEventListener('click', logout);
