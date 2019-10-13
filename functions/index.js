const functions = require('firebase-functions');
const admin = require('firebase-admin')
const express = require('express');
const rfid = require('random-friendly-id');

const app = express();

admin.initializeApp();

app.post('/new-class', async (req, res) => {
    let classCode = rfid();
    const ref = await admin.database().ref('/classes/' + classCode);
    ref.once('value', async snapshot => {
        return snapshot.ref.set({
            name: req.body.name,
            owner: req.body.owner
        });
    });
    res.send({ code: classCode });
});
exports.api = functions.https.onRequest(app);