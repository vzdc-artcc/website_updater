const NEXTAUTH_URL = process.env.NEXTAUTH_URL;
const UPDATER_KEY = process.env.UPDATER_KEY;

setInterval(() => {
    fetch(`${NEXTAUTH_URL}/api/update/roster`, {
        headers: {
            'x-updater-key': UPDATER_KEY
        },
    }).then(() => {
        console.log('Roster updated');
    });
}, 1000 * 60 * 60); // 60 minutes

setInterval(() => {
    fetch(`${NEXTAUTH_URL}/api/update/stats`, {
        headers: {
            'x-updater-key': UPDATER_KEY
        },
    }).then(() => {
        console.log('Stats updated');
    });
}, 1000 * 60 * 2); // 2 minutes

setInterval(() => {
    fetch(`${NEXTAUTH_URL}/api/update/solo`, {
        headers: {
            'x-updater-key': UPDATER_KEY
        },
    }).then(() => {
        console.log('Solos updated');
    });
}, 1000 * 60 * 20); // 20 minutes

setInterval(() => {
    fetch(`${NEXTAUTH_URL}/api/update/loa`, {
        headers: {
            'x-updater-key': UPDATER_KEY
        },
    }).then(() => {
        console.log('LOAs updated');
    });
}, 1000 * 60 * 20); // 10 minutes

setInterval(() => {
    fetch(`${NEXTAUTH_URL}/api/update/events`, {
        headers: {
            'x-updater-key': UPDATER_KEY
        },
    }).then(() => {
        console.log('Events updated');
    });
}, 1000 * 60 * 20); // 20 minutes

setInterval(() => {
    fetch(`${NEXTAUTH_URL}/api/update/appointments`, {
        headers: {
            'x-updater-key': UPDATER_KEY
        },
    }).then(() => {
        console.log('Appointments updated');
    });
}, 1000 * 60 * 15); // 15 minutes

const cron = require('node-cron');
cron.schedule('0 0 * * 0', async () => {
    try {
        await fetch(`${NEXTAUTH_URL}/api/events/week`, {
            headers: {
                'x-updater-key': UPDATER_KEY
            },
        });
        console.log('Weekly update pinged (Sunday 00:00 UTC)');
    } catch (err) {
        console.error('Weekly update failed', err);
    }
}, {
    scheduled: true,
    timezone: 'UTC'
});
