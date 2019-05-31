var auth = require('./controllers/auth'),
    surveys = require('./controllers/surveys'),
    users = require('./controllers/users'),
    userAnswers = require('./controllers/userAnswers'),
    Blank = require('./controllers/blank'),
    admin = require('./controllers/admin');

module.exports = function(app, passport) {
  //Authentication
  app.post('/signup', auth.signup);
  app.get('/login', passport.authenticate('local'), auth.login);
  app.get('/getUser', auth.getUser);
  app.get('/logout', auth.logout);

  app.get('/login', surveys.getSurvey);

  //Survey
  app.get('/getSurvey', surveys.getSurvey);

  //User
  app.post('/updateSurveyStatus', users.updateSurveyStatus);

   //Orders
   app.post('/order', Blank.updateOrder);

  //UserAnswer
  app.post('/saveUserAnswers', userAnswers.saveUserAnswers);
  app.get('/retrieveUserAnswers', userAnswers.retrieveUserAnswers);

  //Admin uses
  app.post('/updateQuestions', admin.updateQuestions);
  app.post('/updateSurvey', admin.updateSurvey);
}
