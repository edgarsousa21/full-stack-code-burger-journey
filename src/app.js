// const express = require("express")
// const routes = require("./routes")
// module.exports = new App().app

import express from 'express'
import routes from './routes'

class App {
  constructor() {
    this.app = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())
  }

  routes() {
    this.app.use(routes)
  }
}

export default new App().app
