import Config from "./config.js";
import admin from "firebase-admin"

admin.initializeApp({
    credential: admin.credential.cert(Config.firebase),
    databaseURL: "https://ecommerce-coder-740ec.firebaseio.com"
})

console.log('firebase conectado');