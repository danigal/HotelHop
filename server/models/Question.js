import mongoose from "mongoose";

const questionSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  options: [
    {
      type: String
    }
  ],
  answer: {
    type: String,
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


