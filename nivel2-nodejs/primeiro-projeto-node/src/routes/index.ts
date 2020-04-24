import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => response.json({ message: 'Helloowww' }))

export default routes
