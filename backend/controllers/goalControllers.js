const asyncHandler = require('express-async-handler')
// @desc Get goals
// @routr Get api/goals
// @access Pravate
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Get goals"})
})

// @desc Set goals
// @routr Post api/goals
// @access Pravate
const SetGoals = asyncHandler((req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text filed')
    }
    res.status(200).json({message: "Set goals"})
})

// @desc Update goals
// @routr Put api/goals
// @access Pravate
const PutGoal = asyncHandler((req, res) => {
    res.status(200).json({message: `Update goals ${req.params.id}`})
})

// @desc Delete goals
// @routr Delete api/goals
// @access Pravate
const deleteGoal = asyncHandler((req, res) => {
    res.status(200).json({message: `Delete goals ${req.params.id}`})
})



module.exports = {
    getGoals,
    SetGoals,
    PutGoal,
    deleteGoal
}