import express from "express";
import fs from 'fs';

const app = express();

//route middleware
fs.readdirSync('./routes').map((r) => 
app.use('/api', require(`./routes/${r}`))
);




app.listen(8000, ()=> console.log(`Server is running on port 8000`))
