const asyncHandler = require('express-async-handler')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'Get Goals'
    })
})

// @desc Set goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {

    if(!req.body.text){
        res.status(400)

        throw new Error('Please add a text field')
    }

    res.status(200).json({
        message: 'Set Goals'
    })
})

// @desc Update a goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Updated Goals ${req.params.id}`
    })
})

// @desc Delete goal
// @route Delete /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Deleted Goal ${req.params.id}`
    })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}