// cookie-session-middleware.mjs

import { uid } from 'uid'

// in-memory session store
const sessions = {}

export function sessionMiddleware(req, res, next) {
   if (req?.cookies?.sessionId && sessions[req.cookies.sessionId]) {
      // session exists in session store
      const session = sessions[req.cookies.sessionId]
      // update end date
      session.end = new Date()
      // attach session to req.session
      req.session = session
   } else {
      // session does not exist: create it
      const sessionId = uid()
      const now = new Date()
      const portelist = []
      sessions[sessionId] = {
         id: sessionId,
         start: now,
         end: now,
      }
      // send cookie to client
      res.cookie('sessionId', sessionId, { 
      
      })
      res.cookie('sessionId', sessionId, { sameSite: 'None', secure: true });
      // attach session to req.session
      req.session = sessions[sessionId]
   }
   next()
}