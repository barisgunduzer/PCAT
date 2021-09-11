exports.getIndexPage = (req, res) => {
  res.render('index', {
    page_name: 'index',
  });
};

exports.getAboutPage = (req, res) => {
  res.render('about', {
    page_name: 'about',
  });
};

exports.getAddPhotoPage = (req, res) => {
  res.render('add', {
    page_name: 'add',
  });
};

exports.getContactPage = (req, res) => {
  res.status(200).render('contact', {
    page_name: 'contact',
  });
};

exports.sendEmail = async (req, res) => {
  try {
    const outputMessage = `
  
  <h1>Message Details</h1>
  <ul>
  <li>Name: ${req.body.name}</li>
  <li>Email: ${req.body.email}</li>
  <li>Name: ${req.body.subject}</li>
  </ul>
  <h1>Message</h1> 
  <p>${req.body.message}</p>

  `;
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'johndoe@gmail.com', // gmail account
        pass: 'passxxxxxxxx', // gmail password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Smart EDU Contact Form 👻" <${req.body.email}>`, // sender address
      to: 'johndoe@gmail.com', // list of receivers
      subject: `${req.body.subject} (SmartEdu) ✔ `, // Subject line
      text: 'Hello world?', // plain text body
      html: outputMessage, // html body
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  } catch (err) {
    console.log('Error: Message not posted!')
    res.status(401).redirect('/contact');
  }
};
