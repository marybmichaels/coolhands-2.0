const Blank = require('../../models/blank');

module.exports.updateOrder = function(req, res) {
  Blank.findOneAndUpdate({_id: req.body.Blank_id}, 
    {$set: {survey_status: req.body.survey_status}}, 
    function(err, Blank) {
      if (err) res.status(401).send('Error occured in retiring survey.');
      else {
        //Also update PassportJS Blank session's survey_status
        Blank.survey_status = req.body.survey_status;
        req.login(Blank, function(err){
          if (!err) res.status(200).send();
        });
      }
    }
  );
}