import mongoose from "mongoose";

const spotSchema = new Schema({
  x: {
    type: Number,
    required: true
  },
  y: {
    type: Number,
    required: true
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question"
    }
  ],
  scene: {
    type: Schema.Types.ObjectId,
    ref: "Scene",
    required: true
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

