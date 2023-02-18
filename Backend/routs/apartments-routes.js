const express = require('express')
const router = express.Router()
const apartmentControler = require('../controllers/apartments-controller')

router.get('/', apartmentControler.getAllapartments)
router.post('/', apartmentControler.addApartments)
router.get('/:id',apartmentControler.getbyId)
router.delete('/:id', apartmentControler.deleteApartment)

module.exports = router