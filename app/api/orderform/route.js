import nodemailer from "nodemailer";

export const POST = async (req, res) => {
  try {
    console.log("post running")
    const {  email, phoneNumber, deadline, citationFormat, fullName, country, paperType, subject, pages } = await req.json();

    const toEmail = process.env.SMTPEMAIL; // Replace with the actual recipient email
    const password = process.env.SMTPPASSWORD; // Replace with the actual recipient email
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      secure: false,
      auth: {
        user: toEmail,
        pass: password,
      },
    });

    const mailOptions = {
      from: toEmail,
      to: toEmail,
      subject: `THE ASSIGNMENT HELP | ORDER FORM:`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Deadline: ${deadline}
        Citation Format: ${citationFormat.value}
        Country: ${country}
        Paper Type: ${paperType.value}
        Subject: ${subject}
        Word Count: ${pages}
        
      `,
    };

    await transporter.sendMail(mailOptions);
    return new Response("Request Submitted", { status: 200 });
} catch (error) {
  console.error("Error handling form data:", error);
  return new Response("Failed to submit form", { status: 500 });
}
};
