import express from 'express'
import {
  saveAnswer,
  addAnswerToQuestion
} from '../models/application'
import {
  IAnswer,
  AddAnswerRequest,
  AddAnswerResponse
} from '../models/types/types'

const router = express.Router()

export default router
