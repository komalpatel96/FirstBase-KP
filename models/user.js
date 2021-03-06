// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    
   username: {
   	type: DataTypes.STRING,
   	allowNull: false
   },
   fName: {
   	type: DataTypes.STRING,
   	allowNull: false
   },
   lName: {
   	type: DataTypes.STRING,
   	allowNull: false
   },
   email: {
   	type: DataTypes.STRING,
   	allowNull: false
   },
   phonenumber: {
   	type: DataTypes.STRING,
   	allowNull: false
   },
   password: {
   	type: DataTypes.STRING,
   	allowNull: false
   }, 
   classId: {
   	type: DataTypes.STRING,
   	allowNull: true,
    defaultValue: "None"
   }
  });

// User.associate = function(models){
//   User.belongsToMany(models.Class), {
//     foreignKey:{
//       allowNull: false
//     }
//   }
// }



  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  return User;
}



