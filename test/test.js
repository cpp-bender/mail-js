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
    streamTransport: true,
    jsonTransport: true,
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: mail.from,
      pass: mail.pass,
    },
  });

  await transporter.verify();

  await transporter
    .sendMail({
      from: mail.from,
      to: mail.to,
      subject: "This is a test mail. Do not consider",
      html: html,
      text: "This is a test text.",
    })
    .then((info) => console.log("Message sent: " + JSON.stringify(info.envelope)));
}

send(mail).catch((e) => console.error(e));
