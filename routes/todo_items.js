const express = require('express')

const router = express.Router()

const {getAllToDoItems} = require('../contollers/todo_items')

router.route('/').get(getAllToDoItems)


module.exports = router