var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const session = require('express-session');
const bcrypt = require('bcrypt');

var Product = mongoose.model('Product');
var User = mongoose.model('User');

mongoose.Promise = global.Promise;

module.exports = {

  // show: function(req, res,next) {
  //   User.find({}, function(err, users) {
  //     console.log(req.session.currUser)
  //     res.render('users', {users: users, logged_user:req.session.currUser});
  //   })
  // },

  register: function(req, res, err,next) {
    let newUser= new User(req.body);
      newUser.save()
      .then((user) => { 
          req.session.name = user.firstName;
          req.session.user = user._id;
          console.log(user)
          req.session.email = user.email;
          res.json({'LoggedUserId': req.session.user,'LoggedUserName': req.session.name, 'LoggedUserEmail': req.session.email}); 
        })
  },

  find: function(req, res,next){
    User.find({}, function (err, users){
            res.json({'userResults': users})
    });
},

login: (req, res, err, next) => {
  User.findOne({email: req.body.email})
  .then((user) => { 
      if (!user) {
          res.json({'err': "That email doesnt exist with us!"});
          // (err => ({'err' : 'something went wrong'}))
          // res.redirect()
      }
      if (user.password != req.body.password) {
          res.json({'err': "Your Password is incorrect!"});
          // (err => ({'err' : 'something went wrong'}))
          // res.redirect()
      }
      else {
        req.session.name = user.firstName
        req.session.user = user._id;
        req.session.email = user.email;
        // newUser =
        // {
        //   _id = user._id,
        //   firstName=user.firstName,
        //   lastName=user.firstName,
        //   email=user.firstName

        // }
        // 'loggedUser': newUser
        console.log(req.session.name);
        console.log(req.session.user);
        console.log(req.session.email);
        res.json({ 'LoggedUserId': req.session.user,'LoggedUserName': req.session.name, 'LoggedUserEmail': req.session.email});
      }
  })
  .catch((err) => { res.status(409).json({'err': 'this is BAD'}); });
},


logout: (req, res, coolmessage, next) => {
  req.session.destroy();
 (coolmessage => ({'coolMeSsAgE' : 'you did cool kid'}))
  res.json(true);
},

// logout: function(req, res, err, next) {
  
//     req.session.destroy(function(err) {
//         if (err) {
//           console.log("logout error")
//           res.json({'err': 'you didnt log out, do it'});
//         } else {
//           console.log("logged out")
//           res.json({'err' : 'You logged out'});
//         }
        
//     })
//     .catch(err => {res.status(403).json()}); 
    
//   },


delete: function(req,res) {
  User.remove({_id:req.params.id}, function(err){
    console.log("You successfully deleted")
    res.json({'err' : 'You successfully deleted'});
     });

  }
}
  
        
      