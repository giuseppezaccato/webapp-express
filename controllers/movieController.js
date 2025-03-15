//task import oggetto connection dal database
import connection from '../data/movies_db.js';

//task setup callback functions da esportare

//todo index
function index(req, res) {
    const sql = `SELECT * FROM movies`;

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({
            error: "Server Side Error INDEX function"
        });
        // res.json(results); //* AGGIORNAMENTO CON USO MIDDLEWARE
        const movies = results.map(m => {
            return {
                ...m,
                image: req.imagePath + m.image,
            };
        });
        res.json(movies)//* RISULTATO CON USO MIDDLEWARE
    })
}

//todo show
function show(req, res) {
    const { id } = req.params

    const movieSql = `SELECT * FROM movies WHERE id = ?`;

    const reviewsSql = 'SELECT * FROM reviews WHERE movie_id = ?';

    connection.query(movieSql, [id], (err, movieResults) => {
        if (err) return res.status(500).json({
            error: "Server Side Error SHOW function"
        });

        //task controllo se movieResults ===0
        movieResults === 0 && res.status(404).json({ error: 'Film Non Trovato' });

        const movie = movieResults[0]

        connection.query(reviewsSql, [id], (err, revResults) => {
            if (err) return res.status(500).json({
                error: "Server Side Error SHOW function"
            });

            movie.reviews = revResults;

            // res.json(movie)//* AGGIORNAMENTO CON USO MIDDLEWARE
            res.json({
                ...movie,
                image: req.imagePath + movie.image,
            })
            res.json(movie) //* RISULTATO CON USO MIDDLEWARE
        })
    })

}

//todo patch (piccolissimo bonus) 
function update(req, res) {
    const { id } = req.params
    const { image } = req.body

    const sql = `
            UPDATE movies
            SET image = ?
            WHERE id = ?;
    `
    connection.query(sql, [image, id], (err) => {
        if (err) return res.status(500).json({
            error: "Server Side Error UPDATE function"
        });

        res.json({ message: "Movie updated successfully" });
    })
}

//* oppure direttamente in mySQL con questa stringa che in sequenza cambia tutti i nomi
//          UPDATE movies  -- tabella da modificare
//          SET image = CASE  -- condizioni multiple.
//              WHEN id = 1 THEN 'inception.jpg'      -- IF id = 1 ? SET 'image' = 'inception.jpg'.
//              WHEN id = 2 THEN 'the_godfather.jpg'  -- IF id = 2 ? SET 'image' = 'the_godfather.jpg'.
//              WHEN id = 3 THEN 'titanic.jpg'        -- IF id = 3 ? SET 'image' = 'titanic.jpg'.
//              WHEN id = 4 THEN 'matrix.jpg'         -- IF id = 4 ? SET 'image' = 'matrix.jpg'.
//              WHEN id = 5 THEN 'interstellar.jpg'   -- IF id = 5 ? SET 'image' = 'interstellar.jpg'.

//              ELSE image  -- Se l'id non corrisponde a nessuna delle condizioni precedenti, mantiene il valore corrente della colonna 'image'.
//          END             -- Termina l'espressione CASE.
//          WHERE id IN(1, 2, 3, 4, 5);  -- Applica l'UPDATE solo alle righe con id 1, 2, 3, 4 o 5.


//todo destroy
function destroy(req, res) {
    const { id } = req.params;

    const sql = `DELETE * FROM movies WHERE id = ? `;

    connection.query(sql, [id], (err) => {
        if (err) return res.status(500).json({
            error: "Server Side Error DELETE function"
        });

        res.sendStatu(204)
    });

}

export { index, show, destroy, update };


