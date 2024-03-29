import { Meteor } from 'meteor/meteor';
import '../imports/api/spaces.js'
import '../imports/api/email.js'
import { Email } from 'meteor/email'
// Meteor.startup(() => {
//  // code to run on server at startup  
// });
// Meteor.startup( function() {
//   process.env.MAIL_URL = "smtp://hello%40surfingsuitcase.com:DXL@work123@box1244.bluehost.com:465";
//   console.log(Meteor.settings)
// });

//method to send email.
Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }
});

// Email.send({
// 	to:"hello@surfingsuitcase.com",
// 	from:"lik@surfingsuitcase.com",
// 	subject:"Testing email",
// 	text:"ok lets try this"
// });
