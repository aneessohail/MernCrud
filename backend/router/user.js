const express = require('express')
const { creation, getusers, updatedform, updated, deleteuser } = require('../controller/user')

const router = express.Router()

router.post('/create',creation)
router.get('/',getusers)
router.get('/update/:id',updatedform)
router.put('/update/:id',updated)
router.delete('/delete/:id',deleteuser)
module.exports = router