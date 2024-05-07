import { Request, Response, NextFunction} from 'express'
import {verify} from 'jsonwebtoken'

interface Props{
    sub: string
}


export function isAuthen( req: Request, res: Response, next: NextFunction){

    const autent = req.headers.authorization;

    

    if (!autent) {
        return res.status(401).end();
    }

    const [ , tokken] = autent.split(" ")

   try {

    const {sub} = verify( tokken, process.env.JWT_SECRET) as Props
    return next()
    
   } catch (err) {
    return res.status(401).end();
   }
}

   