// Read configuration from the environment

// Datbase configruation
const dbHost = process.env.CHOREO_APPDB_HOSTNAME;
const dbUser = process.env.CHOREO_APPDB_USERNAME;
const dbPassword = process.env.CHOREO_APPDB_PASSWORD;
const dbName = process.env.CHOREO_APPDB_DATABASENAME;
const dbPort = process.env.CHOREO_APPDB_PORT;

// Twilio configruation
const twilioAccountSid = process.env.CHOREO_TWILIO2_ACCOUNTSID;
const twilioAuthToken = process.env.CHOREO_TWILIO2_TOKEN;

// User Manager configruation
const userManagerServiceUrl = process.env.CHOREO_UM22_SERVICEURL;
const userManagerAPIkey = process.env.CHOREO_UM22_CHOREOAPIKEY;

module.exports = {
    dbHost,
    dbUser,
    dbPassword,
    dbName,
    dbPort,
    twilioAccountSid,
    twilioAuthToken,
    userManagerServiceUrl,
    userManagerAPIkey
};
