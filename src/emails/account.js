const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'oktarkara@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendByeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'oktarkara@gmail.com',
        subject: 'We are very upset :(',
        text: `We are very sorry, ${name}. Let me know why you leave us behind you`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendByeEmail
}