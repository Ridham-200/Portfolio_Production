const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const transporter = nodemailer.createTransport(
    sendGridTransport({
      auth: {
        api_key: process.env.API_SENDGRID,
      },
    })
  )
const sendEmailController = async(req,res) => {
    try {
        const { name, email, msg } = req.body;

       
        if (!name || !email || !msg) {
          return res.status(500).send({
            success: false,
            message: "Please Provide All Fields",
          });
        }

       await transporter.sendMail({
            to: "ridhamm48@gmail.com",
            from: "ridhamm48@gmail.com",
            subject: "Regarding Mern Portfolio App",
            html: `
              <h5>Detail Information</h5>
              <ul>
                <li><p>Name : ${name}</p></li>
                <li><p>Email : ${email}</p></li>
                <li><p>Message : ${msg}</p></li>
              </ul>
            `,
          });

        return res.status(200).send({
            success: true,
            message: "Your Message delivered Successfully",
          });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Send Email API Error",
            error,
          });
    }
}
module.exports = { sendEmailController };