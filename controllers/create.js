const handleCreate = (req, res, db) => {
    const {body, title, user} = req.body;
    db.insert({
        name: user.name,
        body: body,
        title: title,
        created: new Date()
    })
    .into('blogs')
    .returning('*')
    .then(blogObject => {
        res.json(blogObject[0])
    })
    .catch(err => res.status(400).json('Could not add blog'))
}

module.exports = {
    handleCreate
}