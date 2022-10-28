const express = require('express');
const app = express();
const cors = require ('cors');
require('dotenv').config();
const PORT = process.env.PORT || 3000;


app.use(cors({
    origin : '*'
}));

app.get('/', (req, res)=>{
    return res.status(200).json({
        slackUsername: "ceasarSkills",
        backend : true,
        age: 24,
        bio: "I am a first principle Engineer, that wants to know how things work",
    })

});

// Sinnig up the server using IIFE
(()=>{
     app.listen(PORT,()=>{ return console.log(`Server is listening on port: ${PORT}`)});
})();
