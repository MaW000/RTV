const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const likeSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    issueId: {
        type: Schema.Types.ObjectId,
        ref: 'Issue'
    }
})

module.exports = mongoose.model("Like", likeSchema)