import express from 'express'
import {
  getQuestionsByOrder,
  filterQuestionsBySearch,
  fetchAndIncrementQuestionViewsById,
  getTagIds,
  saveQuestion,
  SortOrder
} from '../models/application'
import {
  IQuestion,
  GetQuestionsByFilterRequest,
  GetQuestionByIdRequest,
  AddQuestionRequest,
  QuestionAPIResponse,
} from '../models/types/types'

const router = express.Router()

export default router
