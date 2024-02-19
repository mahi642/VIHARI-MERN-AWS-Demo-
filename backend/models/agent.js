const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema(
    {
        AgentName: {
            required: true,
        },
        password:{
            required:true,
        },
        email:{
            required:true,
        },
        buses: [
            {
              type:mongoose.Schema.Types.ObjectId,
              ref:"Bus"
            }
        ],
    },
    { timestamps: true }
);

const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;