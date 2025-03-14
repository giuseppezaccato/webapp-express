//task import express
import express from 'express';

//task impostazione express e porta server
const app = express();
const port = 3000 //cambia poi con process.env.SERVER_PORT



//task attivazione server
app.listen(port, () => {
    console.log(`server in ascolto sulla porta ${port}`)
})