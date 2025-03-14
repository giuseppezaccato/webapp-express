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
        res.json(results);
    })

}

//todo show
function show(req, res) {
    const { id } = req.params
    const sql = `SELECT * FROM movies WHERE id = ?`;

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({
            error: "Server Side Error INDEX function"
        });

        res.json(results)
    })

}

//todo destroy
function destroy(req, res) {
    const { id } = req.params;

    const sql = `DELETE * FROM movies WHERE id = ?`;

    connection.query(sql, [id], (err) => {
        if (err) return res.status(500).json({
            error: "Server Side Error DELETE function"
        });

        res.sendStatu(204)
    });

}

export { index, show, destroy };


