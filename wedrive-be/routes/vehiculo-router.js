const express = require('express')
const Controller = require('../controllers/vehiculo-ctrl')

const router = express.Router()

router.get('/', Controller.getAll)
router.get('/:id', Controller.getById)
router.post('/', Controller.create)
router.put('/:id', Controller.updateById)
router.delete('/:id', Controller.deleteById)

module.exports = router