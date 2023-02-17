const express = require('express')
const router = express.Router()
const Apartment = require('../model/Apartment')
const apartmentControler = require('../controllers/apartments-controller')

router.get('/', apartmentControler.getAllapartments)
router.post('/', apartmentControler.addApartments)
router.get('/:id',apartmentControler.getbyId)
// router.put('/id',apartmentControler.updateApartment)
router.delete('/:id', apartmentControler.deleteApartment)

module.exports = router