const handleDelete = (req, res, db) => {
    const {id} = req.params;
    db.select('*').from('blogs')
    .where({
        id: id
    })
    .del()
    .then(() => {
        res.json('Deleted Successfully')
    })
    .catch(err => res.status(404).json('An error occured'))
}

module.exports = {
    handleDelete
}