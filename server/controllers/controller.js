const Author = require('../models/author.model');

module.exports = {
    // Create Author
    createAuthor: (req, res) => {
        Author.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}