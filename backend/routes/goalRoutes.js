const express = require('express');
const router = express.Router()
const {getGoals, SetGoals, PutGoal, deleteGoal} = require('../controllers/goalControllers')

router.route("/").get(getGoals).post(SetGoals)
router.route("/:id").put(PutGoal).delete(deleteGoal)

//router.get("/", getGoals)

//router.post("/", SetGoals)

//router.put("/:id", PutGoal)

//router.delete("/:id", deleteGoal)

module.exports = router