const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text, html) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // or your SMTP server
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'ruchira.itte2000@gmail.com', // your email
                pass: 'bkeb eclx zgad ault', // app-specific password
            },
        });

        const mailOptions = {
            from: '"Ayush Portal ruchira.itte2000@gmail.com',
            to, // recipient email
            subject, // email subject
            text, // plain text body
            html, // HTML body (optional)
        };

        const info = await transporter.sendMail(mailOptions);
        console.log(`Email sent: ${info.messageId}`);
    } catch (error) {
        console.error(`Error sending email: ${error.message}`);
        throw error;
    }
};

module.exports = sendEmail;
