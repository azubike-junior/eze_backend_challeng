import {Router} from 'express'
import { fetchRequests } from '../controller/fetchRequest'

const route = Router()

route.get('/fetch_request', fetchRequests)

export default route