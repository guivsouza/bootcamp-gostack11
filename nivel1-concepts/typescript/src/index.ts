import express, { request } from 'express'
import {helloww} from './routes'

const app = express()

app.get('/', helloww)

app.listen(3333)