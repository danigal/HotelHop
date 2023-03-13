import mongoose from "mongoose";

const sceneSchema = new mongoose.Schema(
  {
    sceneName: {
      type: String,
      required: true,
    },
    picturePath: String,
    scenario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Scenario",
      required: true,
    },
  },
  { timestamps: true }
);

const Scene = mongoose.model("Scene", sceneSchema);

export default Scene;
