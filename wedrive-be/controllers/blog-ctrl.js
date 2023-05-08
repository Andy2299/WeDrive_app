const Blog = require('../models/Blog');

create = async(req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debe enviar un Objeto válido',
        })
    }

    const blog = new Blog(body);

    if (!blog) {
        return res.status(400).json({ success: false, error: err });
    }

    blog.save()
        .then(() => res.status(201).json({ success: true, message: 'Objeto creado con exito' }))
        .catch(err => res.status(500).json({ success: false, error: err }))
}

updateById = async(req, res) => {
    if (!req.body) {
        return res.status(400).json({
            success: false,
            error: 'Debe enviar un objeto válido',
        })
    }

    Blog.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(() => res.status(200).json({ success: true, message: 'Objeto actualizado con exito' }))
        .catch(err => res.status(500).json({ success: false, error: err }))
}

deleteById = async (req, res) => {
    await Blog.findOneAndDelete({ _id: req.params.id })
        .then(obj => { 
            if (!obj)
                return res
                    .status(404)
                    .json({ success: false, error: `Objeto no existe` })
            return res.status(200).json({ success: true, data: obj })
        }).catch(err => res.status(400).json({ success: false, error: err }));
}

getById = async (req, res) => {
    await Blog.findOne({ _id: req.params.id })
        .then(obj => { 
            if (!obj)
                return res
                    .status(404)
                    .json({ success: false, error: `Objeto no existe` })
            return res.status(200).json({ success: true, data: obj })
        })
        .catch(err => res.status(400).json({ success: false, error: err }))
}

getAll = async (req, res) => {
    await Blog.find({})
        .then(objs => res.status(200).json({ success: true, data: objs }))
        .catch(err => res.status(400).json({ success: false, error: err }));
}

module.exports = {
    create,
    updateById,
    deleteById,
    getById,
    getAll,
}