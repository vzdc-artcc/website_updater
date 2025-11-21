const NEXTAUTH_URL = process.env.NEXTAUTH_URL;
setInterval(() => {
    fetch(`${NEXTAUTH_URL}/api/update/roster`).then(() => {
        console.log('Roster updated');
    });
}, 1000 * 60 * 60); // 60 minutes

setInterval(() => {
    fetch(`${NEXTAUTH_URL}/api/update/stats`).then(() => {
        console.log('Stats updated');
    });
}, 1000 * 60 * 2); // 2 minutes

setInterval(() => {
    fetch(`${NEXTAUTH_URL}/api/update/solo`).then(() => {
        console.log('Solos updated');
    });
}, 1000 * 60 * 20); // 20 minutes

setInterval(() => {
    fetch(`${NEXTAUTH_URL}/api/update/loa`).then(() => {
        console.log('LOAs updated');
    });
}, 1000 * 60 * 20); // 10 minutes

setInterval(() => {
    fetch(`${NEXTAUTH_URL}/api/update/events`).then(() => {
        console.log('Events updated');
    });
}, 1000 * 60 * 20); // 20 minutes

setInterval(() => {
    fetch(`${NEXTAUTH_URL}/api/update/appointments`).then(() => {
        console.log('Appointments updated');
    });
}, 1000 * 60 * 15); // 15 minutes

const cron = require('node-cron');
cron.schedule('0 0 * * 0', async () => {
    try {
        await fetch(`${NEXTAUTH_URL}/api/events/week`);
        console.log('Weekly update pinged (Sunday 00:00 UTC)');
    } catch (err) {
        console.error('Weekly update failed', err);
    }
}, {
    scheduled: true,
    timezone: 'UTC'
});
