//task import express
import express from 'express';

//task import
import moviesRouter from './routers/movieRouter.js';


//task impostazione express e porta server
const app = express();
const port = process.env.SERVER_PORT


//task monto il router
app.use('/movies', moviesRouter)


//task attivazione server
app.listen(port, () => {
    console.log(`server in ascolto sulla porta ${port}`)
})