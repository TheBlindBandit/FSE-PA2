import mongoose from 'mongoose'
import { ITag } from './types/types'
import TagSchema from './schema/tag'

// Create a model for the tags based on TagSchema
const Tag = mongoose.model<ITag>('Tag', TagSchema)

export default Tag

function fetchTagCountMap() {
  return Tag.find().countDocuments()
} 

function getTag( name?: string, id?: string) {
  if (name !== undefined) {
      return Tag.find( { name: name } )
  }
  if (id !== undefined) {
      return Tag.find( { _id: id } )
  }
}

function getTags( names: string[]) {
  const tagPromises = names.map( tagname => Tag.find( { name: tagname } ).exec() );
  return tagPromises
} 

export { Tag, fetchTagCountMap, getTag, getTags }
