
const configs = require('./config');

const { twilioAccountSid, twilioAuthToken } = configs;

console.log(twilioAccountSid, twilioAuthToken);

const client = require('twilio')(twilioAccountSid, twilioAuthToken);

const sendMessage = (userName, service, appointmentDate, phoneNumber) => {
    console.log(`Sending message to ${phoneNumber} for ${userName} at ${service} on ${appointmentDate}`);
    client.messages
        .create({
            to: phoneNumber,
            from: '+12312250869', // TODO Update your twilio phone number here
            body: `Hi ${userName}, \nYour appointment for ${service} has been created. \n Date: ${new Date(appointmentDate).toLocaleString()}`,
        }).then(message => console.log(message.sid));
}

module.exports = sendMessage;
