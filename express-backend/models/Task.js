const mongoose = require('mongoose')


const TaskSchema = new Schema({
    task: {
        type: String,
        required: true,
        default: ""
    },
    description: {
        type: String,
        required: true,
        default: ""
    },
    status: {
        type: String,
        default: "To do"
    },
    dueDate: {
        type: Date,
        default: Date.now
    },
    taskOwner: {
        type: Object,
        default: null
    },
    priority: {
        type: String
    },
    files: {
        type: Object
    },
    label: {
        type: String
    },
    lastUpdated: {
        type: Date,
    },
    timeline: {
        type: String
    }
});

module.exports = mongoose.model('ems_task', TaskSchema)