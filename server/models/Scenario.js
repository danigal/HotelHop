import mongoose from "mongoose";

//userId and no scenes?
const ScenarioSchema = new mongoose.Schema(
  {
    scenarioName: {
      type: String,
      required: true,
    },
    description: String,
    scenes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Scene",
      },
    ],
  },
  { timestamps: true }
);

const Scenario = mongoose.model("Scenario", ScenarioSchema);

export default Scenario;
