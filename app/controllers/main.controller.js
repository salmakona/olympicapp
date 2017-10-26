module.exports = {

  // show the home page
  showHome: (req, res) => {
    res.render('pages/home');
  },

    // show the home page
  showMain: (req, res) => {
    res.render('layout');
  },

  //Show text
    showText: (req, res) => {
    res.render('pages/home');
  }

};