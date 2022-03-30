const handleFetchBlogs = (req, res, db) => {
    db.select('*').from('blogs')
    .then(blogs => {      
        res.json(blogs.map(blog => {
            return {
                body: blog.body,
                title: blog.title,
                author: blog.name,
                id: blog.id
            }
        }))
    })                              
    .catch(err => res.status(400).json('An error occured'))
}

module.exports = {
    handleFetchBlogs
}