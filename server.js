require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');


connectDB();




app.listen(7001, () => {
   try {
    console.log("Server is running on port 7001");
   } catch (error) {
    console.log("Server error:");
   }
})