import mongoose from 'mongoose'

// Define Mongoose Schema for answers
const AnswerSchema = new mongoose.Schema(
  {
    // id: {
    //   type: String,
    //   required: false,
    // },
    text: {
      type: String,
      required: true,
    },
    ans_by: {
      type: String,
      required: true,
    },
    ans_date_time: {
      type: Date,
      required: true,
    }
  },
  { collection: 'Answer' }
)

export default AnswerSchema
