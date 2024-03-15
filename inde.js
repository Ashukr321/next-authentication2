//⭐⭐ import nodemailer to implement mailing  services ⭐⭐
import nodemailer from 'nodemailer';

//⭐ Define the function to send emails ⭐
export const sendEmail = async (req, res) => {
  try {
    // Validate the required fields in req.body
     const { email, subject, message, fullName } = req.body;

      console.log('Extracted data:', { email, subject, message, fullName });
    if (!email || !subject || !message || !fullName) {
      // If any required field is missing, return a bad request response
      return res.status(400).json({ msg: 'Missing required fields in the request body' });
    }

    //⭐ Create a transporter to send emails using nodemailer ⭐
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // Set to true if your SMTP server requires a secure connection
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    //⭐ Prepare the data for the email content ⭐
    //⭐ Compose the email options with a professional template ⭐
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: subject,
      text: `
Dear fullName,

Thank you for using our services. 
We appreciate your time and value your feedback.
message:
message

Best regards,
Your Company Name
      `,
    };

    // ⭐ Send the email🤷‍♂️
    await transporter.sendMail(mailOptions);

    // 😊 Return a success response😊
    return res.status(200).json({ status: 'success', message: 'Email sent successfully' });
  } catch (error) {
    // 😔 Return an error response if there's an issue😔
    return res.status(400).json({ msg: error.message });
  }
};


// 🤷‍♂️ env setup 🤷‍♂️ 
// SMTP_HOST=smtp.gmail.com
// SMTP_PORT=587
// EMAIL=your email on which you will get all emails emails ashutoshkumarsingh55555@gmail.com
// PASSWORD= you email app password  erat tbbg ofsf fubj