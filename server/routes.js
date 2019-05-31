var auth = require('./controllers/auth'),
    surveys = require('./controllers/surveys'),
    users = require('./controllers/users'),
    userAnswers = require('./controllers/userAnswers'),
    admin = require('./controllers/admin');
    // welcome = require('../client/components/Home/Welcome');

module.exports = function(app, passport) {
  //Authentication
  app.post('/signup', auth.signup);
  app.get('/login', passport.authenticate('local'), auth.login);
  app.get('/getUser', auth.getUser);
  app.get('/logout', auth.logout);

  app.get('/login', surveys.getSurvey);

  //Survey
  app.get('/getSurvey', surveys.getSurvey);

  // app.get('/welcome', welcome.render);

  //User
  app.post('/updateSurveyStatus', users.updateSurveyStatus);

  //UserAnswer
  app.post('/saveUserAnswers', userAnswers.saveUserAnswers);
  app.get('/retrieveUserAnswers', userAnswers.retrieveUserAnswers);

  //Admin uses
  app.post('/updateQuestions', admin.updateQuestions);
  app.post('/updateSurvey', admin.updateSurvey);
}
