let express = require('express');
let router = express.Router();
// beginning of routes.
// only have initial '/' route right now.
router.get('/', function(req, res){
res.render('index')
});
module.exports = router;