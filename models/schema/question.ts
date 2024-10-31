import mongoose from 'mongoose'

// Define Mongoose Schema for questions
const QuestionSchema = new mongoose.Schema(
  {
    // id: {
    //   type: String,
    //   required: false,
    // },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: false,
    },
    // TODO: needs updating
    answers: {
      type: Array,
      required: false,
    },
    asked_by: {
      type: String,
      required: false,
    },
    asked_date_time: {
      type: Date,
      required: false,
    },
    views: {
      type: Number,
      required: true,
      default: 0,
    }
  },
  { collection: 'Question' }
)

export default QuestionSchema
