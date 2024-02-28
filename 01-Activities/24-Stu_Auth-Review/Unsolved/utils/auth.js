const withAuth = (req, res, next) => {
  // TODO: Add a comment describing the functionality of this if statement
  //if the logged_in status stored in a session storage is false, redirect the user to the /login end point
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
