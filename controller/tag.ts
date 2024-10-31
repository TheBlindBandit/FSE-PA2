import express from 'express'
import { getTagCountMap } from '../models/application'

const router: express.Router = express.Router()

function getTagCountMapHandler(req: express.Request, res: express.Response) {
    const tagCountMap = getTagCountMap()
    res.json(tagCountMap)
}

router.get('/count', getTagCountMapHandler)

function getTags(req: express.Request, res: express.Response) {
    res.send('Get all tags')
}

router.get('/', getTags)

function getTag(req: express.Request, res: express.Response) {
    res.send('Get a tag')
}

router.get('/:id', getTag)

// function findTag(req: express.Request, res: express.Response) {
//     res.send('Find a tag')
// }

export default router
