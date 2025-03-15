//task dichiaro ed esporto la mia funzione middleware che costruisce il path parziale dell'immagine
export default function handleImagePath(req, res, next) {
    req.imagePath = `${req.protocol}://${req.get('host')}/movies/img/`;
    next();
    //? questo argomento si invoca solo per permettere al flusso di andare avanti, 
    //? non a caso negli errorHandler il next() dichiarato non viene usato mai!
}

