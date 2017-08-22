var promise = require('bluebird');
var options = { promiseLib: promise };
var pgp = require('pg-promise')(options);

// SET UP THE DATABASE
var connectionString = process.env.DATABASE_URL;
var db = pgp(connectionString);

function getTweeds(req, res, next){
    db.any("SELECT * FROM posts ORDER BY id DESC")
    .then((data) => { res.status(200).json({ tweeds: data }); })
    .catch((err) => { return next(err); });
}

function createTweed(req, res, next){
    var post = req.body.post;

    res.setHeader('Content-Type', 'application/json');

    if(post === undefined){
        res.status(400).json({ Error: 'Tweed Not Created. Try Again.' }); 
    } else {
        db.none("INSERT INTO posts(post)" + "VALUES($1)", post)
        .then(() => { 
            res.status(201).json({ Success: 'Tweed Created.' }); 
        })
        .catch((err) => { return next(err); });
    }
}

function deleteTweed(req, res, next) {
    db.any('DELETE FROM posts WHERE id = $1', req.params.id)
        .then(() => res.json({ status: true, msg: `Tweed ${req.params.id} deleted` }))
        .catch((err) => { return next(err); });
}

module.exports = {
    getTweeds, // GET
    createTweed, // CREATE
    deleteTweed // DELETE
};