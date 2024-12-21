var admin = require("firebase-admin");

var serviceAccount = require("@/assets/secretInfo.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
