var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { 
      type: String,
      index: true   // Mark as secondary index
  },
  username: {
	type: String,
	trim: true,
    unique: true    // Creates index
  },
  password: String,
  created: {
	type: Date,
	default: Date.now
  },
  website: {
	type: String,
	get: function(url) {
	  if (!url) {
		return url;
	  } else {
		if (url.indexOf('http://') !== 0 && url.indexOf('https//') !== 0) {
		  url = 'http://' + url;
		}
		return url;
	  }
	}
  }
});

// Add virtual attribute to UserSchema and add a getters/setters to it 
UserSchema.virtual('fullName').get(function() {
    return this.firstName + ' ' + this.lastname;
}).set(function(fullName) {
    var splitName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});

UserSchema.statics.findOneByUsername = function (username, callback) {
    this.findOne({ username: new RegExp(username, 'i') }, callback);
};

UserSchema.methods.authenticate = function(password) {
    return this.password === password;
};
//Convert MongoDB document to json representation
UserSchema.set('toJSON', { getters: true, virtuals: true });
mongoose.model('User', UserSchema);
