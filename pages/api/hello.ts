// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { renderToString } from 'react-dom/server'

type Data = {
  name: string
}

// const a = () => {
//   return renderToString(<div>Hello World </div>)
// }


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).send(`<html> <head> <title>express ssr</title> </head> <body> <h1>Hello SSR</h1> }</body> </html>`)
  res.status(200).json({ name: 'John Doe' })
}