const { model, Schema } = require('mongoose')

const projectSchema = new Schema(
    {
        title: String,
        description: String,
        tasks: [ { type: Schema.Types.ObjectId, ref: 'Task' } ]
    },
    {
        timestamps: true,
        timeseries: true
    }
)

module.exports = model("Project", projectSchema)