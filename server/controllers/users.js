console.log('Users controller');
var mongoose = require('mongoose');
var User = mongoose.model('User');
function UsersController(){
  this.index = function(req,res){
    User.find({}, (err, users)=>{
        res.json(users);        
    })
  };
  this.create = function(req,res){
    var user = new User(req.body);
    user.save(function(err, user){
      console.log(err, "==========")
        console.log(user, "===========")
        res.json(user);   
    })
  };
}
module.exports = new UsersController();