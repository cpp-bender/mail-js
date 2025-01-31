const nodeMailer = require("nodemailer");

const html = `
<h1>Hello</h1>
<p>Lorem ipsum</p>
`;

const mail = {
  from: "ahmetaltioglu@gmail.com",
  to: "cppbender@gmail.com",
  pass: "zjjs hxzn lffu lisd",
};


async function send(mail) {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: mail.from,
      pass: mail.pass,
    },
  });

  await transporter
    .sendMail({
      from: mail.from,
      to: mail.to,
      subject: "Mail has sent",
      html: html,
    })
    .then((info) => console.log("Message sent: " + info.envelope));
}

send(mail).catch((e) => console.error(e));
