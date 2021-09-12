const { google } = require('googleapis');

const { oauth2 } = google.auth;

const oAuth2Client = new oauth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET)

oAuth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});

const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

//do this with a form with user input

const eventStartTime = new Date();
eventStartTime.setDate(eventStartTime.getDay() + 2);

const eventEndTime = new Date();
eventEndTime.setDate(eventEndTime.getDay() + 2);
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45);

const event = {
    summary: 'Meeting with David',
    location: '325 Lafayette, Brooklyn, NY 11205'
}