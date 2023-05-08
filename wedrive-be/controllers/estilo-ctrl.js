const Estilo = require('../models/Estilo');

create = async(req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debe enviar un Objeto válido',
        })
    }

    const estilo = new Estilo(body);

    if (!estilo) {
        return res.status(400).json({ success: false, error: err });
    }

    estilo.save()
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

    Estilo.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(() => res.status(200).json({ success: true, message: 'Objeto actualizado con exito' }))
        .catch(err => res.status(500).json({ success: false, error: err }))
}

deleteById = async (req, res) => {
    await Estilo.findOneAndDelete({ _id: req.params.id })
        .then(obj => { 
            if (!obj)
                return res
                    .status(404)
                    .json({ success: false, error: `Objeto no existe` })
            return res.status(200).json({ success: true, data: obj })
        }).catch(err => res.status(400).json({ success: false, error: err }));
}

getById = async (req, res) => {
    await Estilo.findOne({ _id: req.params.id })
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
    await Estilo.find({})
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