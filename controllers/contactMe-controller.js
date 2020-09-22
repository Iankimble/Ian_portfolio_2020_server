const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");
dotenv.config();

exports.sendMsg = (req) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  let to = req.body.to.toString();
  let from = req.body.from.toString();
  let subject = req.body.subject;
  let text = req.body.text.toString();

  const msg = {
    to: to,
    from: from,
    subject: subject,
    html: text,
  };

  sgMail.send(msg);
};
