//task import express
import express from "express";

//task destructuring del router
const router = express.Router();

//task import del controller destrutturato
import {
    index,
    show,
    destroy,
    update
} from "../controllers/movieController.js"

//*routing movies
/*SyntaxRecap ==> {
    router: 
    .get('/'): verboHTTP.('percorsoRadice /: Params')
    index : funzione CallBack importata dal Controller
}*/

//todo index ==>risultato finale = localhost:3000/movies
router.get('/', index)

//todo show ==>risultato finale = localhost:3000/movies/:id
router.get('/:id', show)

//todo destroy ==>risultato finale = localhost:3000/movies/:id
router.delete('/:id', destroy)

//todo update ==>risultato finale = localhost:3000/movies/:id
router.patch('/:id', update)



//task esportazione
export default router;



