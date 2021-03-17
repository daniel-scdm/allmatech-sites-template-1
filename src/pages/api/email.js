// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodeMailer from "nodemailer";

const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: 'vitorbretasprata@gmail.com',
      pass: 'cortez34653456'
    }
});

const Index = (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const mailOptions = {
        from: 'vitorbretasprata@gmail.com',
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {

            res.status(500).json({ 
                Message: "An error has occured" ,
                error: error
            });

        } else {
            res.status(200).json({ 
                Message: "Sent" ,
                data: info.response
            });
        }
    });         
}

export default Index;