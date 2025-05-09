//task import express
import express from "express";

//task destructuring del router
const router = express.Router();

//task import del controller destrutturato
import {
    index,
    show,
    destroy,
    update,
    storeRev
} from "../controllers/movieController.js"

//*routing movies
/*SyntaxRecap ==> {
    //* router.VERBO('percorsoRadice/:Params', middleware, 'CallBack')
    //? router.post('/', upload.single('image') ,store)    
    router: istanza di express.Router() => definisce route modulari
    .post('/'): verboHTTP.('percorsoRadice /: Params'(eventuale) )
    upload.single('image'): middlewareMulter => elabora caricamento singolo file dal campo 'image' del form
    store : funzione CallBack importata da movieController
}*/

//todo index ==>risultato finale = localhost:3000/movies
router.get('/', index)

//todo show ==>risultato finale = localhost:3000/movies/:id
router.get('/:id', show)

//todo destroy ==>risultato finale = localhost:3000/movies/:id
router.delete('/:id', destroy)

//todo update ==>risultato finale = localhost:3000/movies/:id
router.patch('/:id', update)

//todo storeRev ==>risultato finale = localhost:3000/movies/:id
router.post('/:id/revs', storeRev)


//task esportazione
export default router;



