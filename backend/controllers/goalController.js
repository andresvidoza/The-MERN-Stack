// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({
        message: 'Get Goals'
    })
}

// @desc Set goal
// @route POST /api/goals
// @access Private
const setGoal = (req, res) => {
    res.status(200).json({
        message: 'Set Goals'
    })
}

// @desc Update a goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
    res.status(200).json({
        message: `Updated Goals ${req.params.id}`
    })
}

// @desc Delete goal
// @route Delete /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
    res.status(200).json({
        message: `Deleted Goal ${req.params.id}`
    })
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}