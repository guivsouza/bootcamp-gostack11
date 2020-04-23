import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloww(request:Request, response:Response){
  const user = createUser({
    email: 'a@a.com',
    password: '123',
    contacts: ['981111111','982222222'],
    techs: ['node.js', 'ReactJs', 'React Native']
  })

  return response.json({ message : 'Hellloww'})
}