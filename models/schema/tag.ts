import mongoose from 'mongoose'

// Define Mongoose Schema for tags
const TagSchema = new mongoose.Schema(
  {
    // id: {
    //   type: String,
    //   required: false
    // },
    name: {
      type: String,
      required: true
    }
  },
  { collection: 'Tag' }
)

export default TagSchema
