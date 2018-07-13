require('dotenv').config();

const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

const dbName = process.env.DBURL;
mongoose.connect(dbName);

const encryptPass = ( (pass)=>{
const salt = bcrypt.genSaltSync(bcryptSalt);
 return bcrypt.hashSync(pass, salt);
})

const users = [{
          name: `Juan`,
          email: `Juan@SoyJuan`,
          password:encryptPass("Juan")
     },
     {
          name: `kike`,
          email: `kike@Soykike`,
          password:encryptPass("kike")   },
     {
          name: `diego`,
          email: `diego@Soydiego`,
          password: encryptPass("diegu")    },
     {
          name: `giorgio`,
          email: `giorgio@Soygiorgio`,
          password: encryptPass("alessandro")
     },
     {
          name: `jose`,
          email: `jose@Soyjose`,
          password: encryptPass("hose") ,
           isLaunderer: true,
          fee: 20
     },
     {
          name: `rulo`,
          email: `rulo@Soyrulo`,
          password: encryptPass("rulamen_madrid") ,
           isLaunderer: true,
          fee: 1
     },
     {
          name: `abel`,
          email: `abel@Soyabel`,
          password: encryptPass("Juan"),
          isLaunderer: true,
          fee: 30
     },
     {
          name: `marc`,
          email: `marc@Soymarc`,
          password: encryptPass("Juan"),
          isLaunderer: true,
          fee: 1000
     },
]

User.collection.drop();


User.create(users, (err, data) => {
     if (err) {
          throw (err)
     }

     console.log(`Created ${users.length} users`);

}).then(() => {
     mongoose.disconnect();
});