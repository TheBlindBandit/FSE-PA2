import Answers from '../models/answers'
import { IAnswer, IQuestion } from '../models/types/types'
import Questions from './questions'
import Tags, { getTags } from '../models/tags'

export type SortOrder = 'active' | 'newest' | 'unanswered'
export type ErrorWrapped<T> = { error: string } | T

/**
 * A function to add a tag to the database
 * @param tname the tag name
 * @returns the id of an existing tag or the id of the newly added tag
 */
const addTag = async (tname: string) => {
  // check if tag exists and if so return id

  // else add tag and return id
  return tname;
}

/**
 * retrieve questions based on a specified order
 * @param order the order to sort the questions
 * @returns list of questions sorted by the specified order
 */
const getQuestionsByOrder = async (order: SortOrder) => {
  // let sortCondition;

  // switch (order) {
  //   case 'active':
  //     sortCondition = { views: -1 };
  //     break;
  //   case 'newest':
  //     sortCondition = { ask_date_time: -1 };
  //     break;
  //   case 'unanswered':
  //     sortCondition = { answers: { $size: 0 } };
  //     break;
  //   default:
  //     sortCondition = { views: -1 };
  // }
  // const response = await Questions.find().sort(sortCondition);
  // console.log(response)
  // return response;
  let result: IQuestion[] = [];
  return result;
}

/**
 * A function to filter questions based on search string
 * @param qlist the list of questions to be filtered 
 * @param search the filter string
 * @returns the filtered list of questions
 */
const filterQuestionsBySearch = (qlist: IQuestion[] | undefined, search: string) => {
  let result: IQuestion[] = [];
  return result;
}

/**
 * Function that fetches a question by id and increments the views by 1
 * @param qid 
 * @returns a question object with the incremented views
 */
const fetchAndIncrementQuestionViewsById = async (qid: string): Promise<ErrorWrapped<IQuestion | null>> => {
  let r: IQuestion | null = null;
  return r;
}

/**
 * saves a question to the database
 * @param q question object to save 
 * @returns the question object saved to the database 
 * or an object with an error message if the save failed
 * @throws an error if the question is invalid
 */
const saveQuestion = async (q: IQuestion) => {
  return q;
}

/**
 * saves an answer to the database
 * @param a answer object to save
 * @returns the answer object saved to the database
 * or an object with an error message if the save failed
 * @throws an error if the answer is invalid
 */
const saveAnswer = async (a: IAnswer): Promise<ErrorWrapped<IAnswer>> => {
  return a;
}

/**
 * retrieves tag ids from the database
 * @param tagNames a list of tag names
 * @returns returns a string array of tag ids
 * or empty array if the tag ids could not be retrieved
 */
const getTagIds = async (tagNames: string[]) => {
  // const TAGS_URL = 'http://localhost:8000/tag';
  // const response = await Tags.find({ tname: { $in: tagNames } });
  // const response = await Tags.getTags(tagNames);
  // const response = await Tags.find({ tname: { $in: tagNames } });

  const response = await Promise.all(getTags(tagNames));
  // const response = await Tags.find({ tname: { $in: tagNames } });
  // const response = tagNames;
  console.log(response)
  // const result = response as string[];
  // let result: string[] = [];
  return response;
}

/**
 * save an answer in the database, add the answer to the question, and update the question in the database
 * @param qid the question id
 * @param ans the answer object to be added
 * @returns the question object with the added answer or an object with an error message if the operation failed
 */
const addAnswerToQuestion = async (qid: string, ans: IAnswer): Promise<ErrorWrapped<IQuestion | null>> => {
  let q: IQuestion | null = null;
  return q;
}

/**
 * retrieves the question count of each tag in the database
 * @returns a map where the key is the tag name and the value is the count of questions with that tag
 */
const getTagCountMap = async (): Promise<ErrorWrapped<Map<string, number> | null>> => {
  return new Map<string, number>()
}

export {
  addTag,
  getQuestionsByOrder,
  filterQuestionsBySearch,
  fetchAndIncrementQuestionViewsById,
  saveQuestion,
  getTagIds,
  saveAnswer,
  addAnswerToQuestion,
  getTagCountMap
}
