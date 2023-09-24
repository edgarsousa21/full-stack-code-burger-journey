// const { Router } = require("express")
// module.exports = routes

import { Router } from 'express'

const routes = new Router()

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

export default routes
